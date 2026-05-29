'use client'

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaSkype } from 'react-icons/fa';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { LuChevronUp } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="relative bg-[#07162c] text-slate-300 pt-16 pb-8 px-6 md:px-12 lg:px-24 overflow-hidden ">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="absolute top-8 left-8 text-blue-500/20 text-xl font-light select-none hidden md:block">
        <div className="absolute top-0 left-4">+</div>
        <div className="absolute top-4 left-0">+</div>
        <div className="absolute top-8 left-8">+</div>
      </div>

      <div className="absolute bottom-16 right-12 flex flex-col space-y-1 rotate-[-45deg] opacity-20 hidden md:flex">
        <span className="text-blue-400 text-2xl font-bold">&gt;</span>
        <span className="text-blue-500 text-2xl font-bold translate-x-2">&gt;</span>
        <span className="text-blue-600 text-2xl font-bold translate-x-4">&gt;</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-700/50">
          
          <div className="flex items-center space-x-4 group">
            <div className="p-4 bg-[#65A662]/10 text-[#65A662] rounded-full transition-all duration-300 group-hover:bg-[#65A662] group-hover:text-white">
              <FiPhoneCall className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Call us any time:</p>
              <p className="text-white font-semibold mt-0.5">+256 214 203 215</p>
            </div>
          </div>

          {/* ইমেইল */}
          <div className="flex items-center space-x-4 group">
            <div className="p-4 bg-[#65A662]/10 text-[#65A662] rounded-full transition-all duration-300 group-hover:bg-[#65A662] group-hover:text-white">
              <FiMail className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Email us 24/7 hours:</p>
              <p className="text-white font-semibold mt-0.5">info@edura.com</p>
            </div>
          </div>

          {/* লোকেশন */}
          <div className="flex items-center space-x-4 group">
            <div className="p-4 bg-[#65A662]/10 text-[#65A662] rounded-full transition-all duration-300 group-hover:bg-[#65A662] group-hover:text-white">
              <IoLocationOutline className="text-xl" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Our university location:</p>
              <p className="text-white font-semibold mt-0.5">147/I, Green Road, Dhaka</p>
            </div>
          </div>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 py-16  ">
          

          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white text-2xl font-bold tracking-wider">
              <span className="text-red-500 text-4xl">🎓</span>
              <h2>MediQueue</h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Continually optimize backward manufactured products whereas communities negotiate life compelling alignments.
            </p>
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider">FOLLOW US ON:</h4>
              <div className="flex space-x-3">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaSkype].map((Icon, index) => (
                  <a key={index} href="#" className="p-2.5 bg-slate-800 hover:bg-[#65A662] text-slate-400 hover:text-white rounded-full transition-colors duration-300 text-sm">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-2 relative inline-block">
              Quick Links
              <span className="block h-0.5 w-8 bg-[#65A662] mt-2"></span>
            </h3>
            <ul className="space-y-3 mt-6 text-sm">
              {['Development', 'Marketing', 'Data Science', 'Business', 'Design', 'Photography'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#65A662] transition-colors duration-200 flex items-center">
                    <span className="text-[#65A662] mr-2">•</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-2 relative inline-block">
              Resources
              <span className="block h-0.5 w-8 bg-[#65A662] mt-2"></span>
            </h3>
            <ul className="space-y-3 mt-6 text-sm">
              {['Community', 'Support', 'Video Guides', 'Documentation', 'Security', 'Template'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#65A662] transition-colors duration-200 flex items-center">
                    <span className="text-[#65A662] mr-2">•</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg mb-2 relative inline-block">
              Get in touch!
              <span className="block h-0.5 w-8 bg-[#65A662] mt-2"></span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Subscribe our newsletter to get our latest Update & news
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="w-full bg-[#0d2342] border border-slate-700 focus:border-[#65A662] text-white text-sm px-4 py-3.5 rounded focus:outline-none pr-10 placeholder-slate-500"
                />
                <FiMail className="absolute right-3 top-4 text-slate-500 text-lg" />
              </div>
              <button className="w-full sm:w-auto bg-[#65A662] hover:bg-[#4a9146] text-white font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            Copyright © 2026 <a href="#" className="text-[#65A662] hover:underline">Mediqueue</a> All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
          </div>
        </div>

      </div>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-6 right-6 p-2.5 bg-[#65A662] hover:bg-[#3f863b] text-white rounded-full shadow-lg transition-transform hover:-translate-y-1 hidden md:block"
        aria-label="Scroll to top"
      >
        <LuChevronUp className="text-xl" />
      </button>

    </footer>
  );
};

export default Footer;
