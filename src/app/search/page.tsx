'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { client } from '@/sanity/lib/client'; // Assuming you have this client for Sanity
import Navigation from '../ui/navigation';
import Footer from '../ui/footer';
import AddToBag from '../components/AddToBag';
import Image from 'next/image';



const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || ''; // Retrieve the search query from the URL
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch products from Sanity based on the search query
  useEffect(() => {
    if (query && query.trim()) {
      const fetchSearchResults = async () => {
        try {
          // Sanity queries for both "pudding" and "jelly"
          const puddingQuery = `*[_type == "pudding" && name match "${query.toLowerCase()}*"]{
            name, 
            description, 
            "slug": slug.current,
            price, 
            "imageUrl": image.asset->url
          }`;

          const jellyQuery = `*[_type == "jelly" && name match "${query.toLowerCase()}*"]{
            name, 
            description, 
            "slug": slug.current,
            price, 
            priceWithoutDiscount, 
            "imageUrl": image.asset->url
          }`;

          console.log("Pudding Query:", puddingQuery); // Debug the query
          console.log("Jelly Query:", jellyQuery); // Debug the query

          // Fetch both results from Sanity
          const [puddingProducts, jellyProducts] = await Promise.all([
            client.fetch(puddingQuery),
            client.fetch(jellyQuery),
          ]);

          // Combine the results from both queries
          const allProducts = [...puddingProducts, ...jellyProducts];
          console.log("Fetched Products:", allProducts); // Debug fetched products

          setFilteredProducts(allProducts);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    } else {
      setLoading(false);
      setFilteredProducts([]); // Reset when no query is available
    }
  }, [query]); // Re-fetch data whenever query changes

  return (
    <>
      <Navigation />

      <div className="container w-[300px] md:w-[700px] lg:w-[1000px] place-self-center py-10">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
          Search Results for "{query}"
        </h1>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.slug} className="container w-[300px] border">
                  {/* Image comes first */}
                  {product.imageUrl && (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="container w-[300px] h-[300px] bg-cover"
                    />
                  )}

                   <div className='flex justify-between px-3 py-3'>
                    <div> 
                  {/* Name of the product */}
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>

                  {/* Price of the product */}
                  <p className="font-bold mb-4">${product.price}</p>
                    </div>
                    <div>
                  {/* Cart Icon */}
                  <AddToBag
                    currency="PKR"
                    description={product.description} // Corrected here
                    image={product.imageUrl} // Corrected here
                    name={product.name} // Corrected here
                    price={product.price} // Corrected here
                    price_id={product.slug} // Optional: You can use slug for price_id
                  />
                  </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products found for "{query}".</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
