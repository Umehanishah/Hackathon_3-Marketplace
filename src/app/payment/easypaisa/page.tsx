'use client';

import { useSearchParams } from "next/navigation"; // Hook to access query parameters
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/footer";
import { useRouter } from "next/navigation";

export default function EasyPaisaPaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the cart data from the query parameters
  const cartData = searchParams.get("cart")
    ? JSON.parse(decodeURIComponent(searchParams.get("cart")!))
    : null;

  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  // Handle the payment submission
  const handleSubmit = async () => {
    if (!phoneNumber) {
      alert("Please enter your phone number.");
      return;
    }

    setLoading(true);
    try {
      // Simulate payment submission logic here
      alert(`Processing EasyPaisa payment for phone number: ${phoneNumber}`);
      // You can add your actual payment logic here
      // After successful payment, redirect or show confirmation message

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

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10">
        <h1 className="text-xl md:text-2xl font-bold">EasyPaisa Payment</h1>

        <div className="mt-4">
          <h3>Total Amount: {cartData ? cartData[0]?.currency : "$"} {cartData ? cartData.reduce((total: number, product: any) => total + product.price * product.quantity, 0) : 0}</h3>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="mt-6">
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

          <Button
            type="submit"
            disabled={loading || !phoneNumber}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded mt-4"
          >
            {loading ? "Processing..." : "Submit Payment"}
          </Button>
        </form>
      </div>

      <Footer />
    </>
  );
}
