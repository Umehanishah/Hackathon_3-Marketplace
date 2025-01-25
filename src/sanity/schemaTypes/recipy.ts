export default {
    name: "Precipe",
    title: "P Recipe",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Recipe Title",
        type: "string",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
           },
      {
        name: "ingredients",
        title: "Ingredients",
        type: "array",
        of: [{ type: "string" }],
       },
      {
        name: "equipment",
        title: "Equipment",
        type: "array",
        of: [{ type: "string" }],
       },
      {
        name: "steps",
        title: "Cooking Steps",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "stepNumber",
                title: "Step Number",
                type: "text",
             },
              {
                name: "instruction",
                title: "Instruction",
                type: "text",
                description: "Detailed instruction for this step",
              },
            ],
            
          },
        ],
        description: "Step-by-step instructions to prepare the pudding",
      },
      {
        name: "tips",
        title: "Pro Tips",
        type: "array",
        of: [{ type: "string" }],
        description: "Optional tips or tricks for the recipe",
      },
      {
        name: "servingSuggestions",
        title: "Serving Suggestions",
        type: "text",
        description: "Suggestions for serving the pudding",
      },
    ],
  };
  