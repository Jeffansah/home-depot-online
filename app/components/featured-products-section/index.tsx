import FeaturedProducts from "./featured-products";
import FeaturedProductsCategories from "./featured-products-categories";

const FeaturedProductsSection = async ({
  category,
}: {
  category: string | undefined;
}) => {
  return (
    <section className="boxed flex flex-col gap-12 px-8 py-28">
      <FeaturedProductsCategories category={category} />
      <FeaturedProducts category={category} />
    </section>
  );
};

export default FeaturedProductsSection;
