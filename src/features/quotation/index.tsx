import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { useQuotation } from "../../hooks";
import { DataTable } from "../../components";

const Quotation = () => {
  const { data } = useQuotation();
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
      <DataTable columns={data.head} rows={data.body} />
    </>
  );
};
export default Quotation;
