import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useBrochures } from "../../hooks";
import { DataTable } from "../../components";

const Brochure = () => {
  const { data, actions } = useBrochures();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/quotations" className="link-blue">
          Brochure
        </Link>
      </Breadcrumbs>
      <Title order={1} pb="md">
        Brochure
      </Title>
      <Divider mb="xl" />
      <DataTable columns={data.head} rows={data.body} actions={actions} />
    </>
  );
};
export default Brochure;
