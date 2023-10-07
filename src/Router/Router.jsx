import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../layout/Layout";
import Events from "../Pages/Events";
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Eventdetails from "../Events/Eventdetails";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Events",
        element: <Events></Events>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/eventdetails/:eventId",
        element: <Eventdetails></Eventdetails>,
        loader: () => fetch("https://api.npoint.io/5b9e286fdc8f467883c3"),
      },
    ],
  },
]);

export default router;
