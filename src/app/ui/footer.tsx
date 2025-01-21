import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

export default function Footer() {
    return ( 
        <section>
            <div className="container w-[400px] md:w-[1100px] md:h-[300px] place-self-center pt-20">
                <hr/>
                    <div className="continer w-[400px] md:w-[1100px] md:h-[300px] items-center pt-20">
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3">
                        <div className="continer w-[400px]">
                            <Image src="/logo.png" alt="logo" width={150} height={50}/>
                            <p className="continer w-[300px] text-xs text-gray-400 pt-5">
                            Indulge in every bite—sweet moments are meant to be savored!</p>
                                <div className="flex gap-3 pt-5">
                                    <Link href="https://www.facebook.com/share/18yhj6s337/" className=" hover:stroke-pink-600 bg-transparent hover:border-2 hover:border-pink-600 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                </Link>
                                <Link href="https://www.youtube.com/@skroyalfoods3062"className="hover:stroke-pink-600 bg-transparent hover:border-2 hover:border-pink-600 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                                </Link>
                                <Link href="/www.gmail.com"className="hover:stroke-pink-600 bg-transparent hover:border-2 hover:border-pink-600 rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </Link>
                                </div>
                                </div>

                                <div className="continer w-[400px] grid grid-cols-2 pt-10">
                                    <ul>
                                        <h2 className="text-xs text-gray-500 pb-2">CATEGORY</h2>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-pink-500">
                                        <Link href="/product">Puddings</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-pink-500">
                                        <Link href="/product">Jello Jelly</Link></li>
                                       
                                    </ul>
                               
                                    <ul>
                                        <h2 className="text-xs text-gray-500 pb-2">SUPPORT</h2>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-pink-500">
                                        <Link href="/contact">Help & Support</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-pink-500">
                                        <Link href="/contact">Terms & Conditions</Link></li>
                                        <li className="text-xs text-gray-800 pt-3 hover:text-pink-500">
                                        <Link href="/contact">Help</Link></li>
                                        
                                    </ul>
                                </div>

                                <div className="continer w-[350px] pt-10 md:pt-0">
                                <h2 className="text-xs text-gray-500 pb-2">NEWSLETTER</h2>
                                <div className="flex gap-3">
                                <Input type="email" placeholder="Email" className="mt-3 text-xs"/>
                                <Button className="bg-pink-500 mt-3">Subscribe</Button>
                                </div>
                                <p className="text-xs pt-3 text-gray-500 pb-10">Send us email to get daily updates.</p>
                                </div>
                        </div>
                    
                  
                    </div>
                    <hr/>

                    <div className="pt-5 pb-5 place-self-center">
                        <p className="text-gray-500 text-xs">@2025 SK_Blissful Bites by Umehani Shah</p>
                        
                    </div>
            </div>
        </section>
    )
}