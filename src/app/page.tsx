import React from 'react';
import HeroSection from "@/components/HeroSection";
import Organization from '@/components/Organization';
import Meet from '@/components/Meet';
import Insights from '@/components/Insights';
import Success from '@/components/ Success';
import Footer from '@/components/Footer';
import Speakers from '@/components/Speakers';


function page() {
  return (
      <>
      
      <HeroSection/>
      <Organization/>
      <Meet/>
      <Insights/>
      <Speakers/>
      <Success/>
      <Footer/>
      
      
    </>
  
  )
  
}

export default page
