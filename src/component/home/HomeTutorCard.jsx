import React from 'react'
import TutorCard from './TutorCard'
import { FaArrowRightLong } from 'react-icons/fa6'
import TutorSlider from './TutorSlider'

const HomeTutorCard =async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const data = await res.json()
  return (
    <div className='pb-20'>
      <div className='container w-11/12 max-w-7xl mx-auto flex items-center justify-between py-4 '>
        <h1 className='text-2xl font-semibold'>Meet Our Tutors</h1>
        <button className='flex items-center gap-2 hover:text-[#40863c] cursor-pointer'>All Tutors <FaArrowRightLong /></button>
      </div>
      <div className=' container w-11/12 max-w-7xl mx-auto ' >
      <TutorSlider data={data}/>
    </div>
    </div>
  )
}

export default HomeTutorCard
