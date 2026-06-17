"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Modal, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LuBookCheck } from "react-icons/lu";
import { RiShoppingCartFill } from "react-icons/ri";


export function BookingModal({ details }) {
  const [isAlreadyBooked, setIsAlreadyBooked] = useState()
  
  const {data: session, isPending} = authClient.useSession()
  const user = session?.user
  
 const [email, setEmail] = useState(user?.email || "")
 const [name, setName] = useState(user?.name || "")

 useEffect(()=> {
  if(user?.name){
    setName(user.name)
  }
 },[user])

 useEffect(() => {
  if(user?.email){
    setEmail(user.email);
  }
}, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    

    const bookingData = {
      userID: user?.id,
      userName: formData.get("name"),
      userImage: user?.image,
      userPhone: formData.get("phone"),
      userEmail: formData.get("email"),
      tutor: formData.get("tutor"),
      tutorId: details._id,
      tutorImage: details.photo,
      bookingDate: new Date(),
      status: "booked",
      fee: details.fee,
      startDate: details.date,
      classMode: details.mode,
    };

    const res = await fetch("http://localhost:5500/booking", {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(bookingData)
    })

    const data = await res.json();

    if(data.error){
      toast.error(data.message);
      return;
    }
    if (data.insertedId) {
      toast.success("Booking successful!");
      e.target.reset(); 
    }
  };

  useEffect(() => {
  if (user?.id && details?._id) {
    fetch(`http://localhost:5500/booking/${user.id}`)
      .then((res) => res.json())
      .then((bookings) => {
        const hasActiveBooking = bookings.some(
          (b) => b.tutorId === details._id && b.status === "booked"
        );
        setIsAlreadyBooked(hasActiveBooking);
      })
      .catch((err) => console.error("Error checking status:", err));
  }
}, [user, details]);


  return (
    <Modal>

      <Button
  variant="secondary"
  disabled={isAlreadyBooked} 
  className={`w-full py-2 text-[16px] text-white rounded-full flex items-center gap-3 justify-center transition-colors
    ${
      isAlreadyBooked 
        ? "bg-gray-400 cursor-not-allowed text-gray-200" 
        : "bg-[#65A662] cursor-pointer hover:bg-[#548c51]" 
    }
  `}
>
  {isAlreadyBooked ? "Already Booked" : "Book Tutor"} 
  <RiShoppingCartFill />
</Button>


      <Modal.Backdrop>

        <Modal.Container>

          <Modal.Dialog className="sm:max-w-[420px]">

            <Modal.CloseTrigger />


            <Modal.Header>

              <Modal.Icon className="bg-default text-foreground">
                <LuBookCheck  className="text-2xl"/>
              </Modal.Icon>


              <Modal.Heading className="text-xl font-semibold">
                Book Tutor Session
              </Modal.Heading>

            </Modal.Header>



            <Modal.Body>

              <form 
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium text-black">Your Name</label>
                <Input
                  name="name"
                  label="Student Name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
                </div>


                <div className="flex flex-col gap-2">
                  <label htmlFor="number" className="font-medium text-black">Your Number</label>
                  <Input
                  name="phone"
                  label="Phone Number"
                  placeholder="+880 0123456789"
                  type="number"
                  required
                />
                </div>


                <div className="flex flex-col gap-2">
                  <label htmlFor="tutor-name" className="font-medium text-black">Tutor Name</label>
                  <Input
                  name="tutor"
                  label="Tutor Name"
                  placeholder="Tutor name"
                  value={details.name}
                  readOnly
                  required
                />
                </div>


                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-medium text-black">Your Email</label>
                  <Input
                  name="email"
                  label="Email"
                  placeholder="Enter email"
                  type="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
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



            <Modal.Footer>
              
            </Modal.Footer>


          </Modal.Dialog>

        </Modal.Container>


      </Modal.Backdrop>


    </Modal>
  );
}