"use client"

import React, { useState } from 'react'
import BookSessionCard from './BookSessionCard'

const BookingList = ({bookings}) => {
    const [booking, setBooking] = useState(bookings)
    const handleDelete = (id) => {
      setBooking(prev => prev.filter(item => item._id !== id))
    }
  return (
    
       <div className='flex flex-col gap-6 py-10'>
          {booking.map((info) => (
            <BookSessionCard key={info._id} info={info} onDelete={handleDelete}/>
          ))}
        </div>
    
  )
}

export default BookingList
