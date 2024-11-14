import { Breadcrumbs, Divider, Title } from "@mantine/core";
import { useGetSpecificationsCategories } from "../../../hooks";
import { DataTable } from "../../../components";
import { Link } from "react-router-dom";

const SpecificationsCategoriesPage = () => {
  const { data } = useGetSpecificationsCategories();
  return (
    <>
      <div>
        <Breadcrumbs>
          <Link to="/dashboard" className="link-blue">
            Home
          </Link>
          <Link to="/specifications" className="link-blue">
            Specification
          </Link>
          <Link to="/specifications/categories" className="link-blue">
            Specification Categories
          </Link>
        </Breadcrumbs>
        <Title order={1} c="gray.7">
          Specifications Categories
        </Title>
        <Divider mt="xs" mb="xl" />
        <DataTable columns={data.head} rows={data.body} />
      </div>
    </>
  );
};

export default SpecificationsCategoriesPage;
