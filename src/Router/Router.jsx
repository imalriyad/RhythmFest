import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../layout/Layout";
import Events from "../Pages/Events";
import About from "../Pages/About";
import Gallery from "../Pages/Gallery";
import Contact from "../Pages/Contact";
import Eventdetails from "../Events/Eventdetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login";
import Registraion from "../Pages/Registraion";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Bookedticket from "../Pages/Booked Ticket/Bookedticket";

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
        path: "/Booked Ticket",
        element: (
          <PrivateRoute>
            <Bookedticket></Bookedticket>
          </PrivateRoute>
        ),
        loader: () => fetch("https://api.npoint.io/83ee0de9c4933fec120b"),
      },
      {
        path: "/Gallery",
        element: (
          <PrivateRoute>
            {" "}
            <Gallery></Gallery>
          </PrivateRoute>
        ),
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/eventdetails/:eventId",
        element: (
          <PrivateRoute>
            <Eventdetails></Eventdetails>
          </PrivateRoute>
        ),
        loader: () => fetch("https://api.npoint.io/83ee0de9c4933fec120b"),
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registraion",
        element: <Registraion></Registraion>,
      },
    ],
  },
]);

export default router;
