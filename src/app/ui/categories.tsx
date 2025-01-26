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
            <div className="container w-[400px] md:w-[700px] lg:w-[1000px] lg:h-[500px] place-self-center">

                    <div className="place-self-center items-center pt-10">
                    <h1 className="text-lg md:text-xl lg:text-2xl text-center font-bold py-5">Explore Our Exclusive Collections</h1>
                    </div>
                

            <div className="container w-[400px] md:w-[700px] lg:w-[1000px] place-self-center pt-10">
            
                <div className="grid lg:grid-cols-2 gap-5 place-self-center">
                <div className="container w-[300px] md:w-[500px] lg:h-[300px] place-self-center bg-cover rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Link href="/shop">
                <HoverCard>
                <HoverCardTrigger>
                        <Image src="/img-2.png" alt="img" width={500} height={300} />
               </HoverCardTrigger>
                <HoverCardContent className="text-sm md:text-base font-semibold bg-black bg-opacity-50 text-white py-4">
                    Pudding Flavors to Delight Your Palate
                </HoverCardContent>
                </HoverCard>
                </Link>
                </div>

                
                <div className="container w-[300px] md:w-[500px] lg:h-[300px] place-self-center bg-cover rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
                <Link href="/shop">
                <HoverCard>
                <HoverCardTrigger>
                        <Image src="/img-4.jpg" alt="img" width={500} height={300} className="container w-[500px] lg:h-[335px] pt-5 md:pt-0"/>
               </HoverCardTrigger>
                <HoverCardContent className="text-sm lg:text-lg font-semibold bg-black bg-opacity-50 text-white py-4">
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