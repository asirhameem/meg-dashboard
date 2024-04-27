import {ModalBox, Table} from "../components/molecules";
import { paintColumn } from "../data/tableColumn";

import {useGetPaintsQuery} from "../store/features/paints/paintsApi";
import {Button} from "../components/atoms";
import {useState} from "react";
import PaintCreate from "../components/templates/forms/paint/create";

const Paints = () => {

  const { data, isLoading } = useGetPaintsQuery({});
  const [createModal, setCreateModal] = useState(false);
  const action = {
    /*onClick: ({ data, type }) => {
      console.log({ data, type });
    }*/
  }

  const handleCreate = () => {

  }
  return (
    <>
      <div className="flex justify-end">
        <Button onClick={() => setCreateModal(true)}>
          Add Paint
        </Button>
      </div>
      <Table
        column={paintColumn}
        data={data?.data || []}
        isLoading={isLoading}
        action={action}
      />

      {
        createModal &&
          <ModalBox
              title="Create paint"
              onClose={() => setCreateModal(false)}
              children={<PaintCreate submit={handleCreate} isLoading={isLoading}/>}
          />
      }
    </>
  )
}
export default Paints;