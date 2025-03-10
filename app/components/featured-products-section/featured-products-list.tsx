"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "@/app/(server)/server-actions/product-actions/get-products.action";
import ProductCard from "../shared/product-card";
import LoadingProductCard from "../shared/loading-product-card";
import { IResponseProduct } from "@/app/lib/types/product.types";
import useFeaturedProductCategoryStore from "@/app/store/featured-product-category.store";

const FeaturedProductsList = () => {
  const { category } = useFeaturedProductCategoryStore();

  const queryClient = useQueryClient();

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<IResponseProduct[], Error>({
    queryKey: ["products", category],
    queryFn: () => getProducts(category),
    staleTime: 1000 * 60 * 60,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-16">
        {[...Array(8)].map((_, index) => (
          <div className="" key={`skeleton-${index}`}>
            <LoadingProductCard />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex w-full items-center justify-center p-8">
        <div className="rounded-lg bg-red-50 p-4 text-red-500">
          <p>
            Error loading products: {error?.message || "Please try again later"}
          </p>
        </div>
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="flex w-full items-center justify-center p-8">
        <p className="text-gray-500">No products found in this category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-16">
      {products.map((product: IResponseProduct) => (
        <div className="max-w-max" key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsList;
