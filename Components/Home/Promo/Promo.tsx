import Image from 'next/image'
import React from 'react'

const Promo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-screen-xl py-12 mx-4 sm:px-6 lg:px-8" >
  {/* Left Section */}
  <div className="relative h-96 md:w-1/2  bg-center rounded-lg shadow-lg">
    <div >
      <Image
        src="/home/promo1.jpg"
        alt="Travel Image"
        layout="fill" 
        objectFit="cover"
        className="absolute rounded-lg"// Use "layout" prop with "fill" value to make the image cover its container
      />
    </div>
    <div className="absolute inset-x-0 bottom-0 p-6 pt-80 bg-black bg-opacity-30">
      <h2 className="text-xl md:text-3xl font-semibold text-white mb-2">Why we Travel ?</h2>
      <button className="mt-2 px-4 py-2 bg-yellow-400 text-black font-bold rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-400 hover:border-yellow-400 shadow-lg transition duration-300">
        Learn More
      </button>
    </div>
  </div>

  {/* Right Section */}
  <div className="relative md:ml-4 mt-4 md:mt-0 h-96 md:w-1/2 bg-center rounded-lg shadow-lg   bg-opacity-50 ">
    <div >
      <Image
        src="/home/promo2.png"
        alt="Member Image"
        layout="fill"
        objectFit="cover"
        className='absolute rounded-lg' // Use "layout" prop with "fill" value to make the image cover its container
      />
    </div>
    <div className="absolute inset-x-0 bottom-0 p-6 md:pt-60 pt-[8rem] bg-black  bg-opacity-40 ">
      <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Exclusive Offer !</h2>
      <h1 className="text-xl md:text-3xl font-bold text-white mb-2">Become a member and unlock a whopping 50% discount!</h1>
      <button className="mt-2 px-4 py-2 bg-yellow-500 text-black font-bold rounded-full border-2 border-transparent hover:bg-black hover:text-yellow-500 hover:border-yellow-500 shadow-lg transition duration-300">
        Join Now & Save Big !
      </button>
    </div>
  </div>
</div>
  )
}

export default Promo
