"use server";

import { connectToDatabase } from "../../mongo";
import { Category } from "../../mongo/models/category.model";

export async function getCategories(includeInactive = false) {
  try {
    await connectToDatabase();

    const query = includeInactive ? {} : { isActive: true };
    const categories = await Category.find(query)
      .populate("parentCategory")
      .sort({ name: 1 });

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
