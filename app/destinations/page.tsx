import Destination from '@/Components/Destination/Destination'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import React from 'react'

const page = () => {
  const international = [
    {
      id: 1,
      name: "Bhutan",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Bhutan",
    },
    {
      id: 2,
      name: "Dubai",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Dubai",
    },
    {
      id: 3,
      name: "Indonesia",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Indonesia",
    },
    {
      id: 4,
      name: "Maldives",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Maldives",
    },
    {
      id: 5,
      name: "Sri Lanka",
      image: "/home/inter.jpg", // Use the same image for all countries
      alt: "Sri Lanka",
    },
    {
      id: 6,
      name: "Thailand",
      image: "/home/inter.jpg", // Replace with the actual image path
      alt: "Thailand",
    },
    {
      id: 7,
      name: "Vietnam",
      image: "/home/inter.jpg", // Replace with the actual image path
      alt: "Vietnam",
    },
  ];
    
  return (
    <div className='bg-black'>
      <Header />
      <div className='h-[60px]'>
      </div>
      <div className='h-[50vh] text-white font-bold text-center flex justify-center items-center text-xl md:text-4xl border-t-2 border-b-2 border-gray-700'>
      Destinations
      </div>
 <div className=' mx-10 py-10'>
 <div className="text-center md:text-center">
          <h2 className="text-center text-xl md:text-3xl font-bold text-yellow-500">International Trips</h2>
          <div className="flex justify-center pt-2 md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
        </div>
    <div>
      <Destination dest={international} />
    </div>
 </div>
      <Footer />
    </div>
  )
}

export default page
