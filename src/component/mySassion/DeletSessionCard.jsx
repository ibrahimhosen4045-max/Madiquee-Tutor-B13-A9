"use client";
import { Button } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DeletSessionCard = ({ bookingId, tutorName, onDelete}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleConfirmDelete = async () => {
    setIsDelete(true);
    
      const res = await fetch(`http://localhost:5500/booking/${bookingId}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
      });
      const data = await res.json();

      if (data) {
        toast.success("Session deleted successfully!");
        setIsModalOpen(false);
        onDelete(bookingId)

      } else {
        toast.error("Could not delete the session.");
      }
   
  };

  return (
    <div>
      <Button
        size="sm"
        color="danger"
        className="rounded-md bg-red-500/10 text-red-500 font-semibold"
        onClick={() => setIsModalOpen(true)}
      >
        <RiDeleteBin6Line />
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-xl max-w-sm w-full shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold text-black mb-2">Delete Booking</h3>

            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Are you sure you want to Delete this tutor session with <span className="font-semibold text-black">{tutorName}</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
                onClick={() => setIsModalOpen(false)}
                disabled={isDelete}
              >
                No, Keep it
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 disabled:bg-red-300"
                onClick={handleConfirmDelete}
                disabled={isDelete}
              >
                {isDelete ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeletSessionCard;