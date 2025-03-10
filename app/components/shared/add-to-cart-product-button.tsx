"use client";

const AddToCartProductButton = ({
  id,
  price,
}: {
  id: string;
  price: number;
}) => {
  const addToCart = (id: string) => {
    console.log("add to cart");
  };

  return (
    <div
      onClick={() => addToCart(id)}
      className="relative h-6 w-full max-w-[200px] overflow-hidden rounded-lg bg-white transition-all"
    >
      <p className="selection:bg-dark-400 absolute inset-0 flex cursor-pointer items-center justify-center font-[100] transition-transform duration-300 ease-in-out group-hover:translate-x-full selection:text-white">
        £{price}
      </p>

      <h3 className="selection:bg-dark-400 absolute inset-0 flex -translate-x-full cursor-pointer items-center justify-center text-xs uppercase transition-transform duration-300 ease-in-out group-hover:translate-x-0 selection:text-white">
        Add to Cart
      </h3>
    </div>
  );
};

export default AddToCartProductButton;
