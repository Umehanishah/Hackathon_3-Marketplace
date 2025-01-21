"use client";


import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
  };



export default function Add() {
  const [products, setProducts] = useState([
    { id: 1,  quantity: 1 },
    
  ]);

  const increaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

 


  return (
        <div className="container w-[500px] pt-5">
          <div className="text-base">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between pb-5 mb-5"
              >
               
                 <div className="flex gap-5 items-center">
                 <button className="text-xl px-2 bg-pink-500 text-white hover:bg-transparent hover:text-pink-500 hover:font-bold hover:border-2 rounded-md hover:border-pink-500"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
                <p className="text-xl">
                {product.quantity}
                </p>
                <button className="text-xl px-2 bg-pink-500 text-white hover:bg-transparent hover:text-pink-500 hover:font-bold hover:border-2 rounded-md hover:border-pink-500"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                </div>
              
               
              </div>
            ))}
          
            </div>
        </div>
  
  );
}
