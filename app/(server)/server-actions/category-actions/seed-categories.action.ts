"use server";

import { connectToDatabase } from "../../mongo";
import { Category } from "../../mongo/models/category.model";
import featuredProductsTabList from "@/app/lib/data/featured-products-tablist";

export async function seedCategories() {
  try {
    await connectToDatabase();

    const categories = featuredProductsTabList
      .filter((tab) => tab.slug !== "all")
      .map((tab) => ({
        name: tab.name,
        slug: tab.slug,
      }));

    const updateCategories = categories.map((category) => ({
      updateOne: {
        filter: { slug: category.slug },
        update: { $set: category },
        upsert: true,
      },
    }));

    const updatedCategories = await Category.bulkWrite(updateCategories);
    return JSON.parse(JSON.stringify(updatedCategories));
  } catch (error) {
    console.error("Error seeding categories:", error);
    throw error;
  }
}
