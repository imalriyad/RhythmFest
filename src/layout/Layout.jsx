import { Outlet } from "react-router-dom";
import NavbarMenuBar from "../Header/Navbar";

const Layout = () => {
  return (
    <div className="mx-auto  max-w-screen-2xl">
      <NavbarMenuBar></NavbarMenuBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
