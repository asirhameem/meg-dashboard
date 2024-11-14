import { useForm } from "@mantine/form";
import { TSignInForm, TSignInResponse } from "../interfaces";
import { API_END_POINTS, APP_URL, SIGN_IN_FORM_INITIAL_STATE } from "../constants";
import { yupResolver } from "mantine-form-yup-resolver";
import { signInSchema } from "../validations";
import { PostData } from "../services";
import useAppStore from "../config/store";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { apiError } from "../helpers";
import { AxiosError } from "axios";

export const useAuthSignIn = () => {
  const { setAuth } = useAppStore();
  const navigate = useNavigate();

  const form = useForm<TSignInForm>({
    mode: "uncontrolled",
    initialValues: SIGN_IN_FORM_INITIAL_STATE,
    validate: yupResolver(signInSchema),
  });

  const {
    mutate,
    isLoading,
    isError,
    data,
    isSuccess,
    error
  } = useMutation((values: TSignInForm) => PostData<TSignInForm>(API_END_POINTS.AUTH_LOGIN, values))

  const handleSubmit = async (values: TSignInForm) => {
    mutate(values);
  };

  useEffect(() => {
    if (isError) {
      apiError(error as AxiosError);
    }
    if (isSuccess) {
      setAuth(data.data.data as TSignInResponse);
      navigate(APP_URL.DASHBOARD);
    }
  }, [isLoading, isError, isSuccess, error])

  return {
    form,
    handleSubmit,
  }
}
