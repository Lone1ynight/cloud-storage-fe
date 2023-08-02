import { AuthRequestType } from '@/types/auth.js';
import {
  Button,
  Form,
  Input,
  notification
} from 'antd';
import { signIn } from 'next-auth/react';
import styles from "./auth.module.scss";

export const LoginForm = () => {
  const onSubmit = async (data: AuthRequestType) => {
    try {
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if(result) {
        notification.success({
          message: "Success!",
          description: "Go to admin panel...",
          duration: 2,
        });
      }
    } catch (err) {
      console.warn("LoginForm", err);

      notification.error({
        message: "Error!",
        description: "Wrong login or password",
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="login"
        labelCol={{
          span: 8,
        }}
        onFinish={(data: AuthRequestType) => onSubmit(data)}
      >
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: "Укажите почту",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[
            {
              required: true,
              message: "Укажите пароль",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );}