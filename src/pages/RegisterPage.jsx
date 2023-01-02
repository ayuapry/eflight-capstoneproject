import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Alert, Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginBg from "../assets/login.webp";
import ButtonPrimary from "../components/ButtonPrimary";
import { SecondFooter } from "../components/SecondFooter";
import { Register } from "../redux/feature/AuthSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { register } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const id = localStorage.getItem("id");

  const onFinish = async (values) => {
    dispatch(Register(values));
  };

  const isRegistered = () => {
    navigate("/Login");
    window.location.reload(1);
  };

  return (
    <div className="flex flex-col justify-between h-screen max-w-7xl mx-auto ">
      <div className="grid lg:grid-cols-2 md:items-center md:h-[90vh]">
        <div className="hidden ml-20 p-2 lg:w-[100%] lg:block">
          <LazyLoadImage
            loading="lazy"
            src={LoginBg}
            height={600}
            width={600}
            alt="/"
          />
        </div>

        <div className="lg:ml-auto lg:mr-20 mx-4 rounded-xl lg:px-12 p-2 lg:shadow-md lg:shadow-gray-400 lg:w-[70%] lg:border-t-2 items-end bg-white">
          {id ? (
            isRegistered()
          ) : register.length ? (
            <div className="flex justify-center">
              <Alert
                message={register}
                type="error"
                showIcon
                className="w-full md:mt-4"
              />
            </div>
          ) : (
            ""
          )}
          <h1 className="text-2xl font-bold my-6 text-slate-700">
            Create your account
          </h1>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please input your fullname!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                className="round-input"
                suffix={<UserOutlined />}
                placeholder="Fullname"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                className="round-input"
                suffix={<MailOutlined />}
                placeholder="Email Address"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  pattern:
                    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!#$%\-_=+<>])([a-zA-Z0-9!#$%\-_=+<>]+)$/,
                  message: `Password must be minimum 9 characters, include uppercase, lowwercase, symbols`,
                },
              ]}
              hasFeedback
            >
              <Input.Password className="round-input" placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="password-validation"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                className="round-input items-center"
                placeholder="Password Confirmation"
              />
            </Form.Item>

            <ButtonPrimary type="submit" title="REGISTER NOW" />
            <div className="flex mb-6">
              <p className="mr-2 mt-4 mb-0 text-slate-700">Have an accout?</p>
              <a
                className="text-[#46B3E6] mt-4 hover:font-bold hover:text-[#46B3E6]"
                onClick={() => navigate(`/Login`)}
                href="/Login"
              >
                {" "}
                Login{" "}
              </a>
            </div>
          </Form>
        </div>
        <div className="px-4 lg:hidden">
          <LazyLoadImage
            loading="lazy"
            src={LoginBg}
            alt="/"
            height={400}
            width={400}
          />
        </div>
      </div>
      <SecondFooter />
    </div>
  );
}
