import { IResponseProduct } from "@/app/lib/types/product.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartProductButton from "./add-to-cart-product-button";

const ProductCard = ({ product }: { product: IResponseProduct }) => {
  const isNewProduct = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const productDate = new Date(product.createdAt);
    return productDate > oneWeekAgo;
  };

  return (
    <div className="group flex w-full flex-col items-center gap-4">
      <Link href={`/products/${product._id}`} className="relative w-full">
        {isNewProduct() && (
          <h6 className="text-dark-400 absolute top-4 left-4 z-10 text-sm uppercase">
            NEW
          </h6>
        )}
        <Image
          src={product.images[0]}
          alt={product.title}
          width={280}
          height={350}
          className="min-h-[350px] w-full"
        />
      </Link>
      <div className="flex flex-col items-center gap-2">
        <Link href={`/products/${product.slug}`}>
          <h3 className="selection:bg-dark-400 text-sm font-medium uppercase selection:text-white">
            {product.title}
          </h3>
        </Link>
        <AddToCartProductButton id={product._id} price={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
