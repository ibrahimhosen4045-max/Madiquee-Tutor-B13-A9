"use client";

import React, { useEffect, useState } from "react";
import { GraduationCap } from "@gravity-ui/icons";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggoling from "./sheared/ThemeToggoling";
import NavLink from "./sheared/NavLink";
import { authClient } from "@/lib/auth-client";
import Profile from "./Profile";
import { PuffLoader } from "react-spinners";
import { useState as useMobileState } from "react";

import "./home/home.css";

const Nevber = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>

      <li>
        <NavLink href="/tutor">Tutors</NavLink>
      </li>

      <li>
        <NavLink href="/addTutors">Add Tutor</NavLink>
      </li>

      <li>
        <NavLink href="/myTutor">My Tutors</NavLink>
      </li>

      <li>
        <NavLink href="/MyBooked">My Booked Sessions</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }
      `}
    >
      <div
        className=" container w-11/12 max-w-7xl mx-auto  flex justify-between items-center py-3 relative " >
        {/* LOGO */}

        <Link href="/">
          <div
            className={`text-xl md:text-2xl font-medium flex items-center gap-1 md:gap-2 cursor-pointer
          ${isScrolled ? "text-black dark:text-white" : "text-white"}
          `}
          >
            <GraduationCap
              style={{
                height: "30px",
                width: "30px",
              }}
              className="text-[#65A662]"
            />
            MediQueue
          </div>
        </Link>

        {/* DESKTOP MENU */}

        <ul
          className={` hidden lg:flex gap-5 text-[15px]
        ${isScrolled ? "text-black dark:text-white" : "text-white"}
        `}
        >
          {menu}
        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-1 md:gap-3">
          <ThemeToggoling />

          {isPending ? (
            <PuffLoader color="#65A662" size={35} />
          ) : user ? (
            <Profile user={user} />
          ) : (
            <Link href="/login">
              <button className="offer-btn cssbuttons-io-button5">
                LOGIN
                <div className="icon">
                  <svg height="24" width="24" viewBox="0 0 24 24">
                    <path
                      d="M16.172 11l-5.364-5.364 
              1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          )}

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden text-2xl
            ${isScrolled ? "text-black dark:text-white" : "text-white"}`}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className=" lg:hidden bg-white dark:bg-black shadow-md w-full md:w-100 absolute top-15 right-0 md:right-[5%] z-50 md:rounded-2xl">
          <ul  className=" flex flex-col gap-4 p-5 text-black dark:text-white ">
            {menu}
          </ul>
          
        </div>
      )}
    </nav>
  );
};

export default Nevber;
