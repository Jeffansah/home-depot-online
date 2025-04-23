import FeaturedProductsSection from "./components/featured-products-section";

import HomeBannerSlider from "./components/home-banner/home-banner-slider";
type SearchParams = Promise<{ [key: string]: string | undefined }>;

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { category } = await searchParams;

  console.log(category);

  return (
    <div className="boxed relative mt-[96px] w-full">
      <HomeBannerSlider />
      <FeaturedProductsSection category={category} />
    </div>
  );
}
