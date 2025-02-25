import { useEffect, useState } from "react";
import { IDataTable, IOrder, TChipStatus } from "../interfaces";
import {
  API_END_POINTS,
  DEFAULT_TABLE_STATE,
  ORDER_TABLE_HEADER,
} from "../constants";
import { useQuery } from "react-query";
import { GetData } from "../services";
import { useNavigate, useParams } from "react-router-dom";
import { replaceUrlParams } from "../helpers";
import { Chip } from "../components";

export const useGetOrders = () => {
  const navigate = useNavigate();
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);
  const { isLoading, error, data } = useQuery("orders", () =>
    GetData<IOrder[]>(API_END_POINTS.ORDERS_LIST)
  );

  const tableActions = {
    view: (row: unknown) => {
      console.log(row);

      const { uuid } = row as IOrder;
      navigate(`/orders/${uuid}`);
    },
  };

  useEffect(() => {
    if (!isLoading && !error && data?.data?.length) {
      const head = ORDER_TABLE_HEADER;
      const body = data.data.map((item: IOrder) => {
        return {
          id: item.id,
          uuid: item.uuid,
          order_number: item.order_number,
          total_amount: item.total_amount,
          order_status: (
            <Chip
              type="order_status"
              status={item.order_status as TChipStatus}
            />
          ),
          payment_status: (
            <Chip
              type="payment_status"
              status={item.payment_status as TChipStatus}
            />
          ),
          order_type: (
            <Chip type="order_type" status={item.order_type as TChipStatus} />
          ),
          created_at: item.created_at,
          action: "action",
        };
      });
      setDataTableState({ head, body });
    }
  }, [isLoading, error, data]);

  return { isLoading, error, data: dataTableState, actions: tableActions };
};

export const useGetOrderDetails = () => {
  const params = useParams();
  const [infoState, setInfoState] = useState<IOrder>();
  const { isLoading, isError, data } = useQuery("order", () =>
    GetData<IOrder>(replaceUrlParams(API_END_POINTS.ORDERS_DETAILS, params))
  );

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setInfoState(data.data);
    }
  }, [isLoading, isError, data]);

  return { isLoading, isError, data: infoState };
};
