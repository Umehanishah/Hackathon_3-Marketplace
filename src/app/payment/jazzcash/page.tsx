'use client';

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/footer";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function JazzCashPaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Debugging: Log searchParams to see if customer and cart data are present
  useEffect(() => {
    console.log("Search Params:", searchParams.toString());
  }, [searchParams]);

  // Get the cart and customer data from the query parameters
  const cartData = searchParams.get("cart")
    ? JSON.parse(decodeURIComponent(searchParams.get("cart")!))
    : null;

  const customerData = searchParams.get("customer")
    ? JSON.parse(decodeURIComponent(searchParams.get("customer")!))
    : null;

  // Debugging: Log the data to verify if it's being parsed correctly
  useEffect(() => {
    console.log("Cart Data:", cartData);
    console.log("Customer Data:", customerData);
  }, [cartData, customerData]);

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const calculateTotalAmount = () => {
    if (!cartData) return 0;
    return cartData.reduce((total: number, product: any) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const handleSubmit = async () => {
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }

    setLoading(true);
    try {
      const totalAmount = calculateTotalAmount();

      const paymentData = {
        _type: "order",
        paymentMethod: "JazzCash",
        phoneNumber,
        totalAmount,
        cart: cartData.map((product: any) => ({
          _type: "product",
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          currency: product.currency,
        })),
        customer: customerData,
        status: "Paid",
        date: new Date().toISOString(),
      };

      await client.create(paymentData);

      alert("Payment successful and order saved!");
      router.push("/order_confirmation");
    } catch (error) {
      console.error("Error during payment processing:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
              <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/checkout">Checkout</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/payment/jazzcash">JazzCash Payment</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center">
        <div className="container w-full py-10">
          <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
            JazzCash Payment
          </h1>

          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column: Payment form */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-lg font-medium">Phone Number</label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 border rounded-md mt-2"
                    placeholder="Enter your JazzCash phone number"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading || !phoneNumber}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded mt-4"
                >
                  {loading ? "Processing..." : "Submit Payment"}
                </Button>
              </form>
            </div>

            {/* Right column: Order and customer details */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Details</h3>
              {cartData && cartData.length > 0 ? (
                <div className="space-y-4">
                  {cartData.map((product: any) => (
                    <div key={product.id} className="flex justify-between">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p>
                          Qty: {product.quantity} × {product.currency} {product.price}
                        </p>
                      </div>
                      <p className="font-medium">
                        {product.currency} {product.price * product.quantity}
                      </p>
                    </div>
                  ))}
                  <div className="font-bold">
                    Total Amount: {cartData[0]?.currency} {calculateTotalAmount()}
                  </div>
                </div>
              ) : (
                <p>No products in the cart.</p>
              )}

              <h3 className="text-lg font-semibold mt-6">Customer Details</h3>
              {customerData ? (
                <div className="space-y-2">
                  <p>Name: {customerData.name}</p>
                  <p>Email: {customerData.email}</p>
                  <p>Phone: {customerData.phone}</p>
                  <p>Address: {customerData.address}</p>
                </div>
              ) : (
                <p>No customer details available.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
