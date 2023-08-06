import axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie';
import { parseCookies } from "nookies";

axios.defaults.baseURL = "http://localhost:7777";

// for CSR
axios.interceptors.request.use((config) => {
  const access_token  = Cookies.get('access_token')
  config.headers.Authorization = "Bearer " + access_token;

  return config
});

//for SSR
export const setupAxiosWithToken = (context: any): AxiosInstance  => {
  const cookies = parseCookies(context);
  const token = cookies['access_token'] || '';

  const axiosInstance = axios.create();
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return axiosInstance;
};

export default axios;