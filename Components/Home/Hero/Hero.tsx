'use client'
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Hero = () => {
  const controls = useAnimation();
  const [changingText, setChangingText] = useState('TRAVEL');
  const words = ['TRAVEL', 'EXPLORE', 'DISCOVER', 'GET OUT', 'FIND PEACE'];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % words.length;
      setChangingText(words[i]);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='relative' >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center relative"
    >
   <div className=" h-screen w-full ">
  <Image src="/home/Hero_image.jpg" alt="Description" layout="fill" objectFit="cover" className="absolute" />
</div>
      <div className="flex flex-col  items-start w-1/2 absolute top-1/4 left-10 lg:top-[40%] lg:left-[10%]">
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          IT'S TIME TO <span className="text-yellow-500">{changingText}</span>
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base md:text-lg mt-4 text-white p-2 rounded"
        >
          Discover amazing places at exclusive deals!
        </motion.p>
        <div className="mt-6 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white p-2 rounded-lg shadow-lg w-[380px]"
          />
          <motion.button
               initial={{ backgroundColor: "#FBBF24", color: "#000" }}
               whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
               transition={{ duration: 0.3 }}
            className="border border-yellow-500 py-2 px-4 rounded-lg ml-2 text-black shadow-lg"
          >
            Explore
          </motion.button>
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default Hero