import {Table} from "../components/molecules";
import {useGetTestDriveRequestsQuery} from "../store/features/test-drive/testDriveApi";
import {testDriveColumn} from "../data/tableColumn/test-drive/testDrive.column";

const TestDrive = () => {
  const {data, isLoading} = useGetTestDriveRequestsQuery({});
  return (
    <>
      <Table
        column={testDriveColumn}
        data={data?.data || []}
        isLoading={isLoading}
      />
    </>
  );
};
export default TestDrive;
