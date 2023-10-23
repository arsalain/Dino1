'use client'
import Header from '@/Components/Navbar/Header/Header'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import Booking from '@/Components/Book/Book'
import { FC } from "react";

// export const getStaticProps = async (context) =>{
//   const id = context.params.id;
//   const response = await fetch(`http://localhost:4000/trek/get/${id}`);
//   const data = await response.json();

//   return {
//     props: { trek:data }
//   }
// } 
// export const getServerSideProps = async (context) => {
//   const id = context.params.id;
  
//   const response = await fetch(`http://localhost:4000/trek/get/${id}`);
//   const data = await response.json();

//   return {
//     props: { trek: data }
//   }
// }
interface PageProps {
  params: {
      id: string;
  }
}
const page = FC<PageProps> = ({ params })=> {
    const [openDay, setOpenDay] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);
    const [openItem, setOpenItem] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [data, setData] = useState({});
    // const router = useRouter();
    // const id = router.query["id"];
    // const id = router.isReady ? router.query.id : null;
    const id = params.id
    console.log(id,"id")
    // const [data, setData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:4000/trek/${id}`);
        const data = await response.json();
        console.log("ata",data)
        setData(data);
      };
  
      if (id) {
        fetchData();
      }
    }, [id])
    const toggleItem = (index) => {
      if (openItem === index) {
        setOpenItem(null);
      } else {
        setOpenItem(index);
      }
    };
  
    const items = [
      {
        question: 'What do I need to hire a car?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
      },
      {
        question: 'How old do I have to be to rent a car?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
      },
      {
        question: 'Can I book a hire car for someone else?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
      }
    ];
    const includedItems = [
      "Lectures by a National Geographic Expert",
      "Photography tips and techniques from a National Geographic Photography Expert",
      "Welcome and farewell receptions",
      "Meals as indicated in itinerary (B=Breakfast; L=Lunch; D=Dinner)",
      "Sip & Sail Cocktail Hour on select nights with complimentary wine, beer, spirits and soft drinks",
      "Unlimited fine wine, beer, and soft drinks with lunch and dinner",
      "Unlimited sparkling wine and fresh juice with breakfast",
      "Airport transfers",
      "Gratuities for guides, drivers and ship staff, and restaurant staff at included meals",
      "Tapas, snacks and refreshments served daily",
      "Professional on-site Cruise Manager",
      "Accommodation as indicated in itinerary",
      "Activities as indicated in itinerary",
      "Entrance fees to sites as indicated in itinerary",
      "Ground transportation as indicated in itinerary",
      "Complimentary WiFi",
      "Filtered water and non-alcoholic beverages at meals",
      "Filtered water on all group transfers and activities",
    ];
    const points = [
      "ID: Soft-copy of Aadhar or government ID",
      "Backpack: Trek-friendly",
      "Clothes: Layered, extra socks",
      "Rain Gear: Poncho/Raincoat",
      "Toiletries: Basics",
      "Snacks: Juice packs, energy bars",
      "Medication: Personal",
      "Camera: Optional",
      "Power Bank: Portable"
    ];
    const notIncludedItems = [
      "Airfare to and from destination",
      "Select alcoholic beverages",
      "Trip cancellation insurance or any other travel insurance",
      "Visas",
    ];
    const toggleOpen = (day) => {
      if (openDay === day) {
        setOpenDay(null);
      } else {
        setOpenDay(day);
      }
    };
    if (!data) {
      return <div>Loading...</div>;
  }
  return (
    <div >
        <Header />
     
    <div className='flex flex-col'>
      
      <div className=" h-screen w-full relative ">
        <Image src={`http://localhost:4000/uploads/${data.testimage}`}  alt="kudremukha" layout="fill" objectFit="cover" className='absolute' /> 
           
           <div className='absolute left-0 bottom-0 w-full' >

           <h1 className='text-5xl text-white font-bold pl-10 pb-5'>{data.name}</h1>
            <div className="flex items-center py-8 pl-10 w-full bg-black mx-auto">
          
          <div className="text-white w-[15rem]">
            <div className="font-bold text-xl">{data.day}</div>
            <div className="flex flex-row  items-center">{data.for} <FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm w-4 h-4 ' /> 2999</div>
            <div className="underline">View All Dates & Prices</div>
          </div>
          <div className="flex gap-10 p-4  text-white rounded-lg">
            <div className="flex flex-col items-center w-[10rem]">
              <i className="fas fa-train"></i> {/* Replace with your icon */}
              <span>{data.trektype}</span>
              <span>{data.trektypename}</span>
            </div>
            <div className="flex flex-col items-center w-[10rem]">
              <i className="fas fa-signal"></i> {/* Replace with your icon */}
              <span>{data.level}</span>
              <span>{data.levelname}</span>
            </div>
            <div className="flex flex-col items-center w-[10rem]">
              <i className="fas fa-star"></i> {/* Replace with your icon */}
              <span>{data.service}</span>
              <span>{data.service}</span>
            </div>
            <div className="flex flex-col items-center w-[6rem]">
              <i className="fas fa-star"></i> {/* Replace with your icon */}
              <span>{data.state}</span>
              <span>{data.statename}</span>
            </div>
          </div>
          <div className="mt-4 ">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-md"   onClick={() => setShowPopup(true)}> BOOK NOW</button>
          <div className=" mt-2">Or call 1-888-966-8687</div>
        </div>
        </div>
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
                <Link href="#things">
                    <span className="block mb-2 hover:font-bold px-2">Things to Carry</span>
                </Link>
                <Link href="#faq">
                    <span className="block  hover:font-bold px-2">FAQ's</span>
                </Link>
                        <div className="border-t-2 border-gray-300 my-4"></div>

      <button className="w-full py-4 mb-4 mt-2 bg-yellow-500 hover:bg-black border-2 hover:text-yellow-500 border-yellow-500  rounded"   onClick={() => setShowPopup(true)}>BOOK NOW</button>
      <div className="text-center">Or call <Link href='#' className=' text-yellow-500 font-bold hover:underline'>1-888-966-8687</Link></div>
      <button className="w-full my-4 mt-4  text-xl text-yellow-500 font-bold hover:underline ">Send Enquiry</button>
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
      {data && data.over && data.over.map((over, index) => (
        // console.log(over)
      <div key={index} className='mb-2'>{over}</div>
      ))}
      {/* <ul className="space-y-4">
        <li>Travel for five nights aboard the <i>Palace on Wheels</i>, a train that evokes the splendor of the maharajas and travels to places not easily accessible by road.</li>
        <li>In the company of a National Geographic Expert, explore fascinating UNESCO World Heritage sites, including Humayun’s Tomb and the Hill Forts of Rajasthan.</li>
        <li>Experience the exquisite Taj Mahal at both sunrise and sunset, and photograph this iconic wonder under changing light.</li>
        <li>Get a glimpse into daily life on a walk through Bharatpur village, and enjoy a private performance by a sitar maestro.</li>
      </ul> */}
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
        <p className="text-gray-600 mb-10 ">
       
       {data.itinerary}
        </p>
        {/* Button */}
        <div className="container mx-auto ">
        {data && data.days && data.days.map((days, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen(index + 1)}>
            <h3 className="text-xl font-semibold">{days.day} : {days.cityName}</h3>
            <span>{openDay === index + 1 ? '▲' : '▼'}</span>
          </div>
          {openDay === index + 1 && (
              <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-4 pl-0">
                {days && days.description && days.description.map((des, index) => (
                <p key={index} className="mb-1 flex flex-row">
                <FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px] ' />
                {des}
                </p>
                ))}
                <p className="font-semibold pt-4">Meals : {days.meals}</p>
              </div>
              { days.image && <div className="flex-none w-full md:w-1/3 p-4">
               <Image
                  src={`http://localhost:4000/uploads/${days.image}`}
                  alt="Jaipur"
                  width={400}
                  height={200}
                  className="rounded-lg"
                />
              </div>
}
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
        <h3>Batches</h3>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 mb-4 p-2">
        <div>
          <p className="text-lg">Dec 7-14, 2023</p>
        </div>
        <div>
          <p>5999 Per Person</p>
        </div>
        <div className="cursor-pointer">
        <button >Book Now</button>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        <p>All trip prices are per person based on double occupancy, are subject to change without notice and do not include airfare. All prices and fares are quoted in U.S. dollars.</p>
      </div>
    </div>
    </div>
 <section id='inclu'>
 <div className="flex justify-between p-10 pt-0 mx-auto bg-white">
 
      <div className="w-1/2 pr-4">
        <h2 className="mb-4 text-lg font-bold">WHAT'S INCLUDED</h2>
        <div>
          {includedItems.map((item, idx) => (
            <div key={idx} className="mb-2 list-decimal flex flex-row "><FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px] ' />{item}</div>
          ))}
        </div>
      </div>
      <div className="border-l-2 border-gray-300 mx-4"></div>
      <div className="w-1/2 pl-4">
        <h2 className="mb-4 text-lg font-bold">WHAT'S NOT INCLUDED</h2>
        <div>
          {notIncludedItems.map((item, idx) => (
            <div key={idx} className="mb-2 list-decimal flex flex-row "><FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px] ' />{item}</div>
          ))}
        </div>
      </div>
    </div>
   
 </section>
 <section id='things'>
  <div className='bg-white p-10 pt-0' >
    <div className='border-t-2 border-gray-300'>
 <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Things to Carry</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {points.map((point, index) => (
          <div key={index} className="flex flex-row">
            <FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px] text-yellow-400' />{point}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
 </section>
 <section id='faq'>
  <div className='p-10 pt-0 bg-white '>
 <div className='pt-10 border-t-2 border-gray-300'>
 <h2 className="text-2xl font-semibold mb-6 ">FAQs</h2>
      {items.map((item, index) => (
             <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
             <div className="flex justify-start items-center cursor-pointer" onClick={() => toggleItem(index)}>
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                 {openItem === index ? '−' : '+'}
               </div>
               <span className="font-medium text-lg">{item.question}</span>
             </div>
             {openItem === index && <p className="mt-2 ml-14 text-gray-600">{item.answer}</p>}
           </div>
      ))}
    </div>
    </div>
 </section>
                </section>
                <section >
                <div className="container mx-auto p-10 pt-0 bg-white">
                <div className='border-t-2 border-gray-300' >
      <h2 className="text-2xl font-semibold mb-6 pt-10">RELATED TRIPS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
        {/* Trip 3 */}
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
    </div>
                </section>
                {/* Add other content sections similarly */}
            </div>
        </div>
    </div>
    {showPopup && <Booking  onClose={() => setShowPopup(false)} /> }
    </div>
  )
}

export default page
