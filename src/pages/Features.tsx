import { Table } from "../components/molecules";

import {useGetFeaturesQuery} from "../store/features/features/featuresApi";
import {featuresColumn} from "../data/tableColumn/features/features.column";

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
        column={featuresColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />
    </>
  )
}
export default Features;