import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PublicRouteWrapper from "./PublicRouteWrapper";
import PrivateRouteWrapper from "./PrivateRouteWrapper";
import Login from "../pages/Login";
import Layout from "../components/templates/layout/Layout";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import ProductAdd from "../pages/products/ProductAdd";
import Categories from "../pages/specifications/Categories";
import CategoryAdd from "../pages/specifications/CategoryAdd";
import Specification from "../pages/Specification";
import SpecificationAdd from "../pages/specifications/SpecificationAdd";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<PublicRouteWrapper />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<PrivateRouteWrapper />}>
        <Route element={<Layout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="products">
            <Route path="" element={<Products />} />
            <Route path="add" element={<ProductAdd />} />
          </Route>
          <Route path="specifications">
            <Route path="" element={<Specification />} />
            <Route path="add" element={<SpecificationAdd />} />
            <Route path="categories">
              <Route path="" element={<Categories />} />
              <Route path="add" element={<CategoryAdd />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);
