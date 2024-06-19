'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



function HeroSection() {
useEffect(()=>{
  AOS.init();


},[])


  return (
    <div className="relative flex flex-col items-center p-8 bg-cover bg-center lg:h-[700px] averta" style={{ backgroundImage: `url('/images/Banner.png')` }}>
      <div className='relative z-10 flex flex-col items-center gap-5'
      data-aos="fade-down" 
      data-aos-offset="200"
   data-aos-delay="50"
      >
        <Image
          src="/images/remix.png"
          alt="Top Image"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src="/images/eologo.png"
          alt="Middle Image"
          width={170}
          height={28}
          className="object-contain"
        />
      </div>
      <div className="absolute inset-0 opacity-50"></div>
      <div data-aos="fade-up" 
       data-aos-offset="200"
    data-aos-delay="50"
      className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-[40px] md:text-[50px] lg:text-[65px] text-[#F2BE31] font-bold leading-tight pt-28 font-averta">
          Insights, Inspiration and YOU
        </h1>
        <p className="text-[16px] md:text-[18px] px-6 md:px-24 lg:px-48 xl:px-72 leading-relaxed text-thin font-avertaLight">
          Opening this invitation is just the first step—your attending would be the magic that will transform the event. Plus, we’ll have a generous supply of Masale Dosa to enrich the experience!
        </p>
      </div>
    </div>
  )
}

export default HeroSection;
