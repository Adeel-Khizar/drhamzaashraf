'use client'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef, useEffect } from 'react';

import Header from './Header';
import Link from 'next/link';
import { CaladeaF } from '@/fonts';

const Hero = () => {
  const boxRef = useRef<HTMLDivElement>(null);  // Properly typed ref
  const imageRef = useRef<HTMLImageElement>(null);  // Image reference for animation

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);  // Register GSAP ScrollTrigger plugin

    if (boxRef.current && imageRef.current) {
      // Animation for the entire section when it first loads (slide-in from left and fade in)
      gsap.fromTo(
        boxRef.current,
        {
          opacity: 0,
          x: -1000,
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: 'power4.out',
        }
      );

      // Title animation: Scale and rotate effect (fade-in, scale from 0.5 to 1, slight rotation)
      gsap.fromTo(
        '.hero-title',
        {
          opacity: 0,
          scale: 0.5,
          rotation: -10,
          y: 100,  // Slight vertical movement
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 2,
          ease: 'power4.out',
        }
      );

      // Subheading animation: Fade in and move up for added depth
      gsap.fromTo(
        '.hero-title span',
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power4.out',
          delay: 0.3,
        }
      );

      // Paragraph animation: Slide in from bottom with fade-in and slight scaling
      gsap.fromTo(
        '.hero-paragraph',
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: 'power4.out',
          delay: 0.5,  // Slight delay for paragraph
        }
      );

      // Button animation: Scale effect with a hover interaction
      gsap.fromTo(
        '.hero-button',
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          delay: 1,  // Delay the button animation slightly
        }
      );

      // Button hover animation: Scale up on hover with a smooth ease
      gsap.to('.hero-button', {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.inOut',
        paused: true,
        hover: {
          scale: 1.1,
        },
      });

      // Image animation: Zoom-in and fade-in effect on load
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: 'power4.out',
        }
      );

      // ScrollTrigger for image (fade-in and slide effect as the user scrolls)
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div id="home" className="md:h-screen h-auto flex flex-col w-full text-black">
      <div className="h-full overflow-y-hidden items-start heroS justify-center flex flex-col w-full">
        <Header />
        <div className='flex md:flex-row flex-col-reverse md:gap-0  items-center justify-start'>
          <div ref={boxRef} className="mx-[10vw] w-full md:w-[50%] translate-x-[-1000px] h-auto md:px-0 px-4">
            <h1
              className={`${CaladeaF} hero-title md:text-left text-center text-white capitalize text-3xl max-w-[800px] md:text-[3.5vw]`}
              style={{
                lineHeight: '100%',
                fontWeight: '900',
              }}
            >
              <span className='md:text-3xl text-xl text-[#FDD750] m-0 pb-4'>
                MBBS Gold Medalist
              </span>
              <br />
              I&apos;m <span className='text-white'>Dr. Hamza Ashraf Zia</span>
              <br />
              <span className='text-xl  md:text-2xl m-0 p-0'>
                King Edward Medical University
              </span>
            </h1>
            <p
              className={`${CaladeaF} md:text-left text-center hero-paragraph text-sm md:text-md text-white md:text-lg mt-4 max-w-[900px]`}
            >
              Welcome to the official website of Dr. Hamza Ashraf Zia - where exceptional healthcare meets personalized care. With a prestigious MBBS degree adorned with gold medals and a strong social media following, I&apos;m here to provide you with the utmost care to your health needs.
            </p>
            <div className="md:mt-6 my-6 ">
              <Link
                className={`${CaladeaF} hero-button mx-auto md:m-0 flex items-center gap-2 font-extrabold px-4 md:px-8 py-3 max-w-fit text-white btn-6  bg-lightblue rounded-md text-lg  md:text-md`}
                href="#services"
              >
                All Services
              </Link>
            </div>
          </div>
          <div className='w-[70%] md:w-[50%] h-[70%]'>
            <img
               className=' '
              ref={imageRef}
              src='/about 1 (1).png'
              height={1000}
              width={1000}
              alt="Dr. Hamza Ashraf"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
