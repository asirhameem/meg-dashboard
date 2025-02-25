import { RouterProvider } from "react-router-dom";
import { router } from "../config/routes";

export const Routes = () => {
  return <RouterProvider router={router} />;
};
