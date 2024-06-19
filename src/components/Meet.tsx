"use client"
import React, {useEffect} from 'react'
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Meet() {
  useEffect(()=>{
    AOS.init();
  
  
  },[])

  return (
    <div className="flex flex-col items-center py-10 px-12 justify-center bg-white  overflow-hidden "
    >
      <h1 className="text-4xl lg:text-[40px] font-bold text-[#E5205C] mb-4 text-center" data-aos="fade-up"
    data-aos-offset="100"
    
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        Meet Entrepreneurs’ Organization (EO)
      </h1>
      <p className="text-[18px] text-[#494E6B] text-center lg:px-20 py-4 text-thin font-avertaLight" data-aos="fade-up"
    data-aos-offset="100"
    
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        At EO, we’re a community of 17,000 entrepreneurs from around the world. We’re about more than business; we’re about forming lasting bonds, sharing genuine laughs, and inspiring stories.
      </p>
      
      <p className="text-[18px] text-[#494E6B] text-center lg:px-32 py-4 font-light text-thin font-avertaLight" data-aos="fade-up"
    data-aos-offset="100"
    
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
        The EO Bangalore chapter is proud to host its flagship event, the Regional Integration Event (RIE), between January 09 and 12, 2025. The event promises to be a celebration of human will and imagination and the pathbreaking stories that stand testimony to the limits that human endeavour can be pushed. 1,000 leading entrepreneurs from EO South Asia, and around the world will be attending the event with eager anticipation to learn and be inspired by the extraordinary journey of individuals who have defied the odds and emerged triumphant.
      </p>

      <h3 className="text-xl lg:text-[22px] font-bold text-[#F2BE31] mb-4 text-center  pb-20 text-normal font-avertaLight">
        Here, we push the envelope, celebrate successes, and cherish moments of connection.
      </h3>

      <div className="hidden lg:block lg:absolute lg:right-[-5px] lg:top-[950px]">
        <Image
          src="/images/Mask.png"
          alt="Top Image"
          width={600} 
          height={700}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default Meet;
