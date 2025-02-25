import { Breadcrumbs, Divider, Flex, Title } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../../../components";

interface IHeaderProps {
  handleFormDrawerOpen: () => void;
}

const Header = ({ handleFormDrawerOpen }: IHeaderProps) => {
  const params = useParams();
  return (
    <>
      <Breadcrumbs pt="xl">
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/products" className="link-blue">
          Products
        </Link>
        <Link
          to={`/products/${params["product-id"]}/details`}
          className="link-blue"
        >
          Product-{params["product-id"]}
        </Link>
        <Link
          to={`/products/${params["product-id"]}/interiors`}
          className="link-blue"
        >
          Products Interiors
        </Link>
      </Breadcrumbs>
      <Flex align="center" justify="space-between">
        <Title order={1} c="gray.7">
          Product Interior
        </Title>
        <Button onClick={handleFormDrawerOpen}>Add Product Interior</Button>
      </Flex>
      <Divider mt="xs" mb="xl" />
    </>
  );
};
export default Header;
