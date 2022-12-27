import { Form } from "antd";
import { ErrorMessage, Field, Formik } from "formik";
import { values } from "lodash";
import React from "react";

import {
  FacebookLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import { loginSchema } from "../../Validation/ValidationCheck";

const Login = () => {
  return (
    <>
    <div className="container">
      
    </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, action) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <label>
                Email: <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </label>
              <label>
                Password:
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
