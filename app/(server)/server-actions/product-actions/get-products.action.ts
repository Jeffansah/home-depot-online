"use server";

import { connectToDatabase } from "../../mongo";
import { Product } from "../../mongo/models/products.model";
import { Category } from "../../mongo/models/category.model";

export async function getProducts(categorySlug: string = "all") {
  try {
    await connectToDatabase();

    // If category is "all", return all products
    if (categorySlug === "all") {
      const products = await Product.find()
        .populate("categories")
        .sort({ createdAt: -1 })
        .limit(8); // Adjust limit as needed

      return JSON.parse(JSON.stringify(products));
    }

    // Find category by slug
    const category = await Category.findOne({ slug: categorySlug });
    if (!category) {
      return [];
    }

    // Get products that have this category in their categories array
    const products = await Product.find({
      categories: { $in: [category._id] },
    })
      .populate("categories")
      .sort({ createdAt: -1 })
      .limit(8);

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
