import { Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import { getCheckinCancel } from "../redux/feature/historySlice";
import { Sidebar } from "./Sidebar";

export const CancelCheckinPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    dispatch(getCheckinCancel(values));
    navigate("/history");
  };

  return (
    <div className='bg-slate-100'>
         <div className='grid grid-cols-[15%_85%]'>
            <div className=''>
                <Sidebar />
            </div>
            <div className="mx-20 my-auto bg-white px-5 py-20 shadow-md h-[300px]">
              <p className="text-blue-600">Cancel Passenger's Check-In Status Here ...</p>
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
    </div>
  );
};
