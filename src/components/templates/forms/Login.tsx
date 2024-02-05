import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLogin, loginSchema } from "../../../validation";
import { Button, Input, Label, Small } from "../../atoms";
import { InputWrapper } from "../../utils";

type Props = {
  submit: (data: TLogin) => void;
  isLoading: boolean;
};

const Login = ({ submit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<TLogin> = data => submit(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
        <InputWrapper>
          <Label htmlFor="email" error={!!errors.email?.message}>
            Email:
          </Label>
          <Input {...register("email")} error={!!errors.email?.message} />
          {errors?.email?.message && (
            <Small error>{errors.email?.message}</Small>
          )}
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password" error={!!errors.password?.message}>
            Password:
          </Label>
          <Input
            type="password"
            {...register("password")}
            error={!!errors.email?.message}
          />
          {errors?.password?.message && (
            <Small error>{errors.password?.message}</Small>
          )}
        </InputWrapper>
        <Button primary full type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>
    </>
  );
};
export default Login;
