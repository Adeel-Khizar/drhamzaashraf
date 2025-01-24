'use client';

import { productsInfo } from '@/data'; // Ensure this is typed correctly
import { CaladeaF } from '@/fonts';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import Link from 'next/link';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Use GSAP matchMedia for mobile responsiveness
    gsap.matchMedia({
      "(min-width: 768px)": function () {
        productRefs.current.forEach((product) => {
          if (product) {
            const image = product.querySelector('.product-image') as HTMLElement;
            const title = product.querySelector('.product-title') as HTMLElement;
            const description = product.querySelector('.product-description') as HTMLElement;
            const link = product.querySelector('.buy-now') as HTMLElement;

            gsap.fromTo(
              [image, title, description, link],
              {
                opacity: 0,
                y: 50,
                scale: 0.8,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: product,
                  start: 'top 80%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });
      },
      "(max-width: 767px)": function () {
        productRefs.current.forEach((product) => {
          if (product) {
            const image = product.querySelector('.product-image') as HTMLElement;
            const title = product.querySelector('.product-title') as HTMLElement;
            const description = product.querySelector('.product-description') as HTMLElement;
            const link = product.querySelector('.buy-now') as HTMLElement;

            gsap.fromTo(
              [image, title, description, link],
              {
                opacity: 0,
                y: 50,
                scale: 0.8,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: product,
                  start: 'top 90%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }
        });
      },
    });

    // Optional: Refresh ScrollTrigger for mobile
    if (window.innerWidth <= 768) {
      ScrollTrigger.refresh();
    }
  }, []);

  return (
    <div id="products" className="py-[50px] px-2 md:px-[8vw] bg-gray-50 flex flex-col justify-center items-center md:py-[100px] relative">
      <h2
        style={{
          fontWeight: '900',
          lineHeight: '100%',
        }}
        className={`${CaladeaF} text-darkblue md:mx-[5vw] text-4xl text-center md:text-5xl mb-4`}
      >
        Premium Healthcare Products
      </h2>
      <p className={`md:text-xl text-md text-darkblue max-w-[1000px] px-6 text-center mx-[5vw] ${CaladeaF}`}>
        Our products are designed to enhance patient care with precision and reliability, ensuring the highest standards of health.
      </p>
      <div className="h-auto mt-6 gap-4 md:gap-6 w-full bg-transparent trust-badges-container">
        {productsInfo.map((item, index) => (
          <div
          style={{
            position: 'relative'
          }}
            key={index}
            className="product-card product-cards bg-white flex md:mx-0 mx-4 text-center flex-col py-8 rounded-lg items-center justify-center"
            ref={(el) => { if (el) productRefs.current[index] = el }}
          >
            <span className='bg-[#FDD750] text-md text-black font-bold px-4 py-1 text-center rounded-md' style={{
              position: 'absolute',
              top: '10px',
              left:'10px',
              
            }}>Best Seller</span>
            <div>
              <img
                className="product-image h-[280px] w-auto"
                src={item.image}
                height={500}
                width={500}
                alt={item.title}
              />
            </div>
            <h3
              style={{
                lineHeight: '100%',
                fontWeight: '900',
              }}
              className={`product-title text-2xl text-darkblue mt-6 max-w-[320px] ${CaladeaF}`}
            >
              {item.title}
            </h3>
            <p className={`product-description text-sm max-w-[400px] text-darkblue px-3 md:text-md ${CaladeaF} mt-6`}>
              {item.description}
            </p>
            <Link
              target="_blank"
              style={{
                fontWeight: '900',
              }}
              className={`buy-now transition flex gap-2 items-center justify-center ease-in-out duration-500 hover:bg-darkblue hover:bg-opacity-80 hover:border-2 border-darkblue mt-8 px-12 py-2 capitalize rounded-md bg-darkblue text-white ${CaladeaF}`}
              href="https://wa.me/923371112221"
            >
              Buy Now <span className='text-[#FDD750] text-sm' >-{item.off} OFF</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
