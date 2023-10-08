/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const {pathname} = useLocation()
  if (isLoading) {
    return <div className="mx-auto text-center my-[20%]"><span className="loading loading-bars loading-lg"></span></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={pathname} to={"/Login"}></Navigate>;
};

export default PrivateRoute;
