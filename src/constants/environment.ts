import { TEnvironmentVariables } from "../interfaces";

export const ENVIRONMENT_VARIABLES: TEnvironmentVariables = {
  SECRET_KEY: import.meta.env.VITE_DATA_SECRET_KEY,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
}