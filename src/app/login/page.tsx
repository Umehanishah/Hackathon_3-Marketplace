import { SignIn } from "@clerk/nextjs";

import Navigation from "../ui/navigation";
import Footer from "../ui/footer";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function LoginPage() {
  return (
        <>
     <Navigation />


      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10 text-lg">
     <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/about">Login</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    </div>


    <div className="containerw-[400px] md:w-[700px] lg:w-[1000px] gap-10 place-self-center flex items-center py-10">
    <SignIn
        routing="path"
        path="/login"
        afterSignInUrl="/" // Redirect to checkout after login
        afterSignUpUrl="/" // Redirect to checkout after sign-up
      />
       <Image src="/img-4.jpg" alt="img" width={450} height={300} className="hidden lg:block rounded"/>
    </div>
    
    
    <Footer />
    </>
  );
}