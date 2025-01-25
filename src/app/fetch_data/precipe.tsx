import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export interface Precipe {
  title: string;
  description: string;
  ingredients: string[];
  equipment: string[];
  steps: {
    stepNumber: number;
    instruction: string;
  }[];
  tips?: string[];
  servingSuggestions?: string;
}

export default async function Data() {
  // Fetch all the fields from the Sanity schema
  const Precipe: Precipe[] = await client.fetch(
    `*[_type == "puddingRecipe"]{
      title,
      description,
      ingredients,
      equipment,
      steps,
      tips,
      servingSuggestions
    }`
  );

  // If no recipes are found
  if (!Precipe || Precipe.length === 0) {
    return <p className="text-center pt-20">No Recipes Found</p>;
  }

  return (
    <div className="container mx-auto lg:w-[1000px] pt-20">
        <hr/>
      <h1 className="text-2xl font-bold pt-10">Whisk, Chill, Delight: Perfect Pudding Recipes 🥄</h1>
      <div>
        {Precipe.map((recipe, index) => (
          <div key={index} className="pt-10">
            {/* Title */}
            <h2 className="text-xl underline font-semibold text-black">{recipe.title}</h2>

            {/* Description */}
            <p className="mt-2 text-gray-700 pt-5">{recipe.description}</p>

            {/* Ingredients */}
            <div className="mt-4">
              <h3 className="font-semibold text-black pt-5">Ingredients:</h3>
              <ul className="list-disc pl-5 text-gray-700 pt-5">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Equipment */}
            <div className="mt-4">
              <h3 className="font-semibold text-black pt-5">Equipment:</h3>
              <ul className="list-disc pl-5 text-gray-700 pt-5">
                {recipe.equipment.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Steps */}
            <div className="mt-4">
              <h3 className="font-semibold text-black pt-5">Steps:</h3>
                {recipe.steps.map((step) => (
                    <ul>
                  <li key={step.stepNumber} className="mb-2 pt-5">
                    <span className="font-semibold text-black pt-5">
                    Step {step.stepNumber}</span>
                    <br/> <span className="text-gray-600">{step.instruction}</span>
                  </li></ul>
                ))}
            </div>

            {/* Tips */}
            {recipe.tips && recipe.tips.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-black pt-5">Pro Tips:</h3>
                <ul className="list-disc pl-5 text-gray-700 pt-5">
                  {recipe.tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Serving Suggestions */}
            {recipe.servingSuggestions && (
              <div className="mt-4">
                <h3 className="font-semibold text-black pt-5">Serving Suggestions:</h3>
                <p className="text-gray-700 pt-5">{recipe.servingSuggestions}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
