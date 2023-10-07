import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../layout/Layout";
import Events from "../Pages/Events";

const router = createBrowserRouter([
  {
    path: "/",
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
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
