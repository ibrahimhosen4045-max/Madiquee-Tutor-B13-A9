"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonials = () => {

  const testimonialData = [
    {
      id: 1,
      text: "“Markets maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche”",
      name: "Vlademir Hilton",
      role: "Manager",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      stars: 5,
    },
    {
      id: 2,
      text: "“Markets maximize visionary solutions after mission critical action items productivate premium portals for impactful -services stinctively negotiate enabled niche”",
      name: "Juniatur Rahman",
      role: "Founder",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      stars: 4,
    },
    {
      id: 3,
      text: "“Mission maximize visionary solutions after mission critical ac items productivate premium portals for impactful -services stir negotiate enabled niche markets”",
      name: "JR Shawon",
      role: "CEO & Owner",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      stars: 5,
    },
    {
      id: 4,
      text: "“Great experience working with this platform. The lessons are clear, and the support team is always helpful. Highly recommend for any student seeking real growth.”",
      name: "Alex Joshua",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
      stars: 4,
    },
    {
      id: 5,
      text: "“The structured modules and global certificates helped me land my dream job. It provides exceptional value far beyond the traditional online courses.”",
      name: "Sarah Jenkins",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026709d",
      stars: 5,
    },
    {
      id: 6,
      text: "“Incredible learning ecosystem! The community is very active and the practical exercises give real-world confidence to excel in the competitive market.”",
      name: "Mohammad Ali",
      role: "Product Manager",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026710d",
      stars: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${index < rating ? "text-amber-500" : "text-gray-600"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="w-full  py-20 px-4 md:px-8 lg:px-16 text-center relative overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10">

        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest text-[#40863c] uppercase block mb-3">
            WHAT STUDENT SAYS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  tracking-wide">
            Student’s Testimonials
          </h2>
        </div>


        <div className="pb-14">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24} 
            slidesPerView={1}  
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
           
            breakpoints={{
              768: {
                slidesPerView: 2, 
              },
              1024: {
                slidesPerView: 3, 
              },
            }}
            className="testimonial-swiper "
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id} className="h-auto ">
                <div className=" backdrop-blur-md border border-black/60 dark:border-white/60 rounded-lg p-8 flex flex-col justify-between h-full  transition-all duration-300 group text-left">
                 
                  <p className=" text-[14px] leading-relaxed font-light mb-8 italic">
                    {item.text}
                  </p>

                  <div>
                    
                    <div className="w-full border border-t  my-4" />

                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="w-11 h-11 rounded-full object-cover border  transition-colors"
                        />
                        <div>
                          <h4 className=" font-semibold text-[15px]">
                            {item.name}
                          </h4>
                          <p className="text-[#40863c] text-xs mt-0.5">{item.role}</p>
                        </div>
                      </div>

                      <div className="flex gap-0.5">{renderStars(item.stars)}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        
        
      </div>
    </section>
  );
};

export default Testimonials;