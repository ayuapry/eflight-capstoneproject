import { DatePicker, Form, Input, Select } from "antd";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, getCity, getProfile } from "../redux/feature/UserSlice";
import ButtonPrimary from "./ButtonPrimary";

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
  const { city, loading } = useSelector((state) => state.user);
  const { profile } = useSelector((state) => state.user);
  const id = localStorage.getItem("id");
  const bodyStyle = document.body.style;

  const handleOnClose = (e) => {
    if (e.target.id === "container") close();
  };

  useEffect(() => {
    dispatch(getCity());
    dispatch(getProfile(id));
  }, [dispatch]);

  const onFinish = (values) => {
    dispatch(editProfile(values));
    window.location.reload(1);
  };

  console.log(profile);

  if (!open) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-70 backdropbackdrop-blur-xl flex justify-center items-center text-black"
    >
      <div className="bg-white p-2 rounded w-1/3">
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
                  required: true,
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
                  required: true,
                },
              ]}
              initialValue={profile.gender}
            >
              <Select placeholder="Gender" allowClear>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                <Option value="other">other</Option>
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
                defaultValue={dayjs(`${profile.birthdate}`, "YYYY-MM-DD")}
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