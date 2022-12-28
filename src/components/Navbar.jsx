import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LogoText from "../assets/LogoText.png";
import { Dropdown } from "antd";
import userIcon from "../assets/userIcon.png";
import ButtonPrimary from "./ButtonPrimary";
import { BellIcon, BellSlashIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../redux/feature/NotificationSlice";
import Swal from "sweetalert2";

export const Navbar = () => {
  const { notification } = useSelector((state) => state.notification);
  const [select, setSelect] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNotification(id));
  }, [dispatch, id]);
  console.log(notification);

  const SeeAllNotif = () => {
    window.location.replace("/allnotif");
  }

  const logout = () => {
    Swal.fire({
      title: 'Do you want to Log Out?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: "#2563eb",
      denyButtonColor: "#facc15",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate('/');
      } else if (result.isDenied) {
        Swal.fire('Log Out Failed!', '', 'info');
      }
    });
  };
  const items = [
    {
      key: "1",
      label: <Link to="/history">Profile</Link>,
    },
    {
      key: "2",
      label: <div onClick={logout}>Logout</div>,
    },
  ];

  return (
    <div className="py-3 w-screen bg-white fixed z-50">
      <div className="flex justify-between items-center px-5 max-w-7xl mx-auto md:px-20">
        <div className="md:hidden">
          {token ? (
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <img
                className="h-8 w-8 rounded-full bg-gray-400 p-1"
                src={userIcon}
                alt="profile"
              />
            </Dropdown>
          ) : (
            <img
              className="h-8 w-8 rounded-full bg-gray-400 p-1"
              src={userIcon}
              alt="profile"
              onClick={() => navigate("/Login")}
            />
          )}
        </div>
        <a href="/" className="flex items-center">
          <img src={LogoText} className="w-40" alt="" />
        </a>
        <ul className="hidden md:flex gap-3 md:text-md mt-3">
          <a
            href="/#Destination"
            className="hover:text-blue-600 hover:font-semibold"
          >
            Destination
          </a>
          <a
            href="/#Booking"
            className="hover:text-blue-600 hover:font-semibold"
          >
            Booking
          </a>
          <a
            href="/#Services"
            className="hover:text-blue-600 hover:font-semibold"
          >
            Services
          </a>
        </ul>

        <div className="flex gap-3 items-center md:w-40 justify-end">
          <div className="filter-dropdowns">
            <div className="relative inline-block text-left">
              {token ? (
                <div 
                  className="cursor-pointer"
                  onClick={() => 
                  setSelect(!select)
                  
                }>
                  <div className=" h-4 w-auto bg-blue-600 ml-4 -mb-4 rounded-full border-1 border-gray-300 relative text-xs text-center text-white">
                      {notification?.unreadCount}
                  </div>
                  <div className="h-8 w-8 rounded-full my-0 relative -z-10 ">
                    <BellIcon
                      size={30}
                      className="text-gray-400"
                    />
                  </div>
                </div>
              ) : (
                <div></div>
              )}
              {token ? (
                <>
                  <div
                    className={`absolute right-0 z-10 mt-2 w-[300px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 px-2 
                      ${
                          select
                            ? "visible transform opacity-100 scale-100"
                            : "invisible transform opacity-0 scale-95"
                        }`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button">
                        <div>

                        </div>
                      {notification?.notifications?.length > 0 ? (
                      // Notif 3 data terbaru
                      notification?.notifications?.slice(-3).map((notif) => (
                        <div>
                          <div className="mx-3 my-3">
                            <div key={notif.id}>
                              <span className="font-semibold">{notif?.title}</span>
                              <br />
                              <span className="text-[0.78rem]">{notif?.description}</span>
                            </div>
                          </div>
                        </div>
                        
                      )
                      )
                    ) : (
                      <div>
                        <div className="h-10 w-10 flex items-center text-center mx-auto my-5">
                          <BellSlashIcon className="text-gray-200" />
                        </div>
                        <p className="mx-auto text-center text-gray-300">
                          You don't have any notifications ..
                        </p>
                      </div>
                    )}
                    {notification?.notifications?.length > 0 && (
                    <div className='flex flex-col justify-start'>
                      <div className='mb-2 w-full'>
                        <ButtonPrimary title='VIEW ALL' click={SeeAllNotif} className='w-full'/>
                      </div>
                    </div>
                    )}
                </div>
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="hidden md:flex cursor-pointer">
            <Dropdown menu={{ items }} placement="bottom" arrow>
              {token ? (
                <img
                  className="h-8 w-8 rounded-full bg-gray-400 p-1"
                  src={userIcon}
                  alt=""
                />
              ) : (
                <ButtonPrimary title="Login" click={() => navigate("/Login")} />
              )}
            </Dropdown>
          </div>
        </div>
        
      </div>
    </div>
  );
};
