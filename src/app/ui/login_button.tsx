import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="container mx-auto items-center">
       
        
          <SignedIn>
            {/* Show UserButton when signed in */}
            <UserButton showName />
          </SignedIn>
          <SignedOut>
            {/* Show Login button when signed out */}
            <Link href="/login">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-800">
                Login
              </button>
            </Link>
          </SignedOut>
        </div>
      
 </div>
  );
}