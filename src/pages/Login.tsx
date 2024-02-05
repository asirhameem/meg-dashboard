import { useLoginMutation } from "../store/features/auth/authApi.ts";
import { LoginForm } from "../components/templates/forms";
import { TLogin } from "../validation";
import { H1 } from "../components/atoms";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (data: TLogin) => {
    const { email, password } = data;
    login({ email: email, password: password });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-full max-w-xs">
          <H1 className="text-center">Login</H1>
          <LoginForm submit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
    </>
  );
};
export default Login;
