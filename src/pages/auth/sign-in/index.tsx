import { Container } from "@mantine/core";
import SignInForm from "../../../features/auth/sign-in/SignInForm";

const SignInPage = () => {
  return (
    <Container size="xs" className="h-screen flex-center">
      <SignInForm />
    </Container>
  );
};
export default SignInPage;
