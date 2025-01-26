'use client';

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Navigation from "@/app/ui/navigation";
import Footer from "@/app/ui/footer";
import { Button } from "@/components/ui/button";

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [customerDetails, setCustomerDetails] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState<string>("");
  const [paymentDateTime, setPaymentDateTime] = useState<string>("");

  useEffect(() => {
    // Retrieve and parse query parameters
    const cartData = searchParams.get("cart")
      ? JSON.parse(decodeURIComponent(searchParams.get("cart")!))
      : null;

    const customerData = searchParams.get("customer")
      ? JSON.parse(decodeURIComponent(searchParams.get("customer")!))
      : null;

    const paymentStatus = searchParams.get("paymentStatus") || "Paid"; // Assuming "Paid" as default
    const paymentDateTime = new Date().toISOString(); // Or use the passed value if available

    setOrderDetails(cartData);
    setCustomerDetails(customerData);
    setPaymentStatus(paymentStatus);
    setPaymentDateTime(paymentDateTime);
  }, [searchParams]);

  const calculateTotalAmount = () => {
    if (!orderDetails) return 0;
    return orderDetails.reduce((total: number, product: any) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  return (
    <>
      <Navigation />

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">Order Confirmation</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left column: Order details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Order Details</h3>
            {orderDetails && orderDetails.length > 0 ? (
              <div className="space-y-4">
                {orderDetails.map((product: any) => (
                  <div
                    key={product.id}
                    className="flex justify-between"
                  >
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p>
                        Qty: {product.quantity} × {product.currency}{" "}
                        {product.price}
                      </p>
                    </div>
                    <p className="font-medium">
                      {product.currency} {product.price * product.quantity}
                    </p>
                  </div>
                ))}
                <div className="font-bold">
                  Total Amount: {orderDetails[0]?.currency} {calculateTotalAmount()}
                </div>
              </div>
            ) : (
              <p>No products in the cart.</p>
            )}
         
            <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
            {customerDetails ? (
              <div className="space-y-2">
                <p>Name: {customerDetails.name}</p>
                <p>Email: {customerDetails.email}</p>
                <p>Phone: {customerDetails.phone}</p>
                <p>Address: {customerDetails.address}</p>
              </div>
            ) : (
              <p>No customer details available.</p>
            )}
          </div>
       

        {/* Payment Status */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Payment Status</h3>
          <p>Status: {paymentStatus}</p>
          <p>Date and Time: {new Date(paymentDateTime).toLocaleString()}</p>
        </div>
        </div>
        {/* Thank you note */}
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-green-600">
            Thank you for your order! 🎉
          </p>
          <p className="mt-2">
            Your order has been successfully placed and is being processed.
          </p>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
            Return to Home
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}
