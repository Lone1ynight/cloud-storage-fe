import axios, { AxiosInstance } from 'axios';
import { parseCookies } from "nookies";

axios.defaults.baseURL = "http://localhost:7777";

axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZEBnbWFpbC5jb20iLCJzdWIiOjMsImlhdCI6MTY5MTA3NTUxNCwiZXhwIjoxNjkxMDgyNzE0fQ.J8chX7W2DCbTLukLnBp9_Xnw5Cw1Iguz-ZlFkYDPtM4";
  return config;
});

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