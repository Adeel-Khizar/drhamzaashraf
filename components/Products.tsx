'use client'

import { productsInfo, TrustBadgesInfo } from '@/data'; // Ensure this is typed correctly
import { CaladeaF } from '@/fonts';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';

// TypeScript - Ensure proper typing of TrustBadgesInfo, assuming it is an array of objects

const Products = () => {
  // Create a ref array to hold multiple refs (one for each badge)
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register the ScrollTrigger plugin

    // Initial fade-in animation when page loads (animate opacity from 0 to 1)
  

    // Scroll-triggered fade-in effect for trust badges
    gsap.fromTo(
      '.trust-badge', // Target trust badges with class
      {
        opacity: 0, // Start with opacity 0
        y: 1000, // Start by moving them down
      },
      {
        opacity: 1, // End with full opacity
        y: 0, // Move to normal position
        stagger: 0.3, // Stagger the animations for a spaced-out effect
        ease: 'power5.out', // Smooth easing

        scrollTrigger: {
          trigger: '.trust-badges-container', // The container element
          start: 'top 80%', // Start when 80% of the container is in view
          end: 'top 20%', // End when 20% of the container is visible
          scrub: 1, // Smooth transition
          markers: false, // Disable markers
        },
      }
    );
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className='py-[50px]  flex flex-col justify-center items-center md:py-[100px] relative'>
      <h2
        style={{
          fontWeight: '900',
          lineHeight: '100%',
        }}
        className={`${CaladeaF} text-black mx-[5vw] text-4xl text-center md:text-5xl mb-4`}
      >
        Premium Healthcare Products
      </h2>
      <p className={`md:text-xl text-md text-black max-w-[1000px] px-6 text-center mx-[5vw] ${CaladeaF}`}>
      Our products are designed to enhance patient care with precision and reliability, ensuring the highest standards of health.
      </p>
      <div
        className='h-aut mt-6 gap-4 md:gap-6 w-full bg-transparent flex flex-wrap items-end justify-center trust-badges-container'
      >
        {productsInfo.map((item, index: number) => (
          <div
            ref={(el) => { boxRefs.current[index] = el; }} // Callback ref with no return
            className='trust-badge translate-y-[1000px]  bg-lightblue flex md:mx-0 mx-4 text-center flex-col  py-8 rounded-lg items-center justify-center '
            key={index}
          >
            <div className=''>
          <img className='h-[280px] w-auto '  src={item.image} height={500} width={500}/>

            </div>
     
           
            <h3
              style={{
                fontWeight: '900',
                lineHeight: '100%',
              }}
              className={`text-2xl text-white mt-6 max-w-[320px] ${CaladeaF}`}
            >
              {item.title}
            </h3>
            <p className={`text-sm max-w-[400px] text-white px-3 md:text-md ${CaladeaF} mt-6`}>
              {item.description}
            </p>
            <Link
             style={{
              fontWeight: '800'
             }}
            className={`mt-8 px-12 py-2 rounded-md bg-darkblue text-white ${CaladeaF} uppercase `} href='/'>Buy  Now</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
