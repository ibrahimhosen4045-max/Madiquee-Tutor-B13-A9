"use client";

import React, { use, useEffect, useState } from "react";
import { GraduationCap } from "@gravity-ui/icons";
import Link from "next/link";
import ThemeToggoling from "./sheared/ThemeToggoling";
import NavLink from "./sheared/NavLink";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Profile from "./Profile";


const Nevber = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const {data: session} = authClient.useSession()
    const user = session?.user
    console.log(user)

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const meno = (
    <>
      <li className="cursor-pointer hover:text-[#65A662]">
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li className="cursor-pointer hover:text-[#65A662]">
        <NavLink href={"/tutor"}>Tutors</NavLink>
      </li>
      <li className="cursor-pointer hover:text-[#65A662]">
        <NavLink href={"/addTutors"}>Add Tutor</NavLink>
      </li>
      <li className="cursor-pointer hover:text-[#65A662]">
        <NavLink href={"/myTutor"}>My Tutors</NavLink>
      </li>
      <li className="cursor-pointer hover:text-[#65A662]">
        <NavLink href={"/MyBooked"}>My Booked Sessions</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container w-11/12 max-w-7xl mx-auto flex justify-between items-center py-3">
        {/* start */}
        <div>
          <Link href={"/"}>
            <button className={`text-2xl font-medium flex items-center gap-2 cursor-pointer ${isScrolled ? "text-black" : "text-white"}`}>
              <GraduationCap
                style={{ height: "30px", width: "30px" }}
                className="text-[#65A662]"
              />
              MediQueue
            </button>
          </Link>
        </div>

        {/* middle */}
        <div>
          <ul className={`lg:flex gap-3 lg:text-[14px] xl:text-[16px] hidden ${isScrolled ? "text-black" : "text-white"}`}>
            {meno}
          </ul>
        </div>

        {/* end */}
        <div className="flex items-center gap-2">
          <ThemeToggoling />

          {user ? 
          <div className="flex items-center gap-1">
            <Profile user = {user}></Profile>
          </div> :
        <Link href={"/login"}>
            <button className="offer-btn cssbuttons-io-button">
              LOGIN
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
      }

          

          
        </div>
      </div>
    </div>
  );
};

export default Nevber;