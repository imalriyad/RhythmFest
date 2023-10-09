import { Outlet, useLocation, useNavigation } from "react-router-dom";
import NavbarMenuBar from "../Header/Navbar";
import Footer from "../Header/Footer";

const Layout = () => {
  const navigation = useNavigation();
  const { pathname } = useLocation();
  pathname === "/" ? (document.title = "RhythmFest | Home") : pathname;
  pathname === "/Login" ? (document.title = "RhythmFest | Login") : pathname;
  pathname === "/Events" ? (document.title = "RhythmFest | Events") : pathname;
  pathname === "/About" ? (document.title = "RhythmFest | About") : pathname;
  pathname === "/Booked%20Ticket"
    ? (document.title = "RhythmFest | Booked Ticket")
    : pathname;
  pathname === "/Gallery"
    ? (document.title = "RhythmFest | Gallery")
    : pathname;
  pathname === "/Contact"
    ? (document.title = "RhythmFest | Contact")
    : pathname;

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
