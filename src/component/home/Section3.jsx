"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@heroui/react";
import { CheckCircle2 } from "lucide-react";
import image1 from "@/assets/about.png";
import image2 from "@/assets/aboutbac.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";

const Section3 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // FLOATING IMAGE (continuous)
      gsap.to(".floting-img", {
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // IMAGE ENTER
      gsap.from(".about-left", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // SUB TITLE
      gsap.from(".about-subtitle", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // HEADING
      gsap.from(".about-heading", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      // CONTENT STAGGER
      gsap.from(".about-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[600px] flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 overflow-hidden bg-white"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="about-left flex-1">
          <div className="relative h-full w-full">

            <Image
              src={image2}
              alt="bg"
              className="floting-img absolute z-10 bottom-0 md:w-150"
            />

            <Image
              src={image1}
              alt="student"
              className="w-full md:w-100 h-auto object-cover relative z-20"
            />

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex flex-col gap-6 text-left">

          <span className="about-subtitle text-sm font-semibold tracking-wider text-[#40863c] uppercase">
            MORE ABOUT OUR COMPANY
          </span>

          <h2 className="about-heading text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            About Acadu Company
          </h2>

          <p className="about-content text-slate-600 text-sm leading-relaxed max-w-2xl">
            Synergistically visualize alternative content before cross functional core Rapidiously administer standardized value via focused benefits.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-2">

            <div className="about-content flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-[#40863c] fill-blue-50" />
              <div>
                <h4 className="text-lg font-bold">Competitive Rates</h4>
                <p className="text-sm text-slate-500">
                  Seamlessly envisioneer tactical data through services.
                </p>
              </div>
            </div>

            <div className="about-content flex gap-4 items-start">
              <CheckCircle2 className="w-6 h-6 text-[#40863c] fill-blue-50" />
              <div>
                <h4 className="text-lg font-bold">Online Certificates</h4>
                <p className="text-sm text-slate-500">
                  Seamlessly envisioneer tactical data through services.
                </p>
              </div>
            </div>

          </div>

          {/* BUTTON */}
          <div className="about-content mt-4">
            <button className="offer-btn cssbuttons-io-button">
              LEARN MORE

              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section3;