

import Image from 'next/image'
import { client } from "@/sanity/lib/client";
import { jelly as jellyType } from '@/app/fetch_data/jelly_data';
import { urlFor } from '@/sanity/lib/image';
import Navigation from '@/app/ui/navigation';
import Footer from '@/app/ui/footer';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link";
import Add from "@/app/components/add"
import Jelly_data from '@/app/fetch_data/jelly_data';
import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";
import { PageProps } from '../../../../../.next/types/app/slug/jelly/[slug]/page';
import Pudding_data from '@/app/fetch_data/pudding_data';
import BagButton from '@/app/components/BagButton';
import Jrecipe from '@/app/fetch_data/jrecipe'; 
import WishlistButton from "@/app/components/wishlistbutton";




interface Params {
  params: {
    slug:string
  };
}

interface Slug {
  current: string;
}

interface Image {
  asset: {
    _id: string;
    url: string;
  };
}

const jelly = async (params:PageProps) => {

  const {slug} = await params.params;

  const jelly:jellyType  = await client.fetch(`
    *[_type == "jelly" && slug.current == $slug]{
          name,
          description,
            "slug":slug.current,
          price,
          image{
            asset->{
              _id,
              url
      }
    },
  }[0]`, {slug}
) 



  return (
    <main>
      <Navigation/>
      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10">
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/shop">shop</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>


        </div>
        


      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center lg:grid grid-cols-2 gap-10">
      <div className="container w-[300px] md:w-[700px] lg:w-[500px] md:h-[600px] place-self-center bg-cover">
     
        <Image src={urlFor(jelly.image).url()} alt={ jelly.name } width={500} height={700} className='container w-[400px] h-[400px] md:w-full md:h-full place-self-center'/>
      </div>
      <div className='container w-[300px] md:w-[700px] lg:w-[500px] place-self-center pt-5'>
        <h2 className='text-xl lg:text-4xl font-bold pt-10 md:pt-0'>
          {jelly.name}
          </h2>
          
        <h3 className='container w-[100px] md:w-[150px] mt-5 mb-5 bg-pink-500 rounded-full text-center text-white text-xs md:text-base lg:text-lg font-semibold py-2'>
          Rs. {jelly.price} 
          <span className='text-sm md:text-base lg:text-lg text-gray-100 line-through pl-5'>150</span>
        </h3>
        <p className='flex gap-5 text-base pb-5'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
        3-4 Days</p>
        <hr/>
        <p className='text-xs md:text-base text-gray-500 text-justify pt-10 pb-10'>
          {jelly.description}
          </p>
          <hr/>
          

        <div className="flex gap-5 pt-5">
            <div>
             <WishlistButton productId={jelly._id} /> 
             </div>
             <BagButton
              currency="PKR"
              description={jelly.description}
              image={jelly.image}
              name={jelly.name}
              price={jelly.price} price_id={''}                /> 
            
            
            </div> 


             
      </div>
      </div>
      <Jrecipe/>
      <Pudding_data/>
      <Footer/>
    </main>
  )
}

export default jelly;