import FeaturedProductsSection from "./components/featured-products-section";
import HomeBannerSlider from "./components/home-banner/home-banner-slider";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchCategoryParams = await searchParams;

  return (
    <div className="boxed bg-light-50 relative h-[568px] w-full">
      <HomeBannerSlider />
      <FeaturedProductsSection searchParams={searchCategoryParams} />
    </div>
  );
}
