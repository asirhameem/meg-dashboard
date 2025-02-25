import { useEffect, useState } from "react";
import { IDataTable, IQuotation } from "../interfaces";
import {
  API_END_POINTS,
  DEFAULT_TABLE_STATE,
  BROCHURE_TABLE_HEADER,
} from "../constants";
import { useQuery } from "react-query";
import { GetData } from "../services";

export const useBrochures = () => {
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);
  const { isLoading, error, data } = useQuery("brochures", () =>
    GetData<IQuotation[]>(API_END_POINTS.BROCHURE_LIST)
  );

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = BROCHURE_TABLE_HEADER;
      const body = data.data.map((item: IQuotation) => {
        return {
          uuid: item.uuid,
          name: item.name,
          email: item.email,
          phone: item.phone,
          product_model: item.product_model,
        };
      });
      setDataTableState({ head, body });
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState, actions: {} };
};
