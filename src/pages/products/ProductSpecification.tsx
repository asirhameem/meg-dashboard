import React from 'react';
import { Button, H2 } from '../../components/atoms';
const ProductSpecification = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <H2>Product Specification</H2>
        <Button
        // onClick={() => setIsShowModal(true)}
        >
          Add Specification Category
        </Button>
      </div>
    </>
  )
}
export default ProductSpecification;