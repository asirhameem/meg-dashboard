import { Box, Container, Title } from "@mantine/core";
import { IDataTable, IOrder, IOrderPayment } from "../../../interfaces";
import { useEffect, useState } from "react";
import {
  DEFAULT_TABLE_STATE,
  ORDER_TABLE_PAYMENT_HEADER,
} from "../../../constants";
import { DataTable } from "../../../components";

interface OrderPaymentInformationProps {
  order: IOrder;
}
const OrderPaymentInformation = ({ order }: OrderPaymentInformationProps) => {
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);

  useEffect(() => {
    if (order?.payments?.length) {
      const head = ORDER_TABLE_PAYMENT_HEADER;
      const body = order.payments.map((item: IOrderPayment) => {
        return {
          id: item.id,
          uuid: item.uuid,
          payment_number: item.payment_number,
          amount: item.amount,
          transaction_id: item.transaction_id,
          payment_method: item.payment_method,
          payment_status: item.payment_status,
          created_at: item.created_at,
        };
      });
      setDataTableState({ head, body });
    }
  }, [order]);

  return (
    <>
      <Box>
        <Title c="gray.7" order={3} pb="md">
          Order Payment
        </Title>
        <Container size="xl" ml={0} pl={0}>
          <DataTable
            columns={dataTableState.head}
            rows={dataTableState.body}
            highlightOnHover
            withColumnBorders
            withTableBorder
          />
        </Container>
      </Box>
    </>
  );
};
export default OrderPaymentInformation;
