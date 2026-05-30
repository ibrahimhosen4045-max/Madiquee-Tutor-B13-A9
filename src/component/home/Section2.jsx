"use client"

import React, { useEffect, useRef } from 'react'
import bgimage from '@/assets/cta_bg_1-6-1.jpg'
import overlay from '@/assets/bg_overlay_1-6-1.png'
import { Book } from '@gravity-ui/icons';
import './home.css'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section2 = () => {

  const sectionRef = useRef(null);

 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    gsap.from(".offer-top", {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 55%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".offer-heading", {
      x: -150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".offer-btn", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 45%",
        toggleActions: "play none none none",
      },
    });
  }, sectionRef);

  return () => {
    ctx.revert();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div
      ref={sectionRef}
      className='mb-40 mt-20 w-full h-110 bg-cover bg-center'
      style={{ backgroundImage: `url(${bgimage.src})` }}
    >
      <div
        className='w-full h-full bg-cover bg-center text-white flex flex-col items-center justify-center gap-5 overflow-hidden 
         relative'
        style={{ backgroundImage: `url(${overlay.src})` }}
      >
        
        <h1 className='offer-top flex items-center gap-1 uppercase'>
          <Book width={20} height={20} />
          Are You Ready For This Offer
        </h1>

        <h1 className='offer-heading text-[26px] md:text-4xl font-bold'>
          50% Offer For Very First 50
        </h1>

        <h1 className='offer-heading text-[26px] md:text-4xl font-normal'>
          Student’s & Mentors
        </h1>

        <div className='flex flex-wrap gap-3 items-center justify-center'>
          
          <button className="offer-btn cssbuttons-io-button">
            BECOME A STUDENT

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

          <button className="offer-btn cssbuttons-io-button2">
            BECOME A TEACHER

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
  )
}

export default Section2