'use client'
import { socialMediaData } from '@/data';
import { CaladeaF } from '@/fonts';
import Link from 'next/link';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate title (fade in and slide from left) with a faster duration
    gsap.fromTo(
      '.contact-title',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1, // Reduced duration to 1s
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
        },
      }
    );

    // Animate description (fade in and slide up) with a faster duration
    gsap.fromTo(
      '.contact-description',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Reduced duration to 1s
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-description',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
        },
      }
    );

    // Animate social media links (staggered fade in and slide up) with a faster duration
    gsap.fromTo(
      '.social-media-link',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Reduced duration to 1s
        ease: 'power3.out',
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.social-media-link',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
        },
      }
    );

    // Animate map iframe (scale and fade in) with a faster duration
    gsap.fromTo(
      '.mapiframe',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1, // Reduced duration to 1s
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mapiframe',
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className="flex md:flex-row flex-col bg-lightblue items-center justify-center h-auto py-[40px] md:py-[80px] px-4 md:px-[10vw]">
      <div className="flex flex-col w-full md:w-1/2">
        <h2
          style={{
            fontWeight: '900',
          }}
          className={`contact-title ${CaladeaF} text-white text-center md:text-left text-4xl mb-5`}
        >
          We're Here to Help
        </h2>
        <p className="contact-description text-center md:text-left ${CaladeaF} text-white pr-4">
          For any questions or appointment requests, feel free to contact us. Our team
          is here to assist you with your healthcare needs!
        </p>
        <div className="md:my-14 my-7 social_media gap-4 md:pr-8">
          {socialMediaData.map((social, key) => (
            <Link
              href={social.link}
              key={key}
              className="social-media-link flex hover:bg-lightblue hover:border-2 hover:border-white flex-col gap-2 items-start transition ease-in-out duration-500 cursor-pointer rounded-[20px] bg-darkblue max-w-fit px-3 py-3 justify-center md:justify-start"
            >
              <div className="flex gap-2 items-center justify-start">
                <span className="bg-white border-2 transition ease-in-out duration-500 hover:bg-lightblue border-black rounded-full p-2">
                  {social.icon}
                </span>
                <span style={{ lineHeight: '100%' }} className="text-white ${CaladeaF}">
                  Connect Through {social.name}
                </span>
              </div>
              <p style={{ lineHeight: '100%' }} className="text-white text-sm text-center">
                {social.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <iframe
          className="mapiframe max-w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.2245255920843!2d74.35264632623966!3d31.435485201330067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391906ff029cb391%3A0x3ebc80383cbb8f31!2sZia%20Hospital%20%26%20Maternity%20Complex!5e0!3m2!1sen!2s!4v1734371621999!5m2!1sen!2s"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
