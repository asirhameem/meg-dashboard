import { useLoginMutation } from "../store/features/auth/authApi.ts";
import { LoginForm } from "../components/templates/forms";
import { TLogin } from "../validation";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = (data: TLogin) => {
    const { email, password } = data;
    login({ email: email, password: password });
  };

  return (
    <>
      <h1>Login</h1>
      <LoginForm submit={handleSubmit} isLoading={isLoading} />
    </>
  );
};
export default Login;
