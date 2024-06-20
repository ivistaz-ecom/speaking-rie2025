'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css"; // You can include the CSS or customize it according to your project's styling




import Speakers from '../../app/speakers/rieFeb2011'
import Footer from '@/components/Footer';


export default function Home() {

  useEffect(() => {
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false // Whether animation should only happen once
    });
  }, []);



  return (

    <>



    
        <div>
        
          <Speakers/>
          <Footer/>
    
        </div>
  








    </>


  );
}
