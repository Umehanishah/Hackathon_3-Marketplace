"use client"


import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      // Example: Redirect to a search results page
      window.location.href = `/search?query=${encodeURIComponent(query)}`;
      
      // Alternatively, trigger an API call or search logic here
      console.log("Searching for:", query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-3 items-center">
      {/* Input Field */}
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Icon */}
      <button
        onClick={handleSearch}
        className="p-2 bg-pink-500 rounded-md text-white hover:bg-pink-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
