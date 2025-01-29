import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import AddToBag from "../components/AddToBag";
import WishlistButton from "../components/wishlistbutton";

export interface jelly {
  _id: string;
  name: string;
  description: string;
  slug: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
  };
  price: number;
  priceWithoutDiscount: number;
}

export default async function Data() {
  const jelly: jelly[] = await client.fetch(
    `*[_type == "jelly"]{
      _id,
      name,
      description,
      "slug": slug.current,
      price,
      priceWithoutDiscount,
      image{
        asset->{
          _id,
          url
        }
      }
    }`
  );

  if (!jelly || jelly.length === 0) {
    return <p className="text-center text-gray-600">No jellies found.</p>;
  }

  return (
    <div className="container mx-auto w-[400px] md:w-[700px] lg:w-[1000px] pt-5 lg:pt-0">
      <h1 className="text-lg md:text-xl lg:text-2xl text-center font-bold py-10">
        Our Heavenly Jello Jelly Collection
      </h1>

      {/* Grid Layout for Desktop */}
      <div className="hidden lg:grid grid-cols-3 gap-5 gap-y-10">
        {jelly.map((j) => (
          <div
            key={j._id}
            className="border rounded-xl overflow-hidden transition transform hover:scale-105 duration-300 shadow-md"
          >
            <Link href={`/slug/jelly/${j.slug}`}>
              {j.image?.asset?.url ? (
                <Image
                  src={urlFor(j.image).url()}
                  alt={j.name}
                  width={400}
                  height={400}
                  className="w-full h-60 object-cover"
                />
              ) : (
                <div className="w-full h-60 flex items-center justify-center bg-gray-200">
                  <p>Image not available</p>
                </div>
              )}
            </Link>

            {/* Product Info */}
            <div className="p-4">
              <Link href={`/slug/jelly/${j.slug}`}>
                <h1 className="text-lg font-semibold text-black">{j.name}</h1>
                <h1 className="text-lg font-bold pt-2 text-black">
                  Rs. {j.price}
                  <span className="text-sm text-red-400 line-through pl-2">
                    Rs. {j.priceWithoutDiscount}
                  </span>
                </h1>
              </Link>

              {/* Buttons: Add to Bag & Wishlist */}
              <div className="flex gap-5 place-self-end items-center mt-4">
                <AddToBag
                  currency="PKR"
                  description={j.description}
                  image={j.image}
                  name={j.name}
                  price={j.price}
                  price_id={""}
                />
                <WishlistButton productId={j._id} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Scroll Layout */}
      <div className="block lg:hidden px-10">
        <ScrollArea className="w-full">
          <div className="flex space-x-4 p-4">
            {jelly.map((j) => (
              <div
                key={j.slug}
                className="border rounded-xl overflow-hidden w-64 shadow-md"
              >
                <div className="relative">
                  <Link href={`/slug/jelly/${j.slug}`}>
                    <Image
                      src={urlFor(j.image).url()}
                      alt={j.name}
                      width={400}
                      height={400}
                      className="w-full h-60 object-cover"
                    />
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <Link href={`/slug/jelly/${j.slug}`}>
                    <h1 className="text-base font-semibold text-black">{j.name}</h1>
                    <h1 className="text-lg font-bold text-black">
                      Rs. {j.price}
                      <span className="text-sm text-red-400 line-through pl-2">
                        Rs. {j.priceWithoutDiscount}
                      </span>
                    </h1>
                  </Link>

                  {/* Buttons: Add to Bag & Wishlist */}
                  <div className="flex justify-between items-center mt-4">
                    <AddToBag
                      currency="PKR"
                      description={j.description}
                      image={j.image}
                      name={j.name}
                      price={j.price}
                      price_id={""}
                    />
                    <WishlistButton productId={j._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
