"use server";

import { CreateCategoryParams } from "@/app/lib/types/category.types";
import { connectToDatabase } from "../../mongo";
import { Category } from "../../mongo/models/category.model";

export async function createCategory(params: CreateCategoryParams) {
  try {
    await connectToDatabase();

    const slug = params.name.toLowerCase().replace(/\s+/g, "-");

    const category = await Category.create({
      ...params,
      slug,
    });

    return JSON.parse(JSON.stringify(category));
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
}
