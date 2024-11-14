import { notifications } from "@mantine/notifications";
import { AxiosError, AxiosResponse } from "axios";

export const apiError = (error: AxiosError) => {
  if (error.response?.data) {
    const errorMessage =
      (error.response.data as { message?: string }).message ||
      (error.response.data as { error?: string }).error ||
      "An unknown error occurred";
    notifications.show({
      id: "api-error",
      position: "top-right",
      withCloseButton: true,
      autoClose: 3000,
      title: error.response.statusText,
      message: errorMessage,
      color: "red",
    });
  }
};

export const apiSuccess = (response: AxiosResponse) => {
  notifications.show({
    id: "api-success",
    position: "top-right",
    withCloseButton: true,
    autoClose: 3000,
    title: "Success",
    message: response.data.message,
    color: "green",
  });
};
