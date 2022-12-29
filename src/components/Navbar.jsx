import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LogoText from "../assets/LogoText.png";
import { Dropdown } from "antd";
import userIcon from "../assets/userIcon.png";
import ButtonPrimary from "./ButtonPrimary";
import { BellIcon, BellSlashIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../redux/feature/NotificationSlice";
import Swal from "sweetalert2";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { RiUserReceived2Line } from "react-icons/ri";
import { Menu, Transition } from "@headlessui/react";
import { getProfile } from "../redux/feature/UserSlice";
// import { user } from "./SecondFooter";

export const Navbar = () => {
  const { notification } = useSelector((state) => state.notification);
  const { profile } = useSelector((state) => state.user);
  const [select, setSelect] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNotification(id));
    dispatch(getProfile());
  }, [dispatch, id]);
  console.log(notification);

  const SeeAllNotif = () => {
    window.location.replace("/allnotif");
  };

  const logout = () => {
    Swal.fire({
      title: "Do you want to Log Out?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "#2563eb",
      denyButtonColor: "#facc15",
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
  return (
    <div className="py-3 w-screen bg-white fixed z-50">
      <div className="flex justify-between items-center px-5 max-w-7xl mx-auto md:px-20">
        <div className="md:hidden">
          {token ? (
            <div>
              <Menu as="div">
                <div>
                  <Menu.Button>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-400"
                      src={profile?.imageURL || userIcon}
                      alt="profile"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute mt-2 w-[10rem] left-4 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => navigate("/history")}
                            className={`${
                              active
                                ? " text-blue-500 focus:outline-none focus:ring-2 focus:ring-[#FFE69A]"
                                : "text-black"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                          >
                            {active ? (
                              <FaRegUser
                                className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                aria-hidden="true"
                              />
                            ) : (
                              <FaRegUser
                                className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                aria-hidden="true"
                              />
                            )}
                            Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logout}
                            className={`${
                              active
                                ? " text-blue-500 focus:outline-none focus:ring-2 focus:ring-[#FFE69A]"
                                : "text-black"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                          >
                            {active ? (
                              <RiUserReceived2Line
                                className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                aria-hidden="true"
                              />
                            ) : (
                              <RiUserReceived2Line
                                className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                aria-hidden="true"
                              />
                            )}
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <img
              className="h-8 w-8 rounded-full bg-gray-400 p-1"
              src={profile?.imageURL || userIcon}
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
                  onClick={() => setSelect(!select)}
                >
                  <div className=" h-4 w-auto bg-blue-600 ml-4 -mb-4 rounded-full border-1 border-gray-300 relative text-xs text-center text-white">
                    {notification?.unreadCount}
                  </div>
                  <div className="h-8 w-8 rounded-full my-0 relative -z-10 ">
                    <BellIcon size={30} className="text-gray-400" />
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
                    aria-labelledby="menu-button"
                  >
                    <div></div>
                    {notification?.notifications?.length > 0 ? (
                      notification?.notifications?.slice(-3).map((notif) => (
                        <div>
                          <div className="mx-3 my-3">
                            <div key={notif.id}>
                              <span className="font-semibold">
                                {notif?.title}
                              </span>
                              <br />
                              <span className="text-[0.78rem]">
                                {notif?.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
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
                      <div className="flex flex-col items-end justify-end w-full">
                        <div className="mb-2">
                          <p
                            className="flex w-fit justify-end text-blue-600 hover:text-blue-300 cursor-pointer"
                            onClick={SeeAllNotif}
                          >
                            view all ...
                          </p>
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
            {token ? (
              <div>
                <Menu as="div">
                  <div>
                    <Menu.Button>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-400"
                        src={profile?.imageURL || userIcon}
                        alt="profile"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute mt-2 w-[11rem] right-20 origin-top-left divide-y md:origin-top-right divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => navigate("/history")}
                              className={`${
                                active
                                  ? " text-blue-500 focus:outline-none focus:ring-2 "
                                  : "text-black"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                            >
                              {active ? (
                                <FaRegUser
                                  className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                  aria-hidden="true"
                                />
                              ) : (
                                <FaRegUser
                                  className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                  aria-hidden="true"
                                />
                              )}
                              Profile
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? " text-blue-500 focus:outline-none focus:ring-2 "
                                  : "text-black"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                              onClick={logout}
                            >
                              {active ? (
                                <RiUserReceived2Line
                                  className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                  aria-hidden="true"
                                />
                              ) : (
                                <RiUserReceived2Line
                                  className="mr-2 h-5 w-5 text-blue-600 font-extrabold"
                                  aria-hidden="true"
                                />
                              )}
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            ) : (
              <ButtonPrimary title="Login" click={() => navigate("/Login")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
