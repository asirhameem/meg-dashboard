import * as yup from 'yup';

export const productSchema = yup.object().shape({
  model: yup.string().required('model required'),
  title: yup.string().required('title required'),
  slug: yup.string().required('slug required'),
  description: yup.string().required('description required'),
  production_cost: yup.number().required('production cost required'),
  selling_cost: yup.number().required('selling cost required'),
  booking_cost: yup.number().required('booking cost required'),
  category_id: yup.number().required('category required'),
  marketing_content_file: yup.mixed().required('marketing content file required'),
  thumbnail_file: yup.mixed().required('thumbnail file required'),
  video_content_file: yup.mixed().required('video content file required'),
});

export const productUpdateSchema = yup.object().shape({
  model: yup.string().required('model required'),
  title: yup.string().required('title required'),
  description: yup.string().required('description required'),
  production_cost: yup.number().required('production cost required'),
  selling_cost: yup.number().required('selling cost required'),
  booking_cost: yup.number().required('booking cost required'),
  category_id: yup.number().required('category required'),
});

export const productInteriorSchema = yup.object().shape({
  product_id: yup.number().optional(),
  interior_type_id: yup.number().required('interior type required'),
  interior_title: yup.string().required('interior title required'),
  interior_description: yup.string().required('interior description required'),
  interior_file: yup.mixed(),
});

export const productSpecificationSchema = yup.object().shape({
  product_id: yup.number().optional(),
  specification_category_id: yup.number().required('specification category required'),
  specification_id: yup.number().required('specification required'),
  value: yup.string().required('value required'),
});