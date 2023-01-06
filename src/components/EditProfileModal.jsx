import { DatePicker, Form, Input, Select } from "antd";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, getCity, getProfile } from "../redux/feature/UserSlice";
import ButtonPrimary from "./ButtonPrimary";
import dayjs from "dayjs";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 14,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const EditProfileModal = ({ open, close }) => {
  const dispatch = useDispatch();
  const { city, profile } = useSelector((state) => state.user);
  const id = localStorage.getItem("id");

  const handleOnClose = (e) => {
    if (e.target.id === "container") close();
  };

  useEffect(() => {
    dispatch(getCity());
    dispatch(getProfile(id));
  }, [dispatch, id]);

  const onFinish = (values) => {
    dispatch(editProfile(values));
  };

  if (!open) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black"
    >
      <div className="bg-white p-2 rounded md:w-1/3">
        <div className="flex items-center justify-between mb-7 ">
          <p className="font-semibold mt-3 ">Edit Account</p>
          <button onClick={close}>
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex items-center w-full">
          <Form
            {...layout}
            style={{ width: "100%" }}
            name="update"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="fullName"
              label="FullName"
              rules={[
                {
                  required: false,
                },
              ]}
              initialValue={profile.fullName}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: false,
                },
              ]}
              initialValue={profile.gender}
            >
              <Select placeholder="Gender" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="birthDate"
              label="Birth Date"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker
                name="birthDate"
                defaultValue={dayjs("2019-01-25")}
                style={{ width: "100%" }}
                placeholder="Birth Date"
              />
            </Form.Item>

            <Form.Item
              name="cityId"
              label="City"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="City" allowClear>
                {city &&
                  city.map((city, index) => {
                    return (
                      <Option key={index} value={city.cityId}>
                        {city.cityName}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
            <div className="w-full flex items-center justify-center px-[1.5rem] md:px-[4rem] py-[1rem] cursor-pointer">
              <div className="w-fit">
                <ButtonPrimary type="submit" title="Edit Profile" />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
