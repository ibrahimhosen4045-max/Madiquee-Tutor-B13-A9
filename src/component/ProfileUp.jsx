"use client"

import { authClient } from "@/lib/auth-client";
import React from "react"

import { FiUser } from "react-icons/fi";
import { MdOutlineUpdate } from "react-icons/md";


import {
  Modal,
  Button,
  Input,
} from "@heroui/react";
import toast from "react-hot-toast";


const ProfileUp = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;


    const { data, error } = await authClient.updateUser({
      name,
      image
    });


    if(error){
      toast.error(error.message);
      return;
    }


    if(data){
      toast.success("Profile updated successfully");
    }
  }


  return (
    <Modal>

      {/* Trigger */}
      <Modal.Trigger
        className=" text-black/70 dark:text-white/70 text-sm font-semibold flex gap-1 items-center hover:text-[#65A662] dark:hover:text-[#65A662] cursor-pointer"
      >
        Update Your Profile
        <MdOutlineUpdate className="text-[16px]" />
      </Modal.Trigger>



      <Modal.Backdrop>

        <Modal.Container>

          <Modal.Dialog className="sm:max-w-md">

            <Modal.Header>

              <Modal.Icon className="bg-blue-100">
                <FiUser className="text-blue-600"/>
              </Modal.Icon>

              <Modal.Heading>
                Update User
              </Modal.Heading>

            </Modal.Header>



            <form onSubmit={handleSubmit}>


              <Modal.Body className="space-y-4">


                <Input
                  name="name"
                  label="Name"
                  placeholder="Your name"
                />


                <Input
                  name="image"
                  type="url"
                  label="Image URI"
                  placeholder="https://"
                />


              </Modal.Body>



              <Modal.Footer>


                <Modal.CloseTrigger>

                  <Button
                    variant="secondary"
                  >
                    Close
                  </Button>

                </Modal.CloseTrigger>



                <Button
                  type="submit"
                  color="primary"
                >
                  Update
                </Button>


              </Modal.Footer>


            </form>


          </Modal.Dialog>

        </Modal.Container>

      </Modal.Backdrop>


    </Modal>
  )
}


export default ProfileUp