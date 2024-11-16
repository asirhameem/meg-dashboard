import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { DashboardLayout } from "../components";
import {
  DashboardPage,
  InteriorColorsPage,
  OrderDetailsPage,
  OrdersPage,
  PaintPage,
  PlatformInfoPage,
  ProductCreatePage,
  ProductUpdatePage,
  ProductDetailsPage,
  ProductLayout,
  ProductsCategoriesPage,
  ProductsInteriorPage,
  ProductsPage,
  ProductsSpecificationPage,
  QuotationPage,
  SignInPage,
  SpecificationsCategoriesPage,
  SpecificationsPage,
  WheelsPage,
} from "../pages";
import PublicRouter from "../routes/PublicRouter";
import PrivateRouter from "../routes/PrivateRouter";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="">
      <Route element={<PublicRouter />}>
        <Route path="auth">
          <Route path="sign-in" element={<SignInPage />} />
        </Route>
      </Route>
      <Route element={<PrivateRouter />}>
        <Route path="" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="orders">
            <Route path="" element={<OrdersPage />} />
            <Route path=":order-uuid" element={<OrderDetailsPage />} />
          </Route>
          <Route path="quotations">
            <Route path="" element={<QuotationPage />} />
          </Route>
          <Route path="products">
            <Route path="" element={<ProductsPage />} />
            <Route path="create" element={<ProductCreatePage />} />
            <Route path=":product-id/update" element={<ProductUpdatePage />} />
            <Route path="categories" element={<ProductsCategoriesPage />} />
            <Route path=":product-id" element={<ProductLayout />}>
              <Route path="details" element={<ProductDetailsPage />} />
              <Route path="interiors" element={<ProductsInteriorPage />} />
              <Route
                path="specifications"
                element={<ProductsSpecificationPage />}
              />
            </Route>
          </Route>
          <Route path="specifications">
            <Route path="" element={<SpecificationsPage />} />
            <Route
              path="categories"
              element={<SpecificationsCategoriesPage />}
            />
          </Route>
          <Route path="configurations">
            <Route path="paints" element={<PaintPage />} />
            <Route path="wheels" element={<WheelsPage />} />
            <Route path="interior-colors" element={<InteriorColorsPage />} />
            <Route path="platform-info" element={<PlatformInfoPage />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);
