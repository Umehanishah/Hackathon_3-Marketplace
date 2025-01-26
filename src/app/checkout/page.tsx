'use client';

import { useSearchParams } from "next/navigation"; // Hook to access query parameters
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "../ui/navigation";
import Footer from "../ui/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize the router

  // Get the cart data from the query parameters
  const cartData = searchParams.get("cart")
    ? JSON.parse(decodeURIComponent(searchParams.get("cart")!))
    : null; // Decode and parse the cart JSON

  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });


  // Calculate the total amount based on the quantity of each product
  const calculateTotalAmount = () => {
    if (!cartData) return 0;
    return cartData.reduce((total: number, product: any) => {
      return total + product.price * product.quantity; // Multiply price by quantity
    }, 0);
  };

  // Handle payment method selection and navigation to the respective payment page
  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    // Validate customer data
    if (
      !customerData.name ||
      !customerData.email ||
      !customerData.phone ||
      !customerData.address
    ) {
      alert("Please fill in all customer details.");
      return;
    }


    setLoading(true);
    try {
      if (cartData && cartData.length > 0) {
        // Serialize the cart data to pass in the URL query parameter
        const serializedCartData = encodeURIComponent(JSON.stringify(cartData));

        // Navigate to the respective payment method page
        if (paymentMethod === "JazzCash") {
          router.push(`/payment/jazzcash?cart=${serializedCartData}`);
        } else if (paymentMethod === "EasyPaisa") {
          router.push(`/payment/easypaisa?cart=${serializedCartData}`);
        } else if (paymentMethod === "Bank Account") {
          router.push(`/payment/bankaccount?cart=${serializedCartData}`);
        }
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment processing failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };


  return (
    <>
      <Navigation />

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/Checkout">Checkout</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center">
        <h1 className="text-xl md:text-2xl font-bold">Finalize Your Order</h1>
        
        <div className="flex gap-10">
        <div className="container w-[450px] place-self-center">
        {/* Display product information if available */}
        {cartData && cartData.length > 0 ? (
          <div>
             <h2 className="text-lg font-bold pt-10">Order Details</h2>
            {cartData.map((product: any) => (
              <div key={product.id} className="flex gap-5 justify-between border my-2 px-5">
                {/* Product Image */}
                {/* <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-md"
                /> */}
                {/* Product Name */}
                <h2 className="text-base md:text-lg items-center pt-4 font-semibold">
                  {product.name}</h2>
                <p className="text-sm md:text-base pt-4 pb-4">
                <span className="font-semibold">  Qty:</span><br/> {product.quantity}
                </p>
                {/* Total for each product */}
                <p className="text-sm md:text-base pt-4">
                 <span className="font-semibold"> Total:</span><br/> {product.currency} {product.price * product.quantity}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products in the cart.</p>
        )}

        {/* Display the total amount */}
        <div className="mt-4 font-semibold">
          <h3>Total Amount: {cartData ? cartData[0]?.currency : "$"} {calculateTotalAmount()}</h3>
        </div>
        </div>

        <div className="container w-[450px] place-self-center">
        {/* Customer details form */}
        <div className="mt-6">
          <h2 className="text-lg font-bold">Customer Information</h2>
          <div className="grid gap-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customerData.name}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customerData.email}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={customerData.phone}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={customerData.address}
              onChange={handleInputChange}
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>
        </div>
        </div>
        
        </div>



        {/* Radio group for payment method selection */}
        <div className="grid grid-rows-3 gap-3 mt-5">
          
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="JazzCash"
              checked={paymentMethod === "JazzCash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio text-blue-500"
            />
            <span className="ml-2 text-lg">Pay with JazzCash</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="EasyPaisa"
              checked={paymentMethod === "EasyPaisa"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio text-pink-500"
            />
            <span className="ml-2 text-lg">Pay with EasyPaisa</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Bank Account"
              checked={paymentMethod === "Bank Account"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="form-radio text-gray-500"
            />
            <span className="ml-2 text-lg">Pay via Bank Account</span>
          </label>
        </div>

        {/* Payment Button */}
        <Button
          onClick={handlePayment}
          disabled={loading || !paymentMethod}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded mt-4"
        >
          {loading ? "Processing..." : "Proceed to Pay"}
        </Button>
      </div>

      <Footer />
    </>
  );
}
