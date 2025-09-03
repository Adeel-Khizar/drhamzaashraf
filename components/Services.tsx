'use client'
import { TrustBadgesInfo } from '@/data'; // Ensure this is typed correctly
import { CaladeaF } from '@/fonts';
import Link from 'next/link';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  useEffect(() => {
    // GSAP animation for the main section title
    gsap.from('.product-title', {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.product-title',
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
        once: true,
      },
    });

    // GSAP animation for the description text
    gsap.from('.product-description', {
      opacity: 0,
      y: 30,
      duration: 1.4,
      ease: 'power4.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.product-description',
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
        once: true,
      },
    });

    // GSAP animation for images (item.image1 and item.image)
    gsap.from('.services_media', {
      opacity: 0,
      scale: 0.8,
      duration: 1.4,
      ease: 'power4.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.services_media',
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
        once: true,
      },
    });

    // GSAP animation for the "Buy Now" button
    gsap.from('.product-description + a', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: '.product-description + a',
        start: 'top 80%',
        end: 'bottom top',
        scrub: true,
        once: true,
      },
    });

  }, []);

  return (
    <div id="services" className='py-[50px] px-2 md:px-[8vw] bg-lightblue flex flex-col justify-center items-center md:py-[100px] relative'>
      <h2
        style={{
          fontWeight: '900',
          lineHeight: '100%',
        }}
        className={`${CaladeaF} text-white md:mx-[5vw] text-4xl text-center md:text-5xl mb-4`}
      >
        Personalized Health Solutions
      </h2>
      <p className={`md:text-xl text-md text-white max-w-[1000px] px-6 text-center mx-[5vw] ${CaladeaF}`}>
        We offer specialized care to address your unique medical concerns. Trust our expert doctors to guide you toward a healthier life.
      </p>
      <div className='h-auto mt-6 gap-4 md:gap-6  w-full bg-transparent trust-badges-container'>
        {TrustBadgesInfo.map((item, key) => (
          <div
            className='trust-badge bg-darkblue pb-6 flex md:mx-0 mx-4 text-center flex-col  rounded-lg items-center justify-start'
            key={key}
          >
            <div className='w-full'>
              <Image
                style={{
                  objectPosition: 'top center'
                }}
                className='md:h-[400px] h-auto object-top-center object-cover services_media w-full'
                src={item.image1}
                height={500}
                width={500}
                alt={item.title}
              />
            </div>
            <div className='services_icon p-3 mt-4 bg-white rounded-full'>
              <img  className='h-auto w-[40px] services_media object-contain' src={item.image} height={250} width={250} />
            </div>
            <h3
              style={{
                lineHeight: '110%',
                fontWeight: '900',
              }}
              className={`product-title text-center w-full text-2xl text-white mt-6 max-w-[320px] ${CaladeaF}`}
            >
              {item.title}
            </h3>
            <p className={`product-description text-center text-sm max-w-[400px] text-white px-3 md:text-md ${CaladeaF} mt-6`}>
              {item.description}
            </p>
            <Link
              style={{
                fontWeight: '800',
              }}
              className={`mt-8 px-12 py-2 hover:bg-transparent hover:border-2 border-white transition ease-out duration-700 rounded-md bg-lightblue text-white ${CaladeaF} uppercase`}
              href='https://wa.me/923371112221'
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
