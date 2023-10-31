'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Popular = () => {
    const images =  { 
       vertical: '/home/kedar.jpg',
        adjacent: [
            '/home/kedar.jpg',
            '/home/kedar.jpg',
            '/home/kedar.jpg',
          
        ],
        bottom: [
            '/home/kedar.jpg',
            '/home/kedar.jpg',
            '/home/kedar.jpg',
        ],
      }
    const destinations = [
        { name: 'KUMAON', image: '/home/kedar.jpg' },
        { name: 'GARHWAL', image: '/home/hamta.jpg' },
        { name: 'MUSSOORIE', image: '/home/lake.jpg' },
        { name: 'HIMACHAL', image: '/home/valley.jpg' },
        { name: 'KARERI', image: '/home/roop.jpg' },
      
    ];
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="md:p-10 p-5 px-0 max-w-screen-xl "
    >
           <h2 className="text-xl md:text-3xl font-bold  text-yellow-500 text-center">Top Destinations</h2>
           <div className="flex justify-center pt-5">
           <hr className="border-t-2 border-white w-[5%]" />
           </div>
           <div className="grid md:grid-cols-6 grid-col-1 gap-4 md:p-10 md:pb-0 pb-0 p-0 pt-5">
    {/* First large image */}

    <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-2 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[500px] h-[400px]"
          >
            <Image
              src='/home/kedar.jpg'
              alt="KUMAON"
              layout="fill"
              objectFit="cover"
            />
        <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 ">KUMAON</p>
    </motion.div>
    {/* First set of smaller images (3 images vertically) */}
  
    {/* Second set of smaller images (2 images vertically) */}
    <div className="grid grid-rows-2 gap-2 col-span-2" >
    <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[240px] h-[300px]"
          >
            <Image
              src='/home/kedar.jpg'
              alt="GARHWAL"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-tr-t-lg">GARHWAL</p>
            </motion.div>
            <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-2 relative overflow-hidden w-full rounded-lg md:h-[240px] h-[300px]"
          >
            <Image
              src='/home/kedar.jpg'
              alt="MUSSOORIE" 
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-tr-t-lg">MUSSOORIE</p>
        </motion.div>
    </div>
    <div className="grid md:grid-rows-3 grid-row-5 gap-4 col-span-2" >
    <motion.div
            whileHover={{ scale: 1.05 }}
            className="row-span-2 md:row-span-1 relative overflow-hidden w-full rounded-lg md:h-[155px] h-[300px]"
          >
            <Image
              src='/home/kedar.jpg'
              alt="GARHWAL"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 ">GARHWAL</p>
       </motion.div>
       <motion.div
            whileHover={{ scale: 1.05 }}
            className="row-span-2 md:row-span-1  relative overflow-hidden w-full rounded-lg md:h-[155px] h-[300px]"
          >
            <Image
              src='/home/kedar.jpg'
              alt="GARHWAL"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">MUSSOORIE</p>
        </motion.div>
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-[155px] h-[155px] row-span-1"
          >
            <Image
              src='/home/kedar.jpg'
              alt="GARHWAL"
              layout="fill"
              objectFit="cover"
            />
            <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">HIMACHAL</p>
        </motion.div>
    </div>
</div>
<div className="flex md:mx-10 mx-0 gap-4 pt-4">
      {/* ... Previous code for all the existing images ... */}
      {/* New image on the left */}
      <div className="relative flex-1">
      <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-40 h-52"
          >
            <Image
              src='/home/kedar.jpg'
              alt="Description1"
              layout="fill"
              objectFit="cover"
            />
        <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-tr-t-lg">Description1</p>
      </motion.div>
      </div>
      {/* New image on the right */}
      <div className="relative flex-1">
      <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden w-full rounded-lg md:h-40 h-52"
          >
            <Image
              src='/home/kedar.jpg'
              alt="Description1"
              layout="fill"
              objectFit="cover"
            />
        <p className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 rounded-tr-t-lg">Description2</p>
      </motion.div>
    </div>
    </div>
      {/* ... Repeat the pattern for the other images ... */}

     
      <div className="mt-4 ">
        <Link href="#" className="text-yellow-500 hover:underline flex flex-row justify-end">
          All Destinations <FontAwesomeIcon icon={faArrowRight} className='pt-1 pl-1' />
        </Link>
      </div>
    </motion.div>
  )
}

export default Popular
