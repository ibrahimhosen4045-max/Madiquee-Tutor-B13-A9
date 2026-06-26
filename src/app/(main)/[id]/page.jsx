

import DetailsBn from '@/component/details/DetailsBn'
import DetailsCard from '@/component/details/DetailsCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

import React from 'react'

const page = async ({params}) => {
    const {id} = await params

    const tokenData = await auth.api.getToken({
      headers: await headers()
    })
    const token = tokenData?.token
    
      const res = await fetch(`http://localhost:5500/tutors/${id}`, {
        cache: "no-store",
        headers: {
          authorization: `Bearer ${token}`
        }
      })

      const data = await res.json()
      

  return (
    <div>
      <DetailsBn data = {data}></DetailsBn>
      <DetailsCard details = {data}></DetailsCard>
    </div>
  )
}

export default page
