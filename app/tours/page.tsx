"use client"
import Destination from '@/Components/Destination/Destination'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Trek from '@/Components/Treks/Trek'
const page = () => {
  const [searchInput, setSearchInput] = useState("")
  const destinations = [
    {
      title: "Kedar Kanta Trek",
      location: "Singtur Range, Uttarakhand",
      price: 18000,
      img: "/home/kedar.jpg",
      badge: "BREAKFAST INCLUDED",
    },
    {
      title: "Hamta Pass Trek",
      location: "Kullu valley , Himachal Pradesh",
      price: 19000,
      img: "/home/hamta.jpg",
    },
    {
      title: "Great Lakes Trek",
      location: " Sonamarg , J & K",
      price: 20000,
      img: "/home/lake.jpg",
      badge: "BEST SELLER",
    },
    {
      title: "Valley of Flowers Treks",
      location: "Uttarakhand",
      price: 18000,
      img: "/home/valley.jpg",
      badge: "TOP RATED",
    },
    {
      title: "Roop Kund",
      location: "Uttarakhand",
      price: 18000,
      img: "/home/roop.jpg",
      badge: "TOP RATED",
    },
  ];
  
  return (
    <div className='bg-black'>
      <Header />
      <div className='h-[60px] '>
      </div>
      <div className='h-[50vh] text-white font-bold text-center flex flex-col justify-center items-center  border-t-2 border-b-2 border-gray-700'>
     <div className='text-xl md:text-4xl'>Tours</div> 
      <div className="flex items-center bg-white w-1/3 rounded-lg p-1 border-2 border-gray-200 mt-4">
                <input
                    type="text"
                    placeholder="Search for amazing treks"
                    className="flex-grow p-2 outline-none"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                />
                <button className="text-black p-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
                </button>
            </div>
      </div>


            {/* {searchResult.filter(item => {
                const searchTerm = searchInput.toLowerCase()
                const fullname = item.name.toLowerCase()
                return searchTerm && fullname.startsWith(searchTerm)
            }).map((list) => (
                <div className="p-4 font-bold">
                    <Link href={list.link}>
                        <div className="no-underline text-black">{list.name}</div>
                    </Link>
                </div>
            ))} */}
      
 <div className=' mx-10 pt-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">Weekend Group Tours</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
      <Trek trek={destinations}  uniqueId="Karnataka" />
    </div>
 </div>
 <div className=' mx-10 pt-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">Long Weekend Tours</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
    <Trek trek={destinations}  uniqueId="kerala" />
    </div>
 </div>
 <div className=' mx-10 py-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">International Tours</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
    <Trek trek={destinations}  uniqueId="tamilnadu" />
    </div>
 </div>
 <div className=' mx-10 py-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">North Indian Tours</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
    <Trek trek={destinations}  uniqueId="northindia" />
    </div>
 </div>
      <Footer />
    </div>
  )
}

export default page
