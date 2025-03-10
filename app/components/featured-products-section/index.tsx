import FeaturedProducts from "./featured-products";
import FeaturedProductsCategories from "./featured-products-categories";

const FeaturedProductsSection = async () => {
  return (
    <section className="boxed flex flex-col gap-12 px-8 py-28">
      <FeaturedProductsCategories />
      <FeaturedProducts />
    </section>
  );
};

export default FeaturedProductsSection;
