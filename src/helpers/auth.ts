import {
  AuthRequestType,
  AuthResponseType,
} from '@/types/auth';
import { notification } from 'antd';
import { signIn } from 'next-auth/react';

type AuthFunctionType = (data: AuthRequestType) => Promise<AuthResponseType>;

export const onSubmitAuth = async (data: AuthRequestType, func: AuthFunctionType) => {
  try {
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if(result) {
      notification.success({
        message: "Успешно!",
        description: "Переходим в админ-панель...",
        duration: 2,
      });
    }

  } catch (err) {
    console.warn("LoginForm", err);

    notification.error({
      message: "Ошибка!",
      description: "Неверный логин или пароль",
      duration: 2,
    });
  }
};