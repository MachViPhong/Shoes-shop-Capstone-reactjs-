import { Button, Form } from "antd";
import { Checkbox, Input, Spacer } from "@nextui-org/react";
import React from "react";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 18,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ padding: 0 }}
    >
      <Form.Item>
        <Input labelPlaceholder="Username" fullWidth="true" />
        <Spacer y={2} />
        <Input.Password
          labelPlaceholder="Password"
          initialValue=""
          fullWidth="true"
        />
      </Form.Item>
      <div className="remember-forgot container" style={{ display: "flex" }}>
        <Form.Item name="remember" className="w-50 text-center">
          <Checkbox defaultSelected>Remember me</Checkbox>
        </Form.Item>
        <Form.Item name="forgot" className="w-50 text-center">
          <p className="fs-5" style={{color: 'blue'}}>Forgot password</p>
        </Form.Item>
      </div>

      <Form.Item style={{ alignItems: "center" }}>
        <Button
          className="w-100"
          htmlType="submit"
          size="large"
          style={{
            background: "#000",
            color: "#fff",
            fontWeight: 600,
            borderColor: "black",
          }}
        >
          Submit
        </Button>
        <span className="fs-5">or</span>
        <Button
          className="w-100"
          type="primary"
          htmlType="submit"
          size="large"
          style={{
            background: "#4267b2",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Login Facebook
        </Button>
      </Form.Item>
      <Form.Item>
        <NavLink
          to="/register"
          className="fs-5"
          style={{ textDecoration: "none", color: 'blue'}}
        >
          Don't have an account? Register here!
        </NavLink>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
