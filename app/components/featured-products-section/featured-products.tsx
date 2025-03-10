"use client";

import React, { Suspense, use, useEffect, useState } from "react";
import FeaturedProductsList from "./featured-products-list";
import LoadingProductCard from "../shared/loading-product-card";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const LoadingFeaturedProducts = () => {
  return (
    <div className="grid grid-cols-4 gap-16">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="" key={index}>
          <LoadingProductCard />
        </div>
      ))}
    </div>
  );
};

const queryClient = new QueryClient();

const FeaturedProducts = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingFeaturedProducts />}>
        <FeaturedProductsList />
      </Suspense>
    </QueryClientProvider>
  );
};

export default FeaturedProducts;
