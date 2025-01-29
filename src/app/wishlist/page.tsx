"use client";

import { useWishlist } from "@/app/context/wishlistcontext";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../ui/footer";
import Navigation from "../ui/navigation";
import { client } from "@/sanity/lib/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react"; // Import Clerk's useUser hook

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, setWishlist } = useWishlist(); // Now you have setWishlist
  const [products, setProducts] = useState<any[]>([]);
  const { user } = useUser(); // Get client ID from Clerk
  const clientId = user?.id; // Ensure the user is logged in and has a clientId

  useEffect(() => {
    async function fetchProducts() {
      if (!clientId || wishlist.length === 0) {
        setProducts([]);
        return;
      }

      try {
        // Fetch products from Sanity
        const query = `*[_type in ["pudding", "jelly"] && _id in $ids]{
          _id,
          name, 
          price,
          image { asset->{url} } // Correctly fetching the image
        }`;

        const fetchedProducts = await client.fetch(query, { ids: wishlist });

        // Ensure images are mapped correctly
        const processedProducts = fetchedProducts.map((product: { image: { asset: { url: any; }; }; }) => ({
          ...product,
          imageUrl: product.image?.asset?.url || "/fallback-image.jpg",
        }));

        setProducts(processedProducts);

        // POST to Sanity when products are fetched
        if (clientId) {
          // Check if the wishlist already exists in Sanity
          const existingWishlist = await client.fetch(
            `*[_type == "wishlist" && userId == $userId]`,
            { userId: clientId }
          );

          // If wishlist exists, update it
          if (existingWishlist.length > 0) {
            const wishlistId = existingWishlist[0]._id;

            // Update the wishlist
            await client
              .patch(wishlistId)
              .setIfMissing({ products: [] }) // If products array doesn't exist, initialize it
              .append('products', processedProducts.map((product: { _id: any; name: any; price: any; imageUrl: any; }) => ({
                productId: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
              })))
              .commit();
          } else {
            // Create a new wishlist for the user
            await client.create({
              _type: "wishlist",
              userId: clientId,
              products: processedProducts.map((product: { _id: any; name: any; price: any; imageUrl: any; }) => ({
                productId: product._id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
              })),
            });
          }
        }
      } catch (error) {
        console.error("Error fetching wishlist products:", error);
      }
    }

    fetchProducts();
  }, [wishlist, clientId]); // Ensure the effect runs when the wishlist or clientId changes

  // ✅ Handle Remove Click - Updates Wishlist State
  const handleRemove = (productId: string) => {
    removeFromWishlist(productId);
    setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId)); // Update local state

    // Optionally remove product from Sanity wishlist as well (if necessary)
    if (clientId) {
      // Fetch existing wishlist from Sanity
      client.fetch(
        `*[_type == "wishlist" && userId == $userId]`,
        { userId: clientId }
      ).then((existingWishlist) => {
        if (existingWishlist.length > 0) {
          const wishlistId = existingWishlist[0]._id;

          // Remove product from Sanity wishlist
          client
            .patch(wishlistId)
            .unset([`products[productId == "${productId}"]`]) // Unset product by its ID
            .commit();
        }
      });
    }
  };

  return (
    <>
      <Navigation />

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10 text-lg">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wishlist">Wishlist</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-6">
        <h1 className="text-2xl font-bold mb-4">My Wishlist ❤️</h1>

        {products.length === 0 ? (
          <p className="text-gray-500 text-center">Your wishlist is empty 😞</p>
        ) : (
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <li key={product._id} className="border rounded-xl shadow-sm">
                <Image
                  src={product.imageUrl || "/fallback-image.jpg"}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="py-5 px-5 flex-1">
                  <Link href={`/slug/${product._id}`}>
                    <p className="font-semibold hover:underline">{product.name}</p>
                    <p className="text-gray-600">Rs. {product.price}</p>
                  </Link>
                </div>
                <Button
                  onClick={() => handleRemove(product._id)}
                  className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Footer />
    </>
  );
}
