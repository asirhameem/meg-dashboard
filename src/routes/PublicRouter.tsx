import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRouter = () => {
  const isLoggedIn = useAuth();

  if (isLoggedIn === undefined) {
    return "Loading...";
  } else {
    return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" />;
  }
};
export default PublicRouter;
