import { Flex } from "@mantine/core";
import {
  IConfigurationPlatformForm,
  IFormComponentProps,
  IFormSelectOption,
} from "../../../interfaces";
import { Button, FileInput, Select, TextInput } from "../../../components";
import { PLATFORM_SECTION } from "../../../constants";
import { useState } from "react";

const Form = ({
  form,
  handleSubmit,
}: IFormComponentProps<IConfigurationPlatformForm>) => {
  const [specification, setSpecification] = useState<IFormSelectOption[]>([]);
  const [isShowFileInput, setIsShowFileInput] = useState<boolean>(false);

  form.watch("section_name", (value) => {
    setSpecification(
      PLATFORM_SECTION.find(
        (section) => String(section.value) === String(value.value)
      )?.configuration || []
    );
  });

  form.watch("configuration_type", ({ value }) => {
    setIsShowFileInput(value === "image" || value === "video");
  });

  return (
    <>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex direction="column" gap="sm">
          <Select<IConfigurationPlatformForm>
            withAsterisk
            label="Section Name"
            name="section_name"
            form={form}
            data={[{ value: "", label: "choose section" }, ...PLATFORM_SECTION]}
          />
          <Select<IConfigurationPlatformForm>
            withAsterisk
            label="Configuration Name"
            name="configuration_name"
            form={form}
            data={[
              { value: "", label: "choose configuration" },
              ...specification,
            ]}
          />
          <Select<IConfigurationPlatformForm>
            withAsterisk
            label="Configuration Name"
            name="configuration_type"
            form={form}
            data={[
              { value: "", label: "choose configuration type" },
              { value: "text", label: "Text" },
              { value: "image", label: "image" },
              { value: "video", label: "video" },
            ]}
          />
          <TextInput<IConfigurationPlatformForm>
            withAsterisk
            label="Configuration Title"
            placeholder="enter product interior title"
            name="configuration_title"
            form={form}
          />
          <TextInput<IConfigurationPlatformForm>
            withAsterisk
            label="Configuration Value"
            placeholder="enter product interior title"
            name="configuration_value"
            form={form}
          />
          {isShowFileInput ? (
            <FileInput<IConfigurationPlatformForm>
              withAsterisk
              label="Configuration Content"
              placeholder="add marketing content file"
              name="configuration_content"
              form={form}
            />
          ) : null}
          <Button type="submit" style={{ width: "fit-content" }}>
            Create
          </Button>
        </Flex>
      </form>
    </>
  );
};
export default Form;
