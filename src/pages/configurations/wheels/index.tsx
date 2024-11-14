import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { useGetWheels } from "../../../hooks";
import { DataTable } from "../../../components";
import { Link } from "react-router-dom";

const WheelsPage = () => {
  const { data } = useGetWheels();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/configurations/wheels" className="link-blue">
          Wheels Configurations
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Wheels
      </Title>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};

export default WheelsPage;
