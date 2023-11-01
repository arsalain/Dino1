"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const Hero = () => {
  const [changingText, setChangingText] = useState('TRAVEL');
  const words = ['TRAVEL', 'EXPLORE', 'DISCOVER', 'GET OUT', 'FIND PEACE'];
  const [searchInput, setSearchInput] = useState("");
  const [showPopular, setShowPopular] = useState(false);
  const popularSearches = ['Wayanad', 'Goa', 'Thailand', 'Kashmir'];
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % words.length;
      setChangingText(words[i]);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className='relative'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center relative"
      >
        <div className="h-screen w-full absolute">
          <Image src="/home/Hero_image.jpg" alt="Hero background" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col items-start md:w-1/2 absolute top-1/4 md:top-1/3 left-5 md:left-10 lg:left-20 xl:left-32">
          <motion.h1
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white md:text-4xl"
          >
            IT'S TIME TO <span className="text-yellow-500">{changingText}</span>
          </motion.h1>
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base md:text-lg md:p-2 mt-4 text-white rounded"
          >
            Discover amazing places at exclusive deals!
          </motion.p>
          <div className="flex flex-row mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-3 py-2 rounded-lg bg-white w-[200px] md:w-[380px] text-black outline-none"
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={() => setShowPopular(true)}
                onBlur={() => setShowPopular(false)}
                value={searchInput}
              />
              {showPopular && (
                <div className="absolute top-full left-0 mt-2 rounded-lg bg-white w-[200px] md:w-[380px]">
                  <div className="text-black p-2">Popular Searches:</div>
                  {popularSearches.map((search, index) => (
                    <div className="text-black p-2 hover:bg-gray-200" onClick={() => setSearchInput(search)} key={index}>
                      {search}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <motion.button
              initial={{ backgroundColor: "#FBBF24", color: "#000" }}
              whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="border border-yellow-500 w-[80px] h-[40px] md:w-[90px] rounded-lg ml-2 text-black shadow-lg"
            >
              <Link href={`/product/${searchInput}`}>
                Explore
              </Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Hero;