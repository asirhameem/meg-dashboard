import { useQuery } from "react-query"
import { GetData } from "../services"
import { API_END_POINTS, DEFAULT_TABLE_STATE, SPECIFICATION_CATEGORY_TABLE_HEADER, SPECIFICATION_TABLE_HEADER } from "../constants"
import { IDataTable, ISpecifications, ISpecificationsCategories } from "../interfaces"
import { useEffect, useState } from "react"

export const useGetSpecifications = () => {
  const [dataTableState, setDataTableState] = useState<IDataTable>(DEFAULT_TABLE_STATE)
  const { isLoading, error, data } = useQuery('specifications', () => GetData<ISpecifications[]>(API_END_POINTS.SPECIFICATIONS))

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = SPECIFICATION_TABLE_HEADER;
      const body = data.data.map((item: ISpecifications) => {
        return {
          id: item.id,
          name: item.name,
          is_active: item.is_active ? "Active" : "Inactive",
          action: "action"
        }
      })
      setDataTableState({ head, body })
    }
  }, [isLoading, error, data])

  return { isLoading, error, data: dataTableState }

}

export const useGetSpecificationsCategories = () => {
  const [dataTableState, setDataTableState] = useState<IDataTable>(DEFAULT_TABLE_STATE)
  const { isLoading, error, data, refetch } = useQuery('specifications-categories', () => GetData<ISpecificationsCategories[]>(API_END_POINTS.SPECIFICATIONS_CATEGORIES))

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = SPECIFICATION_CATEGORY_TABLE_HEADER;
      const body = data.data.map((item: ISpecificationsCategories) => {
        return {
          id: item.id,
          name: item.name,
          is_active: item.is_active ? "Active" : "Inactive",
          action: "action"
        }
      })
      setDataTableState({ head, body })
    }
  }, [isLoading, error, data])

  return { isLoading, error, data: dataTableState, refetch }

}