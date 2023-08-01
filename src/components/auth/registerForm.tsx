import { register } from '@/api';
import { onSubmitAuth } from '@/helpers/auth';
import {
  Button,
  Form,
  Input
} from 'antd';
import styles from "./auth.module.scss";

export const RegisterForm = () => {
  return (
    <div className={styles.formBlock}>
      <Form
        name="register"
        labelCol={{
          span: 8,
        }}
        onFinish={(data) => onSubmitAuth(data, register)}
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
          label="Полное имя"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Укажите полное имя",
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
            Регистрация
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}