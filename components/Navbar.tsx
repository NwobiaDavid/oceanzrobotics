"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { black_han_sans, lato } from '@/app/fonts';
import { Image } from '@nextui-org/react'

const Navbar: React.FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down, hide the navbar
        setShow(false);
      } else {
        // if scroll up, show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`fixed top-0 w-full z-10 bg-black transition-transform duration-300 ease-in-out`}
    >
      <div className=" lg:max-w-7xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className={`text-white text-lg flex items-center lg:text-2xl font-bold ${black_han_sans} `}>
            {/* <span className=' mr-2 ' >
              <Image className=' lg:h-[30px] lg:w-[30px] h-[40px] w-[40px] ' src='/logo.png' alt="logo of oceanz robotics" />
            </span> */}
              Oceanz Robotics
            </a>
          </div>
          <div className="flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline  ${lato} space-x-4`}>
              <a href="#hero" className="text-gray-300  hover:text-white px-3 py-2 rounded-md text-sm font-medium ">
                Home
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Testimonial
              </a>
              <a href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Works
              </a>
              <a href="#process" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Process
              </a>
              <a href="#resources" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden" id="mobile-menu"
        >
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${lato}`}>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                Testimonial
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                Works
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                Process
              </a>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;