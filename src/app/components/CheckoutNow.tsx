"use client";

import { Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { ProductCart } from "./AddToBag";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+ app directory

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const router = useRouter();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };

  const handleCheckout = () => {
    // Save product data to localStorage
    localStorage.setItem("checkoutProduct", JSON.stringify(product));

    // Navigate to checkout page
    router.push("/checkout");
  };

  return (
    <Button variant="outline" onClick={handleCheckout}>
      Checkout Now
    </Button>
  );
}
