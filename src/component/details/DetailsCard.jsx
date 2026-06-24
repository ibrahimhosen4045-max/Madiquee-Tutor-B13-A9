"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  BookOpen,
  Monitor,
  Wallet,
  Users,
} from "lucide-react";

import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { BookingModal } from "./BookingModal";

const DetailsCard = ({ details }) => {
  const [slot, setSlot] = useState(Number(details.slot));

  return (
    <div className="min-h-screen py-10 bg-gray-50 dark:bg-[#080808] transition-colors duration-300">
      <div className="container w-11/12 max-w-7xl mx-auto">

        <div className="bg-white dark:bg-[#111] rounded-xl overflow-hidden shadow-sm dark:shadow-none grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10 transition-colors duration-300">

          {/* IMAGE */}
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-80 md:h-100 w-80 md:w-100 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700">
              <Image
                src={details.photo}
                alt={details.name}
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="text-2xl flex gap-2 text-gray-600 dark:text-gray-400">
              <CiFacebook className="hover:text-blue-600 cursor-pointer" />
              <CiTwitter className="hover:text-sky-400 cursor-pointer" />
              <CiLinkedin className="hover:text-blue-700 cursor-pointer" />
              <CiInstagram className="hover:text-pink-600 cursor-pointer" />
            </div>
          </div>

          {/* INFO */}
          <div className="space-y-6 flex flex-col justify-center">

            <div>
              <p className="text-[#65A662] dark:text-[#7ed37a] font-medium mb-2">
                Professional Tutor
              </p>

              <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                {details.name}
              </h1>

              <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
                {details.subject} Instructor
              </p>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                {details.mode}
              </span>

              <span className="px-4 py-2 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                Available
              </span>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                <Wallet size={22} className="text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Hourly Fee</p>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">৳ {details.fee}</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                <Users size={22} className="text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Slots</p>

                  {slot === 0 ? (
                    <h3 className="font-semibold text-lg text-red-500 dark:text-red-400">
                      No available slots left
                    </h3>
                  ) : (
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                      {slot} available
                    </h3>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                <Clock3 size={22} className="text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Time Slot</p>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{details.time}</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                <CalendarDays size={22} className="text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Start Date</p>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{details.date}</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                <MapPin size={22} className="text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{details.location}</h3>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300">
                <Monitor size={22} className="text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Teaching Mode</p>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{details.mode}</h3>
                </div>
              </div>

            </div>

            {/* BOOKING MODAL */}
            <BookingModal
              details={details}
              slot={slot}
              setSlot={setSlot}
            />

          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="bg-white dark:bg-gray-800 mt-10 rounded-xl shadow-sm dark:shadow-none p-6 lg:p-10 transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6 text-gray-800 dark:text-gray-200">
            <BookOpen />
            <h2 className="text-3xl font-bold">
              Institution & Experience
            </h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-8 text-lg">
            {details.experience}
          </p>
        </div>

      </div>
    </div>
  );
};

export default DetailsCard;