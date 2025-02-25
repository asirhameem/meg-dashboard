import { Box, Container, Table, Text, Title } from "@mantine/core";
import { IOrder } from "../../../interfaces";

interface OrderCustomerInformationProps {
  order: IOrder;
}

const OrderCustomerInformation = ({ order }: OrderCustomerInformationProps) => {
  return (
    <>
      <Box>
        <Title c="gray.7" order={3} pb="md">
          Customer Details
        </Title>
        <Container size="xl" ml={0} pl={0}>
          <Table withRowBorders={false} highlightOnHover>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td w={150}>
                  <Text fw={600}>First Name</Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600} c="gray.6">
                    {order.customer.first_name}
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr>
                <Table.Td w={150}>
                  <Text fw={600}>Last Name</Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600} c="gray.6">
                    {order.customer.last_name}
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr>
                <Table.Td w={150}>
                  <Text fw={600}>Email</Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600} c="gray.6">
                    {order.customer.email}
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr>
                <Table.Td w={150}>
                  <Text fw={600}>Phone</Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600} c="gray.6">
                    {order.customer.phone}
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr>
                <Table.Td w={150}>
                  <Text fw={600}>Address</Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600} c="gray.6">
                    {order.customer.address}
                  </Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Container>
      </Box>
    </>
  );
};
export default OrderCustomerInformation;
