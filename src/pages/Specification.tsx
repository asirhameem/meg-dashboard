import { Table } from "../components/molecules";
import { specificationColumn } from "../data/tableColumn";

import { useGetSpecificationsQuery } from "../store/features/specifications/specificationApi";

const Specification = () => {
  const { data, isLoading } = useGetSpecificationsQuery({});

  return (
    <>
      <Table
        column={specificationColumn}
        data={data?.data || []}
        isLoading={isLoading}
      />
    </>
  )
}
export default Specification;