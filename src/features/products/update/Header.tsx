import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/products" className="link-blue">
          Products
        </Link>
        <Link to="/products/update" className="link-blue">
          Products Update
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Product Update
      </Title>
      <Divider mt="xs" mb="xl" />
    </>
  );
};
export default Header;
