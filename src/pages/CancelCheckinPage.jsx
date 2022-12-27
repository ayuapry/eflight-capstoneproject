import { Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import ButtonPrimary from "../components/ButtonPrimary";
import { Navbar } from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { SecondFooter } from "../components/SecondFooter";
import { getCheckin, getCheckinCancel } from "../redux/feature/historySlice";

export const CancelCheckinPage = () => {
  const { cancel } = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    dispatch(getCheckinCancel(values));
    navigate("/history");
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-yellow-500">
      <ScrollToTop />
      <Navbar />
      <div className="max-w-[1240px] mx-auto h-screen md:h-[670px]">
        <div className="md:pt-40 pt-20">
          <div className="bg-white md:mx-14 rounded-md shadow-md md:py-20 py-5 mx-2 px-5 md:h-[400px]">
            <p className="text-gray-500 text-sm">
            Cancel Your Checkin Here 
            </p>
            <div>
              <h2 className="text-lg ">Your Details</h2>
              <Form
                form={form}
                name="checkin"
                onFinish={onFinish}
                labelCol={{
                  flex: "150px",
                }}
                labelAlign="left"
                labelWrap
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
              >
                <Form.Item
                  label="LastName"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Booking Reference Number"
                  name="bookingReferenceNumber"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <div className="flex justify-end">
                  <div className="md:w-[30%]">
                    <ButtonPrimary type="submit" title="Cancel CheckIn Now" />
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <div className="md:hidden mt-20">
            <img src={login} alt="/" />
          </div>
        </div>
      </div>
      <SecondFooter />
    </div>
  );
};
