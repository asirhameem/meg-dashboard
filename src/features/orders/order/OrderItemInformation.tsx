import { Box, Container, Title } from "@mantine/core";
import { IDataTable, IOrder, IOrderItem } from "../../../interfaces";
import { useEffect, useState } from "react";
import {
  DEFAULT_TABLE_STATE,
  ORDER_TABLE_ITEM_HEADER,
} from "../../../constants";
import { DataTable } from "../../../components";

interface OrderItemInformationProps {
  order: IOrder;
}
const OrderItemInformation = ({ order }: OrderItemInformationProps) => {
  const [dataTableState, setDataTableState] =
    useState<IDataTable>(DEFAULT_TABLE_STATE);

  useEffect(() => {
    if (order?.items?.length) {
      const head = ORDER_TABLE_ITEM_HEADER;
      const body = order.items.map((item: IOrderItem) => {
        return {
          id: item.id,
          uuid: item.uuid,
          title: item.product.title,
          selling_cost: item.product.selling_cost,
          booking_cost: item.product.booking_cost,
          "paint.name": item.product.paint.name,
          "wheel.name": item.product.wheel.name,
          "interior_color.name": item.product.interior_color.name,
        };
      });
      setDataTableState({ head, body });
    }
  }, [order]);

  return (
    <>
      <Box>
        <Title c="gray.7" order={3} pb="md">
          Order Items
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
export default OrderItemInformation;
