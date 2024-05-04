import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PublicRouteWrapper from "./PublicRouteWrapper";
import PrivateRouteWrapper from "./PrivateRouteWrapper";
import Login from "../pages/Login";
import { Layout } from "../components/templates/layout";
import { ProductLayout } from "../components/templates/layout";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import ProductAdd from "../pages/products/ProductAdd";
import ProductDetails from "../pages/products/ProductDetails";
import ProductInterior from "../pages/products/ProductInterior";
import ProductSpecification from "../pages/products/ProductSpecification";
import SpecificationCategories from "../pages/specifications/Categories";
import SpecificationCategoryAdd from "../pages/specifications/CategoryAdd";
import Specification from "../pages/Specification";
import SpecificationAdd from "../pages/specifications/SpecificationAdd";
import Paints from "../pages/Paints";
import Categories from "../pages/Categories";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<PublicRouteWrapper />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<PrivateRouteWrapper />}>
        <Route element={<Layout />}>
          <Route path="" element={<Dashboard />} />

          <Route path="categories">
            <Route path="" element={<Categories />} />
          </Route>

          <Route path="products">
            <Route path="" element={<Products />} />
            <Route path="add" element={<ProductAdd />} />
            <Route path=":slug" element={<ProductLayout />}>
              <Route path="details" element={<ProductDetails />} />
              <Route path="interior" element={<ProductInterior />} />
              <Route path="specification" element={<ProductSpecification />} />
            </Route>
          </Route>

          <Route path="specifications">
            <Route path="" element={<Specification />} />
            <Route path="add" element={<SpecificationAdd />} />
            <Route path="categories">
              <Route path="" element={<SpecificationCategories />} />
              <Route path="add" element={<SpecificationCategoryAdd />} />
            </Route>
          </Route>

          <Route path="paints">
            <Route path="" element={<Paints />} />
            {/*<Route path="add" element={<PaintsAdd/>}/>*/}
          </Route>


        </Route>
      </Route>
    </Route>,
  ),
);
