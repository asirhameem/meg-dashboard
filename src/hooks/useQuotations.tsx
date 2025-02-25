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
import { useNavigate, useParams } from "react-router-dom";

export const useQuotations = () => {
  const navigate = useNavigate();
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);
  const { isLoading, error, data } = useQuery("quotations", () =>
    GetData<IQuotation[]>(API_END_POINTS.QUOTATION_LIST)
  );

  const tableActions = {
    view: (row: unknown) => {
      const { uuid } = row as IQuotation;
      navigate(`/quotations/${uuid}`);
    },
  };

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = QUOTATION_TABLE_HEADER;
      const body = data.data.map((item: IQuotation) => {
        return {
          uuid: item.uuid,
          name: item.name,
          email: item.email,
          phone: item.phone,
          location: item.location,
          // company: item.company,
          // designation: item.designation,
          product_model: item.product_model,
          status: (
            <Chip type="quotation_status" status={item.status as TChipStatus} />
          ),
          action: "action",
        };
      });
      setDataTableState({ head, body });
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState, actions: tableActions };
};

export const useQuotation = () => {
  const params = useParams<{ quotationId: string }>();
  const [data] = useState<IQuotation | null>(null);

  const {
    isLoading,
    error,
    data: quotations,
  } = useQuery("quotations", () =>
    GetData<IQuotation[]>(
      `${API_END_POINTS.QUOTATION_LIST}/${params.quotationId}`
    )
  );

  useEffect(() => {
    if (!isLoading && !error && quotations?.data?.length) {
      console.log(quotations);
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data };
};
