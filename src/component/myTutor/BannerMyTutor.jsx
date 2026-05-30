"use client"

import React, { useEffect, useRef } from 'react'
import image from '@/assets/page-33.jpg'
import Link from 'next/link'
import {ChevronRight} from '@gravity-ui/icons';
import gsap from 'gsap';

const BannerMyTutor = () => {
        const titleRef = useRef(null)
    const desCripRef = useRef(null)

    const amimatedText = () => {
        gsap.fromTo(
            titleRef.current,
            {
                x: -80,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                ease: "power3.out"
            }
        );
        gsap.fromTo(
            desCripRef.current,
            {
                x: -80,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.7,
                ease: "power3.out"
            }
        )
    }

    useEffect(()=>{
        amimatedText()
    },[])
  return (
    <div 
    className='w-full h-[45vh] bg-cover bg-center'
    style={{backgroundImage: `url(${image.src})`}}
    >
      <div className='w-full h-full bg-linear-to-b from-black/65 via-black/55 to-black/65 z-10 flex items-center '>
        <div className=' w-11/12 xl:w-7xl mx-auto z-20'>
            <h1 ref={titleRef} className='text-white text-4xl font-medium'>My Tutors</h1>
            <p ref={desCripRef} className='flex items-center gap-3 text-white py-3'>
                <Link href={'/'} className='hover:text-[#65A662]'>Home</Link>
                <ChevronRight/>
                <p>My Tutor</p>
            </p>
        </div>
      </div>
    </div>
  )
}

export default BannerMyTutor
