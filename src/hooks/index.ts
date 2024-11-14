import { useAuthSignIn } from './useAuthSignIn'
import { useAuthClear } from './useAuthClear'
import { useGetSpecifications, useGetSpecificationsCategories } from './useSpecification'
import { useGetProducts, useGetProductsCategories, useGetProductsInteriors, useGetProductsSpecification, useCreateProduct, useCreateProductInterior, useCreateProductSpecification } from './useProduct'
import { useGetPaints, useGetWheels, useGeInteriorColors, useGetPlatformInfo, useCreatePlatformInfo } from './useConfiguration'
import { useGetOrders, useGetOrderDetails } from './useOrder'
import { useQueryParams } from './useQueryParam'
import { useQuotation } from './useQuotation'

export {
  useAuthSignIn,
  useAuthClear,
  useGetSpecifications,
  useGetSpecificationsCategories,
  useGetProducts,
  useGetProductsCategories,
  useGetPaints,
  useGetProductsInteriors,
  useGetProductsSpecification,
  useGetWheels,
  useGeInteriorColors,
  useGetOrders,
  useGetOrderDetails,
  useCreateProduct,
  useCreateProductInterior,
  useCreateProductSpecification,
  useGetPlatformInfo,
  useQueryParams,
  useCreatePlatformInfo,
  useQuotation,
}