import { Suspense } from "react";
import FeaturedProductsList from "./featured-products-list";
import LoadingProductCard from "../shared/loading-product-card";

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

const FeaturedProducts = ({ category }: { category: string | undefined }) => {
  return (
    <Suspense fallback={<LoadingFeaturedProducts />}>
      <FeaturedProductsList category={category} />
    </Suspense>
  );
};

export default FeaturedProducts;
