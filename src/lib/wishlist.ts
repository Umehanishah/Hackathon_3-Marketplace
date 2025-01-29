// lib/wishlist.ts
import { client } from './sanity';

export const saveWishlistToSanity = async (clientId: string, wishlistItems: string[]) => {
  try {
    // Check if the user already has a wishlist
    const existingWishlist = await client.fetch(
      `*[_type == "wishlist" && clientId == $clientId][0]`,
      { clientId }
    );

    const wishlistDoc = {
      _type: 'wishlist',
      clientId,  // Associate the wishlist with the clientId from Clerk
      items: wishlistItems,  // Array of product IDs
    };

    if (existingWishlist) {
      // If wishlist exists, update it
      await client
        .patch(existingWishlist._id)  // Update the existing wishlist document
        .set({ items: wishlistItems }) // Update the items in the wishlist
        .commit();
      console.log('Wishlist updated in Sanity');
    } else {
      // If no wishlist exists, create a new one
      await client.create(wishlistDoc);
      console.log('Wishlist created in Sanity');
    }
  } catch (error) {
    console.error('Error saving wishlist:', error);
  }
};
