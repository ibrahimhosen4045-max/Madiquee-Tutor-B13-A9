
import AllTutorsCard from '@/component/tutorPage/AllTutorsCard'
import TutorBan from '@/component/tutorPage/TutorBan'
import React from 'react'

const fetchData = async () => {
    const res = await fetch(`${"http://localhost:5500/tutors"}`)
    const data = await res.json()
    return data || []
}



const Tutors = async () => {
  const tutors = await fetchData()
  
  return (
    <div>
        <TutorBan></TutorBan>
        <div className=' container w-11/12 xl:w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
          {tutors?.map((t) => <AllTutorsCard key={t?._id} details = {t}>
            
        </AllTutorsCard>)}
      </div>
      
    </div>
  )
}

export default Tutors
