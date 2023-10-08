import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import toast from "react-hot-toast";

const NavbarMenuBar = () => {
  const { user } = useContext(AuthContext);
  const logOutHandler = () => {
    signOut(auth)
      .then(() => toast.success("Logout sucessful"))
      .catch((err) => console.log(err));
  };
  const menuItems = ["Home","Events" ,"About", "Blogs", "Gallery", "Contact"];
  const menu = menuItems.map((item) => (
    <NavLink key={item} to={`${item === "Home" ? "/" : item}`}>
      <li>
        <a>{item}</a>
      </li>
    </NavLink>
  ));

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a className="w-6/6 md:w-6/12">
            <img src="https://i.ibb.co/yRWsg7r/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-x-8 text-base menu-horizontal ">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user?.photoURL ? (
            <h1 className="font-bold text-maincolor mr-3">
              {user?.displayName}
            </h1>
          ) : (
            <Link to={"/Login"}>
              {" "}
              <button className="btn md:btn-md btn-sm bg-maincolor hover:bg-maincolor text-white md:px-8 mr-3">
                Login
              </button>
            </Link>
          )}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border-2 border-maincolor rounded-full">
                {user?.photoURL ? (
                  <img src={`${user?.photoURL}`} alt="" />
                ) : (
                  <img src="https://i.ibb.co/3CNtLPY/blankdp.png" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <button onClick={logOutHandler} className="btn btn-outline mt-2">
                <a>Logout</a>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenuBar;
