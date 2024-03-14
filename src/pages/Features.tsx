import { Table } from "../components/molecules";
import { productColumn } from "../data/tableColumn";

import {useGetFeaturesQuery} from "../store/features/features/featuresApi";

const Features = () => {

  const { data, isLoading } = useGetFeaturesQuery({});

  const action = {
    onClick: ({ data, type }) => {
      console.log({ data, type });
    }
  }
  return (
    <>
      <Table
        column={productColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />
    </>
  )
}
export default Features;