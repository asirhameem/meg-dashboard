import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PublicRouteWrapper from "./PublicRouteWrapper";
import PrivateRouteWrapper from "./PrivateRouteWrapper";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<PublicRouteWrapper />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<PrivateRouteWrapper />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Route>,
  ),
);
