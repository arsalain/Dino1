'use client'
import Header from '@/Components/Navbar/Header/Header'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';

const page = () => {
    const [openDay, setOpenDay] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);
    const toggleOpen = (day) => {
      if (openDay === day) {
        setOpenDay(null);
      } else {
        setOpenDay(day);
      }
    };
  return (
    <div >
        <Header />

    <div className='flex flex-col'>
      <div className=" h-screen w-full relative ">
        <Image src="/product/mproduct.jpg" alt="kudremukha" layout="fill" objectFit="cover" className='absolute' /> 
            <h1 className='absolute left-10 bottom-10 text-5xl text-white font-bold'>Kudremukha Trek</h1>
      </div>
      <div className="flex  items-center py-10 px-10  bg-black">
          <div className="text-white w-[15rem]">
            <div className="font-bold text-xl">2 DAYS / 1 NIGHT</div>
            <div className="flex flex-row  items-center">FROM <FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm w-4 h-4 ' /> 3999</div>
            <div className="underline">View All Dates & Prices</div>
          </div>
          <div className="flex gap-10 p-4  text-white rounded-lg">
            <div className="flex flex-col items-center w-[10rem]">
              <i className="fas fa-train"></i> {/* Replace with your icon */}
              <span>Trek Type</span>
              <span>Hill</span>
            </div>
            <div className="flex flex-col items-center w-[10rem]">
              <i className="fas fa-signal"></i> {/* Replace with your icon */}
              <span>Difficulty Level</span>
              <span>Easy-Moderate</span>
            </div>
            <div className="flex flex-col items-center w-[10rem]">
              <i className="fas fa-star"></i> {/* Replace with your icon */}
              <span>Service Level</span>
              <span>Premium</span>
            </div>
            <div className="flex flex-col items-center w-[6rem]">
              <i className="fas fa-star"></i> {/* Replace with your icon */}
              <span>State</span>
              <span>Karnatka</span>
            </div>
          </div>
          <div className="mt-4 ">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-md">RESERVE ONLINE</button>
          <div className=" mt-2">Or call 1-888-966-8687</div>
        </div>
        </div>
     
      
      <div className="flex h-screen sticky top-0 ">
            <div className="w-1/4 min-h-screen bg-gray-200 p-4  " >
          
                <Link href="#expedition-overview">
                    <span className="block  hover:font-bold p-2">Expedition Overview</span>
                </Link>
                <Link href="#experts">
                    <span className="block mb-2 hover:font-bold px-2">Experts on this Trip</span>
                </Link>
                <Link href="#iternary">
                    <span className="block mb-2 hover:font-bold px-2">Itinerary</span>
                </Link>
                <Link href="#what">
                    <span className="block mb-2 hover:font-bold px-2">What to Expect</span>
                </Link>
                <Link href="#date">
                    <span className="block mb-2 hover:font-bold px-2">Dates and Prices</span>
                </Link>
                <Link href="#inclu">
                    <span className="block mb-2 hover:font-bold px-2">What's Included</span>
                </Link>
                {/* Add other links similarly */}
            </div>
            <div className="ml-1/4 w-3/4  overflow-y-auto">
                <section id="expedition-overview" >
                <div className=" bg-white p-10  text-black">
                <div className="border-b-2 border-gray-300 py-8">
                 
      <h1 className="text-3xl font-bold mb-6">EXPEDITION OVERVIEW</h1>
      {/* Special Offers Section */}
      <div className=" shadow-md p-6 rounded-md mb-6 relative border border-gray-400">
        <h2 className="text-sm font-semibold mb-2">SPECIAL OFFERS</h2>
        <p>Disney® Visa® Cardmembers Offer: Save on Select Signature Land & River Cruise Departures</p>
        <button className="mt-2 text-blue-500 hover:underline">SHOW DETAILS <span className="transform rotate-180 inline-block">&#9660;</span></button>
        {/* Map Image */}
      </div>
      {/* List of Features */}
      <ul className="space-y-4">
        <li>Travel for five nights aboard the <i>Palace on Wheels</i>, a train that evokes the splendor of the maharajas and travels to places not easily accessible by road.</li>
        <li>In the company of a National Geographic Expert, explore fascinating UNESCO World Heritage sites, including Humayun’s Tomb and the Hill Forts of Rajasthan.</li>
        <li>Experience the exquisite Taj Mahal at both sunrise and sunset, and photograph this iconic wonder under changing light.</li>
        <li>Get a glimpse into daily life on a walk through Bharatpur village, and enjoy a private performance by a sitar maestro.</li>
      </ul>
    </div>
</div>
                </section>
                <section id="experts" >
                <div className="bg-white p-10 pt-0 ">
           
      <h2 className="text-2xl font-bold mb-6">EXPERTS ON THIS TRIP</h2>
      <p className=" text-gray-600 mb-10">
        A National Geographic Expert and a National Geographic Photography Expert will accompany
        each departure to share insights and a rare behind-the-scenes perspective.
        Listed here are the experts that will be joining departures of this trip.
      </p>
      <div className="flex  space-x-20">
        {/* Expert 1 */}
        <div className="text-center">
          <div className="w-40 h-40 relative rounded-full overflow-hidden mb-4">
            <Image
             src="/product/mproduct.jpg"
              alt="Gianluca Colla"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="font-semibold text-lg">Gianluca Colla</h3>
          <p className="text-gray-500">Photographer</p>
          <a href="#" className="text-yellow-500 hover:underline">View Dates & Bio</a>
        </div>
        {/* Expert 2 */}
        <div className="text-center">
          <div className="w-40 h-40 relative rounded-full overflow-hidden mb-4">
            <Image
          src="/product/mproduct.jpg"
              alt="Teresa Fisher"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h3 className="font-semibold text-lg">Teresa Fisher</h3>
          <p className="text-gray-500">Author</p>
          <a href="#" className="text-yellow-500 hover:underline">View Dates & Bio</a>
        </div>
      </div>
    </div>
                </section>
                <section id="iternary" >
                <div className="bg-white p-10">
      <div className="border-t-2 border-b-2 border-gray-300 py-8">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-6">ITINERARY</h2>
        {/* Description */}
        <p className="text-gray-600 mb-10">
          Revel in dazzling celebrations of the holiday season as you cruise the Rhine River through four countries.
          Wander through medieval squares filled with the sounds of carolers, the scents of mulled wine and spices,
          and the sparkle of ornamented Christmas trees. Browse stalls displaying delicate handmade trinkets and toys,
          explore fairy-tale castles and cathedrals decked out for the season, and bring home holiday cheer to brighten the new year.
          Choose from a variety of excursions at each port of call, and enjoy the insights of the National Geographic Expert
          and National Geographic Photography Expert who accompany the journey. As we sail this storied waterway, enjoy the freedom
          and flexibility to tailor the itinerary to your interests, choosing from a variety of available excursions at each port of call—from
          guided tours of iconic sites to culinary experiences and active adventures.
        </p>
        {/* Button */}
        <div className="container mx-auto ">
        {[...Array(3).keys()].map((_, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen(index + 1)}>
            <h3 className="text-xl font-semibold">DAY {index + 1}: CITY NAME</h3>
            <span>{openDay === index + 1 ? '▲' : '▼'}</span>
          </div>
          {openDay === index + 1 && (
              <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-4">
                <p className="mb-4">
                Spend the day discovering the charming towns and Christmas markets that flank the Rhine. Choose a full day excursion in Alsace, visiting the walled town of Riquewihr and stunning Colmar, both gems of winding cobbled streets and colorful, half-timbered houses. Set out on walking tours in each town and wander through their lively holiday markets. Or divide up your day between France and Germany, and explore Colmar and the Black Forest city of Freiburg, where the Christmas market is held in the heart of the picturesque old town. Tonight, gather to decorate the ship’s Christmas tree and participate in a traditional German pickle hunt.
                </p>
                <p className="font-semibold">Meals Included: Breakfast, Lunch, Dinner</p>
              </div>
              <div className="flex-none w-full md:w-1/3 p-4">
                <Image
                  src="/product/mproduct.jpg"
                  alt="Jaipur"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
      </div> 
    </div>
                </section>
                <section id='what' >
                    
                <div className=" mx-auto bg-white p-10 pt-0 ">
      <h1 className="text-3xl font-bold mb-6">WHAT TO EXPECT</h1>
      <p className="text-gray-600 mb-6">
        This trip has an activity rating of light/moderate and suits a range of interests and abilities.
        Travelers should be physically fit and comfortable walking or standing for extended periods,
        navigating uneven or slippery terrain, and climbing stairs without handrails. Choose from a
        variety of excursions, from short walking tours to options for extended hiking and biking.
        This cruise is operated in collaboration with AmaWaterways.
      </p>
      <h2 className="text-xl font-semibold mb-4">Accommodations</h2>
      <p className="text-gray-600 mb-6">
        This is an expedition aboard a world-class river ship featuring fine dining and exceptional amenities.
      </p>
      <h2 className="text-xl font-semibold mb-4">Expedition Team</h2>
      <p className="text-gray-600 ">
        A National Geographic expert and a National Geographic Photography Expert will accompany the entire trip,
        and local experts will join us along the way.
      </p>
    </div>
                </section>
                <section id='date'>
                <div className="bg-white p-10 pt-0">
                <div className="bg-white mx-auto py-8 border-t-2 border-b-2 border-gray-300 ">
      <h2 className="text-xl font-semibold mb-4 ">DATES & PRICES</h2>
      <div className="border-b border-gray-300 mb-4 p-2">
        <h3>2023 Dates & Prices</h3>
        <span>1 Departure</span>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 mb-4 p-2">
        <div>
          <p className="text-lg">Dec 7-14, 2023</p>
          <a href="#" className="text-yellow-500">Reserve Online</a>
        </div>
        <div>
          <p>$4,995</p>
          <p>Per Person</p>
        </div>
        <div className="cursor-pointer" onClick={() => setOpenDetails(!openDetails)}>
          <p>AmaLucia</p>
          <span>{openDetails ? '▲' : '▼'}</span>
        </div>
      </div>
      {openDetails && (
        <div className="mt-4 mb-4 p-2">
          <p>Your details for the AmaLucia trip go here...</p>
        </div>
      )}
      <div className="text-sm text-gray-500">
        <p>All trip prices are per person based on double occupancy, are subject to change without notice and do not include airfare. All prices and fares are quoted in U.S. dollars.</p>
      </div>
    </div>
    </div>
                </section>
                <section >
                <div className="container mx-auto p-8 bg-white">
      <h2 className="text-2xl font-semibold mb-6">RELATED TRIPS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trip 1 */}
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="/product/mproduct.jpg"
            alt="Danube Christmas Markets River Cruise"
            width={400}
            height={300}
          />
          <div className="p-4 bg-white">
            <div className="mb-4 border-b pb-2">
              <span className="text-lg font-semibold">2 DAYS FROM 3,999</span>
            </div>
            <h3 className="font-semibold text-xl mb-3">Nethravati Trek</h3>
            <p><strong>Trek Type:</strong> Hill</p>
            <p><strong>Difficulty Level:</strong> Easy-Moderate</p>
            <p><strong>Service Level:</strong> Premium</p>
          </div>
        </div>
        {/* Trip 2 */}
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="/product/mproduct.jpg"
            alt="Holland and Belgium in Springtime by River Cruise"
            width={400}
            height={300}
          />
          <div className="p-4 bg-white">
            <div className="mb-4 border-b pb-2">
              <span className="text-lg font-semibold">2 DAYS FROM 3,999</span>
            </div>
            <h3 className="font-semibold text-xl mb-3">Kumara Parvatha</h3>
            <p><strong>Trip Type:</strong> Hill</p>
            <p><strong>Activity Level:</strong> Moderate-Hard</p>
            <p><strong>Service Level:</strong> Premium</p>
          </div>
        </div>
      </div>
    </div>
                </section>
                {/* Add other content sections similarly */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default page
