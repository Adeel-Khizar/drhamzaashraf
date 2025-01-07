"use client";

import { MenuLinks } from "@/data";
import { CaladeaF } from "@/fonts";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  // State to track if the menu is toggled
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track if the user has scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle the menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev); 
    setIsScrolled(true)
    // Toggle the menu open/closed
  };
  // Set up the scroll event listener when the component mounts
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Set scroll state directly
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header flex md:border-b-2 border-lightblue md:flex-row md:py-2 flex-col fixed top-0 w-full z-[11111] items-start md:gap-0 gap-10 ${isMenuOpen ? "bgWhite" : ""}  md:items-center justify-between px-[4vw] py-2 ${isScrolled ? "header-scrolled bg-darkblue" : ""} md:bg-transparent bg-white`} // Added 'md:bg-transparent bg-white' for mobile
    >
      {/* Logo */}
      <div>
        <Link href='#home'>
        <img
          className=" h-[50px] md:h-[70px] w-auto"
          src="/image (44).png"
          height={500}
          width={500}
          alt="NodeBPO"
        />
        </Link>
      </div>

      {/* Desktop Menu and Contact */}
      <div className="hidden md:flex md:flex-row md:gap-0 gap-4">
        {MenuLinks.map((item, index) => (
          <Link
            className={`mx-3 hover:font-bold transition duration-500 ease-in-out hover:scale-125  text-white  ${CaladeaF} text-xl`}
            key={index}
            href={item.link}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="hidden md:block Contact">
        <Link target="_blank" className="px-8 p-3 text-white font-caladea btn-5 bg-[#05A3F3] rounded-md" 
              href="https://calendly.com/dr-hamza-ashraf-official"
        
        >
        Make An Appointment
        </Link>
      </div>

      {/* Mobile Menu Icon and Menu Toggle */}
      <div className="md:hidden absolute right-4 top-4 flex items-center">
        {/* Menu Icon (when menu is closed) */}
        {!isMenuOpen ? (
          <svg
            onClick={handleMenuToggle}
            fill="#ffffff"
            width="25px"
            height="25px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          // Cross Icon (when menu is open)
          <svg
            onClick={handleMenuToggle}
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <path
              d="M19 5L4.99998 19M5.00001 5L19 19"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Mobile Menu and Contact (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="w-full z-10 md:hidden flex flex-col items-start space-y-4 pt-0">
          {/* Mobile Menu Links */}
          <div className="flex flex-col gap-6">
            {MenuLinks.map((item, index) => (
              <Link
                className={`mx-3  hover:font-extrabold text-white uppercase ${CaladeaF} text-md`}
                key={index}
                href={item.link}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Contact Button */}
          <div className="Contact pt-6 pb-10">
            <Link
              className="px-8 p-3 text-white bg-lightblue rounded-md"
              href="https://calendly.com/dr-hamza-ashraf-official"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
  