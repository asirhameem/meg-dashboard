import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRouter = () => {
  const isLoggedIn = useAuth();

  if (isLoggedIn === undefined) {
    return "Loading...";
  } else {
    return isLoggedIn ? <Outlet /> : <Navigate to="/auth/sign-in" />;
  }
};
export default PrivateRouter;
