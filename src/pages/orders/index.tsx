import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { DataTable } from "../../components";
import { useGetOrders } from "../../hooks";
import { Link } from "react-router-dom";

const OrderPage = () => {
  const { data, actions } = useGetOrders();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/orders" className="link-blue">
          Orders
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Orders
      </Title>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} actions={actions} />
    </>
  );
};
export default OrderPage;
