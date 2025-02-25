import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { useGetOrderDetails } from "../../../hooks";
import OrderBasicInformation from "./OrderBasicInformation";
import OrderItemInformation from "./OrderItemInformation";
import OrderPaymentInformation from "./OrderPaymentInformation";
import OrderCustomerInformation from "./OrderCustomerInformation";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { data, isError, isLoading } = useGetOrderDetails();

  if (isError) {
    return <p>Error</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (data) {
    return (
      <>
        <Breadcrumbs>
          <Link to="/dashboard" className="link-blue">
            Home
          </Link>
          <Link to="/orders" className="link-blue">
            Orders
          </Link>
          <Link to={`/orders/${data.uuid}`} className="link-blue">
            {data.order_number}
          </Link>
        </Breadcrumbs>
        <Title order={1} pb="md">
          Order Details
        </Title>
        <Divider mb="xl" />
        <OrderBasicInformation order={data} />
        <Divider my="xl" />
        <OrderCustomerInformation order={data} />
        <Divider my="xl" />
        <OrderItemInformation order={data} />
        <Divider my="xl" />
        <OrderPaymentInformation order={data} />
      </>
    );
  }
};
export default OrderDetails;
