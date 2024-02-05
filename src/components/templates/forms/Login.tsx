import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLogin, loginSchema } from "../../../validation";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input {...register("email")} />
          {errors?.email?.message && <small>{errors.email?.message}</small>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" {...register("password")} />
          {errors?.password?.message && (
            <small>{errors.password?.message}</small>
          )}
        </div>
        <button type="submit" disabled={isLoading}>
          Login
        </button>
      </form>
    </>
  );
};
export default Login;
