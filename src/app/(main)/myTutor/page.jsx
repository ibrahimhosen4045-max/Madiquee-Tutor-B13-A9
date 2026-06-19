import BannerMyTutor from '@/component/myTutor/BannerMyTutor'
import MyTutorCard from '@/component/myTutor/MyTutorCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'

const MyTutors = async () => {
  const session = await auth.api.getSession({
      headers: await headers() // you need to pass the headers object.
  })
  const user = session?.user
  const res = await fetch(`http://localhost:5500/my-tutors/${user?.id}`)
  const myTutor = await res.json();
  return (
    <div>
      <BannerMyTutor></BannerMyTutor>
      <div className='container w-11/12 max-w-7xl mx-auto flex flex-col gap-5 py-10'>
        {
          myTutor.map((info) => <MyTutorCard key={info._id} info= {info}></MyTutorCard>)
        }
      </div>
    </div>
  )
}

export default MyTutors
