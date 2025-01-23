"use client";


import Link from "next/link";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {Menu} from "lucide-react";
import Login_button from "./login_button";
import Search from "./search";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";



export default function Navigation() {
    const { handleCartClick } = useShoppingCart();
    return ( 
        <section>
            <div>

                {/* headline */}
                <div className="bg-pink-600 py-2 items-center">
                    <div className="container flex gap-20 mx-auto justify-around">
                    <p className="flex gap-2 items-center text-gray-100 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        Free Shipping On All Orders Over $500
                    </p>
                    <div className="hidden lg:block">
                        <div className="flex gap-5 items-center">
                <p className="text-white font-thin text-xs">
                    <Link href="/faqs">Faqs</Link></p>
                <p className="flex gap-2 items-center text-white font-thin text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                <Link href="/contact"> Need Help</Link></p>
                </div>
                </div>
                

                </div>
                </div>


            {/* logo */}
                <div className="bg-pink-50">
                    <div className="container w-[100px] lg:w-[1000px] flex justify-between items-center md:mx-20 place-self-center">
                       <Link href="/">
                        <Image src="/logo.png" alt="logo" width={200} height={40} className="container w-[100px] place-self-center bg-cover pb-2"/>
                        </Link>
                    <div className="hidden lg:block">
                        <Login_button/>
                        </div>
                </div>
                </div>

                {/* nav bar  */}
                    <div className="container lg:w-[1000px] flex py-5 items-center place-self-center">
                        <div className="hidden lg:block">
                        <div className="container w-[1000px] h-[30px] flex gap-5 justify-between place-self-center">

                        <ul className="flex gap-5 container w-[550px] h-[30px] items-center">
                            <li className="text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/">Home</Link>
                            </li>
                            <li className="text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/shop">Shop</Link>
                            </li>
                            <li className="text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/About">About</Link>
                            </li>
                            <li className="text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/contact">Contact</Link>
                            </li>
                        </ul>

                        <div className="flex gap-5 items-center">
                            <div>
                                <Search/>
                            </div>
                            <div className="flex divide-x">
                                <Button className="hidden text-xs font-semibold text-white sm:block">
                                    Cart
                                </Button>
                            </div>
                        </div>
                        </div>   
                        </div>


                <div className="container w-[500px] place-self-center px-20"> 
                    <Sheet>
                        <SheetTrigger className="lg:hidden">
                        <Menu className="stroke-pink-600"/>
                        </SheetTrigger>
                        <SheetContent className="bg-white">
                                <div className="py-5 text-white">
                                <Login_button/>
                                </div>
                        <div className="pt-5">
                        <form className="max-w-md mx-auto">   
                       <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search..." required />
                        </div>
                        </form>
                        </div>
                        
                        <div className="flex gap-5 items-center py-5">
                        <p className="font-thin text-xs">
                            <Link href="/faqs">Faqs</Link></p>
                        <p className="flex gap-2 items-center  font-thin text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                        <Link href="/contact"> Need Help</Link></p>
                        </div>
                        
                        <ul>
                        <li className="lg:text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/">Home</Link>
                            </li>
                            <li className="pt-2 lg:text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/shop">Shop</Link>
                            </li>
                            <li className="pt-2 lg:text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/About">About</Link>
                            </li>
                            <li className="pt-2 lg:text-sm text-gray-500 hover:text-pink-800 hover:font-semibold">
                            <Link href="/contact">Contact</Link>
                            </li>
                                </ul>

                            
            
                        </SheetContent>
                        </Sheet>
                        </div>

                            
                    </div>
           
       </div>
<hr/>
</section>

    );
}