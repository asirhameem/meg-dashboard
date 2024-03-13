import { Table } from "../components/molecules";
import { paintColumn } from "../data/tableColumn";

import {useGetPaintsQuery} from "../store/features/paints/paintsApi";

const Paints = () => {

  const { data, isLoading } = useGetPaintsQuery({});

  const action = {
    onClick: ({ data, type }) => {
      console.log({ data, type });
    }
  }
  return (
    <>
      <Table
        column={paintColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />
    </>
  )
}
export default Paints;