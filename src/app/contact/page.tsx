import Navigation from "../ui/navigation";
import Footer from "../ui/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import Link from "next/link";

export default function Contact() {
  return (
    <main>
      <Navigation />

      <div className="container w-[1000px] place-self-center pt-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold">
              <Link href="/contact">
                    Contact
              </Link>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        </div>
     

      {/* Contact Section */}
      <section className="py-10 place-self-center">
        <div className="container w-[600px] md:w-[900px] place-self-center text-center">
          <h1 className="text-xl md:text-3xl font-bold">Get In Touch With Us</h1>
          <p className="text-gray-500 text-xs md:text-sm mt-3 px-10">
            For more information about our products & services, please feel free to drop us an email. 
            Our staff is always here to help you out. Do not hesitate!
          </p>
        </div>

        <div className="container w-[500px] md:w-[1000px] mt-10 grid grid-cols-1 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="container w-[500px] px-10 md:px-0 space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="bg-pink-200 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold">We are From</h3>
                <p className="text-xs md:text-sm">Karachi</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-200 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold">Phone</h3>
                <p className="text-xs md:text-sm">Mobile: +92 322 2553568</p>
                
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-200 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold">Working Time</h3>
                <p className="text-xs md:text-sm">24 hour`s / 7 day`s</p>
              
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="container w-[500px] px-10 md:px-0 pt-10 md:pt-0 place-self-center">
            <form className="space-y-4">
              <p className="text-xs">Your Name</p>
              <Input placeholder="Abc" className="bg-pink-50 text-gray-500" />
              <p className="text-xs">Email Address</p>
             <Input placeholder="This is an optional" className="bg-pink-50 text-gray-500" />
              <p className="text-xs">Meesage</p>
              <Textarea placeholder="Hi! i`d like to ask about" className="bg-pink-50 text-gray-500 py-5" />
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="place-self-center pb-10 mt-20">
  <div className="container w-[600px] md:w-[1100px] grid grid-cols-1 sm:grid-cols-3 gap-6 bg-pink-100 py-10 text-center">
    {/* High Quality */}
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40"height="40"viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth="2"strokeLinecap="round"strokeLinejoin="round"className="mb-3 text-pink-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
      <h4 className="font-bold text-base md:text-lg">High Quality</h4>
      <p className="text-gray-500 text-xs md:text-sm">Natural ingredients with high quality</p>
    </div>

    {/* Warranty Protection */}
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-pink-500"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4" /></svg>
      <h4 className="font-bold text-base md:text-lg">Utmost Hygiene</h4>
      <p className="text-gray-500 text-xs md:text-sm">Keeping things clean and pure</p>
    </div>

    {/* 24/7 Support */}
    <div className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-pink-500"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10"/></svg>
      <h4 className="font-bold text-base md:text-lg">24/7 Support</h4>
      <p className="text-gray-500 text-xs md:text-sm">Dedicated support</p>
    </div>
  </div>
</section>


      <Footer />
    </main>
  );
}
