import { login } from '@/api';
import { onSubmitAuth } from '@/helpers/auth';
import { AuthRequestType } from '@/types/auth.js';
import {
  Button,
  Form,
  Input,
} from 'antd';
import styles from "./auth.module.scss";

export const LoginForm = () => {
  return (
    <div className={styles.formBlock}>
      <Form
        name="login"
        labelCol={{
          span: 8,
        }}
        onFinish={(data: AuthRequestType) => onSubmitAuth(data, login)}
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