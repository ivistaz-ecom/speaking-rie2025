'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Organization() {
  const startValues = [0, 0, 0];
  const endValues = [1000, 3, 10];
  const suffixValues = ['+', '', ''];
  const titles = ['Entrepreneur', 'Days', 'Major Events'];
  

  const [counters, setCounters] = useState(startValues);

  useEffect(() => {
    AOS.init();
    const interval = setInterval(() => {
      setCounters(prevCounters => prevCounters.map((counter, index) =>
        counter < endValues[index] ? counter + 1 : counter
      ));
    });

    return () => clearInterval(interval);
  },[]);
 

  return (
    <div className="mx-auto py-8 px-6 sm:px-10 bg-[#F3BF30] overflow-hidden" 
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      data-aos="fade-up"
      data-aos-offset="200"
      
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      >
        {counters.map((counter, index) => (
          <div key={index} className={`flex flex-col items-center justify-center p-6 ${index < 2 ? 'sm:border-r-2 border-dotted border-black' : ''}`}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E5205C]">
              <CountUp start={startValues[index]} end={counter} duration={3} suffix={suffixValues[index]} />
            </h2>
            <p className="  lg:text-[55px] font-bold text-[#000000] text-center mt-2">{titles[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Organization;
