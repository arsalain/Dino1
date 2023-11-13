"use client"
import Destination from '@/Components/Destination/Destination'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const page = () => {
  const [searchInput, setSearchInput] = useState("")
  const [southIndiaDestinations, setSouthIndiaDestinations] = useState([]);
  const [northIndiaDestinations, setNorthIndiaDestinations] = useState([]);
  const [internationalDestinations, setInternationalDestinations] = useState([]);
  console.log(internationalDestinations,"slight")
  useEffect(() => {
    // Fetch data for South India destinations
    const fetchSouthIndiaDestinations = async () => {
      try {
        const response = await fetch('http://localhost:4000/dest/southindia');
        const data = await response.json();
        setSouthIndiaDestinations(data);
      } catch (error) {
        console.error('Error fetching South India destinations:', error);
      }
    };

    // Fetch data for North India destinations
    const fetchNorthIndiaDestinations = async () => {
      try {
        const response = await fetch('http://localhost:4000/dest/northindia');
        const data = await response.json();
        setNorthIndiaDestinations(data);

      } catch (error) {
        console.error('Error fetching North India destinations:', error);
      }
    };

    // Fetch data for International destinations
    const fetchInternationalDestinations = async () => {
      try {
        const response = await fetch('http://localhost:4000/dest/international');
        const data = await response.json();
        setInternationalDestinations(data);
      } catch (error) {
        console.error('Error fetching International destinations:', error);
      }
    };

    // Fetch data for all destinations
    fetchSouthIndiaDestinations();
    fetchNorthIndiaDestinations();
    fetchInternationalDestinations();
  }, []);
 
  return (
    <div className='bg-black'>
      <Header />
      <div className='h-[60px] '>
      </div>
      <div className='h-[50vh] text-white font-bold text-center flex flex-col justify-center items-center  border-t-2 border-b-2 border-gray-700'>
     <div className='text-xl md:text-4xl'>Destinations</div> 
      <div className="flex items-center bg-white w-[80%] md:w-1/2 rounded-xl p-1 border-2 border-gray-200 mt-4">
                <input
                    type="text"
                    placeholder="Search for amazing destations"
                    className="flex-grow p-2 outline-none text-black"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                />
                <button className="text-black p-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
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
                        <a className="no-underline text-black">{list.name}</a>
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
      <Destination dest={internationalDestinations} uniqueId="international" row="1" height="350"/>
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
      <Destination dest={southIndiaDestinations} uniqueId="domestic" row="2" height="170" />
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
      <Destination dest={northIndiaDestinations} uniqueId="northindia" row="1" height="350"/>
    </div>
 </div>
      <Footer />
    </div>
  )
}

export default page
