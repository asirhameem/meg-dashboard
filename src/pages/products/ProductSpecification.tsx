import { useEffect, useState } from 'react';
import { Button, H2 } from '../../components/atoms';
import { useCreateProductSpecificationMutation } from '../../store/features/products/productsApi';
import { TProductSpecification } from '../../validation/productSpecification.ts';
import ModalBox from '../../components/molecules/ModalBox.tsx';
import Create from '../../components/templates/forms/productSpecification/Create';
const ProductSpecification = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const [
    createApi,
    { isLoading, isSuccess }
  ] = useCreateProductSpecificationMutation();

  useEffect(() => {
    if (isSuccess) {
      setIsShowModal(false);
    }
  }, [isSuccess]);

  const onSubmit = (data: TProductSpecification) => {
    const payload = {
      specifications: [
        {
          product_id: Number(data.product_id),
          specification_id: Number(data.specification_id),
          value: data.value
        }
      ]
    }
    createApi({ data: payload });
  }
  return (
    <>
      {
        isShowModal ? (
          <ModalBox
            title='Product Specification'
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
        <H2>Product Specification</H2>
        <Button
          onClick={() => setIsShowModal(true)}
        >
          Add Product Specification
        </Button>
      </div>
    </>
  )
}
export default ProductSpecification;