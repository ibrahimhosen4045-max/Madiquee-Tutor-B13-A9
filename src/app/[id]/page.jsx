'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const page = ({params}) => {
    const {id} = useParams()
    console.log(id)
  return (
    <div>
      
    </div>
  )
}

export default page
