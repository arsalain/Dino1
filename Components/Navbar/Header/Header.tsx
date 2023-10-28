'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-black text-white sm:p-1 z-50 fixed w-full"
      >
        <div className="container mx-auto flex justify-between items-center py-2">

          <div className="flex-grow-4 flex flex-row float-left md:pl-10 pl-1 ">
            <div className="">
              <Link href='/'>
                <Image src="/home/logo-bpu.png" alt='logoimage' className="rounded-full" width={200} height={200} />
              </Link>
            </div>
            {/* <div className="flex flex-col mt-2 pl-2">
              <Link href='/'>
                <div className="text-2xl font-bold text-white font-lato">BACKPACKERS</div>
                <div className="text-sm font-bold text-red-600 relative top-[-0.525rem] font-lato text-center">
                  UNITED
                  <div className="absolute left-0 w-[65px] h-[2px] bg-white mt-[-0.75rem]"></div>
                  <div className="absolute right-0 w-[65px] h-[2px] bg-white mt-[-0.75rem]"></div>
                </div>
              </Link>
            </div> */}
          </div>

          <div className="hidden md:flex items-center space-x-4 mr-8 sm:space-x-6 md:space-x-8">
            {['Home', 'Destinations', 'Treks', 'Tours', 'Contact Us'].map((link, index) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="hover-effect"
              >
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                  {link}
                </Link>
              </motion.div>
            ))}

            <Link href='/signup'>
              <motion.button
                initial={{ backgroundColor: "#FBBF24", color: "#000" }}
                whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-black py-1 px-4 rounded border border-yellow-500"
              >
                Sign In / Register
              </motion.button>
            </Link>
          </div>

          {/* Hamburger Icon for mobile view */}
          <div className="md:hidden flex items-center pr-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="hamburger-icon flex flex-col space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>

        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: isOpen ? 0 : '-100vw' }}
        transition={{ duration: 0.5 }}
        className="fixed bg-black h-screen w-64 z-40 top-0 left-0 flex flex-col space-y-6 py-8 pl-8 pt-20 md:hidden"
      >
        {['Home', 'Destinations', 'Treks', 'Tours', 'Contact Us'].map((link, index) => (
          <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
            <span className="text-white text-xl">{link}</span>
          </Link>
        ))}
            <Link href='/signup'>
              <motion.button
                initial={{ backgroundColor: "#FBBF24", color: "#000" }}
                whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-black py-1 px-4 rounded border border-yellow-500"
              >
                Sign In / Register
              </motion.button>
            </Link>
      </motion.div>
    </>
  )
}

export default Header;
