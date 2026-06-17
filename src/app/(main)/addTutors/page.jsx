
"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { CalendarDays, Clock3, MapPin, BookOpen } from "lucide-react";
import BannerAddTutors from "@/component/addTutor/BannerAddTutors";
import toast from "react-hot-toast";

const AddTutor = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch('http://localhost:5500/tutors', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const datas = await res.json()
    if(res.ok){
      toast.success("Tutor added successfully!")
    } else {
      toast.error("Failed to add tutor!");
    }
  };
  return (
    <div>
      <BannerAddTutors></BannerAddTutors>
          <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        
        {/* Heading */}
        <div className="space-y-3 text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Add New Tutor
          </h1>

          <p className="text-gray-500">
            Fill all tutor information carefully
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Tutor Name */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">
              Tutor Name
            </label>

            <input
              type="text"
              placeholder="Enter tutor name"
              {...register("name", {
                required: "Tutor name is required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">
              Tutor Photo URL
            </label>

            <input
              type="text"
              placeholder="Paste imgbb/postimage link"
              {...register("photo", {
                required: "Photo URL is required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.photo && (
              <p className="text-red-500 text-sm">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">
              Subject / Category
            </label>

            <select
              {...register("subject", {
                required: "Select a subject",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Subject</option>
              <option>Mathematics</option>
              <option>Physics</option>
              <option>Chemistry</option>
              <option>Biology</option>
              <option>English</option>
              <option>ICT</option>
            </select>

            {errors.subject && (
              <p className="text-red-500 text-sm">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Teaching Mode */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">
              Teaching Mode
            </label>

            <select
              {...register("mode", {
                required: "Select teaching mode",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Both</option>
            </select>

            {errors.mode && (
              <p className="text-red-500 text-sm">
                {errors.mode.message}
              </p>
            )}
          </div>

          {/* Available Days */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700 flex items-center gap-2">
              <Clock3 size={18} />
              Available Days
            </label>

            <input
              type="text"
              placeholder="Sun - Thu"
              {...register("days", {
                required: "Available days required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.days && (
              <p className="text-red-500 text-sm">
                {errors.days.message}
              </p>
            )}
          </div>

          {/* Time Slot */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">
              Available Time Slot
            </label>

            <input
              type="text"
              placeholder="5:00 PM - 8:00 PM"
              {...register("time", {
                required: "Time slot required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.time && (
              <p className="text-red-500 text-sm">
                {errors.time.message}
              </p>
            )}
          </div>

          {/* Hourly Fee */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">
              Hourly Fee
            </label>

            <input
              type="number"
              placeholder="500"
              {...register("fee", {
                required: "Hourly fee required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.fee && (
              <p className="text-red-500 text-sm">
                {errors.fee.message}
              </p>
            )}
          </div>

          {/* Total Slot */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700">
              Total Slot
            </label>

            <input
              type="number"
              placeholder="10"
              {...register("slot", {
                required: "Total slot required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.slot && (
              <p className="text-red-500 text-sm">
                {errors.slot.message}
              </p>
            )}
          </div>

          {/* Session Start Date */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700 flex items-center gap-2">
              <CalendarDays size={18} />
              Session Start Date
            </label>

            <input
              type="date"
              {...register("date", {
                required: "Start date required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.date && (
              <p className="text-red-500 text-sm">
                {errors.date.message}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="font-medium text-gray-700 flex items-center gap-2">
              <MapPin size={18} />
              Location
            </label>

            <input
              type="text"
              placeholder="Area / City"
              {...register("location", {
                required: "Location required",
              })}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {errors.location && (
              <p className="text-red-500 text-sm">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Institution */}
          <div className="md:col-span-2 space-y-2">
            <label className="font-medium text-gray-700 flex items-center gap-2">
              <BookOpen size={18} />
              Institution & Experience
            </label>

            <textarea
              rows={5}
              placeholder="Write institution and teaching experience..."
              {...register("experience", {
                required: "Experience required",
              })}
              className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />

            {errors.experience && (
              <p className="text-red-500 text-sm">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition duration-300 shadow-lg"
            >
              Add Tutor
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default AddTutor
