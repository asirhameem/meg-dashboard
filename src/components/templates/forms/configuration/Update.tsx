import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../atoms";
import { SelectBox, TextInput } from "../../../molecules";
import React from "react";
import { platformConfigSection } from "../../../../data/selectOption/platformConfigSection";
import { platformConfigName } from "../../../../data/selectOption/platformConfigName";
import {
  configurationSchema,
  TConfiguration,
} from "../../../../validation/configuration";

type Props = {
  submit: (data: TConfiguration) => void;
  isLoading: boolean;
};

const ConfigurationUpdate = ({ submit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TConfiguration>({
    resolver: zodResolver(configurationSchema),
  });

  const section_name = watch("section_name");

  const onSubmit: SubmitHandler<TConfiguration> = data => submit(data);

  return (
    <>
      <form className="flex flex-col gap-y-3" onSubmit={handleSubmit(onSubmit)}>
        {/* section name */}
        <SelectBox
          errors={errors}
          register={register}
          name="section_name"
          title="Section Name"
          options={
            platformConfigSection as Array<{ value: string; label: string }>
          }
          defaultLabel="Select section name"
        />
        {/* configuration name */}
        <SelectBox
          errors={errors}
          register={register}
          name="configuration_name"
          title="Configuration Name"
          options={
            platformConfigName.filter(item => item.section === section_name) ||
            ([] as Array<{ value: string; label: string; section: string }>)
          }
          defaultLabel="Select configuration name"
          disabled={true}
        />
        {/* configuration_title input */}
        <TextInput
          errors={errors}
          register={register}
          name="configuration_title"
          title="Title"
        />

        {/* configuration_value input */}
        <TextInput
          errors={errors}
          register={register}
          name="configuration_value"
          title="Value"
        />

        <Button primary full type="submit" disabled={isLoading}>
          Create
        </Button>
      </form>
    </>
  );
};
export default ConfigurationUpdate;
