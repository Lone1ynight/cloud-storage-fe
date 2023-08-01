import {
  AuthRequestType,
  AuthResponseType,
} from '@/types/auth';
import { notification } from 'antd';
import { setCookie } from 'nookies';

type AuthFunctionType = (data: AuthRequestType) => Promise<AuthResponseType>;

export const onSubmitAuth = async (data: AuthRequestType, func: AuthFunctionType) => {
  try {
    const { access_token } = await func(data);

    notification.success({
      message: "Успешно!",
      description: "Переходим в админ-панель...",
      duration: 2,
    });

    setCookie(null, "_token", access_token, {
      path: "/",
    });

    location.href = "/dashboard";
  } catch (err) {
    console.warn("LoginForm", err);

    notification.error({
      message: "Ошибка!",
      description: "Неверный логин или пароль",
      duration: 2,
    });
  }
};