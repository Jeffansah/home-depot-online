import featuredProductsTabList from "@/app/lib/data/featured-products-tablist";
import Link from "next/link";
import FeaturedProducts from "./featured-products";

type SearchParams = { [key: string]: string | string[] | undefined };

const FeaturedProductsSection = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const { category } = searchParams;

  return (
    <section className="boxed flex flex-col gap-12 px-4 py-28">
      <div className="flex gap-8">
        {featuredProductsTabList.map((tab) => (
          <Link href={`/?featured=true&category=${tab.slug}`} key={tab.id}>
            <h6
              className={`${
                !category && tab.slug === "all"
                  ? "text-dark-400 font-medium"
                  : category === tab.slug
                    ? "text-dark-400 font-medium"
                    : "text-dark-50"
              } hover:text-dark-400 text-xs uppercase transition-colors duration-100 ease-in-out`}
            >
              {" "}
              {tab.name}
            </h6>
          </Link>
        ))}
      </div>
      <FeaturedProducts />
    </section>
  );
};

export default FeaturedProductsSection;
