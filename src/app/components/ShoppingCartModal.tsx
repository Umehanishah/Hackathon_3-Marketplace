"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw] bg-white">
        <SheetHeader>
          <SheetTitle className="text-black text-lg font-bold pt-10">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 text-black">
              {cartCount === 0 ? (
                <h1 className="py-6">You dont have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">{entry.price}</p>
                          </div>
                          
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal:</p>
              <p>{totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm ">
              Shipping and taxes are calculated at checkout.
            </p>
              <div className="flex gap-5 pb-20">
            <div className="mt-6">
            <Link href="/checkout">
              <Button onClick={handleCheckoutClick} className="container w-[150px] bg-pink-500 hover:bg-pink-700 text-white">
                Checkout
              </Button>
              </Link>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm">
            <Link href="/shop">
             <Button
                  onClick={() => handleCartClick()}
                  className="container w-[150px] font-medium bg-pink-500 hover:bg-pink-700 text-white"
                >
                  Continue Shopping
                </Button>
                </Link>
            </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}