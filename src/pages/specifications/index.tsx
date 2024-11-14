import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { useGetSpecifications } from "../../hooks";
import { DataTable } from "../../components";
import { Link } from "react-router-dom";

const SpecificationsPage = () => {
  const { data } = useGetSpecifications();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/specifications" className="link-blue">
          Specification
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Specifications
      </Title>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};

export default SpecificationsPage;
