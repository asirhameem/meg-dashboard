import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { useGetPaints } from "../../../hooks";
import { DataTable } from "../../../components";
import { Link } from "react-router-dom";

const PaintPage = () => {
  const { data } = useGetPaints();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/configurations/paints" className="link-blue">
          Paint Configurations
        </Link>
      </Breadcrumbs>
      <Title order={1} c="gray.7">
        Paint
      </Title>
      <Divider mt="xs" mb="xl" />
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};

export default PaintPage;
