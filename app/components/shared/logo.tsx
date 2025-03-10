import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="selection:bg-dark-400 text-2xl font-bold tracking-[0.6rem] selection:text-white"
    >
      DEPOT
    </Link>
  );
};

export default Logo;
