import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../api/Auth";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  return getToken() ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
