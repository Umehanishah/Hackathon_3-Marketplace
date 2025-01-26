import React from 'react'
import Navigation from '../ui/navigation'
import Pudding_data from '../fetch_data/pudding_data'
import Jelly_data from '../fetch_data/jelly_data'
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
import Categories from '../ui/categories'

export default function  shop() {
  return (
    <>
    <div>
        <Navigation/>
        
        <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10 text-lg">
        <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
        </div>
     
        
        
        <Pudding_data/>
        <Categories/>
        <Jelly_data/>
        <Footer/>
    </div>
    </>
  )
}

