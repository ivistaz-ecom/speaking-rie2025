import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center py-6 px-12 justify-center   bg-[#EE6B5B]  overflow-hidden">
      <h1 className="text-4xl lg:text-[40px] font-bold text-white  text-center">Contact us at</h1>
      <Link href="mailto:rie@eobangalore.org " className="text-[20px] text-[#FFFFFF] text-center lg:px-20 py-1 text-thin font-avertaLight  opacity-80">rie@eobangalore.org </Link> 
         <hr className="border-t-1 border-white opacity-20  w-1/5 " />

      <p className="text-[12px] text-[#FFFFFF] text-center lg:px-20 py-4  text-thin font-avertaLight opacity-70">Copyright 2024 | EO Bangalore</p>
      
    </div>
  )
}

export default Footer
