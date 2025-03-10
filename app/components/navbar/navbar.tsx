import Logo from "../shared/logo";
import Advertisment from "./advertisment";
import Cart from "./cart";
import NavbarSearch from "./navbar-search";
import Navlinks from "./navlinks";
import Auth from "./auth";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[100] w-full bg-white">
      <div className="boxed relative flex items-center justify-between p-8">
        <Navlinks />
        <Logo />
        <div className="flex items-center gap-6">
          <Cart />
          <Auth />
          <NavbarSearch />
          <Advertisment />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
