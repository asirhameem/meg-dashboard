import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.ts";

const PublicRouteWrapper = () => {
  const isLoggedIn = useAuth();

  return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
export default PublicRouteWrapper;
