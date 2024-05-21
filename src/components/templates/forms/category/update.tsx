import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TCategory, categorySchema } from "../../../../validation";
import { Button } from "../../../atoms";
import { CheckBox, TextInput } from "../../../molecules";
import { useEffect } from "react";
import { categoryFormItems } from "../../../../types";

type Props = {
  submit: (data: TCategory) => void;
  isLoading: boolean;
  data: TCategory;
};

const CategoryUpdate = ({ submit, isLoading, data }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TCategory>({
    resolver: zodResolver(categorySchema),
  });

  const setDefaultValue = (value: categoryFormItems) => {
    setValue(value, data[value]);
  }

  useEffect(() => {
    // set default value
    if (data) {
      Object.keys(data).forEach((key: string) => {
        setDefaultValue(key as categoryFormItems);
      });
    }
  }, []);

  const onSubmit: SubmitHandler<TCategory> = data => submit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
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

        <Button primary full type="submit" disabled={isLoading}>
          Update
        </Button>
      </form>
    </>
  )
}
export default CategoryUpdate;