'use client'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Faq from '@/Components/Member/FAQ/Faq';

const page = () => {
    const [readMore, setReadMore] = useState(false);
    const underlineVariants = {
        initial: { scaleX: 0 },
        hover: { scaleX: 1 }
      };
    
const faqItems = [
    { title: 'What is a product key?', content: 'A product key is ...' },
    { title: 'Where do I find my Office product key?', content: 'The product key can be found ...' },
    // ... other items
  ];
    // const underlineVariants = {
    //     initial: { width: '100%' },
    //     hover: { width: '10%' }
    //   };
  return (
    <div className='bg-black'>
      <Header />
      <div className='h-10 bg-black'></div>
      <div className="max-w-7xl mx-auto p-8 bg-black text-white">
      <motion.div
      className="inline-block relative cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      <span className="text-6xl font-bold">The Backpacking Travel Pass</span>
      <motion.span
        className="block h-1 bg-yellow-500 absolute top-15 left-0 right-0"
        variants={underlineVariants}
        style={{ originX: 0, scaleX: 0 }} // The underline is initially hidden
      />
    </motion.div>
      <h2 className="text-4xl my-4">The ultimate way to elevate your travel experience</h2>
      <p className="text-xl text-justify ">
        Step up the way you travel and treat yourself to a membership in The Hosteller Commune, a remarkable VIP hostel membership program, designed to celebrate and reward your love for travel
      </p>
      <p className="text-xl text-justify pt-2">
        Picture yourself embarking on thrilling adventures, immersing yourself in vibrant cultures, and creating unforgettable memories - all while reaping the benefits of this membership program. Enjoy experiences across our extensive network of 50+ award-winning backpacker hostels, Unbox Cafes, and remarkable trips from Step Out Co. Are you ready to unlock a world of extraordinary perks?
      </p>
      {!readMore && (
           <div className='flex justify-center items-center'>
        <button
          className="text-yellow-500   mt-2 "
          onClick={() => setReadMore(true)}
        >
          Show More
        </button>
        </div>
      )}
      {readMore && (
        <p className="text-xl text-justify pt-2">
          We go above and beyond to ensure your journey is nothing short of extraordinary. Begin your travel escapades by enjoying a seamless check-in experience, as we understand that sometimes the excitement of exploring a new destination can't wait. You'll have the privilege of early check-ins, effortlessly settling into your cosy abode without delay. And when it comes time to bid farewell to your temporary home, embrace the flexibility of late checkouts, granting you those precious extra hours to squeeze in a little more adventure or simply relish a few more moments of relaxation.
        </p>
      )}
      {readMore && (
        <div className='flex justify-center items-center'>
        <button
          className="flex text-yellow-500  mt-2 justify-center items-center"
          onClick={() => setReadMore(false)}
        >
          Show Less
        </button>
        </div>
      )}
    </div>
    <div className="bg-gray-300 py-12 px-4">
      <div className=" mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Exclusive Benefits</h2>
        <p className="text-center mb-10">
          Embark on a thrilling journey as an exclusive member of The Hosteller Commune. Earn TH coins with every stay, and spend them to play rewarding games, earn vouchers, unlock member exclusive rates, special discounts and a host of other perks that will make planning your next getaway a breeze! Enjoy the unbeatable rates reserved just for members of this reward program and Let our hostel membership elevate your travel experience with extraordinary perks and unforgettable adventures!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-6">
          {/* Welcome Bonus Card */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/membership/giveaway.webp" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Giveaway</h3>
              <p>Unlock your adventure with our exclusive giveaway</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/membership/percent.jpg" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Save 50% Today</h3>
              <p>Save 50% Today: Half Price, Full Value!</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/icons/welcome-bonus.svg" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">24/7 Travel Concierge</h3>
              <p>Journey nonstop with our 24/7 concierge service</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/icons/welcome-bonus.svg" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Member Only Immutes
              </h3>
              <p>Exclusive Access: Member-Only Minutes.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/icons/welcome-bonus.svg" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Fixed Discounts
              </h3>
              <p>Fixed Discounts on Extended Trips, Beyond 2D/1N </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/icons/welcome-bonus.svg" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">Customized Travel Plans
              </h3>
              <p>Your journey, your way: Customized Travel Plans.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/icons/welcome-bonus.svg" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">No Blackout Dates
              </h3>
              <p>Travel when you want: No Blackout Dates, no restrictions.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-end">
            {/* Image on the right */}
            <div className="mb-4">
              <Image src="/icons/welcome-bonus.svg" alt="Welcome Bonus" width={80} height={80} />
            </div>
            {/* Text on the left */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2">EMI Option Available
              </h3>
              <p>Budget-friendly with Monthly EMI Options.</p>
            </div>
          </div>
          </div>
          </div>
          </div>
          {/* Special Vouchers Card */}
          <div className='text-white text-4xl font-bold mt-6 pl-4'>Travel Passes</div>
          <div className=' mx-12'>
          <div className="relative w-full h-[200px] bg-gray-200 rounded-lg mt-6 border-2 border-white ">
            <Image
                src="/membership/tour.jpg" // Replace with your image path
                layout="fill"
                objectFit="cover"
                alt="Tour Background"
                className='rounded-lg'
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Avail Tour Pass</h2>
                <p className='text-white '>Seize the opportunity to get this exclusive Tour travel pass at half price and enjoy its benefits for a one-time use valid over a period of 6 months. It's your ticket to hassle-free and cost-effective travel experiences, available now for a limited time!</p>
                </div>
                <div className='absolute bottom-5 w-full px-6 '>
                <div className='flex flex-row justify-between items-center'>
                <p className="text-xl text-white">₹21000 For 6 months</p>
                <motion.button
                initial={{ backgroundColor: "#FBBF24", color: "#000" }}
                whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-black py-1 px-4 rounded border border-yellow-500"
              >
                Buy Now
              </motion.button>
                </div>
               
            </div>
        </div>
        <div className="relative w-full h-[200px] bg-gray-200 rounded-lg mt-6 border-2 border-white">
            <Image
                src="/membership/trek.jpg" // Replace with your image path
                layout="fill"
                objectFit="cover"
                alt="Tour Background"
                className='rounded-lg'
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Avail Trek Pass</h2>
                <p className='text-white '>Seize the opportunity to get this exclusive Tour travel pass at half price and enjoy its benefits for a one-time use valid over a period of 6 months. It's your ticket to hassle-free and cost-effective travel experiences, available now for a limited time!</p>
                </div>
                <div className='absolute bottom-5 w-full px-6'>
                <div className='flex flex-row justify-between items-center'>
                <p className="text-xl text-white">₹12000 For 6 months</p>
                <motion.button
                initial={{ backgroundColor: "#FBBF24", color: "#000" }}
                whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-black py-1 px-4 rounded border border-yellow-500"
              >
                Buy Now
              </motion.button>
                </div>
               
            </div>
        </div>
          </div>
       <div>
       <div className="container mx-auto mb-10">
       <div className='text-white text-4xl font-bold mt-6 pl-4'>FAQ</div>
       <div className='px-10'>
      <Faq items={faqItems} />
      </div>
    </div>
       </div>
 
    
      <Footer />
    </div>
  )
}

export default page
