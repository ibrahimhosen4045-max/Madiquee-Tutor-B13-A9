import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import BookSessionCard from './BookSessionCard'
import BookingList from './BookingList'
import { authClient } from '@/lib/auth-client'

const MyBookingSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user

  const tokenData = await auth.api.getToken({
      headers: await headers()
    })
    const token = tokenData?.token
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const booking = await res.json()
  
  return (
  <div className='container w-11/12 max-w-7xl mx-auto py-10'>
    <h2 className="text-2xl font-bold mb-6 ">My Booked Sessions</h2>

    {booking.length === 0 ? (

      <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
        <p className="text-lg text-gray-500 font-medium">You haven't booked any sessions yet!</p>
      </div>

    ) : (
            
          <BookingList bookings ={booking}></BookingList>
    
    )}
  </div>
)
}

export default MyBookingSession
