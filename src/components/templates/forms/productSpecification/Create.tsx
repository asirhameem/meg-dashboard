import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TProductSpecification, productSpecificationSchema } from '../../../../validation/productSpecification';
import { SelectBox, TextInput } from "../../../molecules";
import { Button } from "../../../atoms";
import { useParams } from "react-router-dom";
import { useGetProductBasicBySlugQuery } from "../../../../store/features/products/productsApi.ts";
import { useEffect } from "react";
import { useGetAllSpecificationWithCategoriesQuery } from "../../../../store/features/specifications/specificationApi.ts";

type Props = {
  submit: (data: TProductSpecification) => void;
  isLoading: boolean;
};

const Create = ({ submit, isLoading }: Props) => {
  const { slug } = useParams<{ slug: string }>();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TProductSpecification>({
    resolver: zodResolver(productSpecificationSchema)
  });

  const specification_category_id = watch('specification_category_id');

  const {
    data: productBasicData,
    isLoading: isLoadingProductBasicData,
  } = useGetProductBasicBySlugQuery({
    slug: slug
  }, {
    skip: !slug
  });

  const {
    data: categoryWiseSpecifications,
    isLoading: isLoadingCategoryWiseSpecifications,
  } = useGetAllSpecificationWithCategoriesQuery({})

  useEffect(() => {
    if (productBasicData?.data?.id) {
      setValue('product_id', productBasicData.data.id.toString());
    }
  }, [productBasicData, isLoadingProductBasicData]);


  const onSubmit: SubmitHandler<TProductSpecification> = data => submit(data);

  return (
    <>
      <form
        className="flex flex-col gap-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextInput
          errors={errors}
          register={register}
          name="product_id"
          title="Product Id"
          isHidden
        />

        <SelectBox
          errors={errors}
          register={register}
          name="specification_category_id"
          title="Specification Category"
          isLoading={isLoadingCategoryWiseSpecifications}
          options={categoryWiseSpecifications as unknown as Array<{ value: string, label: string }>}
          defaultLabel="Select Specification Category"
        />

        <SelectBox
          errors={errors}
          register={register}
          name="specification_id"
          title="Specification"
          isLoading={!!(isLoadingCategoryWiseSpecifications && specification_category_id)}
          options={categoryWiseSpecifications?.find((spec: any) => spec.value == specification_category_id)?.children || [] as unknown as Array<{ value: string, label: string }>}
          defaultLabel="Select Specification"
        />

        <TextInput
          errors={errors}
          register={register}
          name="value"
          title="Value"
        />

        <Button primary full type="submit" disabled={isLoading} >
          Create
        </Button>
      </form>
    </>
  )
}
export default Create;