import { getProducts } from "@/app/(server)/server-actions/product-actions/get-products.action";
import ProductCard from "../shared/product-card";

const FeaturedProductsList = async ({
  category,
}: {
  category: string | undefined;
}) => {
  const products = await getProducts(category);

  if (!products) {
    return (
      <div className="flex w-full items-center justify-center p-8">
        <div className="rounded-lg bg-red-50 p-4 text-red-500">
          <p>Error loading products: "Please try again later</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex w-full items-center justify-center p-8">
        <p className="text-gray-500">No products found in this category</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-16">
      {products.map((product) => (
        <div className="max-w-max" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProductsList;
