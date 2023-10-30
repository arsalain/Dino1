'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Popular = () => {
    const images = {
        vertical: '/home/kedar.jpg',
        adjacent: [
            '/home/kedar.jpg',
            '/home/kedar.jpg',
            '/home/kedar.jpg',
            '/home/kedar.jpg',
        ],
        bottom: [
            '/home/kedar.jpg',
            '/home/kedar.jpg'
        ],
    };
    const destinations = [
        { name: 'KUMAON', image: '/home/kedar.jpg' },
        { name: 'GARHWAL', image: '/home/hamta.jpg' },
        { name: 'MUSSOORIE', image: '/home/lake.jpg' },
        { name: 'HIMACHAL', image: '/home/valley.jpg' },
        { name: 'KARERI', image: '/home/roop.jpg' },
      
    ];
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-8 px-0 max-w-screen-xl mx-40"
    >
        <div>
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-yellow-500 text-center">TOP DESTINATIONS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        {Array.from({ length: 2 }).map((_, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="col-span-1 md:col-span-1 relative overflow-hidden rounded-lg h-[440px]"
          >
            <Image
              src="/destination/maldives.jpg"
              alt={`Large Destination ${idx + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 w-full h-full pl-5 pt-5 bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-3xl">Thailand</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {images.adjacent.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, zIndex: 1 }}
            className="col-span-1 md:col-span-1 relative overflow-hidden rounded-lg h-80"
          >
            <Image
              src={img}
              alt={`Small Destination ${idx + 1}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-center">BACKPACKER HOSTELS IN DESTINATION {idx + 1}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-right mt-4">
        <a href="#" className="text-blue-500 hover:underline">
          All Destinations &rarr;
        </a>
      </div>
    </div>
    </motion.div>
  )
}

export default Popular
