"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import { useState } from "react";


export default function Navigation() {
    const [hover, setHover] = useState(false);


    return ( 
        <section className="w-[400px] md:w-[700px] lg:w-[1000px] lg:h-[700px] place-self-center">
           <div>
             
             
                {/* header */}
                <div className="container w-[400px] md:w-[700px] lg:w-[1000px] lg:flex gap-10 bg-pink-50 rounded-b-3xl place-self-center items-center lg:px-10 py-5">
                  
                    <div className="container w-[400px] md:w-[700px] lg:w-[1000px] lg:h-[600px] place-self-center lg:place-self-auto pt-10 lg:pt-40 text-center lg:text-left px-5 lg:px-0">
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


                <div className="container w-[400px] md:w-[800px] lg:h-[600px] place-self-center justify-self-center">
                  <Image
                    src="/img-1.png"
                    alt="Header-Image"
                    width={400}
                    height={400}
                    className="px-20 md:px-0 place-self-center"
                  />
                </div>

            </div>

            </div>
        </section>
    )
}