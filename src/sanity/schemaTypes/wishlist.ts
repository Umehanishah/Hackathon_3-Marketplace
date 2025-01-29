// schemas/wishlist.js
export default {
  name: "wishlist",
  title: "Wishlist",
  type: "document",
  fields: [
    {
      name: "userId",
      title: "User ID",
      type: "string",
      description: "The unique ID of the user",
    
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          name: "product",
          fields: [
            {
              name: "productId",
              title: "Product ID",
              type: "string",
             
            },
            {
              name: "name",
              title: "Product Name",
              type: "string",
             
            },
            {
              name: "price",
              title: "Product Price",
              type: "number",
              
            },
            {
              name: "imageUrl",
              title: "Product Image",
              type: "image",
              options: {
                hotspot: true,
              },
           
            },
          ],
        },
      ],
    
    },
  ],
};
