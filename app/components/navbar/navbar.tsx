import Logo from "../shared/logo";
import Advertisment from "./advertisment";
import Cart from "./cart";
import NavbarSearch from "./navbar-search";
import Navlinks from "./navlinks";
import Auth from "./auth";

const Navbar = () => {
  return (
    <div className="boxed flex items-center justify-between p-8">
      <Navlinks />
      <Logo />
      <div className="flex items-center gap-6">
        <Cart />
        <Auth />
        <NavbarSearch />
        <Advertisment />
      </div>
    </div>
  );
};

export default Navbar;
