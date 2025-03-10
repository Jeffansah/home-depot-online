"use client";

import featuredProductsTabList from "@/app/lib/data/featured-products-tablist";
import useFeaturedProductCategoryStore from "@/app/store/featured-product-category.store";

const FeaturedProductsCategories = () => {
  const { category, setCategory } = useFeaturedProductCategoryStore();

  return (
    <div className="flex gap-8">
      {featuredProductsTabList.map((tab) => (
        <h6
          key={tab.id}
          onClick={() => setCategory(tab.slug)}
          className={`${
            !category && tab.slug === "all"
              ? "text-dark-400 font-medium"
              : category === tab.slug
                ? "text-dark-400 font-medium"
                : "text-dark-50"
          } hover:text-dark-400 cursor-pointer text-xs uppercase transition-colors duration-100 ease-in-out`}
        >
          {" "}
          {tab.name}
        </h6>
      ))}
    </div>
  );
};

export default FeaturedProductsCategories;
