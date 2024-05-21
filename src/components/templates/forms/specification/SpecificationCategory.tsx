import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSpecificationCategory, specificationCategorySchema } from "../../../../validation";
import { Button } from "../../../atoms";
import { TextInput } from "../../../molecules";
import { useEffect } from "react";
import { specCategoryFormItems } from "../../../../types";

type Props = {
  submit: (data: TSpecificationCategory) => void;
  isLoading: boolean;
  data?: TSpecificationCategory | null;
};

const SpecificationCategory = ({ submit, isLoading, data }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TSpecificationCategory>({
    resolver: zodResolver(specificationCategorySchema),
  });

  useEffect(() => {
    // set default value
    if (data) {
      Object.keys(data).forEach((key: string) => {
        setValue(key as specCategoryFormItems, data[key as specCategoryFormItems]);
      });
    }
  }, []);

  const onSubmit: SubmitHandler<TSpecificationCategory> = data => submit(data);

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

        <Button primary full type="submit" disabled={isLoading}>
          {data?.id ? 'Update' : 'Create'}
        </Button>
      </form>
    </>
  )
}
export default SpecificationCategory;