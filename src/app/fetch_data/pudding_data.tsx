import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import AddToBag from "../components/AddToBag";
import WishlistButton from "../components/wishlistbutton";

export interface pudding {
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
}

export default async function Data() {
  const pudding: pudding[] = await client.fetch(
    `*[_type == "pudding"]{
    _id,
    name,
    description,
    "slug":slug.current,
    price,
    image{
      asset->{
        _id,
        url
      }
    },
  }`
  );

  if (!pudding || pudding.length === 0) {
    return <p className="text-center text-gray-600">No pudding found.</p>;
  }

  return (
    <div className="container mx-auto w-[400px] md:w-[700px] lg:w-[1000px] pt-5 lg:pt-0">
      <h1 className="text-lg md:text-xl lg:text-2xl text-center font-bold py-10">
        Our Heavenly Pudding Collection
      </h1>

      {/* Grid Layout for Desktop */}
      <div className="hidden lg:grid grid-cols-3 gap-5 gap-y-10">
        {pudding.map((p) => (
          <div
            key={p._id}
            className="border rounded-xl overflow-hidden transition transform hover:scale-105 duration-300 shadow-md"
          >
            {/* Link component, removed the extra <a> tag */}
            <Link href={`/slug/pudding/${p.slug}`}>
              {p.image?.asset?.url ? (
                <Image
                  src={urlFor(p.image).url()}
                  alt={`Image of ${p.name} Jelly`}
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
              <Link href={`/slug/pudding/${p.slug}`}>
                <h1 className="text-lg font-semibold text-black">{p.name}</h1>
                <h1 className="text-lg font-bold pt-2 text-black">
                  Rs. {p.price}
                  <span className="text-sm text-red-400 line-through pl-2">
                    150
                  </span>
                </h1>
              </Link>

              {/* Buttons: Add to Bag & Wishlist */}
              <div className="flex gap-5 place-self-end items-center mt-4">
                <AddToBag
                  currency="PKR"
                  description={p.description}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  price_id={""}
                />
                <WishlistButton productId={p._id} productName={""} productPrice={0} productImageUrl={""} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Scroll Layout */}
      <div className="block lg:hidden px-10">
        <ScrollArea className="w-full">
          <div className="flex space-x-4 p-4">
            {pudding.map((p) => (
              <div
                key={p.slug}
                className="border rounded-xl overflow-hidden w-64 shadow-md"
              >
                
                  {/* Product Image */}
                  <div className="relative">
                  <Link href={`/slug/pudding/${p.slug}`}>
                    <Image
                      src={urlFor(p.image).url()}
                      alt={p.name}
                      width={400}
                      height={400}
                      className="w-full h-60 object-cover"
                    />
                    </Link>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                  <Link href={`/slug/pudding/${p.slug}`}>
                    <h1 className="text-base font-semibold text-black">{p.name}</h1>
                    <h1 className="text-lg font-bold text-black">
                      Rs. {p.price}
                      <span className="text-sm text-red-400 line-through pl-2">
                        150
                      </span>
                     
                    </h1> </Link>

                    {/* Buttons: Add to Bag & Wishlist */}
                    <div className="flex justify-between items-center mt-4">
                      <AddToBag
                        currency="PKR"
                        description={p.description}
                        image={p.image}
                        name={p.name}
                        price={p.price}
                        price_id={""}
                      />
                      <WishlistButton productId={p._id} productName={""} productPrice={0} productImageUrl={""} />
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
