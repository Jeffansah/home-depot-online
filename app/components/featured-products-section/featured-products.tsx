import { addProduct } from "@/app/(server)/server-actions/product-actions/add-product.action";
import React from "react";

const FeaturedProducts = async () => {
  const addedProduct = await addProduct({
    title: "Basket with handles",
    description:
      "This beautifully crafted basket with handles is designed for both functionality and style. Made from high-quality materials, it offers durability and a chic aesthetic that complements any home decor. Perfect for organizing toys, blankets, or magazines, this versatile basket can be used in any room of your house. Its sturdy handles make it easy to carry, while its elegant design adds a touch of sophistication to your living space.",
    price: 45,
    images: ["../../../public/assets/images/products/basket-with-handles.jpg"],
    categories: ["home decor"],
    stock: 100,
    slug: "basket-with-handles",
    tags: ["basket", "storage", "decor"],
  });

  return <div>FeaturedProducts</div>;
};

export default FeaturedProducts;
