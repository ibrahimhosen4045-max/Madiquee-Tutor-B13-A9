import React from "react";
import { FiEdit, FiTrash2, FiClock, FiMapPin, FiCalendar } from "react-icons/fi";
import { MdOutlineSchool, MdOutlineAttachMoney } from "react-icons/md";

const MyTutorCard = ({ info }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-5 hover:shadow-xl transition duration-300">

      {/* Top Section */}
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-4">
          <img
            src={info?.photo}
            alt={info?.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
          />

          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {info?.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {info?.userEmail}
            </p>

            <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-600">
              {info?.mode}
            </span>
          </div>
        </div>


        {/* Action Button */}
        <div className="flex gap-2">

          <button
            className="p-2 rounded-lg bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition"
          >
            <FiEdit size={18}/>
          </button>


          <button
            className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
          >
            <FiTrash2 size={18}/>
          </button>

        </div>

      </div>



      {/* Details */}
      <div className="grid grid-cols-2 gap-4 mt-6">


        <div className="flex items-center gap-3">
          <MdOutlineSchool className="text-blue-500" size={22}/>

          <div>
            <p className="text-xs text-gray-400">
              Subject
            </p>

            <p className="font-semibold text-gray-700 dark:text-gray-200">
              {info?.subject}
            </p>
          </div>

        </div>



        <div className="flex items-center gap-3">

          <MdOutlineAttachMoney 
            className="text-green-500"
            size={22}
          />

          <div>
            <p className="text-xs text-gray-400">
              Monthly Fee
            </p>

            <p className="font-semibold text-green-600">
              ৳ {info?.fee}
            </p>
          </div>

        </div>



        <div className="flex items-center gap-3">

          <FiClock 
            className="text-purple-500"
            size={22}
          />

          <div>
            <p className="text-xs text-gray-400">
              Schedule
            </p>

            <p className="font-semibold text-gray-700 dark:text-gray-200">
              {info?.days}
            </p>

            <p className="text-sm text-gray-500">
              {info?.time}
            </p>
          </div>

        </div>



        <div className="flex items-center gap-3">

          <FiCalendar
            className="text-orange-500"
            size={22}
          />

          <div>
            <p className="text-xs text-gray-400">
              Available Slot
            </p>

            <p className="font-semibold text-gray-700 dark:text-gray-200">
              {info?.slot} Students
            </p>
          </div>

        </div>


      </div>



      {/* Bottom */}
      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">


        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FiMapPin/>
          {info?.location}
        </div>


        <p className="text-sm text-gray-400">
          Added: {info?.date}
        </p>


      </div>


    </div>
  );
};

export default MyTutorCard;