import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { values } from "lodash";

import { loginSchema } from "../../Validation/ValidationCheck";
import carouselPicture from "../../assets/img/img/unpaired-blue-and-white-nike-air-jordan-1-inches-shoe.jpg";
import "../../assets/css/login.css";

import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import RegisterForm from "../../components/LoginRegisterForm/RegisterForm";
const Register = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="background-searching">
          <h1 className="text-center title-carousel">Register</h1>
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
              }}
            >
              <h2 className="title text-center pt-4">Sign up your account</h2>
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
                        <RegisterForm />
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
            <div
              className="col-6"
              style={{
                padding: 0,
                margin: 0,
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                overflow: "hidden",
              }}
            >
              <img
                src={carouselPicture}
                alt="carousel picture"
                className="carousel-picture"
                style={{ objectFit: "cover", height: 550, width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
