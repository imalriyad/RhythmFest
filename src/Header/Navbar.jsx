import { NavLink } from "react-router-dom";

const NavbarMenuBar = () => {
  const menuItems = ["Home", "About", "Events", "Blogs", "Gallery", "Contact"];

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
          <a className="btn bg-maincolor hover:bg-maincolor text-white md:px-8 mr-3">Login</a>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 border border-black rounded-full">
                <img src="https://i.ibb.co/cQmcvfp/blankdp.png" />
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
              <button className="btn btn-outline mt-2">
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
