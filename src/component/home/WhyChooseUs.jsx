"use client";
import React, { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import image from "@/assets/why1.jpg";
import image1 from "@/assets/why2.jpg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // floating animation
      gsap.to(".flotingDiv", {
        y: -25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // left image animation
      gsap.from(".about-left", {
        x: -220,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // right content animation
      gsap.from(".about-right", {
        x: 220,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // cards stagger animation
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[700px] flex items-center justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className=" absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-[1px] border-blue-200/60 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border-[1px] border-blue-100/40 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left */}
        <div className="about-left lg:col-span-6 relative w-full max-w-[500px] h-[450px] mx-auto lg:mx-0">
          <div className="flotingDiv absolute top-12 -left-8 w-24 h-32 bg-[radial-gradient(#40863c_3px,transparent_3px)] [background-size:12px_12px] opacity-80 -z-10" />
          <div className="flotingDiv absolute bottom-8 left-16 w-36 h-36 border-[6px] border-[#40863c] rounded-full -z-10" />

          <div className="absolute top-0 left-0 w-[75%] h-[280px] rounded-xl overflow-hidden shadow-lg border border-white">
            <Image src={image} alt="Students studying together" className="w-full h-full object-cover" />
          </div>

          <div className="absolute bottom-0 right-0 w-[60%] h-[240px] rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20">
            <Image src={image1} alt="Student celebrating success" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Right */}
        <div className="about-right lg:col-span-6 flex flex-col gap-4 text-left">
          <span className="text-xs font-bold tracking-widest text-[#40863c] uppercase">
            OUR SPECIALITIES YOU LIKE
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight -mt-2">
            Why Choose Us!
          </h2>

          <div className="flex flex-col gap-4 mt-4 w-full">
            <div className="feature-card  p-4 rounded-lg shadow-sm border border-slate-100/80 flex gap-4 items-start max-w-[540px]">
              
              <div>
                <h4 className="text-[17px] font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#40863c]" />
                  Make A Decisions For Courses
                </h4>
                <p className="text-sm  leading-relaxed font-light"> Sed ut perspiciatis unde omnis iste natus sit voluptatemec lifes accusantium doloremque laudantium depends </p>
              </div>
            </div>

            <div className="feature-card  p-4 rounded-lg shadow-sm border border-slate-100/80 flex gap-4 items-start max-w-[540px] md:translate-x-12">
              
              <div>
                <h4 className="text-[17px] font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#40863c]" />
                  Start Your Course From Beginning
                </h4>
                <p className="text-sm  leading-relaxed font-light"> Sed ut perspiciatis unde omnis iste natus sit voluptatemec lifes accusantium doloremque laudantium depends </p>
              </div>
            </div>

            <div className="feature-card  p-4 rounded-lg shadow-sm border border-slate-100/80 flex gap-4 items-start max-w-[540px]">
              
              <div>
                <h4 className="text-[17px] font-bold mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#40863c]" />
                  Get A Specific Certificate From Us
                </h4>
                <p className="text-sm leading-relaxed font-light"> Sed ut perspiciatis unde omnis iste natus sit voluptatemec lifes accusantium doloremque laudantium depends </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;