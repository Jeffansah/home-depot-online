const LoadingProductCard = () => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="relative w-full">
        <div className="bg-light-50 min-h-[350px] w-full animate-pulse" />
      </div>

      <div className="flex w-full flex-col items-center gap-2">
        <div className="bg-light-50 h-4 w-32 animate-pulse" />

        <div className="bg-light-50 h-4 w-16 animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingProductCard;
