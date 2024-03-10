import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSpecificationCategory, specificationCategorySchema } from "../../../../validation";
import { Button } from "../../../atoms";
import { TextInput } from "../../../molecules";

type Props = {
  submit: (data: TSpecificationCategory) => void;
  isLoading: boolean;
};

const SpecificationCategory = ({ submit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSpecificationCategory>({
    resolver: zodResolver(specificationCategorySchema),
  });

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
          Create
        </Button>
      </form>
    </>
  )
}
export default SpecificationCategory;