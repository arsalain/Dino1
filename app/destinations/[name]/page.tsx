"use client"
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Header from '@/Components/Navbar/Header/Header';
import Footer from '@/Components/Navbar/Footer/Footer';
import { FC } from "react";

interface PageProps {
  params: {
      name: string;
  }
}
const page = FC<PageProps> = ({ params })=> {
  
    const parallaxRef = useRef();
    const [destination, setDestination] = useState({});
    useEffect(() => {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        parallaxRef.current.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const name = params.name
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:4000/dest/${name}`);
        const data = await response.json();
        console.log("ata",data)
        setDestination(data);
      };
  
      if (name) {
        fetchData();
      }
    }, [name])
    return (
      <div className="bg-black font-jost text-white">
        <Header />
        <div className="bg-black text-white p-10">
  <div className="flex flex-col items-start">
    <div className="flex items-center mb-12 pt-8">
      <div className="bg-yellow-500 w-1 h-16 mr-8 self-center"></div>
      <h1 className="text-7xl inline-block align-middle">
        {destination.name}
        <span className="text-yellow-500 text-9xl inline-block align-middle relative" style={{top: '-0.2em'}}>.</span>
      </h1>
     
    </div>
    <div className="ml-9">
    {destination && destination.over && destination.over.map((over, index) => (
          <p className="text-gray-300 mt-2" key={index}  >
     {over}
          </p>
      ))}
  
    </div>
  </div>
</div>
  {/* Main content */}
  <div className="pt-10 pb-10"> {/* Reduced top padding */}
  <div className="text-center mb-4"></div>
  <div className="border-t border-gray-400 w-full mt-4 mb-4"></div>
  <div
    ref={parallaxRef}
    className="bg-center bg-no-repeat bg-cover h-[400px] w-full"  // Adjust the height as needed
    style={{
      backgroundImage: `url('http://localhost:4000/uploads/${destination.coverimage}')`,
      backgroundAttachment: 'fixed'
    }}
  ></div>
  <div className="pt-5"></div>
</div>
      {/* Updated Hostels Section */}
      <div className="  text-center">
  <h1 className="text-3xl font-bold mb-6">Getaway to Wayanad</h1>
</div>
{destination && destination.products && destination.products.map((products, index) => (
    <div className="bg-black p-10 text-white">
  <div className="relative flex gap-10">
    <div className="relative w-[50%] h-[400px]">
      <Image
        src={`http://localhost:4000/uploads/${products.testimage}`}
        alt="Zostel Shillong"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
    <motion.div
      className="absolute left-[45%] top-[18%] z-10 p-6 w-[55%] bg-black rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">{products.name}</h2>
      <p className="text-gray-600 mb-4">
        {products.over[0]}
      </p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600 font-medium">
          <p>Starting from</p>
          <p className="text-yellow-400 font-bold text-xl">₹{products.fromamount}</p>
        </div>
        <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition duration-300">
          BOOK NOW ➔
        </button>
      </div>
    </motion.div>
  </div>
  </div>
))}
{/*
<div className="bg-black p-10 text-white -mt-10 ">
  <div className="relative flex gap-10">
    <div className="relative w-[50%] h-[400px]">
      <Image
        src='/home/Wayanaddrew.jpg'// Replace this with your image path
        alt="Zostel Shillong"
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />
    </div>
    <motion.div
      className="absolute left-[45%] top-[18%] z-10 p-6 w-[55%] bg-black rounded-xl shadow-2xl border border-gray-700"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Wayanad 3 Days 1 Night</h2>
      <p className="text-gray-600 mb-4">
        Explore the lush tea plantations, visit ancient temples and caves, go on wildlife safaris at the Wayanad Wildlife Sanctuary, and enjoy thrilling adventures like zip-lining and rock climbing. With its pleasant climate and serene landscapes, Wayanad is the perfect destination for a rejuvenating holiday.
      </p>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600 font-medium">
          <p>Starting from</p>
          <p className="text-yellow-400 font-bold text-xl">₹5999</p>
        </div>
        <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition duration-300">
          BOOK NOW ➔
        </button>
      </div>
    </motion.div>
  </div>
</div> */}
      {/* Additional Hostel Listings */}
      {/* You can simply duplicate the above section to show more hostels. */}
      <div className="bg-black p-10 text-white">
    <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Adventurer's Digest</h1>
        <p className="text-gray-400">Curated guides for every traveler's need.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
  <div className="relative w-full h-64">
    <Image
      src="/home/blog1.jpg"
      alt="Backpacking in Asia"
      layout="fill"
      objectFit="cover"
      className="rounded-t-xl"
    />
  </div>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Wayanad Unveiled: Serenity Amidst the Wilderness</h2>
    <p className="text-gray-400 mb-4">Escape to the Heart of Kerala's Enchanted Landscapes.</p>
    <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition duration-300">
      Step Into Wilderness
    </button>
  </div>
</div>
<div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
  <div className="relative w-full h-64">
    <Image
      src="/home/blog1.jpg"
      alt="Travel Essentials"
      layout="fill"
      objectFit="cover"
      className="rounded-t-xl"
    />
  </div>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Wayanad Unveiled: Serenity Amidst the Wilderness</h2>
    <p className="text-gray-400 mb-4">Escape to the Heart of Kerala's Enchanted Landscapes.</p>
    <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition duration-300">
      Step Into Wilderness
    </button>
  </div>
</div>
<div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
  <div className="relative w-full h-64">
    <Image
      src="/home/blog1.jpg"
      alt="Travel to Jordan"
      layout="fill"
      objectFit="cover"
      className="rounded-t-xl"
    />
  </div>
  <div className="px-6 py-4">
    <h2 className="font-bold text-xl mb-2">Wayanad Unveiled: Serenity Amidst the Wilderness</h2>
    <p className="text-gray-400 mb-4">Escape to the Heart of Kerala's Enchanted Landscapes.</p>
    <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 transition duration-300">
      Step Into Wilderness
    </button>
  </div>
</div>
        
    </div>
    <a href="/destination-guide" className="block mt-10 text-center text-yellow-500 hover:text-yellow-600 underline">
        Explore the complete Destination Travel Guide →
    </a>
</div>
      <Footer />
    </div>
  )
}
export default page;