import { Outlet, useNavigation } from "react-router-dom";
import NavbarMenuBar from "../Header/Navbar";
import Footer from "../Header/Footer";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <NavbarMenuBar></NavbarMenuBar>
        {navigation.state === "loading" ? (
        <div className="max-w-screen-lg text-center mx-auto">
          <span className="text-center mx-auto mt-[500px] text-black loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
