'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' }
};
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-black text-white sm:p-1 z-50 fixed w-full"
        role="banner"
      >
        <div className="container mx-auto flex justify-between items-center py-2">
          <div className="flex-grow-4 flex flex-row float-left md:pl-10 pl-1 ">
            <div className="">
              <Link href='/'>
                <Image src="/home/logo-bpu.png" alt='Backpackers United logo' className="rounded-full" width={200} height={200} />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 mr-8 sm:space-x-6 md:space-x-8">
            {['Home', 'Destinations', 'Treks', 'Tours', 'Contact Us'].map((link, index) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="hover-effect"
              >
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>{link}</Link>
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
          <div className="md:hidden flex items-center pr-2" onClick={() => setIsOpen(!isOpen)}>
            <div className="hamburger-icon flex flex-col space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'spring', stiffness: 60, damping: 20 }}
            className="fixed bg-black h-screen w-64 z-40 top-0 right-0 flex flex-col space-y-6 py-8 pl-8 pt-20 md:hidden"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 }},
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 }}
              }}
            >
              {['Home', 'Destinations', 'Treks', 'Tours', 'Contact Us'].map((link, index) => (
                <motion.div key={link} variants={variants}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                    <span className="text-white text-xl">{link}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={variants}>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Header;