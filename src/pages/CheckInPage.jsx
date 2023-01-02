import { Form, Input, Modal } from "antd";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import ButtonPrimary from "../components/ButtonPrimary";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { SecondFooter } from "../components/SecondFooter";
import {
  getBoardingPass,
  getCheckin,
  getHistory,
} from "../redux/feature/historySlice";
import checkinSuccess from "../assets/checkinSuccess.svg";
import checkinFail from "../assets/checkinFail.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CheckInPage = () => {
  const { checkin, history } = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState();
  const checkinId = localStorage.getItem("checkinId");

  const responModal = (props) => {
    return (
      <Modal
        title=""
        open={isModalOpen}
        footer={null}
        centered={true}
        closable={false}
      >
        <div className="flex items-center">
          <p className="text-lg font-semibold m-0 items-center mx-auto">
            {props.title}
          </p>
        </div>

        <img src={props.resImg} alt={props.type} className="h-72 mx-auto" />
        <p>{props.message}</p>
        <div className="mr-0 ml-auto">
          <ButtonPrimary title={props.resTitle} click={props.resClick} />
        </div>
      </Modal>
    );
  };
  const [lastNames, setLastName] = useState();
  const [bookingReferenceNumbers, setBookingReferenceNumber] = useState();

  const change = (e) => {
    setBookingReferenceNumber(e);
  };

  const changege = (e) => {
    setLastName(e);
  };

  const downloadBoardPass = () => {
    dispatch(getBoardingPass(data));
    localStorage.removeItem("checkinId");
    setIsModalOpen(false);
    navigate("/history");
  };

  const onFinish = (values) => {
    dispatch(getCheckin(values));
    setData(values);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // window.location.reload(1);
    return setIsModalOpen(false);
  };

  return (
    <div className="h-full md:min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <ScrollToTop />
      <Navbar />
      {checkinId
        ? responModal({
            title: "Check In Success",
            resImg: checkinSuccess,
            resClick: downloadBoardPass,
            resTitle: "Download Boarding Pass",
          })
        : checkin[0]
        ? responModal({
            title: "Check In Failed",
            resImg: checkinFail,
            resClick: closeModal,
            resTitle: "Cancel",
            message: checkin,
          })
        : ""}
      <div className="max-w-[1240px] mx-auto h-full md:min-h-screen">
        <div className="md:pt-32 pt-20">
          <div className="bg-white md:mx-14 rounded-md shadow-md md:py-20 py-5 mx-2 px-5 md:h-[400px]">
            <p className="text-gray-500 text-sm">
              Start check-in with your departure date and booking reference
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
                  <Input onChange={(e) => changege(e.target.value)} />
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
                  <Input onChange={(e) => change(e.target.value)} />
                </Form.Item>
                <div className="flex justify-end">
                  <div className="w-[30%]">
                    <ButtonPrimary type="submit" title="Check In" />
                  </div>
                </div>
              </Form>
            </div>
            {/* <p className="text-blue-600 cursor-pointer" onClick={() => (navigate('/cancel-checkin'))}>cancel your checkin?</p> */}
          </div>
          <div className="md:hidden mt-20 w-auto h-auto">
            <LazyLoadImage src={login} alt="/" />
          </div>
        </div>
      </div>
      <SecondFooter />
    </div>
  );
};
