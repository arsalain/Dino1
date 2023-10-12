'use client'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <motion.header
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="bg-black text-white sm:p-1  z-50 fixed w-full"
  >
   
      <div className="container mx-auto flex justify-between items-center">
        {/* Left - Logo */}
        {/* <div className="text-xl sm:text-2xl md:text-3xl font-bold">
          BACKPACKERS UNITED
        </div> */}
<div className="flex-grow-4 flex flex-row float-left pl-10 items-center">

<div className="">
   <Link href='/' className="">
      <Image src="/home/bplogo.jpg" className="rounded-full" width={40} height={40} />
   </Link>
</div>
<div className="flex flex-col mt-2 pl-2">
   <Link href='/' className="">
      <div className="text-2xl font-bold text-white font-lato">BACKPACKERS</div>
      <div className="text-sm font-bold text-red-600 relative top-[-0.525rem] font-lato text-center">
         UNITED
         <div className="absolute left-0 w-[65px] h-[2px] bg-white mt-[-0.75rem]"></div>
         <div className="absolute right-0 w-[65px] h-[2px] bg-white mt-[-0.75rem]"></div>
      </div>
   </Link>
</div>
</div>

        {/* Right - Links */}
        <div className="flex items-center space-x-4 mr-8 sm:space-x-6 md:space-x-8">
          {['Home', 'Destinations', 'Treks', 'Tours ','Contact Us'].map((link, index) => (
            <motion.div
              key={link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
              className="hover-effect"
            >
              <a href="#">{link}</a>
            </motion.div>
          ))}
          {/* Sign In / Register Button */}
          <motion.button
            initial={{ backgroundColor: "#FBBF24", color: "#000" }}
            whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="text-black py-1 px-4 rounded border border-yellow-500"
          >
            Sign In / Register
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
