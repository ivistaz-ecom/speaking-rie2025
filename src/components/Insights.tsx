'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Insights() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-auto py-16 pb-10 pl-20 bg-[#E5205C] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Column 1: Text */}
        <div
          className="text-center lg:text-left px-6 lg:px-20"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 lg:text-left">
            The Impact of Your Insights
          </h1>
          <p className="text-lg lg:text-xl text-white mb-6 lg:text-left  text-thin font-avertaLight">
            A room filled with the brightest minds and boldest innovators from across South Asia and the globe, all gathered to share, learn, and be inspired. At the Regional Integration Event (RIE) 2025, your insights have the power to ignite change, spark new ideas, and drive the next wave of entrepreneurial success. This is more than just an event; it’s a platform where your unique experiences and knowledge can shape the future. Whether it’s your groundbreaking innovations, strategic wisdom, or inspiring journey, your contribution will resonate deeply, leaving a lasting impact on over 1,000 eager entrepreneurs who impact a further million lives ready to turn your insights into action. Together, we can push the boundaries of what’s possible and create a legacy of innovation and resilience.
          </p>
        </div>

        {/* Column 2: Image */}
        <div className="flex justify-end lg:justify-end z-50 relative" data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
          <Image
            src="/images/insight.png"
            alt="Top Image"
            width={600}
            height={700}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Insights;
