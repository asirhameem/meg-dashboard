import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TProduct, productSchema } from "../../../validation";
import { Button } from "../../atoms";
import { CheckBox, TextInput } from "../../molecules";

type Props = {
  submit: (data: TProduct) => void;
  isLoading: boolean;
};

const Product = ({ submit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit: SubmitHandler<TProduct> = data => submit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        {/* model input */}
        <TextInput
          errors={errors}
          register={register}
          name="model"
          title="Model"
        />

        {/* title input */}
        <TextInput
          errors={errors}
          register={register}
          name="title"
          title="Title"
        />

        {/* title input */}
        <TextInput
          errors={errors}
          register={register}
          name="slug"
          title="Slug"
        />

        {/* description input */}
        <TextInput
          errors={errors}
          register={register}
          name="description"
          title="Description"
        />

        {/* production_cost input */}
        <TextInput
          errors={errors}
          register={register}
          name="production_cost"
          title="Production Cost"
          type="number"
        />

        {/* selling_cost input */}
        <TextInput
          errors={errors}
          register={register}
          name="selling_cost"
          title="Selling Cost"
          type="number"
        />

        {/* booking_cost input */}
        <TextInput
          errors={errors}
          register={register}
          name="booking_cost"
          title="Booking Cost"
          type="number"
        />

        {/* sorting_order input */}
        <TextInput
          errors={errors}
          register={register}
          name="sorting_order"
          title="Sorting Order"
          type="number"
        />

        {/* thumbnail_file input */}
        {/* <TextInput
          errors={errors}
          register={register}
          name="thumbnail_file"
          title="Thumbnail"
        /> */}

        <input type="file" {...register("thumbnail_file")} />

        {/* marketing_content_type input */}
        <TextInput
          errors={errors}
          register={register}
          name="marketing_content_type"
          title="Marketing Content Type"
        />

        {/* marketing_content_file input */}
        {/* <TextInput
          errors={errors}
          register={register}
          name="marketing_content_file"
          title="Marketing Content"
        /> */}

        <input type="file" {...register("marketing_content_file")} />

        {/* is_marketed input */}
        <CheckBox
          errors={errors}
          register={register}
          name="is_marketed"
          title="Is Marketed"
        />

        {/* is_active input */}
        <CheckBox
          errors={errors}
          register={register}
          name="is_active"
          title="Is Active"
        />

        {/* category_id input */}
        <TextInput
          errors={errors}
          register={register}
          name="category_id"
          title="Category ID"
        />

        <Button primary full type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </>
  )
}
export default Product;