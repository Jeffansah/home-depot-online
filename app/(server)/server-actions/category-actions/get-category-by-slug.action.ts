"use server";

import { connectToDatabase } from "../../mongo";
import { Category } from "../../mongo/models/category.model";

export async function getCategoryBySlug(slug: string) {
  try {
    await connectToDatabase();

    const category = await Category.findOne({ slug }).populate(
      "parentCategory",
    );

    return category ? JSON.parse(JSON.stringify(category)) : null;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
}
