import * as yup from 'yup';

export const configurationPlatformSchema = yup.object().shape({
  section_name: yup.string().required('section name required'),
  configuration_name: yup.string().required('configuration name required'),
  configuration_type: yup.string().required('configuration type required'),
  configuration_title: yup.string().required('configuration title required'),
  configuration_value: yup.string().required('configuration value required'),
  configuration_content: yup.mixed()
    .when('configuration_type', {
      is: (configuration_type: string) => configuration_type === 'image' || configuration_type === 'video',
      then: (schema) => schema.required('configuration content required'),
      otherwise: (schema) => schema.notRequired(),
    })
});