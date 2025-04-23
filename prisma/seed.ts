import prisma from "@/lib/prisma";
import { Prisma } from "./generate/prisma";

// Define categories first (from your tablist)
const categoryData: Prisma.CategoryCreateInput[] = [
  { name: "All", slug: "all" },
  { name: "Home Decor", slug: "home-decor" },
  { name: "Lighting", slug: "lighting" },
  { name: "Decoration", slug: "decoration" },
  { name: "Vases", slug: "vases" },
  { name: "Basics", slug: "basics" },
];

// Define products with their category connections
const productData: Prisma.ProductCreateInput[] = [
  {
    title: "Basket with handles",
    description:
      "This beautifully crafted basket with handles is designed for both functionality and style...",
    price: 45,
    images: ["/assets/images/products/basket-with-handles.jpg"],
    stock: 100,
    slug: "basket-with-handles",
    tags: ["basket", "storage", "decor"],
    categories: {
      connect: [{ slug: "home-decor" }, { slug: "basics" }],
    },
  },
  {
    title: "Modern Table Lamp",
    description: "Elegant table lamp with a contemporary design...",
    price: 89,
    images: ["/assets/images/products/table-lamp.jpg"],
    stock: 50,
    slug: "modern-table-lamp",
    tags: ["lamp", "lighting", "modern"],
    categories: {
      connect: [{ slug: "lighting" }, { slug: "home-decor" }],
    },
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
    stock: 30,
    slug: "ceramic-vase-set",
    tags: ["vase", "ceramic", "decor"],
    categories: {
      connect: [{ slug: "vases" }, { slug: "decoration" }],
    },
  },
  {
    title: "Decorative Wall Clock",
    description:
      "Round decorative wall clock with a modern design. Adds both functionality and style to any room while serving as a stunning wall accent.",
    price: 120,
    images: ["/assets/images/products/wall-clock.jpg"],
    stock: 25,
    slug: "decorative-wall-clock",
    tags: ["clock", "wall-decor", "modern"],
    categories: {
      connect: [{ slug: "decoration" }, { slug: "home-decor" }],
    },
  },
  {
    title: "Night Stand",
    description:
      "Modern nightstand with clean lines and ample storage. Perfect for bedside essentials with its sleek design and practical functionality.",
    price: 199,
    images: ["/assets/images/products/night-stand.jpg"],
    stock: 15,
    slug: "night-stand",
    tags: ["furniture", "bedroom", "storage"],
    categories: {
      connect: [{ slug: "home-decor" }, { slug: "basics" }],
    },
  },
  {
    title: "Wooden chair",
    description:
      "Elegant decorative accessory that adds a touch of sophistication to any space. Perfect as a centerpiece or shelf decoration.",
    price: 35,
    images: ["/assets/images/products/decor-accessory-1.jpg"],
    stock: 40,
    slug: "wooden-chair",
    tags: ["decor", "accessory", "modern"],
    categories: {
      connect: [{ slug: "decoration" }, { slug: "home-decor" }],
    },
  },
  {
    title: "Rose Holdback",
    description:
      "Beautiful rose-designed curtain holdback that adds an elegant touch to your window treatments. Perfect for classic and modern interiors alike.",
    price: 28,
    images: ["/assets/images/products/roes-holdback.jpg"],
    stock: 60,
    slug: "rose-holdback",
    tags: ["curtain", "accessory", "decor"],
    categories: {
      connect: [{ slug: "decoration" }, { slug: "basics" }],
    },
  },
];

export async function main() {
  // First create all categories
  for (const c of categoryData) {
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
  }

  // Then create all products
  for (const p of productData) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
