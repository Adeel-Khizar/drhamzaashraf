"use client"
import { productReviews } from '@/data';
import { CaladeaF } from '@/fonts';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Reviews = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    productReviews.forEach((review, index) => {
      // Animate title
      gsap.fromTo(
        `.review-title-${index}`,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.review-title-${index}`,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5,
            markers: false,
          },
        }
      );

      // Animate description
      gsap.fromTo(
        `.review-description-${index}`,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.review-description-${index}`,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5,
            markers: false,
          },
        }
      );

      // Animate video
      gsap.fromTo(
        `.review-video-${index}`,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.review-video-${index}`,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.5,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div id="reviews" className="h-auto bg-white px-4 md:px-[8vw] py-[40px] md:py-[80px]">
      <h2
        style={{
          fontWeight: '900',

        }}
        className={` ${CaladeaF} text-darkblue md:text-5xl text-3xl text-center`}
      >
        Patient Reviews
      </h2>
      <p
        style={{
          lineHeight: '110%',
        }}
        className={`${CaladeaF} text-darkblue mt-3 md:text-lg text-sm text-center`}
      >
        Discover what our patients are saying about their experiences with us. Read
        honest reviews that highlight the quality of care and personalized service we
        provide.
      </p>
      <div className="review_wrapper mt-8">
        {productReviews.map((reviews, key) => (
          <div
            key={key}
            className="flex bg-darkblue  review_item flex-col items-center justify-center text-center gap-6 py-12 px-3 rounded-[20px]"
          >
            <h3
              style={{
                fontWeight: '900',
                lineHeight: '100%',
              }}
              className={`review-title-${key} ${CaladeaF} text-2xl md:text-3xl text-white`}
            >
              {reviews.title}
            </h3>
            <p className={`review-description-${key} text-white text-sm ${CaladeaF}`}>
              {reviews.description}
            </p>
            <div>
              <video
                className={`review-video-${key} h-[500px] w-auto rounded-[20px] overflow-hidden`}
                width="1000"
                height="1000"
                controls
              >
                <source src={reviews.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
