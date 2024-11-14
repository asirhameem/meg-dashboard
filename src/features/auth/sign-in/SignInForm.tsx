import { Button, PasswordInput, TextInput } from "../../../components";
import { TSignInForm } from "../../../interfaces";
import { useAuthSignIn } from "../../../hooks";
import { Flex } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";

const SignInForm = () => {
  const { form, handleSubmit } = useAuthSignIn();

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)} className="w-full">
        <Flex justify="center" mb="xl">
          <MantineLogo size={50} />
        </Flex>
        <Flex direction="column" gap="sm">
          <TextInput<TSignInForm>
            withAsterisk
            label="Email"
            placeholder="Enter your email"
            name="email"
            form={form}
          />
          <PasswordInput<TSignInForm>
            withAsterisk
            label="Password"
            placeholder="Enter your password"
            name="password"
            form={form}
          />
          <Button type="submit">Login</Button>
        </Flex>
      </form>
    </>
  );
};
export default SignInForm;
