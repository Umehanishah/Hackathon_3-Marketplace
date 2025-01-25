import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image";
import AddToBag from "../components/AddToBag";


export interface pudding {
  [x: string]: any;
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

 
  console.log(pudding);

  if (!pudding || pudding.length === 0) {
    return <p>No pudding found.</p>;
  }

 

  return (
    <div className="container mx-auto lg:w-[1000px] pt-5 lg:pt-0">
      <h1 className="text-xl lg:text-2xl text-center font-bold py-10">Our Heavenly Pudding Collection</h1>
  <div className="hidden lg:grid grid-cols-3 gap-5 gap-y-10">
    {pudding.map((pudding) => (
      <Link href={`/slug/pudding/${pudding.slug}`} key={pudding.slug}>
        
        <div className="border rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          {pudding.image?.asset?.url ? (
            <Image
              src={urlFor(pudding.image).url()}
              alt={pudding.name} width={400} height={400}
              className="container w-[300px] h-[300px] md:w-80 object-cover"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-200 rounded-t-lg">
              <p>Image not available</p>
            </div>
          )}
          <div className="flex justify-between items-center px-2 py-2">
            <div>
              <h1 className="text-lg font-semibold text-black">
                {pudding.name}
              </h1>
              <h1 className="text-lg font-bold pt-2 text-black">
                Rs. {pudding.price}
                <span className='text-lg font-normal text-red-400 line-through pl-3 items-center'>150</span>
                </h1>
            </div>
            <div>
             
               <AddToBag
                             currency="PKR"
                             description={pudding.description}
                             image={pudding.image}
                             name={pudding.name}
                             price={pudding.price} price_id={''}/>
             
            </div>
          </div>
        </div>
      
      </Link>
    ))}
  </div>

  {/* Mobile Scroll Area */}
  <div className="block lg:hidden px-10">
    <ScrollArea className="container w-[400px] md:w-[700px] place-self-center whitespace-nowrap rounded-md">
      <div className="flex w-max space-x-4 p-4">
        {pudding.map((pudding) => (
          <figure key={pudding.slug} className="shrink-0">
            <Link href={`/slug/pudding/${pudding.slug}`} key={pudding.slug}>
           <div className="border">
            <div className="overflow-hidden rounded-md">
              <Image
                src={urlFor(pudding.image).url()}
                alt={pudding.name} width={400} height={400}
                className="aspect-[1/2] h-80 w-60 object-cover"
              />
            </div>
            <figcaption className="flex justify-between px-2 pt-2 text-base text-black">
              <div className="py-4">
              {pudding.name} 
              <br/>
              Rs. {pudding.price}
              </div>
              <div>
             
               <AddToBag
                             currency="PKR"
                             description={pudding.description}
                             image={pudding.image}
                             name={pudding.name}
                             price={pudding.price} price_id={''}/>
             
            </div>
            
            </figcaption>
            </div>
            </Link>
          </figure>
          
        ))}
      </div>
      
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  </div>
  
</div>
  )
}