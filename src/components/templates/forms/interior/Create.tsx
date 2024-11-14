import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TInterior, interiorSchema } from '../../../../validation/interior';
import { ImageInput, SelectBox, TextInput } from "../../../molecules";
import { Button } from "../../../atoms";
import InfoInput from "../../../molecules/TextArea";
import { useGetInteriorTypesQuery } from "../../../../store/features/interior/types/interiorTypesApi.ts";
import { useParams } from "react-router-dom";
import { useGetProductBasicBySlugQuery } from "../../../../store/features/products/productsApi.ts";
import { useEffect } from "react";

type Props = {
  submit: (data: TInterior) => void;
  isLoading: boolean;
};

const Create = ({ submit, isLoading }: Props) => {

  const { slug } = useParams<{ slug: string }>();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TInterior>({
    resolver: zodResolver(interiorSchema),
  });

  const {
    data: productBasicData,
    isLoading: isLoadingProductBasicData,
  } = useGetProductBasicBySlugQuery({
    slug: slug
  }, {
    skip: !slug
  });

  const {
    data: interiorTypes,
    isLoading: isLoadingInteriorTypes,
  } = useGetInteriorTypesQuery({});

  useEffect(() => {
    if (productBasicData?.data?.id) {
      setValue('product_id', productBasicData.data.id.toString());
    }
  }, [productBasicData, isLoadingProductBasicData]);


  const onSubmit: SubmitHandler<TInterior> = data => submit(data);

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

        <TextInput
          errors={errors}
          register={register}
          name="interior_title"
          title="Title"
        />

        <SelectBox
          errors={errors}
          register={register}
          name="interior_type_id"
          title="Interior type"
          isLoading={isLoadingInteriorTypes}
          options={interiorTypes as unknown as Array<{ value: string, label: string }>}
          defaultLabel="Select interior type"
        />

        <InfoInput
          errors={errors}
          register={register}
          name="interior_description"
          title="Description"
        />

        <ImageInput
          errors={errors}
          register={register}
          name="interior_file"
          title="Marketing content"
        />

        <Button primary full type="submit" disabled={isLoading} >
          Create
        </Button>
      </form>
    </>
  )
}
export default Create;