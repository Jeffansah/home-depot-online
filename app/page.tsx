import FeaturedProductsSection from "./components/featured-products-section";
import Footer from "./components/footer/footer";
import HomeBannerSlider from "./components/home-banner/home-banner-slider";

export default async function Home() {
  return (
    <div className="boxed relative mt-[96px] w-full">
      <HomeBannerSlider />
      <FeaturedProductsSection />
    </div>
  );
}
