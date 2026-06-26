import BannerMyTutor from '@/component/myTutor/BannerMyTutor'
import MyTutorCard from '@/component/myTutor/MyTutorCard'
import MyTutorList from '@/component/myTutor/MyTutorList'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'

const MyTutors = async () => {
  const session = await auth.api.getSession({
      headers: await headers() // you need to pass the headers object.
  })
  const user = session?.user
  const tokenData = await auth.api.getToken({
    headers: await headers()
  })
  const token = tokenData?.token
  const res = await fetch(`http://localhost:5500/my-tutors/${user?.id}`, {
    cache:"no-store",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const myTutor = await res.json();
  
  return (
    <div>
      <BannerMyTutor></BannerMyTutor>
      <div className='container w-11/12 max-w-7xl mx-auto  py-10'>
        <MyTutorList initialData = {myTutor}></MyTutorList>
      </div>
    </div>
  )
}

export default MyTutors
