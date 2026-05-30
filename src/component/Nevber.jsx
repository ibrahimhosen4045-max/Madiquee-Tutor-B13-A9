import React from 'react'
import { GraduationCap} from '@gravity-ui/icons';
import Link from 'next/link';
import ThemeToggoling from './sheared/ThemeToggoling';
import NavLink from './sheared/NavLink';

const Nevber = () => {
    const meno = <>
        <li className=" cursor-pointer hover:text-[#65A662]"><NavLink href={'/'}>Home</NavLink></li>
        <li className=" cursor-pointer hover:text-[#65A662]"><NavLink href={'/tutor'}>Tutors</NavLink></li>
        <li className=" cursor-pointer hover:text-[#65A662]"><NavLink href={'/addTutors'}>Add Tutor</NavLink></li>
        <li className=" cursor-pointer hover:text-[#65A662]"><NavLink href={'/myTutor'}>My Tutors</NavLink></li>
        <li className=" cursor-pointer hover:text-[#65A662]"><NavLink href={'/MyBooked'}>My Booked Sessions</NavLink></li>
    </>
  return (
    <div className=' absolute top-5 left-[50%] right-[50%]  translate-x-[-50%] container  w-11/12 lg:w-7xl flex justify-between z-50 items-center'>
        {/* start */}
      <div>
        <Link href={'/'}>
        <button className='text-3xl font-medium text-white flex items-center gap-2 cursor-pointer'>
       <GraduationCap style={{height: "30px", width: "30px"}} className='text-[#65A662]'/> MediQueue
      </button>
        </Link>
      </div>
      {/* middle */}
      <div>
        <ul className='lg:flex gap-3 text-white lg:text-[14px] xl:text-[16px] hidden'>
            {meno}
        </ul>
      </div>
      {/* end */}
      <div className='flex items-center gap-2'>
        <ThemeToggoling></ThemeToggoling>
        <button  className="cursor-pointer bg-[#65A662] px-6 py-3 rounded-full text-white font-medium group ">
            <div className="relative overflow-hidden h-6">

              <p className="transform transition-all duration-[1.125s] ease-out-expo group-hover:-translate-y-6">
                GET START
              </p>

              <p className="absolute top-6 left-0 w-full transform transition-all duration-[1.125s] ease-out-expo group-hover:top-0">
                LOGIN
              </p>

            </div>
          </button>
      </div>
    </div>
  )
}

export default Nevber
