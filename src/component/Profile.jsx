"use client"

import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileUp from './ProfileUp'
import {Xmark} from '@gravity-ui/icons';


const Profile = ({user}) => {
    const [open, setOpen] = useState(false)
    const handleSineOut = async () => {
      await authClient.signOut();
    }
  return (
    <div>
      <div onClick={()=>setOpen(true)} className="rounded-full overflow-hidden h-12.5 w-12.5 border-2">
        <Image alt="John Doe" src={user?.image} width={40} height={40} className=" w-full h-full object-cover object-center"/>
    </div>
    <div className={`fixed top-0 right-0 h-screen w-full md:w-90 bg-gray-100 dark:bg-[#222] shadow-lg z-50 transform transition-transform duration-300 
    ${open ? "translate-0" : "translate-x-full"}
      `}>
      <div>
        <div className='flex justify-end pt-7 px-10'>
          <button onClick={()=>setOpen(false)} className=' cursor-pointer hover:text-[#65A662]'><Xmark width={20} height={20}/></button>
        </div>
        <div className='flex flex-col items-center py-4'>
          <div className='w-50 h-50 overflow-hidden rounded-full border-3 shadow-md border-[#65A662]'>
            <Image src={user?.image} alt={user?.name} width={200} height={200} className='w-full object-cover h-full'/>
          </div>
          <div className='flex flex-col items-center gap-1 py-3 '>
            <h1 className='text-lg font-semibold text-[#65A662]'>{user?.name}</h1>
            <h1>{user?.email}</h1>
            <ProfileUp></ProfileUp>
          </div>
        </div>
        <div className='w-50 mx-auto'>
          <button onClick={handleSineOut} className="offer-btn cssbuttons-io-button mt-10 w-full ">
             <h1 className='w-full uppercase'>SignOut</h1>
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

export default Profile
