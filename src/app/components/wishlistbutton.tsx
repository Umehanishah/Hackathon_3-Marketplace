"use client";

import { useWishlist } from "@/app/context/wishlistcontext";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { client } from "@/sanity/lib/client"; // Import your Sanity client

// Zod schema to validate the product data
const formSchema = z.object({
  productId: z.string(),
  name: z.string().min(1),
  price: z.number(),
  imageUrl: z.string(),
});

type FormType = z.infer<typeof formSchema>;

export default function WishlistButton({ productId, productName, productPrice, productImageUrl }: { 
  productId: string, 
  productName: string, 
  productPrice: number, 
  productImageUrl: string 
}) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isAdded = wishlist.includes(productId);

  // Use react-hook-form to manage form submission
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productId: productId,
      name: productName,
      price: productPrice,
      imageUrl: productImageUrl,
    },
  });

  // Handle adding product to wishlist and submitting to Sanity
  const handleSubmit = async (values: FormType) => {
    try {
      await client.create({
        _type: "wishlistItem", // Ensure this matches your Sanity schema
        productId: values.productId,
        name: values.name,
        price: values.price,
        imageUrl: values.imageUrl,
      });
      alert("Product added to wishlist!");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      alert("Failed to add to wishlist.");
    }
  };

  const handleClick = () => {
    toggleWishlist(productId);

    // If the product is added, submit to Sanity
    if (!isAdded) {
      form.handleSubmit(handleSubmit)();
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 transition-all border rounded-xl
                  ${isAdded ? "bg-white border-pink-500" : "bg-pink-500 hover:bg-pink-500 border-transparent"}`}
    >
      <Heart
        size={24}
        className={`transition-all ${isAdded ? "fill-red-500 stroke-white" : "stroke-white"}`}
      />
      <span className={`transition-all ${isAdded ? "text-pink-500" : "text-white "}`}>
        {isAdded ? "Wishlisted" : "Wishlist"}
      </span>
    </Button>
  );
}
