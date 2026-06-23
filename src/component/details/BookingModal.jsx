"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LuBookCheck } from "react-icons/lu";
import { RiShoppingCartFill } from "react-icons/ri";

export function BookingModal({ details, slot, setSlot }) {
  const [isAlreadyBooked, setIsAlreadyBooked] = useState();
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const bookingData = {
      userID: user?.id,
      userName: formData.get("name"),
      userImage: user?.image,
      userPhone: formData.get("phone"),
      userEmail: formData.get("email"),
      tutor: formData.get("tutorName"),
      tutorId: formData.get("tutorId"),
      tutorImage: details.photo,
      bookingDate: new Date(),
      status: "booked",
      fee: details.fee,
      startDate: details.date,
      classMode: details.mode,
    };

    
    if(slot === 0){
     toast.error("No available slots left.");
     return;
    }
     
    const today = new Date();
    const sessionDate = new Date(details.date);

    today.setHours(0,0,0,0);
    sessionDate.setHours(0,0,0,0);
    
    if(today < sessionDate){
     toast.error(
     "Booking is not available yet for this tutor"
     );
     return;
    }

    const res = await fetch("http://localhost:5500/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (data.error) {
      toast.error(data.message);
      
      return;
    }

    if (data.insertedId) {
      toast.success("Booking successful!");
      setSlot((prev) => prev - 1);
      setIsAlreadyBooked(true);
      setOpen(false);

      e.target.reset();
    }
  };

useEffect(() => {
  if (!user?.id || !details?._id) return;

  fetch(`http://localhost:5500/booking/${user.id}`)
    .then((res) => res.json())
    .then((bookings) => {
      const hasActiveBooking = bookings.some(
        (b) => b.tutorId === details._id && b.status === "booked"
      );

      setIsAlreadyBooked(hasActiveBooking);
    })
    .catch(console.error);
}, [user?.id, details?._id]);

  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <Button
        onClick={() => setOpen(true)}
        variant="secondary"
        disabled={isAlreadyBooked || slot === 0}
        className={`w-full py-2 text-[16px] text-white rounded-full flex items-center gap-3 justify-center transition-colors

    ${
      isAlreadyBooked || slot === 0
      ? "bg-gray-400 cursor-not-allowed text-gray-200"
      : "bg-[#65A662] cursor-pointer hover:bg-[#548c51]"
    }

  `}
      >
        { slot === 0 ? "Session Full" : isAlreadyBooked ? "Already Booked" : "Book Tutor"}

        <RiShoppingCartFill />
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[420px]">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <LuBookCheck className="text-2xl" />
              </Modal.Icon>

              <Modal.Heading className="text-xl font-semibold">
                Book Tutor Session
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium text-black">
                    Your Name
                  </label>

                  <Input
                    name="name"
                    label="Student Name"
                    placeholder="Enter your name"
                    value={user?.name}
                    readOnly
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium text-black">
                    Your Email
                  </label>

                  <Input
                    name="email"
                    label="Email"
                    placeholder="Enter email"
                    type="email"
                    value={user?.email}
                    readOnly
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="number" className="font-medium text-black">
                    Your Number
                  </label>

                  <Input
                    name="phone"
                    label="Phone Number"
                    placeholder="+880 "
                    type="number"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="tutor-name"
                    className="font-medium text-black"
                  >
                    Tutor ID
                  </label>

                  <Input
                    name="tutorId"
                    label="Tutor Name"
                    placeholder="Tutor name"
                    value={details._id}
                    readOnly
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="tutor-name"
                    className="font-medium text-black"
                  >
                    Tutor Name
                  </label>

                  <Input
                    name="tutorName"
                    label="Tutor Name"
                    placeholder="Tutor name"
                    value={details.name}
                    readOnly
                    required
                  />
                </div>


                <Button
                  type="submit"
                  className="

                    w-full

                    bg-[#65A662]

                    text-white

                    rounded-full

                  "
                >
                  Confirm Booking
                </Button>
              </form>
            </Modal.Body>

            <Modal.Footer></Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
