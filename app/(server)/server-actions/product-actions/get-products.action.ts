"use server";

import { connectToDatabase } from "../../mongo";
import { Product } from "../../mongo/models/products.model";
import { Category } from "../../mongo/models/category.model";
import prisma from "@/lib/prisma";
export async function getProducts(categorySlug: string = "all") {
  try {
    if (!categorySlug) {
      return [];
    }

    // If category is "all", return all products
    if (categorySlug === "all") {
      const products = await prisma.product.findMany({
        orderBy: { createdAt: "desc" },
        take: 8,
      });

      return products;
    }

    // Find category by slug
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug },
    });
    if (!category) {
      return [];
    }

    // Get products that have this category in their categories array
    const products = await prisma.product.findMany({
      where: {
        categories: {
          some: {
            id: category.id,
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 8,
    });

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
