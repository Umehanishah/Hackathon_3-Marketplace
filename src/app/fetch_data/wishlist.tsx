import { createClient } from "next-sanity";

const client = createClient({
  projectId: "your_project_id",
  dataset: "production",
  apiVersion: "2024-01-29",
  useCdn: false,
});

export async function getWishlist(userId: string) {
  const query = `*[_type == "wishlist" && userId == $userId][0]{
    _id,
    items[]->{
      _id,
      title,
      price,
      image
    }
  }`;
  const wishlist = await client.fetch(query, { userId });
  return wishlist || { _id: null, items: [] };
}
