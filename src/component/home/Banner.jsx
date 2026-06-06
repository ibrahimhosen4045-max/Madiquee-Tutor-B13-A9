"use client";

import React, { useEffect, useRef } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";


// GSAP
import gsap from "gsap";

// styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import image1 from "@/assets/page-22.jpg";
import image2 from "@/assets/page-1.jpg";
import image3 from "@/assets/page-11.jpg";
import { ArrowRight } from "@gravity-ui/icons";


const Banner = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null)
  const expariensRef = useRef(null)

  const slides = [image1, image2, image3];

  // 🔥 GSAP animation function
  const animateText = () => {
    gsap.fromTo(
      titleRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      textRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      {x: -80, opacity: 0},
      {x: 0, opacity: 1, duration: 1, delay: 0.4, ease: "power3.out"}
    );
    
    gsap.fromTo(
    expariensRef.current,
    { y: 80, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
  );
  };

  useEffect(() => {
    animateText();
  }, []);

  return (
    <div className="w-full h-165 md:h-165 lg:h-170 xl:h-185 relative overflow-hidden">
      
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={500}
        pagination={{ clickable: true }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="h-full"
        onSlideChange={() => animateText()} // 🔥 important
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${img.src})`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      

      {/* Overlay Text */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center bg-linear-to-b from-black/60 via-black/50 to-black/60 z-10">
      
        <div className="container w-11/12 xl:w-7xl mx-auto text-white">
          <h1 ref={titleRef} className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold max-w-4xl">
            Learn  Online with Professional  Instructors
          </h1>

          <p ref={textRef} className="text-sm mt-4 max-w-xl">
            Education can be thought og as the transmission of the value and accumulated knowledge of a society. in this sense, it is equivalent.
          </p>

          <button ref={buttonRef} className="offer-btn cssbuttons-io-button mt-10">
              All Tutors
              <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>

                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            </button>

          <div ref={expariensRef} className="flex gap-5 flex-wrap relative top-10 md:top-15">
            <div className="flex gap-2 items-center md:border-r pr-5">
              <h1 className="text-[30px] lg:text-[40px] font-medium text-[#65A662]">10</h1>
              <div className=" ">
                <h1 className="text-[16px] lg:text-[22px] leading-5">Years</h1>
                <p className="text-xs">of excellence in education</p>
              </div>
            </div>
            <div className="flex gap-2 items-center md:border-r pr-5">
              <h1 className="text-[30px] lg:text-[40px] font-medium text-[#65A662]">96%</h1>
              <div className=" ">
                <h1 className="text-[16px] lg:text-[22px] leading-5">Recommended</h1>
                <p className="text-xs">Recommended by students</p>
              </div>
            </div>
            <div className="flex gap-2 items-center ">
              <h1 className="text-[30px] lg:text-[40px] font-medium text-[#65A662]">40K</h1>
              <div className=" ">
                <h1 className="text-[16px] lg:text-[22px] leading-5">Students</h1>
                <p className="text-xs">from 100 countries</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Banner;