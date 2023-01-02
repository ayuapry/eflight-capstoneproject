// import Swiper core and required modules
import React, { useEffect } from "react";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Skeleton } from "antd";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { getHero } from "../redux/feature/homeSlice";

export const Hero = () => {
  const { hero, loading } = useSelector((state) => state.homepage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <div className="hidden md:block pt-[65px] w-fit mx-auto h-96 bg-blue-600">
          <Skeleton.Button
            active={true}
            shape={"default"}
            style={{
              height: "24rem",
              width: "48rem",
            }}
          />
        </div>
        <div className="md:hidden pt-[65px] w-fit mx-auto h-96">
          <Skeleton.Button
            active={true}
            shape={"default"}
            style={{
              height: "12rem",
              width: "48rem",
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div
      id="hero"
      className="pt-[65px] pb-10 md:pb-0 md:bg-blue-600 md:h-fit w-full"
    >
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
      >
        {hero &&
          hero.map((hero, i) => {
            return (
              <SwiperSlide key={i}>
                <img
                  loading="lazy"
                  className="md:max-w-3xl mx-auto"
                  src={hero?.imageURL}
                  alt="Banner1"
                  width="auto"
                  height="auto"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
