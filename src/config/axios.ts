import axios from 'axios';
import { ENVIRONMENT_VARIABLES } from '../constants';
import useAppStore from './store';


export const AxiosInstance = axios.create({
  baseURL: ENVIRONMENT_VARIABLES.API_BASE_URL,
  timeout: 60000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

AxiosInstance.interceptors.request.use(function (config) {
  const token = useAppStore.getState().token;
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

AxiosInstance.interceptors.response.use(function (response) {

  if (response.status === 401) {
    // TODO: handle 401 error
  }

  return response;
}, function (error) {
  return Promise.reject(error);
});