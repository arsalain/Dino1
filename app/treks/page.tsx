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
  const international = [
    {
      id: 1,
      name: "Bhutan",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Bhutan",
      state: "karnataka",
      daynight: "2Days / 1 Night",
      amount: "3999"
    },
    {
      id: 2,
      name: "Dubai",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Dubai",
      state: "karnataka",
      daynight: "2Days / 1 Night",
      amount: "3999"
    },
    {
      id: 3,
      name: "Indonesia",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Indonesia",
      state: "karnataka",
      daynight: "2Days / 1 Night",
      amount: "3999"
    },
    {
      id: 4,
      name: "Maldives",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Maldives",
      state: "karnataka",
      daynight: "2Days / 1 Night",
      amount: "3999"
    },
    {
      id: 5,
      name: "Sri Lanka",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Sri Lanka",
      state: "karnataka",
      daynight: "2Days / 1 Night",
      amount: "3999"
    },
    {
      id: 6,
      name: "Thailand",
      image: "/home/inter.jpg", // Replace with the actual image path
      alt: "Thailand",
      state: "karnataka",
      daynight: "2Days / 1 Night",
      amount: "3999"
    },
    {
      id: 7,
      name: "Vietnam",
      image: "/home/inter.jpg", // Replace with the actual image path
      alt: "Vietnam",
      state: "karnataka",
      daynight: "2Days / 1 Night",
      amount: "3999"
    },
  ];
  const southindia = [
    {
      id: 1,
      name: "Alleppey",
      image: "/home/domestic.jpg",
      alt: "Alleppey",
    },
    {
      id: 2,
      name: "Bangalore",
      image: "/home/domestic.jpg",
      alt: "Bangalore",
    },
    {
      id: 3,
      name: "Chennai",
      image: "/home/domestic.jpg",
      alt: "Chennai",
    },
    {
      id: 4,
      name: "Chikmagalur",
      image: "/home/domestic.jpg",
      alt: "Chikmagalur",
    },
    {
      id: 5,
      name: "Coorg",
      image: "/home/domestic.jpg",
      alt: "Coorg",
    },
    {
      id: 6,
      name: "Dandeli",
      image: "/home/domestic.jpg",
      alt: "Dandeli",
    },
    {
      id: 7,
      name: "Goa",
      image: "/home/domestic.jpg",
      alt: "Goa",
    },
    {
      id: 8,
      name: "Gokarna",
      image: "/home/domestic.jpg",
      alt: "Gokarna",
    },
    {
      id: 9,
      name: "Hampi",
      image: "/home/domestic.jpg",
      alt: "Hampi",
    },
    {
      id: 10,
      name: "Hyderabad",
      image: "/home/domestic.jpg",
      alt: "Hyderabad",
    },
    {
      id: 11,
      name: "Kochi",
      image: "/home/domestic.jpg",
      alt: "Kochi",
    },
    {
      id: 12,
      name: "Kodaikanal",
      image: "/home/domestic.jpg",
      alt: "Kodaikanal",
    },
    {
      id: 13,
      name: "Kozhikode",
      image: "/home/domestic.jpg",
      alt: "Kozhikode",
    },
    {
      id: 14,
      name: "Mangalore",
      image: "/home/domestic.jpg",
      alt: "Mangalore",
    },
    {
      id: 15,
      name: "Mysore",
      image: "/home/domestic.jpg",
      alt: "Mysore",
    },
    {
      id: 16,
      name: "Munnar",
      image: "/home/domestic.jpg",
      alt: "Munnar",
    },
    {
      id: 17,
      name: "Murdeshwar",
      image: "/home/domestic.jpg",
      alt: "Murdeshwar",
    },
    {
      id: 18,
      name: "Ooty",
      image: "/home/domestic.jpg",
      alt: "Ooty",
    },
    {
      id: 19,
      name: "Pondicherry",
      image: "/home/domestic.jpg",
      alt: "Pondicherry",
    },
    {
      id: 20,
      name: "Varkala",
      image: "/home/domestic.jpg",
      alt: "Varkala",
    },
    {
      id: 21,
      name: "Wayanad",
      image: "/home/domestic.jpg",
      alt: "Wayanad",
    }
  ];
  
  return (
    <div className='bg-black'>
      <Header />
      <div className='h-[60px] '>
      </div>
      <div className='h-[50vh] text-white font-bold text-center flex flex-col justify-center items-center  border-t-2 border-b-2 border-gray-700'>
     <div className='text-xl md:text-4xl'>Treks</div> 
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
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">International Trips</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
      <Trek  />
    </div>
 </div>
 <div className=' mx-10 pt-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">South India Trips</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
      {/* <Treks treks={southindia}   /> */}
    </div>
 </div>
 <div className=' mx-10 py-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">North India Trips</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div className='pt-10'>
      {/* <Treks treks={international}  /> */}
    </div>
 </div>
      <Footer />
    </div>
  )
}

export default page
