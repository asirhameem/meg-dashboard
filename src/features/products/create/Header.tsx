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
        <Link to="/products/create" className="link-blue">
          Products Create
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Product Create
      </Title>
      <Divider mt="xs" mb="xl" />
    </>
  );
};
export default Header;
