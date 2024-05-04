import { useEffect, useState } from 'react';
import { Button, H2 } from '../../components/atoms';
import { ModalBox } from '../../components/molecules';
import Create from '../../components/templates/forms/interior/Create';
import { useCreateInteriorMutation } from '../../store/features/products/interiors/interiorsApi';
import { TInterior } from '../../validation/interior';

const ProductInterior = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [
    createApi,
    { isLoading, isSuccess }
  ] = useCreateInteriorMutation();

  useEffect(() => {
    if (isSuccess) {
      setIsShowModal(false);
    }
  }, [isSuccess]);

  const onSubmit = (data: TInterior) => {
    createApi({ data });
  }
  return (
    <>
      {
        isShowModal ? (
          <ModalBox
            title='Product Interior'
            onClose={() => setIsShowModal(false)}
            wrapperClassName="min-w-[500px]"
          >
            <Create
              submit={onSubmit}
              isLoading={isLoading}
            />
          </ModalBox>
        ) : ""
      }
      <div className='flex items-center justify-between'>
        <H2>Product Interior</H2>
        <Button onClick={() => setIsShowModal(true)}>Click me</Button>
      </div>
    </>
  )
}
export default ProductInterior;