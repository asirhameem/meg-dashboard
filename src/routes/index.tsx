import { RouterProvider } from "react-router-dom";
import useLocalAuthCheck from "../hooks/useLocalAuthCheck";
import { router } from "./routes";

const Routes = () => {
  const authChecked = useLocalAuthCheck();
  if (!authChecked) {
    return "Loading...";
  } else {
    return <RouterProvider router={router} />;
  }
};

export default Routes;
