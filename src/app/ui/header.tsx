"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { useState } from "react";


export default function Navigation() {
    const [hover, setHover] = useState(false);


    return ( 
        <section className="w-[1000px] h-[700px] place-self-center">
           <div>
             
             
                {/* header */}
                <div className="lg:flex gap-10 bg-pink-100 rounded-b-3xl place-self-center items-center lg:px-10 py-5">
                  
                    <div className="container w-[500px] md:h-[600px] pt-10 md:pt-40 text-center lg:text-left px-5 lg:px-0">
                    <p className="text-gray-600 rounded-md text-xs font-light px-5 md:px-0">
                    WELCOME TO SUGARFY!
                    </p>
                    <p className="font-semibold text-2xl md:text-4xl lg:text-5xl pt-5 px-5 md:px-0">
                            SK Blissful Bites: Where Every Bite is Pure Joy!
                    </p>
                    <Button className="flex-auto justify-center bg-pink-500 hover:bg-pink-700 text-white mt-8 mx-5 md:mx-0">
                        <Link href="./shop">
                        Shop Now </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                        </Button>
                        </div>


    <div className="container w-[400px] md:h-[600px] justify-self-center">
      <Image
        src="/img-1.png"
        alt="Header-Image"
        width={400}
        height={400}
        className="px-20 md:px-0"
      />
    </div>

            </div>

            </div>
        </section>
    )
}