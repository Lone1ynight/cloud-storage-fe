import { register } from '@/api';
import { AuthRequestType } from '@/types/auth';
import {
  Button,
  Form,
  Input,
  notification
} from 'antd';
import styles from "./auth.module.scss";

export const RegisterForm = () => {
  const onSubmit =  (data: AuthRequestType) => {
    try {
      register(data).then(data => {
        console.log(data)
        notification.success({
          message: "Success!",
          description: `${data.fullName}, go to login!`,
          duration: 2,
        });

        return data
      })
    } catch (err) {
      console.warn(err);

      notification.error({
        message: "Error!",
        description: "Registration error",
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="register"
        labelCol={{
          span: 8,
        }}
        onFinish={(data) => onSubmit(data)}
      >
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
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
              message: "Enter full name",
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
              message: "Enter password",
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