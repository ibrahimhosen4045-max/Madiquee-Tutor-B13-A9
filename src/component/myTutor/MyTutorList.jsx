"use client";

import { useState } from "react";
import MyTutorCard from "./MyTutorCard";

export default function MyTutorList({ initialData }) {

  const [tutors, setTutors] = useState(initialData);

  const handleDelete = (id) => {
    setTutors(prev => prev.filter(item => item._id !== id));
  };

  const updateTutors = (updateTutors)=> {
    setTutors(prev => prev.map(item => item._id === updateTutors._id ? updateTutors : item))
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold mb-6 ">My Tutor List</h2>
      {tutors.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
        <p className="text-lg text-gray-500 font-medium">You haven't Add any Tutors yet!</p>
      </div>
      ) : (
        tutors.map(info => (
          <MyTutorCard
            key={info._id}
            info={info}
            onDelete={handleDelete}
            onUpdate = {updateTutors}
          />
        ))
      )}
    </div>
  );
}