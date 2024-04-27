import {useForm, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "../../../atoms";
import {CheckBox, TextInput} from "../../../molecules";
import {paintSchema, TPaint} from "../../../../validation";

type Props = {
  submit: (data: TPaint) => void;
  isLoading: boolean;
};

const PaintCreate = ({submit, isLoading}: Props) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<TPaint>({
    resolver: zodResolver(paintSchema),
  });

  const onSubmit: SubmitHandler<TPaint> = data => {
    console.log(data, isLoading);
    submit(data);
  };

  return (
    <>
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          errors={errors}
          register={register}
          name="name"
          title="Name"
        />

        <TextInput
          errors={errors}
          register={register}
          name="hex"
          title="Hex code"
        />

        {/* rgb input */}
        <TextInput
          errors={errors}
          register={register}
          name="rgb"
          title="RGB code"
        />

        <TextInput
          errors={errors}
          register={register}
          name="description"
          title="Description"
        />

        <CheckBox
          errors={errors}
          register={register}
          name="is_active"
          title="Is Active"
        />

        <Button primary={true} full={true} type="submit">
          Create
        </Button>
      </form>
    </>
  )
}
export default PaintCreate;