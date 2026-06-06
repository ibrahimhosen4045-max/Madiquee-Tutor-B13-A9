

import DetailsBn from '@/component/details/DetailsBn'
import DetailsCard from '@/component/details/DetailsCard'

import React from 'react'

const page = async ({params}) => {
    const {id} = await params
    
      const res = await fetch(`http://localhost:5500/tutors/${id}`, {
        cache: "no-store"
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
