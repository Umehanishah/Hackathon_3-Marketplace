'use client';

import { useSearchParams } from "next/navigation"; // Hook to access query parameters
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/footer";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function EasyPaisaPaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the cart and customer data from the query parameters
  const cartData = searchParams.get("cart")
    ? JSON.parse(decodeURIComponent(searchParams.get("cart")!))
    : null;

  const customerData = searchParams.get("customer")
    ? JSON.parse(decodeURIComponent(searchParams.get("customer")!))
    : null;

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // Calculate total amount for the cart
  const calculateTotalAmount = () => {
    if (!cartData) return 0;
    return cartData.reduce((total: number, product: any) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  // Add delivery charges
  const deliveryCharges = 100;

  // Calculate the grand total (total amount + delivery charges)
  const calculateGrandTotal = () => {
    return calculateTotalAmount() + deliveryCharges;
  };

  // Handle the payment submission
  const handleSubmit = async () => {
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }

    setLoading(true);
    try {
      // Simulate payment submission logic here
      const totalAmount = calculateTotalAmount();
      const paymentData = {
        paymentMethod: "EasyPaisa",
        phoneNumber,
        totalAmount,
        deliveryCharges,
        grandTotal: calculateGrandTotal(),
        cart: cartData.map((product: any) => ({
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          currency: product.currency,
        })),
        customer: customerData,
        status: "Paid",
        date: new Date().toISOString(),
      };

      // You can add your actual payment logic here
      alert(`Processing EasyPaisa payment for phone number: ${phoneNumber}`);

      // After successful payment, redirect to the order confirmation page
      // For now, using a setTimeout to simulate payment processing delay
      setTimeout(() => {
        // Redirect to the order confirmation page
        router.push("/order_confirmation");
      }, 2000); // 2 seconds delay to simulate the payment processing time

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

      {/* Breadcrumbs */}
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
              <BreadcrumbLink href="/payment/easypaisa">EasyPaisa Payment</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
          EasyPaisa Payment
        </h1>

        <div className="lg:flex justify-between">
          <div className="container w-[300px] md:w-[450px] place-self-center">
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block text-lg font-medium">Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-2 border rounded-md mt-2"
                  placeholder="Enter your EasyPaisa phone number"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading || !phoneNumber}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded mt-4"
              >
                {loading ? "Processing..." : "Submit Payment"}
              </Button>
            </form>
          </div>

          {/* Order Details */}
          <div className="container w-[300px] md:w-[450px] place-self-center mt-8">
            <h3 className="text-base md:text-lg font-semibold mb-4">Order Details</h3>
            {cartData && cartData.length > 0 ? (
              <div className="space-y-4 border p-5 bg-pink-100">
                {cartData.map((product: any) => (
                  <div key={product.id} className="flex justify-between">
                    <div>
                      <p className="text-xs md:text-base font-medium">{product.name}</p>
                      <p className="text-xs md:text-base">
                        Qty: {product.quantity} × {product.currency} {product.price}
                      </p>
                    </div>
                    <p className="font-medium text-xs md:text-base">
                      {product.currency} {product.price * product.quantity}
                    </p>
                  </div>
                ))}
                <div className="font-bold text-xs md:text-base">
                  Total Amount: {cartData[0]?.currency} {calculateTotalAmount()}
                </div>
                <div className="font-bold text-xs md:text-base">
                  Delivery Charges: {cartData[0]?.currency} {deliveryCharges}
                </div>
                <div className="font-bold text-xs md:text-base">
                  Grand Total: {cartData[0]?.currency} {calculateGrandTotal()}
                </div>
              </div>
            ) : (
              <p className="text-xs md:text-base">No products in the cart.</p>
            )}

            {/* Customer Details */}
            <h3 className="text-xs md:text-base lg:text-lg font-semibold mt-6">Customer Details</h3>
            {customerData ? (
              <div className="space-y-2 border p-5 bg-pink-100">
                <p className="text-xs md:text-base">Name: {customerData.name}</p>
                <p className="text-xs md:text-base">Email: {customerData.email}</p>
                <p className="text-xs md:text-base">Phone: {customerData.phone}</p>
                <p className="text-xs md:text-base">Address: {customerData.address}</p>
              </div>
            ) : (
              <p className="text-xs md:text-base">No customer details available.</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
