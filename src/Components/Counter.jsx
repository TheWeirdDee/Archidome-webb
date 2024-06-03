/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Counter = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targetNumbers = [1000, 2500, 500, 67];
  const texts = [
    'Years of Experience',
    'Projects Done',
    'Licensed Architects',
    'Happy Customers'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => prevCounts.map((count, index) => {
        if (count >= targetNumbers[index]) {
          clearInterval(interval);  
          return targetNumbers[index];  
        } else {
          return count + 1;  
        }
      }));
    }, 100);  

    return () => clearInterval(interval); 
  }, [targetNumbers]);  

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <section className="p-10 counter">
      <div className="flex flex-col md:flex-row items-center justify-center"> 
        {counts.map((count, index) => (
          <div key={index} className="flex-1 p-4 text-center" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="p-5">
              <div className="flex items-center justify-center">
                <strong className="text-4xl border-r-2 pr-6">{count}</strong>
                <span className="ml-5 text-lg">{texts[index]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counter;
