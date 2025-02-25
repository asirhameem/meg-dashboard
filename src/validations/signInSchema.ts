import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required('Invalid email')
    .email('Invalid email'),
  password: yup
    .string()
    .required('Invalid password')
    .min(8, 'Password must be at least 8 characters'),
});