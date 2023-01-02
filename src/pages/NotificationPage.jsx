import React from "react";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllNotification } from "../redux/feature/NotificationSlice";
import ScrollToTop from "../components/ScrollToTop";
import { MdOutlineDownloadDone } from "react-icons/md";
import ButtonPrimary from "../components/ButtonPrimary";
import { SecondFooter } from "../components/SecondFooter";
import notif from "../assets/notif.webp";

export const NotificationPage = () => {
  const { allNotif } = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(AllNotification(id));
  }, [dispatch, id]);

  const Back = () => {
    window.location.replace("/allnotif");
  };

  return (
    <div className="h-full md:h-screen LiGradien2">
      <ScrollToTop />
      <Navbar />
      <div className="h-full md:h-[65vh] max-w-[1240px] mx-auto px-5 md:px-14 pb-5 md:pb-10 pt-[65px] md:pt-0 flex flex-col justify-start md:justify-center">
        <div>
          <div className="font-semibold text-blue-600 text-xl my-5 bg-yellow-400 w-fit px-4 py-1 rounded-[100px]">
            Notification
          </div>
          {allNotif && (
            <div key={id} className=" pb-5 ">
              <article className="border-b-2 border-blue-600 bg-sky-100 shadow-md rounded-md">
                <div className="flex gap-5 items-center px-4">
                  <div className=" mb-4 space-x-4 mt-5">
                    <MdOutlineDownloadDone className="h-16 w-16 text-black mx-5" />
                  </div>
                  <div className="mt-5">
                    <p className="mb-2 font-semibold text-black">
                      {allNotif?.title}
                    </p>
                    <p className="mb-5 font-light text-black">
                      {allNotif?.description}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          )}
          <div className="flex flex-col justify-start">
            <div className="mb-2 w-full">
              <ButtonPrimary
                title="BACK TO NOTIFICATIONS"
                click={Back}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden mt-20">
          <img src={notif} alt="/" />
        </div>
      </div>
      <Footer />
      <SecondFooter />
    </div>
  );
};
