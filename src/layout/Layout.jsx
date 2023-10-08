import { Outlet } from "react-router-dom";
import NavbarMenuBar from "../Header/Navbar";
import Footer from "../Header/Footer";

const Layout = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <NavbarMenuBar></NavbarMenuBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
