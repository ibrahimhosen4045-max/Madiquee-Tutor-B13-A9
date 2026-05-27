"use client"

import React, { useEffect, useRef } from 'react'
import image1 from '@/assets/page-22.jpg'
import gsap from 'gsap'

const Banner = () => {
  const titleRet = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(()=> {
    gsap.from(titleRet.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.from(subtitleRef.current, {
      x: -150,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out"
    })
  },[])
  return (
    <div className='w-full h-[80vh] bg-cover bg-right' style={{backgroundImage: `url(${image1.src})`}}>
      <div className='w-full h-full bg-linear-to-bl from-black/30 via-black/50 to-black/85 text-center flex items-center justify-center flex-col'>
        <h1
        ref={titleRet}
         className='font-bold text-white text-6xl'>hello world</h1>
        <p
        ref={subtitleRef}
         className='text-2xl text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, blanditiis!</p>
      </div>
    </div>
  )
}

export default Banner
