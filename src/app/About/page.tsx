import Navigation from "../ui/navigation";
import Footer from "../ui/footer";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import Link from "next/link";
import Jelly_data from "../fetch_data/jelly_data";



export default function About() {
  return (
    <main>

      <Navigation />
      <div className="container w-[300px] md:w-[700px] lg:w-[1000px]  place-self-center">
      <div className="container w-[300px] md:w-[700px] lg:w-[1000px]  place-self-center py-10">
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/about">About</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

                </div>
       
       
       <div className="container w-[300px] md:w-[700px] lg:w-[1000px]  place-self-center md:pb-10">
        <h1 className="text-xl font-bold py-5">
          Silver Linings of this Product</h1>
        <p className="text-xs md:text-base text-justify text-gray-900 font-justify py-4 leading-8">
        Welcome to S.k blissful bites, a dessert oriented circle for those who love desserts and eat to love. 
        Our country is a fresh vessel of flavours. Our company believe that that food goes further than any 
        border and bring people together. We are a network connecting sweet tooths to power and joy of food. 
        Celebrating sweet experiences from different traditions worldwide.</p>
        <p className="text-xs md:text-base text-justify text-gray-900 font-justify py-4 leading-8">
        S.k blissful bites was officially started in 1995. Our elders loved the enjoyment of making desserts 
        and were happy to see the joy on people`s face. We thought why not to convert it into a business. 
        It was also a great choice because sweet course is widely consumed all over the world offering consistent demand. 
        We provide a unique opportunity to create visually appealing products that bring delight to our consumers. 
        Leading to brand loyalty and customer satisfaction, and this is how we adopted this as our profession.</p>
        
        <ul className="text-xs md:text-base text-justify text-gray-900 font-justify py-4 list-disc leading-10">
          <li>Our marketplace aim is to save the precious time of our beloved clients.</li>
          <li>We use natural colours and high quality ingredients.</li>
          <li>Our Product is as much pocket friendly with a wide range of flavours.</li>
          <li>Customer can shop anytime, anywhere without needing to physical visit.</li>
          <li>One click of customer make their product to their doorstep.</li>
          
        </ul>
        
        <p className="text-xs md:text-base text-justify text-gray-900 font-justify py-4 leading-8">
        We are widely available on Facebook, Instagram, Whatsapp, daraz and now as a website. 
        By seeing everyone grow on social media we also moved to media to increase our services and to improve customer service.
        </p>
       </div>
        

      
      </div>
      <Jelly_data/>

      <Footer />
    </main>
  );
}
