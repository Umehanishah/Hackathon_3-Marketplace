"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

// Define context type
interface WishlistContextType {
  wishlist: string[];
  setWishlist: (wishlist: string[]) => void;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
}

// Create context
const WishlistContext = createContext<any>(null);

// Provider Component
export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Fetch wishlist items when user logs in
  useEffect(() => {
    if (user) {
      fetch(`/api/wishlist/get?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => setWishlist(data.items.map((item: any) => item._id || item._ref) || []));
    }
  }, [user]);

  // Function to add/remove items
  const toggleWishlist = async (productId: string) => {
    const inWishlist = wishlist.includes(productId);
    const url = inWishlist ? "/api/wishlist/remove" : "/api/wishlist/add";

    await fetch(url, {
      method: inWishlist ? "DELETE" : "POST",
      body: JSON.stringify({ userId: user?.id, productId }),
      headers: { "Content-Type": "application/json" },
    });

    // Update state
    setWishlist((prev) =>
      inWishlist ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

// Custom Hook
export function useWishlist() {
  return useContext(WishlistContext);
}
