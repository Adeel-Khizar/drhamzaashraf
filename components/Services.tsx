'use client'

import { productsInfo } from '@/data'; // Ensure this is typed correctly
import { CaladeaF } from '@/fonts';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Link from 'next/link';

const Products = () => {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Sequential fade-in and slide-up for all trust badges
    gsap.fromTo(
      '.trust-badge' as string, // Pass the string selector directly
      {
        opacity: 0,
        y: 100, // Start below and fade in
        scale: 0.8, // Slightly scaled down at the start for smooth animation
      },
      {
        opacity: 1,
        y: 0,
        scale: 1, // Scale to normal size
        stagger: 0.2, // Shorter stagger for faster sequential animations
        duration: 1, // Duration is slightly reduced for faster mobile animation
        ease: 'power3.out', // Smooth easing for better performance
        scrollTrigger: {
          trigger: '.trust-badges-container',
          start: 'top center', // Trigger animation when the top of the element reaches the center
          end: 'top center', // Maintain smooth animation until the center of the element leaves the viewport
          scrub: 0.2, // Smooth scroll trigger
          markers: false, // Disable markers
        },
      }
    );

    // Sequential slide-in and fade-in for each product card
    gsap.utils.toArray('.product-card').forEach((card) => {
      // Type assertion to HTMLElement
      gsap.fromTo(
        card as HTMLElement, // Type assertion here to inform TypeScript this is an HTMLElement
        {
          opacity: 0,
          x: -150, // Start off-screen to the left
          scale: 0.95, // Slightly smaller at the start for a smooth effect
        },
        {
          opacity: 1,
          x: 0,
          scale: 1, // Scale to normal size
          stagger: 0.2, // Shorter stagger for faster animation
          duration: 1, // Shorter duration for smoother animations
          ease: 'power3.out', // Smooth easing
          scrollTrigger: {
            trigger: card as HTMLElement, // Same here, ensure it's recognized as HTMLElement
            start: 'top center', // Start trigger when the element's top reaches the center
            end: 'top center', // Maintain until it passes the center
            scrub: 0.2, // Smooth scroll scrub
            markers: false, // Disable markers
          },
        }
      );
    });

    // Titles fade-in and scale-in sequentially for each item
    gsap.utils.toArray('.product-title').forEach((title) => {
      gsap.fromTo(
        title as HTMLElement, // Type assertion to HTMLElement
        {
          opacity: 0,
          scale: 0.85, // Start slightly scaled down
          y: 20, // Start with a small offset in y direction
        },
        {
          opacity: 1,
          scale: 1, // Scale to normal size
          y: 0, // Move into position
          duration: 1, // Shorter duration for quicker animation on mobile
          ease: 'power3.out', // Smooth easing
          stagger: 0.2, // Slightly shorter stagger for better performance
          scrollTrigger: {
            trigger: title as HTMLElement, // Explicit typing to avoid the unknown error
            start: 'top center', // Start trigger when the element's top reaches the center
            end: 'top center', // Maintain until the element is in the center
            scrub: 0.2, // Smooth scroll scrub
            markers: false, // Disable markers
          },
        }
      );
    });

    // Description fade-in and scale-in sequentially for each item
    gsap.utils.toArray('.product-description').forEach((desc) => {
      gsap.fromTo(
        desc as HTMLElement, // Type assertion to HTMLElement
        {
          opacity: 0,
          scale: 0.85,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2, // Reduced duration to make animation faster on mobile
          ease: 'power3.out', // Smoother easing for mobile
          stagger: 0.2, // Shorter stagger for mobile
          scrollTrigger: {
            trigger: desc as HTMLElement, // Explicit typing to avoid the unknown error
            start: 'top center', // Trigger animation when the description reaches the center
            end: 'top center',
            scrub: 0.2, // Smooth scroll scrub
            markers: false, // Disable markers
          },
        }
      );
    });

  }, []);

  return (
    <div className='py-[50px] px-2 md:px-[8vw] bg-gray-100 flex flex-col justify-center items-center md:py-[100px] relative'>
      <h2
        style={{
          fontWeight: '900',
          lineHeight: '100%',
        }}
        className={`${CaladeaF} text-black md:mx-[5vw] text-4xl text-center md:text-5xl mb-4`}
      >
        Premium Healthcare Products
      </h2>
      <p className={`md:text-xl text-md text-black max-w-[1000px] px-6 text-center mx-[5vw] ${CaladeaF}`}>
        Our products are designed to enhance patient care with precision and reliability, ensuring the highest standards of health.
      </p>
      <div className='h-auto mt-6 gap-4 md:gap-6 w-full bg-transparent trust-badges-container'>
        {productsInfo.map((item, index: number) => (
          <div
            ref={(el) => { boxRefs.current[index] = el; }} // Callback ref with no return
            className='trust-badge product-card translate-y-[1000px] bg-lightblue flex md:mx-0 mx-4 text-center flex-col py-8 rounded-lg items-center justify-center '
            key={index}
          >
            <div>
              <img className='h-[280px] w-auto' src={item.image} height={500} width={500} />
            </div>
            <h3
              className={`product-title text-2xl text-white mt-6 max-w-[320px] ${CaladeaF}`}
            >
              {item.title}
            </h3>
            <p className={`product-description text-sm max-w-[400px] text-white px-3 md:text-md ${CaladeaF} mt-6`}>
              {item.description}
            </p>
            <Link
              style={{
                fontWeight: '800',
              }}
              className={`mt-8 px-12 py-2 rounded-md bg-darkblue text-white ${CaladeaF} uppercase `}
              href='/'
            >
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
