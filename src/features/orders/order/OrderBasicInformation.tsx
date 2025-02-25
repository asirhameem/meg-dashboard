import {
  Badge,
  Button,
  Container,
  CopyButton,
  Flex,
  NumberFormatter,
  Table,
  Text,
} from "@mantine/core";
import { IOrder, TChipStatus } from "../../../interfaces";
import { Chip } from "../../../components";
import { CopyIcon } from "../../../assets";
import { formatDateTime } from "../../../helpers";

interface OrderBasicInformationProps {
  order: IOrder;
}

const OrderBasicInformation = ({ order }: OrderBasicInformationProps) => {
  return (
    <>
      <Container size="xs" ml={0} pl={0}>
        <Table withRowBorders={false} highlightOnHover>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td w={150}>
                <Text fw={600}>Order Number</Text>
              </Table.Td>
              <Table.Td>
                <Flex align="center" gap="xs">
                  <Badge variant="outline" color="blue" size="lg">
                    {order.order_number}
                  </Badge>
                  <CopyButton value={order.order_number}>
                    {({ copied, copy }) => (
                      <Button
                        color={copied ? "teal" : "blue"}
                        onClick={copy}
                        size="xs"
                        variant="light"
                      >
                        {copied ? <CopyIcon /> : <CopyIcon />}
                      </Button>
                    )}
                  </CopyButton>
                </Flex>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text fw={600}>Total Amount</Text>
              </Table.Td>
              <Table.Td>
                <Text fw={600} c="gray.6">
                  <NumberFormatter
                    prefix="BDT "
                    value={order.total_amount}
                    thousandSeparator
                  />
                </Text>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text fw={600}>Order Status</Text>
              </Table.Td>
              <Table.Td>
                <Chip
                  type="order_status"
                  status={order.order_status as TChipStatus}
                />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text fw={600}>Order Payment</Text>
              </Table.Td>
              <Table.Td>
                <Chip
                  type="payment_status"
                  status={order.payment_status as TChipStatus}
                />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text fw={600}>Order Type</Text>
              </Table.Td>
              <Table.Td>
                <Chip
                  type="order_type"
                  status={order.order_type as TChipStatus}
                />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text fw={600}>Shipping Method</Text>
              </Table.Td>
              <Table.Td>
                <Chip
                  type="shipping_method"
                  status={order.shipping_method as TChipStatus}
                />
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text fw={600}>Created At</Text>
              </Table.Td>
              <Table.Td>
                <Text fw={600} c="gray.6">
                  {formatDateTime(order.created_at, "dddd, MMMM D, YYYY")}
                </Text>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Container>
    </>
  );
};
export default OrderBasicInformation;
