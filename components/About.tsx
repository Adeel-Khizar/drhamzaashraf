'use client'

import { CaladeaF } from '@/fonts';
import Link from 'next/link';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animation for the 'About Us' title
    gsap.fromTo(
      '.about__right h3',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,  // Reduced duration for faster animation
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__right h3',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.3, // Faster scrub for smoother animation
          markers: false,
        },
      }
    );
  
    // Animation for the 'Your Health, Our Top Priority' title
    gsap.fromTo(
      '.about__right h2',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Reduced duration for faster animation
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__right h2',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.3, // Faster scrub for smoother animation
          markers: false,
        },
      }
    );
  
    // Animation for the paragraph text
    gsap.fromTo(
      '.about__right p',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Reduced duration for faster animation
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__right p',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.3, // Faster scrub for smoother animation
          markers: false,
        },
      }
    );
  
    // Animation for the list items
    gsap.utils.toArray('.about_points li').forEach((item) => {
      // Type assertion: tell TypeScript that item is an Element
      const element = item as Element;
  
      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8, // Reduced duration for faster animation
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.3, // Faster scrub for smoother animation
            markers: false,
          },
        }
      );
    });
  
    // Animation for the link button
    gsap.fromTo(
      '.about__right a',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8, // Reduced duration for faster animation
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__right a',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.3, // Faster scrub for smoother animation
          markers: false,
        },
      }
    );
  
    // Animation for the image
    gsap.fromTo(
      '.about__left img',
      {
        opacity: 0,
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1, // Reduced duration for faster animation
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about__left img',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.3, // Faster scrub for smoother animation
          markers: false,
        },
      }
    );
  }, []);
  
  

  return (
    <div id="about" className='flex md:flex-row flex-col bg-darkblue pt-[50px] md:pt-[100px] px-4 md:px-[8vw]'>
      <div className="about__right w-full md:w-1/2">
        <h3 style={{ fontWeight: '900' }} className={`text-2xl ${CaladeaF} bg-lightblue  md:m-0 m-auto max-w-fit text-white px-8 py-2 rounded-full`}>
          About Us
        </h3>
        <h2 style={{
          fontWeight: 900,
          lineHeight: '100%'
        }} className={` ${CaladeaF} my-6 text-white text-3xl text-center md:text-left md:text-6xl`}>
          Your Health, Our Top Priority
        </h2>
        <p className={`text-lg ${CaladeaF} md:text-left text-center text-white mb-10`}>
          <span className='text-lightblue'> Dr. Hamza Ashraf Zia </span> began his remarkable journey with outstanding achievements at the Cambridge International Examinations. His academic prowess continued at Government College University and peaked at King Edward Medical University, where he honed his clinical skills and earned prestigious accolades.
        </p>
        <ul className='text-lg about_points flex flex-col gap-3 bg-lightblue text-white py-4 px-2 md:p-[2vw] rounded-md'>
          <li className='flex items-start gap-2'>
            <svg fill="#fff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <path d="M13.41,15.41a2,2,0,0,1-2.83,0l-4-4a2,2,0,0,1,0-2.83,2,2,0,0,1,2.82,0L12,11.17l6.63-6.63a10,10,0,1,0,3.15,9.53,9.87,9.87,0,0,0-.73-6.29Z" style={{ fill: '#fff' }}></path>
              <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,1,1,8.71,9.29L12,12.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,12,15Z" style={{ fill: '#000' }}></path>
            </svg>
            <span> Over 9 years of experience</span>
          </li>
          <li className='flex items-start gap-2'>
            <svg fill="#fff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <path d="M13.41,15.41a2,2,0,0,1-2.83,0l-4-4a2,2,0,0,1,0-2.83,2,2,0,0,1,2.82,0L12,11.17l6.63-6.63a10,10,0,1,0,3.15,9.53,9.87,9.87,0,0,0-.73-6.29Z" style={{ fill: '#fff' }}></path>
              <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,1,1,8.71,9.29L12,12.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,12,15Z" style={{ fill: '#000' }}></path>
            </svg>
            <span> Individualized treatment plan </span>
          </li>
          <li className='flex items-start gap-2'>
            <svg fill="#fff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <path d="M13.41,15.41a2,2,0,0,1-2.83,0l-4-4a2,2,0,0,1,0-2.83,2,2,0,0,1,2.82,0L12,11.17l6.63-6.63a10,10,0,1,0,3.15,9.53,9.87,9.87,0,0,0-.73-6.29Z" style={{ fill: '#fff' }}></path>
              <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,1,1,8.71,9.29L12,12.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,12,15Z" style={{ fill: '#000' }}></path>
            </svg>
            <span> Fast recovery with lasting results</span>
          </li>
          <li className='flex items-start gap-2'>
            <svg fill="#fff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="icon flat-color">
              <path d="M13.41,15.41a2,2,0,0,1-2.83,0l-4-4a2,2,0,0,1,0-2.83,2,2,0,0,1,2.82,0L12,11.17l6.63-6.63a10,10,0,1,0,3.15,9.53,9.87,9.87,0,0,0-.73-6.29Z" style={{ fill: '#fff' }}></path>
              <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,1,1,8.71,9.29L12,12.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,12,15Z" style={{ fill: '#000' }}></path>
            </svg>
            <span>Affordable pricing </span>
          </li>
        </ul>
        <Link
          style={{
            fontWeight: '900',
            lineHeight: '110%',
          }}
          href='/'
          className={` ${CaladeaF} text-md text-center transition-all duration-500 hover:bg-transparent hover:border-2  hover:border-lightblue hover:text-white rounded-full bg-lightblue my-5 md:my-10 md:text-xl text-white px-20 py-4 flex items-center justify-center`}>
          Get Expert Advice from Dr. Hamza
        </Link>
      </div>
      <div className="about__left flex items-start justify-center w-full md:w-1/2">
        <img className='w-[100%] h-auto' src='about 1 (1).png' height={800} width={800} />
      </div>
    </div>
  );
};

export default About;
