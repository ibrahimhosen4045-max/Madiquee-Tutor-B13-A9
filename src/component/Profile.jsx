"use client"

import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileUp from './ProfileUp'

const Profile = ({user}) => {
    const [open, setOpen] = useState(false)
    const handleSineOut = async () => {
      await authClient.signOut();
    }
  return (
    <div>
      <div onClick={()=>setOpen(true)} className="rounded-full overflow-hidden h-12.5 w-12.5 border-2">
        <Image alt="John Doe" src={user?.image} width={40} height={40} className=" w-full object-cover object-center"/>
    </div>
    <div className={`fixed top-0 right-0 h-screen w-full md:w-90 bg-gray-100 dark:bg-[#222] shadow-lg z-50 transform transition-transform duration-300 
    ${open ? "translate-0" : "translate-x-full"}
      `}>
      <div>
        <div>
          <button onClick={()=>setOpen(false)} className=' cursor-pointer'>X</button>
        </div>
        <div className='flex flex-col items-center py-4'>
          <div className='w-50 h-50 overflow-hidden rounded-full border-3 shadow-md border-[#65A662]'>
            <Image src={user?.image} alt={user?.name} width={200} height={200} className='w-full object-cover objex'/>
          </div>
          <div className='flex flex-col items-center gap-1 py-3 '>
            <h1 className='text-lg font-semibold text-[#65A662]'>{user?.name}</h1>
            <h1>{user?.email}</h1>
            <ProfileUp></ProfileUp>
          </div>
        </div>
        <div>
          <button onClick={handleSineOut}>SineOur-</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
