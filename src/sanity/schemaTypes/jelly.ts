import { defineField, defineType } from "sanity"

export default defineType({


    name: 'jelly',
    title: 'jelly',
    type: 'document',
    fields: [
      defineField({
      
        name: 'name',
        title: 'name',
        type: 'string',
     }),
      defineField({
        name: 'description',
        title: 'description',
        type: 'text',   
      }),
      defineField({
        name: 'slug',
        title: 'slug',
        type: 'slug',
        options: {
          source: "name",
          maxLength: 200 
        }
      }),
      defineField({
        name: 'price',
        title: 'price',
        type: 'number', 
      }),
      defineField({
        title: "Price without Discount",
        name: "priceWithoutDiscount",
        type: "number",
      }),
      defineField({
        name: 'image',
        title: 'image',
        type: 'image',
        options: {
          hotspot: true,
        }
        }),
     
    ]
  })

