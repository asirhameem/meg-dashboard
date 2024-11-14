import { Breadcrumbs, Divider, Flex, Title } from "@mantine/core";
import { useField } from "@mantine/form";
import { Link } from "react-router-dom";
import { PLATFORM_SECTION } from "../../../constants";
import { NativeSelect } from "@mantine/core";
import { useQueryParams } from "../../../hooks";
import { Button } from "../../../components";

interface HeaderProps {
  open: () => void;
}

const Header = ({ open }: HeaderProps) => {
  const { setQueryParam, removeQueryParam } = useQueryParams();
  const field = useField({
    initialValue: "",
    onValueChange(value) {
      if (value) {
        setQueryParam("section", value);
      } else {
        removeQueryParam("section");
      }
    },
  });
  return (
    <>
      <Breadcrumbs>
        <Link to="/dashboard" className="link-blue">
          Home
        </Link>
        <Link to="/configurations/platform-info" className="link-blue">
          Platform Info Configuration
        </Link>
      </Breadcrumbs>
      <Flex justify="space-between" align="center">
        <Title order={1} c="gray.7">
          Platform Info
        </Title>
        <Flex align="center" justify="flex-end" gap="xs">
          <NativeSelect
            name="interior_type_id"
            {...field.getInputProps()}
            data={[{ label: "choose section", value: "" }, ...PLATFORM_SECTION]}
          />
          <Button onClick={open}>Add Platform Config</Button>
        </Flex>
      </Flex>
      <Divider mt="xs" mb="xl" />
    </>
  );
};
export default Header;
