import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeftCircleIcon,
  CameraIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { Modal, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfile } from "../redux/feature/UserSlice";
import { useState, useEffect } from "react";
import { editAvatar } from "../redux/feature/historySlice";
import Swal from "sweetalert2";
import ImgCrop from "antd-img-crop";
import ButtonPrimary from "../components/ButtonPrimary";
import userIcon from "../assets/userIcon.png";


export const SidebarHistory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const { id } = useParams();
    const { profile } = useSelector((state) => state.user);
    
    useEffect(() => {
      dispatch(getProfile(id));
    }, [dispatch, id]);
  
    const logout = () => {
      Swal.fire({
        title: "Do you want to Log Out?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
        confirmButtonColor: "#2563eb",
        denyButtonColor: "#facc15",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          navigate("/");
        } else if (result.isDenied) {
          Swal.fire("Log Out Failed!", "", "info");
        }
      });
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
    <div className='bg-white shadow-lg md:h-[620px] mx-2 pt-20 md:pt-0 rounded-md'>
       <div className="w-fit mx-auto md:pt-4">
                <img
                  src={profile.imageURL || userIcon}
                  alt="nope"
                  className="h-24 w-24 object-cover rounded-full mx-auto bg-gray-400"
                />
                <CameraIcon
                  className="text-white bg-blue-500 p-1 rounded-full w-6 absolute -mt-8 ml-20 cursor-pointer"
                  onClick={showModal}
                />
                <Modal
                  title="Edit Profile Picture"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                  width={"20rem"}
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
              <div className='text-center'>
                <h1 className="font-bold md:text-xl text-lg mb-0 mt-4">
                  {profile?.fullName}
                </h1>
                <span className="text-sm">{profile?.email}</span>
              </div>
              <div className=" md:block py-10">
              <div
                className="px-5 py-3 text-white flex gap-2 cursor-pointer bg-blue-600 items-center"
                onClick={() => navigate('/profile-page')}
              >
                <UserCircleIcon className="h-6 w-6 " />
                <div className="font-semibold">Account</div>
              </div>
              <div className="flex px-5 pt-3 gap-2 cursor-pointer hover:bg-gray-300" onClick={()=> navigate('/history')}>
                <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-600" />
                <p className="font-semibold">Order History</p>
              </div>
              <div className="flex px-5 pt-3 gap-2 cursor-pointer hover:bg-gray-300" onClick={()=> navigate('/checkin')}>
                <CheckBadgeIcon className="h-6 w-6 text-blue-600" />
                <p className="font-semibold">Check-In</p>
              </div>
              <div className="hidden md:flex px-5 pt-3 gap-2 cursor-pointer hover:bg-gray-300" onClick={logout}>
                <ArrowLeftCircleIcon className="h-6 w-6 text-blue-600" />
                <p className="font-semibold">Logout</p>
              </div>
            </div>
    </div>
  )
}
