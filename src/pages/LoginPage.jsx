import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Form, Input, Alert } from "antd";
import ButtonPrimary from "../components/ButtonPrimary";
import LoginBg from "../assets/login.webp";
import { useNavigate } from "react-router-dom";
import { SecondFooter } from "../components/SecondFooter";
import { useDispatch, useSelector } from "react-redux";
import { LoginEmail } from "../redux/feature/AuthSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "../components/Loading";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const onFinish = (values) => {
    dispatch(LoginEmail(values));
  };

  const isLogin = () => {
    navigate("/");
  };

  if (loading) {
    return <Loading />;
  }

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
          {token ? (
            isLogin()
          ) : login ? (
            <div className="flex justify-center">
              <Alert
                message={login}
                type="error"
                showIcon
                className="w-full md:mt-4"
              />
            </div>
          ) : (
            <div className="hidden"></div>
          )}
          <h1 className="text-2xl text-slate-700 font-bold my-6">Login</h1>
          <Form name="normal_login" className="login-form" onFinish={onFinish}>
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
                data-testid="email-input"
                suffix={<MailOutlined />}
                type="email"
                className="round-input"
                placeholder="Email Address"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                {
                  pattern:
                    /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!#$%\-_=+<>])([a-zA-Z0-9!#$%\-_=+<>]+).{8,}$/,
                  message: `Password must be minimum 9 characters, include uppercase, lowwercase, symbols`,
                },
              ]}
            >
              <Input.Password
                className="round-input"
                data-testid="password-input"
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <ButtonPrimary
                data-testid="btn-input"
                type="submit"
                title="LOGIN"
              />
              {/* <div className="flex justify-center">
                <div className="border-b-2 border-slate-700 w-20 mb-6 mr-2"></div>
                <p className="text-center text-slate-700 mt-2">Or</p>
                <div className="border-b-2 border-slate-700 w-20 mb-6 ml-2"></div>
              </div> */}
              {/* <ButtonBorder title="Login With Google" img={googleIcon} /> */}
              <div className="flex">
                <p className="mr-2 mt-4 mb-0 text-slate-700">
                  Don't have an accout?
                </p>
                <a
                  href
                  className="text-sky-600 mt-4 mb-0 hover:font-bold hover:text-sky-500"
                  onClick={() => navigate(`/register`)}
                >
                  {" "}
                  Register{" "}
                </a>
              </div>
            </Form.Item>
          </Form>
        </div>
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
      <div>
        <SecondFooter />
      </div>
    </div>
  );
}
