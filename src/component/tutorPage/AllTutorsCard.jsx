import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiBook } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { TbExternalLink } from 'react-icons/tb'



const AllTutorsCard =  ({details}) => {
    
  return (
    <Link href={`/${details._id}`}>
    <div className='border border-gray-100 dark:border-gray-400 shadow-sm rounded-md overflow-hidden cursor-pointer group '>

      {/* IMAGE */}
      <div className='relative w-full h-62 overflow-hidden '>
        <Image
          src={details.photo || "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="}
          alt={details.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className='object-cover group-hover:scale-105 transition-all duration-300'
        />
      </div>

      {/* CONTENT */}
      <div className='pt-4 px-4 '>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-semibold'>
            {details.name}
          </h1>

          <span className='group-hover:text-[#40863c] transition'>
            <TbExternalLink />
          </span>
        </div>

        <p className='text-[#40863c] text-sm font-medium'>
          Instructor 
        </p>

        <div className='text-gray-500 dark:text-gray-300 text-sm grid grid-cols-2 py-4'>
          <h1 className='flex items-center gap-1 border-r border-gray-300 justify-start'>
            <BiBook />
            {details.subject}
          </h1>

          <h1 className='flex items-center gap-1 justify-end'>
            <FaUsers />
            Students 60+
          </h1>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default AllTutorsCard
