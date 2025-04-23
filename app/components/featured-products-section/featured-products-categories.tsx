import featuredProductsTabList from "@/app/lib/data/featured-products-tablist";
import Link from "next/link";

const FeaturedProductsCategories = ({
  category,
}: {
  category: string | undefined;
}) => {
  return (
    <div className="flex gap-8">
      {featuredProductsTabList.map((tab) => (
        <Link
          key={tab.id}
          scroll={false}
          prefetch={true}
          href={`/?category=${tab.slug}`}
          className={`${
            !category && tab.slug === "all"
              ? "text-dark-400 font-medium"
              : category === tab.slug
                ? "text-dark-400 font-medium"
                : "text-dark-50"
          } hover:text-dark-400 cursor-pointer text-xs tracking-[0.15em] uppercase transition-colors duration-100 ease-in-out`}
        >
          {" "}
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProductsCategories;
