import axios from '@/core/axios';
import {
  AuthRequestType,
  AuthResponseType,
  User
} from '@/types/auth.js';

import { destroyCookie } from 'nookies';

export const login = async (data: Record<"email" | "password", string> | undefined): Promise<AuthResponseType> => {
  return (await axios.post('/auth/login', data)).data
}

export const register = async (data: AuthRequestType): Promise<User> => {
  return (await axios.post('/auth/register', data)).data
}

export const getMe = async (): Promise<User> => {
  return (await axios.get("/users/me")).data;
};

export const logout = () => {
  destroyCookie(null, "_token", { path: "/dashboard/auth" });
};