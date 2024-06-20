import { useEffect, useState } from 'react';
import { Button, H2 } from '../../components/atoms';
import { ModalBox, Table } from '../../components/molecules';
import Create from '../../components/templates/forms/interior/Create';
import { useCreateInteriorMutation } from '../../store/features/products/interiors/interiorsApi';
import { TInterior } from '../../validation/interior';
import { useParams } from 'react-router-dom';
import { useGetInteriorsByProductIdQuery } from '../../store/features/interior/interiorApi';
import { useGetProductBasicBySlugQuery } from '../../store/features/products/productsApi';
import { productInteriorColumn } from '../../data/tableColumn';

const ProductInterior = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isShowModal, setIsShowModal] = useState(false);

  const [
    createApi,
    { isLoading, isSuccess }
  ] = useCreateInteriorMutation();

  const {
    data: productBasicData,
    isLoading: isLoadingProductBasicData,
  } = useGetProductBasicBySlugQuery({
    slug: slug
  }, {
    skip: !slug
  });

  const {
    data: productInteriors,
    isLoading: isLoadingProductInteriors
  } = useGetInteriorsByProductIdQuery(
    { productId: productBasicData?.data?.id },
    { skip: !productBasicData?.data?.id || isLoadingProductBasicData }
  )

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

      <Table
        column={productInteriorColumn}
        data={productInteriors?.data || []}
        isLoading={isLoadingProductInteriors}
      />
    </>
  )
}
export default ProductInterior;