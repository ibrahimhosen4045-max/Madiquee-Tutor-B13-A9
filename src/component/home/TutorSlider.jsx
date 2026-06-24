"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import TutorCard from "./TutorCard";

const TutorSlider = ({ data }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".tutor-next",
          prevEl: ".tutor-prev",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },

          1280: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {data.map((info) => (
          <SwiperSlide key={info._id}>
            <TutorCard info={info} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow */}

      <button className=" tutor-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#40863c] hover:text-white transition ">
        ❮
      </button>

      <button className=" tutor-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#40863c] hover:text-white transition ">
        ❯
      </button>
    </div>
  );
};

export default TutorSlider;
