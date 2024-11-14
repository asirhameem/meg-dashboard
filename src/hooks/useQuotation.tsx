import { useEffect, useState } from "react";
import { IDataTable, IQuotation, TChipStatus } from "../interfaces";
import {
  API_END_POINTS,
  DEFAULT_TABLE_STATE,
  QUOTATION_TABLE_HEADER,
} from "../constants";
import { useQuery } from "react-query";
import { GetData } from "../services";
import { Chip } from "../components";

export const useQuotation = () => {
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);
  const { isLoading, error, data } = useQuery("quotations", () =>
    GetData<IQuotation[]>(API_END_POINTS.QUOTATION_LIST)
  );

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = QUOTATION_TABLE_HEADER;
      const body = data.data.map((item: IQuotation) => {
        return {
          name: item.name,
          email: item.email,
          phone: item.phone,
          location: item.location,
          company: item.company,
          designation: item.designation,
          status: (
            <Chip type="quotation_status" status={item.status as TChipStatus} />
          ),
          action: "action",
        };
      });
      setDataTableState({ head, body });
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState };
};
