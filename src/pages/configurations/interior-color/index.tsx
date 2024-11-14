import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { useGeInteriorColors } from "../../../hooks";
import { DataTable } from "../../../components";
import { Link } from "react-router-dom";

const InteriorColorsPage = () => {
  const { data } = useGeInteriorColors();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/configurations/interior-colors" className="link-blue">
          Interior Color Configurations
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Interior Color
      </Title>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};

export default InteriorColorsPage;
