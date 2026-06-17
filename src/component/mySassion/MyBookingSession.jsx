import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import BookSessionCard from './BookSessionCard'

const MyBookingSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user
console.log(user)

  const res = await fetch(`http://localhost:5500/booking/${user?.id}`)

  const booking = await res.json()
  console.log(booking)
  return (
  <div className='container w-11/12 max-w-7xl mx-auto py-10'>
    <h2 className="text-2xl font-bold mb-6 ">My Booked Sessions</h2>

    {booking.length === 0 ? (

      <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
        <p className="text-lg text-gray-500 font-medium">You haven't booked any sessions yet!</p>
      </div>

    ) : (
            
          <div className='flex flex-col gap-6 py-10'>
            {booking.map((info) => (
              <BookSessionCard key={info._id} info={info} />
            ))}
          </div>
    
    )}
  </div>
)
}

export default MyBookingSession
