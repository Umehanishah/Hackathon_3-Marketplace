import React from 'react'
import ContactForm from '@/components/contact-form'
import Navigation from '../ui/navigation'
import Footer from '../ui/footer'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import Link from 'next/link'
import Comments_Data from "@/app/fetch_data/comments_data"


const Faqs = () => {
  return (
   <>
   <Navigation/>
   <div>

   <div className="container  w-[500px] md:w-[700px] lg:w-[1000px] place-self-center py-10 text-lg">
   <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/faqs">FAQ`s & Comments</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>

        </div>
     

        <div className="container  w-[500px] md:w-[700px] lg:w-[1000px] place-self-center py-5">
        <h1 className="text-2xl font-bold">
        Comment here or Ask any Question</h1>
     <ContactForm/>
     <hr/>
     <Comments_Data/>
     </div>
   </div>
   <Footer/>
   </>
  )
}

export default Faqs