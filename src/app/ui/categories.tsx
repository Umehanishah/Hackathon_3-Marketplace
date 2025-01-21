import Image from "next/image";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import Link from "next/link";


export default function Categories() {
    return ( 
        <section>
            <div className="container w-[1200px] lg:h-[500px] place-self-center">

                    <div className="place-self-center items-center pt-10">
                    <h1 className="text-2xl text-center font-bold py-10">Explore Our Exclusive Collections</h1>
                    </div>
                

            <div className="container w-[400px] md:w-[1200px] place-self-center pt-10">
            
                <div className="grid lg:grid-cols-2 gap-5 place-self-center">
                <div className="container w-[500px] h-[300px] bg-cover rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Link href="/shop">
                <HoverCard>
                <HoverCardTrigger>
                        <Image src="/img-2.jpg" alt="img" width={500} height={300} />
               </HoverCardTrigger>
                <HoverCardContent className="text-base font-semibold bg-black bg-opacity-50 text-white py-4">
                    Pudding Flavors to Delight Your Palate
                </HoverCardContent>
                </HoverCard>
                </Link>
                </div>

                
                <div className="container w-[500px] h-[300px] bg-cover rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Link href="/shop">
                <HoverCard>
                <HoverCardTrigger>
                        <Image src="/img-4.jpg" alt="img" width={500} height={300} className="container w-[500px] h-[335px] pt-5 md:pt-0"/>
               </HoverCardTrigger>
                <HoverCardContent className="text-lg font-semibold bg-black bg-opacity-50 text-white py-4">
                        A Rainbow of Jelly Flavors to Explore!
                </HoverCardContent>
                </HoverCard>
              </Link>
                </div>
                
                </div>
                    
               
      </div>

            </div>
        </section>
    )
}