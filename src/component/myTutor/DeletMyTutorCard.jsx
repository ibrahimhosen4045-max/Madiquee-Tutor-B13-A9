"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { FiTrash2 } from 'react-icons/fi';

const DeletMyTutorCard = ({info, onDelete}) => {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const deletetutors = async () => {
        setLoading(true)
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${info._id}`, {
            method: "DELETE",
        })
        const data = await res.json()
        if(data){
            toast.success("This tutor successfully deleted")
            setLoading(false)
            setOpenModal(false)
            onDelete(info._id)
        } else {
            toast.error("delete failed")
        }
    }

  return (
    <div>
        <button onClick={()=>setOpenModal(true)} className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition" >
            <FiTrash2 size={18}/>
        </button>
      {openModal && (
        <div  className=" fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className=" bg-white rounded-xl p-6 w-[350px] ">
            <h2 className="text-xl font-bold">Delete Tutors?</h2>

            <p className="text-gray-500 mt-3">
              Are you sure you want to delete this tutors? 
            </p>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setOpenModal(false)}
                className=" px-4 py-2 bg-gray-100 rounded-lg"
              >
                No
              </button>

              <button
                onClick={deletetutors}
                disabled={loading}
                className=" px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                {loading ? "deleting..." : "Yes Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DeletMyTutorCard
