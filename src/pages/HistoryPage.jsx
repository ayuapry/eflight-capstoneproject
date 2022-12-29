import React from "react";
import Footer from "../components/Footer";
import {
  ArrowLeftCircleIcon,
  CameraIcon,
  CheckCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { Navbar } from "../components/Navbar";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsArrowLeftRight } from "react-icons/bs";
import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";
import { Button, DatePicker, Form, Input, Select, Modal, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SecondFooter } from "../components/SecondFooter";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { EditProfileModal } from "../components/EditProfileModal";
import { getProfile } from "../redux/feature/UserSlice";
import { useState, useEffect } from "react";
import { getHistory, editAvatar } from "../redux/feature/historySlice";
import ScrollToTop from "../components/ScrollToTop";
import Swal from "sweetalert2";
import noFlightData from "../assets/NoFlightData.svg";
import ImgCrop from "antd-img-crop";
import ButtonPrimary from "../components/ButtonPrimary";
import userIcon from "../assets/userIcon.png";

export const HistoryPage = () => {
  const { Option } = Select;
  const [select, setSelect] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editProfileModal, setEditProfileModal] = useState(false);
  const handleOnClose = () => setEditProfileModal(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const { profile } = useSelector((state) => state.user);
  const { history } = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getProfile(id));
    dispatch(getHistory());
  }, [dispatch, id]);

  const sorting = (values) => {
    // dispatch(getHistory(values))
    console.log(values);
  };

  const logout = () => {
    Swal.fire({
      title: "Do you want to Log Out?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      } else if (result.isDenied) {
        Swal.fire("Log Out Failed!", "", "info");
      }
    });
  };

  const handleClick = (bookingId) => {
    navigate(`/detail-history/${bookingId}`);
  };

  const noData = () => {
    return (
      <div className="flex justify-center items-center text-center">
        <div>
          <img src={noFlightData} className="h-66 pt-4" alt="/" />
          <p className="font-semibold mb-0 text-lg">
            You don't have a booking history
          </p>
          <p className="text-gray-400 md:text-base text-sm">
            Book your flight tickets now
          </p>
        </div>
      </div>
    );
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const uploadAva = () => {
    dispatch(editAvatar(fileList[0]));
    console.log(fileList[0]);
  };

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div className="bg-slate-100">
      <ScrollToTop />
      <Navbar />
      <div className="max-w-[1240px] mx-auto md:px-16 px-4 pb-10 bg-slate-100 md:min-h-screen">
        <div className="grid md:grid-cols md:grid-cols-[30%_70%] gap-2">
          <div className="bg-white mt-20 rounded-md shadow-md md:h-[350px] ">
            <div className=" mt-6 mb-4 gap-2 mx-16 items-center text-center">
              <div>
                <img
                  src={profile.imageURL || userIcon}
                  alt="nope"
                  className="h-24 w-24 object-cover rounded-full mx-auto bg-gray-400"
                />
                <CameraIcon
                  className="text-white bg-blue-500 p-1 rounded-full w-6 absolute -mt-8 ml-32 cursor-pointer"
                  onClick={showModal}
                />
                <Modal
                  title="Edit Profile Picture"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                  width={"20%"}
                >
                  <div className="w-full flex justify-center">
                    <div className="w-fit mt-4">
                      <ImgCrop rotate>
                        <Upload
                          action="http://localhost:3000"
                          listType="picture-card"
                          onChange={onChange}
                          onPreview={onPreview}
                        >
                          {fileList.length < 1 && "+ Upload"}
                        </Upload>
                      </ImgCrop>
                    </div>
                  </div>
                  <div className="w-fit mx-auto mt-4">
                    <ButtonPrimary title="Save" click={uploadAva} />
                  </div>
                </Modal>
              </div>
              <div>
                <h1 className="font-bold md:text-xl text-lg mb-0 mt-4">
                  {profile?.fullName}
                </h1>
                <span className="text-sm">{profile?.email}</span>
              </div>
            </div>
            <div className=" md:block mx-10 my-10">
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setEditProfileModal(true)}
              >
                <UserCircleIcon className="h-6 w-6 text-blue-600" />
                <p className="font-semibold">Account</p>
              </div>
              <Link to="/checkin" className="flex gap-2 cursor-pointer">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                <p className="font-semibold">Check-In</p>
              </Link>
              <div className="flex gap-2 cursor-pointer" onClick={logout}>
                <ArrowLeftCircleIcon className="h-6 w-6 text-blue-600" />
                <p className="font-semibold">Logout</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md md:mt-20">
            <div className="grid md:grid-cols md:grid-cols-[60%_40%] px-4 my-4 border-b-2 bor">
              <div className="">
                <h1>Order History</h1>
                <span className="text-gray-400">
                  This is the history of your trip
                </span>
              </div>
              <div className="my-4">
                <Select placeholder="Sort By" allowClear>
                  <Option onClick={sorting("ASC")} value="recent">
                    ASCENDING
                  </Option>
                  <Option onClick={sorting("DESC")} value="early">
                    DESCENDING
                  </Option>
                </Select>
              </div>
            </div>
            {history ? "" : noData()}
            {history?.length > 0 &&
              history.map((histo, i) => (
                <div key={i} className="mx-2 my-2">
                  <div className="bg-white border-2 border-gray-100 shadow-md w-full md:h-[220px] px-3 py-3  rounded-md">
                    <div className="flex gap-2 pb-4">
                      <GiCommercialAirplane color="skyblue" />
                      <p>Flights</p>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Order ID: {histo.bookingId}
                    </p>

                    {histo?.departure?.data.slice(0, 1).map((city, i) => (
                      <>
                        <div key={i} className="flex gap-2 font-semibold">
                          <p>{city.schedule.originAirport.city}</p>
                          <BsArrowLeftRight />
                          <p>{city.schedule.destinationAirport.city}</p>
                        </div>
                      </>
                    ))}
                    <div className="md:flex gap-3 items-center text-sm">
                      <p>
                        {histo.bookingType} - {histo.adult} adults,{" "}
                        {histo.child} child
                      </p>
                      {histo?.departure?.data.slice(0, 1).map((data, i) => (
                        <>
                          <div key={i} className="flex gap-2">
                            <FaPlaneDeparture color="skyblue" />
                            <p>
                              {data.schedule.departureDate} .{" "}
                              {data.schedule.departureTime}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <FaPlaneArrival color="skyblue" />
                            <p>
                              {data.schedule.arrivalDate} .{" "}
                              {data.schedule.arrivalTime}
                            </p>
                          </div>
                          <div className="">
                            <p>
                              {data?.checkInStatus === true ? (
                                <div className="w-fit bg-green-500 rounded-full text-white px-3 py-1">
                                  Already checked in
                                </div>
                              ) : (
                                <div className="w-fit bg-red-500 rounded-full text-white px-3 py-1">
                                  Haven't checked in
                                </div>
                              )}
                            </p>
                          </div>
                        </>
                      ))}
                    </div>
                    <p
                      className="text-end text-sm text-blue-600 hover:text-[#a6c2d0] pr-2 cursor-pointer"
                      onClick={() => handleClick(histo.bookingId)}
                    >
                      See Details
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
      <SecondFooter />
      <EditProfileModal open={editProfileModal} close={handleOnClose} />
    </div>
  );
};
