import { Form } from "antd";
import { ErrorMessage, Field, Formik } from "formik";
import { values } from "lodash";
import React from "react";


import { loginSchema } from "../../Validation/ValidationCheck";
import carouselPicture from "../../assets/img/img/gray-and-black-nike-air-jordan-1-s.jpg";
import LoginForm from "../../components/LoginRegisterForm/LoginForm";
import "../../assets/css/login.css";
const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="background-searching">
          <h1 className="text-center title-carousel">Login</h1>
        </div>
        <div
          className="container"
          style={{
            border: "1px solid black",
            borderRadius: 8,
          }}
        >
          <div className="row">
            <div
              className="col-6"
              style={{
                padding: 0,
                margin: 0,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                overflow: "hidden",
              }}
            >
              <img
                src={carouselPicture}
                alt="carousel picture"
                className="carousel-picture"
                style={{ objectFit: "cover", height: 500, width: "100%" }}
              />
            </div>
            <div
              className="col-6"
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <h2 className="title text-center pt-4">Sign in your account</h2>
              <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                        <LoginForm />
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
