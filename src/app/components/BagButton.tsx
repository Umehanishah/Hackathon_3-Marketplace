"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/lib/sanity";
import { useState } from "react";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const [quantity, setQuantity] = useState(1); // Manage quantity

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image ?? "").url(),
    price_id: price_id,
  };

  return (
    <div className="lg:flex gap-5">
      
      <Button className="bg-pink-500 hover:bg-pink-600 text-white text-xs md:text-base rounded-xl"
        onClick={() => {
          addItem({ ...product, quantity }); // Add quantity to the product
          handleCartClick();
        }}
      >
       Add to Bag <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      </Button>
    </div>
  );
}
