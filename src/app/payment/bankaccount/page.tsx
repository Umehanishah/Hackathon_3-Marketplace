'use client';

import { useSearchParams } from "next/navigation"; // Hook to access query parameters
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/footer";
import { useRouter } from "next/navigation";
import { client } from "@/lib/sanity"; // Sanity client import

export default function BankAccountPaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the cart data from the query parameters
  const cartData = searchParams.get("cart")
    ? JSON.parse(decodeURIComponent(searchParams.get("cart")!))
    : null;

  const [loading, setLoading] = useState(false);
  const [accountName, setAccountName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");

  // Calculate total amount from the cart data
  const calculateTotalAmount = () => {
    return cartData?.reduce((total: number, product: any) => total + product.price * product.quantity, 0) || 0;
  };

  // Handle the payment submission and save to Sanity
  const handleSubmit = async () => {
    if (!accountName || !accountNumber) {
      alert("Please fill in all the fields.");
      return;
    }

    setLoading(true);
    try {
      // Simulate processing the payment
      alert(`Processing Bank Account payment for Account: ${accountNumber} (Name: ${accountName})`);

      // Data to save in Sanity
      const orderData = {
        _type: "order", // Sanity document type
        cartData,
        totalAmount: calculateTotalAmount(),
        paymentMethod: "Bank Account",
        paymentStatus: "Completed", // You can modify this based on your payment gateway
        accountName,
        accountNumber,
        orderDate: new Date().toISOString(),
      };

      // Save the order data to Sanity
      await client.create(orderData);

      // Show confirmation or redirect to another page
      alert("Payment successful and order details saved!");
      router.push("/thank-you"); // Redirect to a thank-you page (optional)
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
        <h1 className="text-xl md:text-2xl font-bold">Bank Account Payment</h1>

        <div className="mt-4">
          <h3>Total Amount: {cartData ? cartData[0]?.currency : "$"} {calculateTotalAmount()}</h3>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="mt-6">
          <div className="mb-4">
            <label className="block text-lg font-medium">Account Name</label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="w-full p-2 border rounded-md mt-2"
              placeholder="Enter account holder's name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium">Account Number</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full p-2 border rounded-md mt-2"
              placeholder="Enter your bank account number"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading || !accountName || !accountNumber}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mt-4"
          >
            {loading ? "Processing..." : "Submit Payment"}
          </Button>
        </form>
      </div>

      <Footer />
    </>
  );
}
