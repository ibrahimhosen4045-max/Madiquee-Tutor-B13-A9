import Image from "next/image";
import React from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  BookOpen,
  Monitor,
  Wallet,
  Users,
} from "lucide-react";
import { Button } from "@heroui/react";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";


const DetailsCard = ({details}) => {
  return (
    // <div className=' container w-11/12 xl:w-7xl mx-auto py-20  '>
    //   <div className='flex w-full h-full border rounded-xl'>
    //     <div className='flex flex-col items-center gap-5 flex-1'>
    //         <div className='rounded-full w-100 h-100 overflow-hidden shadow-2xl'>
    //             <Image src={data.photo} alt={data.name} width={500} height={600} className='w-full h-full object-cover'/>
    //         </div>
    //         <div className='text-2xl  flex gap-2'>
    //             <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiFacebook className='text-gray-500 dark:text-gray-400 '/></div>
    //             <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiTwitter className='text-gray-500 dark:text-gray-400 '/></div>
    //             <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiLinkedin className='text-gray-500 dark:text-gray-400 '/></div>
    //             <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiInstagram className='text-gray-500 dark:text-gray-400 '/></div>
    //         </div>
    //     </div>
    //   <div className='flex-1'>
    //     <h1 className='font-semibold text-[#41833d]'>Instractor</h1>
    //     <h1 className='font-semibold text-3xl'>{data.name}</h1>
    //     <p></p>
    //   </div>
    //   </div>
    // </div>
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container w-11/12 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10">

          {/* IMAGE */}
         <div className="flex flex-col items-center gap-5">
           <div className="relative  h-80 md:h-100 w-80 md:w-100 rounded-full overflow-hidden">
            <Image
              src={details.photo}
              alt={details.name}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className='text-2xl  flex gap-2'>
                 <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiFacebook className='text-gray-500 dark:text-gray-400 '/></div>
                <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiTwitter className='text-gray-500 dark:text-gray-400 '/></div>
                 <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiLinkedin className='text-gray-500 dark:text-gray-400 '/></div>
                 <div className='p-1 rounded-full border-2 border-gray-500 dark:border-gray-400 hover:border-[#65A662] dark:hover:border-[#65A662] cursor-pointer'><CiInstagram className='text-gray-500 dark:text-gray-400 '/></div>
             </div>
         </div>

          {/* INFO */}
          <div className="space-y-6 flex flex-col justify-center">

            <div>
              <p className="text-[#65A662] font-medium mb-2">
                Professional Tutor
              </p>

              <h1 className="text-4xl font-bold text-gray-800">
                {details.name}
              </h1>

              <p className="text-gray-500 mt-2 text-lg">
                {details.subject} Instructor
              </p>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {details.mode}
              </span>

              <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                Available
              </span>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                <Wallet className="text-blue-600" size={22} />

                <div>
                  <p className="text-sm text-gray-500">
                    Hourly Fee
                  </p>

                  <h3 className="font-semibold text-lg">
                    ৳ {details.fee}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                <Users className="text-blue-600" size={22} />

                <div>
                  <p className="text-sm text-gray-500">
                    Total Slots
                  </p>

                  <h3 className="font-semibold text-lg">
                    {details.slot}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                <Clock3 className="text-blue-600" size={22} />

                <div>
                  <p className="text-sm text-gray-500">
                    Time Slot
                  </p>

                  <h3 className="font-semibold text-lg">
                    {details.time}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100">
                <CalendarDays className="text-blue-600" size={22} />

                <div>
                  <p className="text-sm text-gray-500">
                    Start Date
                  </p>

                  <h3 className="font-semibold text-lg">
                    {details.date}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 ">
                <MapPin className="text-blue-600" size={22} />

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <h3 className="font-semibold text-lg">
                    {details.location}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 ">
                <Monitor className="text-blue-600" size={22} />

                <div>
                  <p className="text-sm text-gray-500">
                    Teaching Mode
                  </p>

                  <h3 className="font-semibold text-lg">
                    {details.mode}
                  </h3>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            
            <Button className={'bg-[#65A662]'}>Booked</Button>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="bg-white mt-10 rounded-xl shadow-sm p-6 lg:p-10">

          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-blue-600" />

            <h2 className="text-3xl font-bold text-gray-800">
              Institution & Experience
            </h2>
          </div>

          <p className="text-gray-600 leading-8 text-lg">
            {details.experience}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsCard
