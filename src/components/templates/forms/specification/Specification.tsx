import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TSpecification, specificationSchema } from "../../../../validation";
import { Button } from "../../../atoms";
import { TextInput, TextArea, SelectBox } from "../../../molecules";

type Props = {
  submit: (data: TSpecification) => void;
  isLoading: boolean;
};

const Specification = ({ submit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSpecification>({
    resolver: zodResolver(specificationSchema),
  });

  const onSubmit: SubmitHandler<TSpecification> = data => submit(data);

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

        {/* description input */}
        <TextArea
          errors={errors}
          register={register}
          name="description"
          title="Description"
        />

        {/* specification category input */}
        <SelectBox
          errors={errors}
          register={register}
          name="specification_category_id"
          title="Specification Category"
          options={[
            { value: "", label: "Select one" },
            { value: "1", label: "Category 1" },
            { value: "2", label: "Category 2" },
          ]}
        />

        <Button primary full type="submit" disabled={isLoading}>
          Create
        </Button>
      </form>
    </>
  )
}
export default Specification;