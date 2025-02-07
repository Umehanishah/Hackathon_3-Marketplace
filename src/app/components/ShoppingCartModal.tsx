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
import CheckoutNow from "./CheckoutNow";
import { useRouter } from "next/navigation"; // To navigate to the checkout page



export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    incrementItem,
    decrementItem,
    formattedTotalPrice,
  } = useShoppingCart();

  const router = useRouter();

  const handleCheckoutClick = () => {
    // Prepare cart data to be sent to checkout page
    const cartData = Object.values(cartDetails ?? {}).map(entry => ({
      id: entry.id,
      name: entry.name,
      price: entry.price,
      quantity: entry.quantity,
      // image: entry.image,
      description: entry.description,
    }));

    // Redirect to checkout page with cart data as a query parameter
    const query = new URLSearchParams();
    query.set("cart", encodeURIComponent(JSON.stringify(cartData))); // Pass cart data as query parameter
    router.push(`/checkout?${query.toString()}`); // Redirect to checkout
  };


  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[60vw] lg:w-[90vw] bg-white">
        <SheetHeader>
          <SheetTitle className="text-black text-sm md:text-base lg:text-lg font-bold lg:pt-10">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 text-black">
              {cartCount === 0 ? (
                <h1 className="py-6">You dont have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="lg:flex py-6">
                      <div className="h-14 lg:h-24 w-14 lg:w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 text-xs">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                          className="container w-[100px] h-[100px] object-cover"
                        />
                      </div>

                      <div className="lg:ml-4 flex flex-1 flex-col pt-5 md:pt-0">
                        <div>
                          <div className="flex justify-between text-xs md:text-base lg:text-lg font-medium">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">
                              {(entry.price * entry.quantity).toFixed(2)}
                            </p>
                           
                          </div>
                          
                        </div>

                        <div className="flex flex-1 items-end justify-between text-xs md:text-sm pt-3 md:pt-0">
                        <div className="flex items-center gap-2">
                            <Button
                              onClick={() => decrementItem(entry.id)}
                              className="text-base text-white bg-pink-500 px-2 py-1 hover:bg-pink-600 rounded-xl"
                            >
                              -
                            </Button>
                          <p className="text-black text-base">{entry.quantity}</p>
                          <Button
                              onClick={() => incrementItem(entry.id)}
                              className="text-base text-white bg-pink-500 px-2 py-1 hover:bg-pink-600 rounded-xl"
                            >
                              +
                            </Button>
                            </div>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-red-500 hover:text-red-700 text-xs md:text-sm"
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

          <div className="border-t border-gray-200 lg:px-4 py-6 sm:px-6">
            <div className="flex justify-between text-sm md:text-base font-medium">
              <p>Subtotal:</p>
              <p>{totalPrice}</p>
            </div>
            <p className="mt-0.5 text-xs md:text-sm">
              Shipping and taxes are calculated at checkout.
            </p>
              <div className="lg:flex gap-5 lg:pb-20 place-self-center">
            <div className="mt-2 lg:mt-6">
            <Button
                  onClick={handleCheckoutClick} // Handle checkout click
                  className="container w-[150px] text-xs md:text-base font-medium bg-pink-500 hover:bg-pink-700 text-white"
                >
                  Checkout
                </Button>
                </div>

            <div className="mt-2 lg:mt-6 flex justify-center text-center text-sm">
            <Link href="/shop">
             <Button
                  onClick={() => handleCartClick()}
                  className="container w-[150px] text-xs md:text-base font-medium bg-pink-500 hover:bg-pink-700 text-white"
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