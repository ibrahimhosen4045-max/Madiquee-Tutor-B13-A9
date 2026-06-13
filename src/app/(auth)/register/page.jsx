"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false)


  const {register, handleSubmit, formState:{errors}} = useForm()
    
    const handleLogin = async (datas) => {
    console.log(datas)
    const {data, error} = await authClient.signUp.email({
      email: datas.email,
      password: datas.password,
      image: datas.photo,
      name: datas.name,
      callbackURL: "/"
    })

    if(data){
      redirect('/')
    }

    if(error){
      toast.error(error.message)
    }
    
    }

    const googleLogin = () => {
      
    }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-5 font-sans">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-[18px] bg-white p-[30px] w-full max-w-[450px] rounded-[20px] border border-gray-100 shadow-lg sm:p-5 sm:rounded-[16px]"
      >
        {/* NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-[#151717] font-semibold text-sm">Name</label>
          <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[52px] flex items-center px-3 gap-2.5 transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
            <svg
              height={20}
              viewBox="0 0 24 24"
              width={20}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M20 21a8 8 0 0 0-16 0"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="w-full h-full border-none outline-none bg-transparent text-sm placeholder:text-gray-400"
              placeholder="Enter your Name"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* PHOTO URL */}
        <div className="flex flex-col gap-2">
          <label className="text-[#151717] font-semibold text-sm">Photo URL</label>
          <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[52px] flex items-center px-3 gap-2.5 transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
            <svg
              height={20}
              viewBox="0 0 24 24"
              width={20}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="M21 15l-5-5L5 21"></path>
            </svg>
            <input
              type="text"
              {...register("photo", { required: "Photo URL field is required" })}
              className="w-full h-full border-none outline-none bg-transparent text-sm placeholder:text-gray-400"
              placeholder="https://photo.png"
            />
          </div>
          {errors.photo && <p className="text-red-500 text-xs">{errors.photo.message}</p>}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-[#151717] font-semibold text-sm">Email</label>
          <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[52px] flex items-center px-3 gap-2.5 transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
            <svg
              height={20}
              viewBox="0 0 32 32"
              width={20}
              className="fill-current text-gray-400"
            >
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </svg>
            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="w-full h-full border-none outline-none bg-transparent text-sm placeholder:text-gray-400"
              placeholder="Enter your Email"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col gap-2">
          <label className="text-[#151717] font-semibold text-sm">Password</label>
          <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[52px] flex items-center px-3 gap-2.5 transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
            <svg
              height={20}
              viewBox="-64 0 512 512"
              width={20}
              className="fill-current text-gray-400"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>
            <input
              type={showPass ? "text" : "password"}
              {...register("password", { required: "Password field is required" })}
              className="w-full h-full border-none outline-none bg-transparent text-sm placeholder:text-gray-400"
              placeholder="Enter your Password"
            />
            <span onClick={() => setShowPass(!showPass)} className="cursor-pointer text-gray-400 hover:text-gray-600">
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        {/* REMEMBER & FORGOT */}
        <div className="flex flex-row justify-between items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="cursor-pointer" />
            <label htmlFor="remember" className="text-sm cursor-pointer select-none">Remember me</label>
          </div>
          <button type="button" className="text-sm text-[#2d79f3] cursor-pointer font-medium hover:underline">
            Forgot password?
          </button>
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="w-full h-[50px] border-none rounded-[10px] bg-[#151717] text-white text-[15px] font-semibold cursor-pointer transition duration-300 hover:bg-[#252727]">
          Sign Up
        </button>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-black">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-[#2d79f3] cursor-pointer font-medium hover:underline">Login</span>
          </Link>
        </p>

        {/* DIVIDER */}
        <p className="text-center text-sm text-black relative before:content-[''] before:absolute before:top-1/2 before:w-[35%] before:h-[1px] before:bg-[#e5e7eb] before:left-0 after:content-[''] after:absolute after:top-1/2 after:w-[35%] after:h-[1px] after:bg-[#e5e7eb] after:right-0">
          Or With
        </p>

        {/* GOOGLE BUTTON */}
        <button
          onClick={googleLogin}
          type="button"
          className="w-full h-[50px] rounded-[10px] border border-[#e5e7eb] bg-white flex items-center justify-center gap-2.5 cursor-pointer transition duration-300 font-medium hover:border-[#2d79f3]"
        >
          <svg version="1.1" width={20} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
            <path style={{ fill: '#FBBB00' }} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z" />
            <path style={{ fill: '#518EF8' }} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
            <path style={{ fill: '#28B446' }} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
            <path style={{ fill: '#F14336' }} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z" />
          </svg>
          Google
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;