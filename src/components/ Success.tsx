'use client'
import React,{useEffect} from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Success() {
  useEffect(()=>{
    AOS.init();
  
  
  },[])
  return (
    <div className="mx-auto pb-32 mt-20 bg-[#3F2C6B]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Column 1: Image */}
        <div className="text-center lg:text-left lg:pl-20 z-10 " >
          <Image
            src="/images/sucsess.png"
            alt="Top Image"
            width={580}
            height={700}
            className="object-contain"
          />
        </div>

        {/* Column 2: Text */}
        <div className="text-center lg:text-left px-6 lg:px-20" data-aos="fade-left"
      data-aos-offset="200"
      
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 lg:text-left">
            Your decision to join us will add onto our event’s success.
          </h1>
          <p className="text-lg lg:text-xl text-white mb-6 lg:text-left  text-thin font-avertaLight">
            Step onto the stage where visionaries meet trailblazers, and where your story becomes a beacon of inspiration. Join us at RIE 2025 and be part of an extraordinary gathering that celebrates the power of human will and imagination. Share your journey, your breakthroughs, and your lessons with a passionate audience ready to transform their futures. Don’t miss this opportunity to contribute to a community that values and amplifies your voice. Together, let’s make RIE 2025 an unforgettable milestone in the world of entrepreneurship. Join us, and let your story inspire the world.
          </p>
        </div>

        {/* Large Screen Only Image */}
        <div className="hidden lg:block absolute lg:right-0 lg:top-[3200px]">
          <Image
            src="/images/Mask Group 16@2x.png"
            alt="Top Image"
            width={2100}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Success;
