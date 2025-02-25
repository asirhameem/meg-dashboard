import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Dashboard
      </Title>
      <Divider mt="xs" mb="xl" />
    </>
  );
};
export default DashboardPage;
