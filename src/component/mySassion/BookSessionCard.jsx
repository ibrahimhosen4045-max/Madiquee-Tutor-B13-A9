"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";
import Image from "next/image";

import {
  FiUser,
  FiMail,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiEdit,
} from "react-icons/fi";

import { MdAttachMoney } from "react-icons/md";
import DeletSessionCard from "./DeletSessionCard";

export default function BookSessionCard({ info, onDelete }) {
  const [status, setStatus] = useState(info.status);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const cancelSession = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/cancel/${info._id}`,
        {
          method: "PATCH",
        },
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        setStatus("cancelled");
        toast.success("Session cancelled");
      } else {
        toast.error("Cancel failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
      setOpenModal(false);
    }
  };

  return (
    <>
      <div  className=" bg-white  dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-md hover:shadow-xl transition ">
        {/* Top Part */}

        <div className="flex justify-between">
          <div className="flex gap-4">
            <Image
              src={info.tutorImage}
              width={90}
              height={90}
              alt="tutor"
              className=" w-20 h-20 rounded-xl object-cover "
            />

            <div>
              <h2  className=" text-xl font-bold ">
                {info.tutor}
              </h2>

              <span
                className={` inline-block mt-2 px-3 py-1 rounded-full text-xs
            ${
              status === "cancelled"
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-600"
            }
            `}
              >
                {status}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}

        <div
          className=" grid md:grid-cols-2 gap-5 mt-6 "
        >
          <Info icon={<FiUser />} title="Student Name" value={info.userName} />

          <Info icon={<FiMail />} title="Email" value={info.userEmail} />

          <Info
            icon={<FiCalendar />}
            title="Start Date"
            value={info.startDate}
          />

          <Info icon={<FiClock />} title="Time" value={info.time} />

          <Info
            icon={<FiMapPin />}
            title="Location"
            value={info.location || "Online"}
          />
        </div>

        {/* Bottom */}

        <div  className=" flex justify-between items-center mt-6 pt-4 border-t ">
          <h2  className=" text-2xl font-bold text-green-600 flex items-center ">
            <MdAttachMoney />
            {info.fee}
          </h2>

          <div className="flex gap-3">
            {status === "cancelled" ? (
              <Button disabled className="bg-red-100 text-red-500">
                Cancelled
              </Button>
            ) : (
              <Button
                onClick={() => setOpenModal(true)}
                className="
          bg-red-500
          text-white
          "
              >
                Cancel
              </Button>
            )}

            {status === "cancelled" && (
              <DeletSessionCard bookingId={info._id} onDelete={onDelete}/>
            )}
          </div>
        </div>
      </div>

      {/* Confirm Modal */}

      {openModal && (
        <div  className=" fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className=" bg-white rounded-xl p-6 w-[350px] ">
            <h2 className="text-xl font-bold">Cancel Session?</h2>

            <p className="text-gray-500 mt-3">
              Are you sure you want to cancel this session?
            </p>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setOpenModal(false)}
                className=" px-4 py-2 bg-gray-100 rounded-lg"
              >
                No
              </button>

              <button
                onClick={cancelSession}
                disabled={loading}
                className=" px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                {loading ? "Canceling..." : "Yes Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="text-green-600 text-xl">{icon}</div>

      <div>
        <p className="text-xs text-gray-400">{title}</p>

        <p className="font-semibold">{value || "N/A"}</p>
      </div>
    </div>
  );
}
