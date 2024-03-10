import { useCreateProductMutation } from "../../store/features/products/productsApi";
import { ProductForm } from "../../components/templates/forms";
import { TProduct } from "../../validation";
import { H1 } from "../../components/atoms";

const ProductAdd = () => {
  const [create, { isLoading }] = useCreateProductMutation();

  const handleSubmit = (data: TProduct) => {
    // const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => {
    //   console.log({ key, value, isFile: value[0] instanceof File, isBool: typeof value === "boolean" });
    //   console.log(value[0] instanceof File);
    //   if (key === "thumbnail_file" || key === "marketing_content_file") {
    //     formData.append(key, value[0]);
    //   }
    //   else if (key === "is_marketed" || key === "is_active") {

    //     formData.append(key, value ? 1 : 0);
    //   }
    //   else {
    //     formData.append(key, value);
    //   }
    // });
    create({ data });
  };

  return (
    <>
      <H1 className="text-center">Product Add</H1>
      <ProductForm submit={handleSubmit} isLoading={isLoading} />
    </>
  )
}
export default ProductAdd;