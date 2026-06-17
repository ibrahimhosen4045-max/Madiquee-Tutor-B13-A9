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

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("Profile updated successfully");
    }
  }

  return (
    <Modal>

      {/* Trigger */}
      <Modal.Trigger
        className="
          text-black/70 dark:text-white/70 
          text-sm font-semibold 
          flex gap-2 items-center 
          hover:text-[#65A662] 
          transition cursor-pointer
        "
      >
        Update Your Profile
        <MdOutlineUpdate className="text-[17px]" />
      </Modal.Trigger>



      {/* Backdrop */}
      <Modal.Backdrop className="backdrop-blur-sm bg-black/40">

        <Modal.Container>

          <Modal.Dialog
            className="
              w-full max-w-md
              rounded-3xl
              bg-white
              dark:bg-zinc-900
              shadow-xl
              border
              border-gray-100
              dark:border-zinc-800
            "
          >

            {/* Header */}
            <Modal.Header
              className="
                flex flex-col
                items-start
                gap-3
                px-6
                pt-6
              "
            >

              <div className="
                p-3 
                rounded-full 
                bg-[#65A662]/10
              ">
                <FiUser className="text-[#65A662] text-xl" />
              </div>

              <Modal.Heading className="text-xl font-bold">
                Update User
              </Modal.Heading>

            </Modal.Header>



            {/* Form */}
            <form onSubmit={handleSubmit}>

              <Modal.Body
                className="
                  px-6
                  py-4
                  space-y-5
                  w-full
                "
              >

                {/* Name Input */}
                <Input
  name="name"
  label="Name"
  placeholder="Your name"
  variant="bordered"
  radius="lg"
  className="w-full"
/>



                {/* Image Input */}
                <Input
  name="image"
  type="url"
  label="Image URI"
  placeholder="https://"
  variant="bordered"
  radius="lg"
  className="w-full"
/>

              </Modal.Body>



              {/* Footer */}
              <Modal.Footer
                className="
                  px-6
                  pb-6
                  flex
                  justify-end
                "
              >

                <Button
                  type="submit"
                  className="
                    rounded-full
                    bg-[#65A662]
                    text-white
                    px-6
                    font-medium
                  "
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