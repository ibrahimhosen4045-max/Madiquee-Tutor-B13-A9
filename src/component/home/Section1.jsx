"use client"

import React, { useEffect, useRef } from 'react'
import image from '@/assets/vector1.png'
import image1 from '@/assets/vector2.png'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './home.css'

const Section1 = () => {
  const sectionRef = useRef(null)

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    gsap.from(".card-left", {
      x: -120,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".card-right", {
      x: 120,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".sec1-img", {
      scale: 0.7,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }, sectionRef);

  return () => {
    ctx.revert(); // cleanup on route change
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div ref={sectionRef} className='pb-20'>

      {/* TITLE (NO ANIMATION) */}
      <div className='w-11/12 mx-auto text-center pt-20 pb-10 flex flex-col items-center gap-4'>
        <h2 className='font-semibold text-[#40863c]'>
          INSTRUCTORS & STUDENTS
        </h2>

        <h1 className='text-[28px] md:text-[40px] font-semibold'>
          What You Looking For?
        </h1>

        <p className='text-sm max-w-150'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
        </p>
      </div>

      <div className='w-11/12 lg:max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-50 md:gap-6 lg:gap-15 pt-45'>

          {/* LEFT */}
          <div className='card-left flex flex-col gap-6 items-center text-center px-15 pt-25 pb-10 bg-[#40863c]/10 rounded-xl relative'>
            <Image
              className='sec1-img absolute -top-43'
              src={image}
              alt='teacher'
              width={300}
              height={300}
            />

            <h1 className='text-2xl font-semibold'>
              Do You Want To Teach Here?
            </h1>

            <p className='text-sm'>
              Explore all of our courses and pick your suitable ones to enroll and start learning with us!
            </p>

            <button className="offer-btn cssbuttons-io-button">
              REGISTER NOW
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
          </div>

          {/* RIGHT */}
          <div className='card-right flex flex-col gap-6 items-center text-center px-15 pt-25 pb-10 bg-red-500/10 rounded-xl relative'>
            <Image
              className='sec1-img absolute -top-40'
              src={image1}
              alt='student'
              width={330}
              height={330}
            />

            <h1 className='text-2xl font-semibold'>
              Want To Learn Something New?
            </h1>

            <p className='text-sm'>
              Explore all of our courses and pick your suitable ones to enroll and start learning with us!
            </p>

            <button className="offer-btn cssbuttons-io-button1">
              REGISTER NOW
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

          </div>

        </div>
      </div>
    </div>
  )
}

export default Section1