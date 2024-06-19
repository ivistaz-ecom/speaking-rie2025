'use client'
import React, { useState, useRef, useEffect } from "react";
import PartnersSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import Link from 'next/link'

function Speakers() {
    var setting = {
        speed: 400,
        slidesToShow: 4,
        initialSlide: 1,
        slidesToScroll: 4,
        fade: false,
        autoplay: false,
        arrow: false,
        dots: false,
        
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
    
      };
    
  return (
    <section className="bg-rie-dark dark:bg-gray-900 overflow-hidden text-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" data-aos="fade-right" data-aos-anchor-placement="top-bottom">
        <h1 className="mb-4 text-3xl tracking-tight leading-none text-[#E5205C] md:text-5xl lg:text-4xl font-bold dark:text-[#E5205C]">Celebrated Voices: Past Speakers</h1>
        <p className="text-[18px] text-[#494E6B] text-center lg:px-20 py-2 pb-20  text-thin font-avertaLight">Our stage has been honored by luminaries who are pioneers in their fields:</p>
        <PartnersSlider {...setting}  className="pt-20">
          {/* Your slides go here */}
          
          <div><Image src="/images/praful.png" className="img-fluid" width={450} height={150} alt=""/></div>
          <div><Image src="/images/Ramsums.png" className="img-fluid" width={450} height={150} alt=""/></div>
          <div><Image src="/images/Rahul.png" className="img-fluid" width={450} height={150} alt=""/></div>
          <div><Image src="/images/azim.png" className="img-fluid" width={450} height={150} alt="" /></div>
          
        </PartnersSlider>
      </div>
      <Link href="https://rie2025.com/speakers" className="text-black font-mbold ">SEE MORE</Link>
    </section>

  )
}

export default Speakers
