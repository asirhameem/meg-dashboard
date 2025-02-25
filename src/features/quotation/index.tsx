import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useQuotations } from "../../hooks";
import { DataTable } from "../../components";

const Quotation = () => {
  const { data, actions } = useQuotations();
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/quotations" className="link-blue">
          Quotations
        </Link>
      </Breadcrumbs>
      <Title order={1} pb="md">
        Quotations
      </Title>
      <Divider mb="xl" />
      <DataTable columns={data.head} rows={data.body} actions={actions} />
    </>
  );
};
export default Quotation;
