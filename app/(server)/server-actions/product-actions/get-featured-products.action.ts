"use server";

import Product from "@/app/(server)/mongo/models/products.model";

export async function getFeaturedProducts() {
  const products = await Product.find({ featured: true });
}
