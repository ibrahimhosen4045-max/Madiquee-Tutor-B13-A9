"use client"
import { authClient } from '@/lib/auth-client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const LoginForm = () => {
   const [showPass, setShowPass] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleLogin = async (datas) => {
    console.log(datas)

    const {data, error} = await authClient.signIn.email({
      email: datas.email,
      password: datas.password,
    })

    if(data){
      toast.success("login successfull")
      redirect('/')
    }

    if(error){
      toast.error(error.message)
    }
   
  }

  const googleLogin =async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-100 font-sans'>
      <form 
        onSubmit={handleSubmit(handleLogin)} 
        className="flex flex-col gap-2.5 bg-white p-7.5 w-[450px] rounded-[20px] border border-gray-100 shadow-lg"
      >
        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <label className="text-[#151717] font-semibold">Email</label>
          <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-12 flex items-center pl-2.5 transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
            <svg 
              height={20} viewBox="0 0 32 32" width={20} xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-500"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
              </g>
            </svg>
            <input 
              type="text" 
              {...register("email", { required: "Email field is required" })} 
              className="ml-2.5 rounded-[10px] border-none w-[85%] h-full focus:outline-none placeholder:font-sans" 
              placeholder="Enter your Email" 
            />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <label className="text-[#151717] font-semibold">Password</label>
          <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-12 flex items-center pl-2.5 transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
            <svg 
              height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-500"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>
            <input 
              type={showPass ? "text" : "password"}
              {...register("password", { required: "Password field is required" })} 
              className="ml-2.5 rounded-[10px] border-none w-[85%] h-full focus:outline-none placeholder:font-sans" 
              placeholder="Enter your Password" 
            />
            <span onClick={() => setShowPass(!showPass)} className="cursor-pointer pr-3 text-gray-500 hover:text-gray-700">
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Remember me & Forgot Password */}
        <div className="flex flex-row items-center gap-2.5 justify-between">
          <div className="flex items-center gap-1.5">
            <input type="checkbox" id="remember" className="cursor-pointer" />
            <label htmlFor="remember" className="text-sm text-black font-normal cursor-pointer">Remember me</label>
          </div>
          <button type="button" className="text-sm text-[#2d79f3] font-medium cursor-pointer hover:underline">Forgot password?</button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="mt-5 mb-2.5 bg-[#151717] text-white text-[15px] font-medium rounded-[10px] h-12 w-full cursor-pointer transition hover:bg-[#252727]">
          LOGIN
        </button>

        {/* Register Link */}
        <p className="text-center text-black text-sm my-1">
          Don't have an account? 
          <Link href={'/register'}>
            <span className="text-[#2d79f3] font-medium cursor-pointer ml-1 hover:underline">Sign Up</span>
          </Link>
        </p>

        {/* Divider */}
        <p className="text-center text-black text-sm my-1 relative before:content-[''] before:absolute before:w-[35%] before:h-[1px] before:bg-gray-200 before:left-0 before:top-1/2 after:content-[''] after:absolute after:w-[35%] after:h-[1px] after:bg-gray-200 after:right-0 after:top-1/2">
          Or With
        </p>

        {/* Google Login Button */}
        <div className="flex flex-row items-center gap-2.5 justify-between">
          <button 
            onClick={googleLogin} 
            type="button"
            className="mt-2.5 w-full h-12 rounded-[10px] flex justify-center items-center font-medium gap-2.5 border border-[#ededef] bg-white cursor-pointer transition duration-200 ease-in-out hover:border-[#2d79f3]"
          >
            <svg version="1.1" width={20} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
              <path style={{fill: '#FBBB00'}} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z" />
              <path style={{fill: '#518EF8'}} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
              <path style={{fill: '#28B446'}} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
              <path style={{fill: '#F14336'}} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z" />
            </svg>
            Google 
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;