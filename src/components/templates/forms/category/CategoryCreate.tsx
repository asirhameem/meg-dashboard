import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../atoms";
import {CheckBox, TextInput} from "../../../molecules";
import {categorySchema, TCategory} from "../../../../validation";

type Props = {
  submit: (data: TCategory) => void;
  isLoading: boolean;
};

const CategoryCreate = ({submit, isLoading}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCategory>({
    resolver: zodResolver(categorySchema),
  });

  const onSubmit: SubmitHandler<TCategory> = data => submit(data);

  return (
    <>
      <form className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}>
        {/* name input */}
        <TextInput
          errors={errors}
          register={register}
          name="name"
          title="Name"
        />

        {/* slug input */}
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

        {/* is_visible input */}
        <CheckBox
          errors={errors}
          register={register}
          name="is_visible"
          title="Is Visible"
        />

        {/* is_active input */}
        <CheckBox
          errors={errors}
          register={register}
          name="is_active"
          title="Is Active"
        />

        <Button primary full type="submit" disabled={isLoading} >
          Create
        </Button>
      </form>
    </>
  )
}
export default CategoryCreate;