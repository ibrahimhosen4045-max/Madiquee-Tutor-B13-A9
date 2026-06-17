"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import Image from "next/image";
import { VscDebugStart } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import DeletSessionCard from "./DeletSessionCard";

// যেহেতু এটি টেবিলের ভেতরে বসবে, তাই এটি একটি <tr> (Table Row) রিটার্ন করবে
export default function BookSessionCard({ info }) {
  const [status, setStatus] = useState(info.status || "booked");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  // ক্যানসেল কনফার্ম করার পর PATCH রিকোয়েস্ট পাঠানো
  const handleConfirmCancel = async () => {
    setIsCancelling(true);
    try {
      const res = await fetch(`http://localhost:5500/booking/cancel/${info._id}`, {
        method: "PATCH",
      });
      const data = await res.json();

      if (data.modifiedCount > 0) {
        setStatus("cancelled");
        toast.success("Session cancelled successfully!");
      } else {
        toast.error("Something went wrong or already cancelled.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to cancel the session.");
    } finally {
      setIsCancelling(false);
      setIsModalOpen(false); // মডাল বন্ধ করা
    }
  };

  return (
    <>
    <div className="p-5 border border-gray-100 dark:border-gray-700 shadow-md  flex flex-col md:flex-row gap-5 rounded-lg">
      <div className="md:w-70 md:h-50 overflow-hidden rounded-lg">
        <Image src={info.tutorImage} alt={info.tutor} width={250} height={250} className="w-full h-full object-cover object-center"/>
      </div>
      <div className="flex flex-col justify-between gap-2 items-start w-full">
        <button
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              status === "cancelled"
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {status}
        </button>
        <h1 className="text-xl font-semibold">{info.tutor}</h1>
        <h2 className="flex items-center gap-1 text-sm"><VscDebugStart className="text-[#65A662] text-[16px]" /> Session Start Date : {info.startDate}</h2>

        <h2 className="flex items-center gap-1 text-sm"><FaRegUser className="text-[#65A662] " /> Booking User Name : {info.userName}</h2>
        <h2 className="flex items-center gap-1 text-sm"><MdOutlineMail className="text-[#65A662] " />  {info.userEmail}</h2>
        <div className="flex  items-center justify-between w-full">
          <h1 className="text-xl font-semibold text-[#65A662]">${info.fee}</h1>
          <div className="flex gap-3 items-center">
            {
              status === "cancelled" ? <><Button
            size="sm"
            color="danger"
            className="rounded-md bg-red-500/10 text-red-500 font-semibold "
            onClick={() => setIsModalOpen(true)}
            disabled={status === "cancelled"}
          >
            {status === "cancelled" ? "Cancelled" : "Cancel"}
          </Button>
          <DeletSessionCard bookingId={info._id}></DeletSessionCard></> :
          <Button
            size="sm"
            color="danger"
            className="rounded-md bg-red-500/10 text-red-500 font-semibold "
            onClick={() => setIsModalOpen(true)}
            disabled={status === "cancelled"}
          >
            {status === "cancelled" ? "Cancelled" : "Cancel"}
          </Button>
            }
          </div>
        </div>
      </div>
    </div>

      {/* কাস্টম ক্যানসেল কনফার্মেশন মডাল */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-xl border border-gray-100 animate-appearance-in">
            <h3 className="text-lg font-bold text-black mb-2">Cancel Booking</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Are you sure you want to cancel this tutor session with <span className="font-semibold text-black">{info.tutor}</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                onClick={() => setIsModalOpen(false)}
                disabled={isCancelling}
              >
                No, Keep it
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors disabled:bg-red-300"
                onClick={handleConfirmCancel}
                disabled={isCancelling}
              >
                {isCancelling ? "Cancelling..." : "Yes, Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}