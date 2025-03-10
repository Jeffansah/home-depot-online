"use server";

import { connectToDatabase } from "../../mongo";
import { Category } from "../../mongo/models/category.model";
import { Product } from "../../mongo/models/products.model";

const sampleProducts = [
  {
    title: "Basket with handles",
    description:
      "This beautifully crafted basket with handles is designed for both functionality and style. Made from high-quality materials, it offers durability and a chic aesthetic that complements any home decor. Perfect for organizing toys, blankets, or magazines, this versatile basket can be used in any room of your house.",
    price: 45,
    images: ["/assets/images/products/basket-with-handles.jpg"],
    categories: ["home-decor", "basics"],
    stock: 100,
    slug: "basket-with-handles",
    tags: ["basket", "storage", "decor"],
  },
  {
    title: "Modern Table Lamp",
    description:
      "Elegant table lamp with a contemporary design. Features adjustable brightness levels and a sleek metal finish. Perfect for bedside tables or office desks.",
    price: 89,
    images: ["/assets/images/products/table-lamp.jpg"],
    categories: ["lighting", "home-decor"],
    stock: 50,
    slug: "modern-table-lamp",
    tags: ["lamp", "lighting", "modern"],
  },
  {
    title: "Ceramic Vase Set",
    description:
      "Set of three minimalist ceramic vases in varying sizes. Each piece is handcrafted with attention to detail, featuring a matte finish in neutral tones.",
    price: 65,
    images: [
      "/assets/images/products/flower-vase-1.jpg",
      "/assets/images/products/flower-vase-2.jpg",
    ],
    categories: ["vases", "decoration"],
    stock: 30,
    slug: "ceramic-vase-set",
    tags: ["vase", "ceramic", "decor"],
  },
  {
    title: "Decorative Wall Clock",
    description:
      "Round decorative wall clock with a modern design. Adds both functionality and style to any room while serving as a stunning wall accent.",
    price: 120,
    images: ["/assets/images/products/wall-clock.jpg"],
    categories: ["decoration", "home-decor"],
    stock: 25,
    slug: "decorative-wall-clock",
    tags: ["clock", "wall-decor", "modern"],
  },
  {
    title: "Night Stand",
    description:
      "Modern nightstand with clean lines and ample storage. Perfect for bedside essentials with its sleek design and practical functionality.",
    price: 199,
    images: ["/assets/images/products/night-stand.jpg"],
    categories: ["basics", "home-decor"],
    stock: 15,
    slug: "night-stand",
    tags: ["furniture", "bedroom", "storage"],
  },
  {
    title: "Wooden chair",
    description:
      "Elegant decorative accessory that adds a touch of sophistication to any space. Perfect as a centerpiece or shelf decoration.",
    price: 35,
    images: ["/assets/images/products/decor-accessory-1.jpg"],
    categories: ["decoration", "home-decor"],
    stock: 40,
    slug: "wooden-chair",
    tags: ["decor", "accessory", "modern"],
  },
  {
    title: "Rose Holdback",
    description:
      "Beautiful rose-designed curtain holdback that adds an elegant touch to your window treatments. Perfect for classic and modern interiors alike.",
    price: 28,
    images: ["/assets/images/products/roes-holdback.jpg"],
    categories: ["basics", "decoration"],
    stock: 60,
    slug: "rose-holdback",
    tags: ["curtain", "accessory", "decor"],
  },
];

export async function seedProducts() {
  try {
    await connectToDatabase();

    const categories = await Category.find({});
    const categoryMap = new Map(
      categories.map((category) => [category.slug, category._id]),
    );

    const productsToSeed = sampleProducts.map((product) => ({
      ...product,
      categories: product.categories.map((slug) => categoryMap.get(slug)),
    }));

    const operations = productsToSeed.map((product) => ({
      updateOne: {
        filter: { slug: product.slug },
        update: { $set: product },
        upsert: true,
      },
    }));

    const result = await Product.bulkWrite(operations);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}
