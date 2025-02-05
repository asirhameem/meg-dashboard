import { TApiEndPoint } from "../interfaces";

export const API_END_POINTS: TApiEndPoint = {
  AUTH_LOGIN: '/auth/login',
  PRODUCTS: '/products',
  PRODUCTS_CREATE: '/products',
  PRODUCTS_UPDATE: '/products',
  PRODUCTS_DETAILS: '/products/:product-id',
  PRODUCTS_INTERIOR_CREATE: '/products/interiors',
  PRODUCTS_SPECIFICATION_CREATE: '/products/specifications',
  INTERIOR_TYPE: '/interior-types',
  PRODUCT_SPECIFICATION_WITH_CATEGORY: 'specifications/with-categories',
  PRODUCTS_CATEGORIES: '/categories',
  PRODUCTS_INTERIORS: '/interiors/products/:product-id',
  PRODUCTS_SPECIFICATION: '/specifications/product/:product-id',
  SPECIFICATIONS: '/specifications',
  SPECIFICATIONS_CATEGORIES: '/specifications/categories',
  CONFIGURATION_PAINTS: '/paints',
  CONFIGURATION_WHEELS: '/wheels',
  CONFIGURATION_INTERIOR_COLOR: '/interior-colors',
  CONFIGURATION_PLATFORM_ALL: '/configurations',
  CONFIGURATION_PLATFORM_BY_SECTION: '/platform-configuration?section=:section',
  ORDERS_LIST: '/admin/orders',
  ORDERS_DETAILS: '/admin/orders/:order-uuid',
  CONFIGURATION_PLATFORM_INFO: 'configurations',
  QUOTATION_LIST: '/quotations',
  // paint
  PAINT_CREATE: '/paints',
  PAINT_DETAILS: '/paints/:paint-id',
  PAINT_UPDATE: '/paints/:paint-id',
  PAINT_DELETE: '/paints/:paint-id',
  // wheel
  WHEEL_CREATE: '/wheels',
  WHEEL_DETAILS: '/wheels/:wheel-id',
  WHEEL_UPDATE: '/wheels/:wheel-id',
  WHEEL_DELETE: '/wheels/:wheel-id',
  // interior color
  INTERIOR_COLOR_CREATE: '/interior-colors',
  INTERIOR_COLOR_DETAILS: '/interior-colors/:interior-color-id',
  INTERIOR_COLOR_UPDATE: '/interior-colors/:interior-color-id',
  INTERIOR_COLOR_DELETE: '/interior-colors/:interior-color-id',
  // specification category
  SPECIFICATION_CATEGORY_CREATE: '/specifications/categories',
  SPECIFICATION_CATEGORY_DETAILS: '/specifications/categories/:specification-category-id',
  SPECIFICATION_CATEGORY_UPDATE: '/specifications/categories/:specification-category-id',
  SPECIFICATION_CATEGORY_DELETE: '/specifications/categories/:specification-category-id',
  // brochures
  BROCHURE_LIST: '/brochures',
}