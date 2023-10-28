'use client'
import Header from '@/Components/Navbar/Header/Header'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign,faCircle, faMountainSun, faPersonHiking, faHotel, faMapLocationDot, faAngleDown, faAngleUp, faCaretUp, faCaretDown} from '@fortawesome/free-solid-svg-icons';
// import {  } from '@fortawesome/free-solid-svg-icons';
import Booking from '@/Components/Book/Book'
import { FC } from "react";

interface PageProps {
  params: {
      id: string;
  }
}
const page = FC<PageProps> = ({ params })=> {
    const [openDay, setOpenDay] = useState(null);
    const [openItem, setOpenItem] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [data, setData] = useState({});
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection(null);
        } else {
            setOpenSection(section);
        }
    }
    const id = params.id
    console.log(id,"id")
  
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

           <h1 className='text-3xl md:text-5xl text-white font-bold pl-10 pb-5'>{data.name}</h1>
            <div className="flex flex-col md:flex-row items-center py-4 md:pl-10 px-4 w-full bg-black mx-auto">
          {/* <div className='flex flex-row pb-4 md:pb-0'> */}
          <div className="text-white md:w-[15rem] w-auto mt-6 md:mt-0 ">
            <div className='flex flex-row md:flex-col' >
            <div className="font-bold md:text-xl text-lg">{data.day}</div>
            <div className="flex flex-row  items-center md:text-base text-lg md:pl-0 pl-2">{data.for} <FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm w-4 h-4 ' /> {data.fromamount}</div>
            </div>
           <Link href="#date"> <div className="underline">View All Dates & Prices</div></Link>
          </div>
      
            {/* </div> */}
          <div className="grid grid-cols-2 md:grid-cols-4  p-1  text-white rounded-lg">
          <div className="flex flex-row items-center md:w-[13rem] mt-6 md:mt-0">
            <FontAwesomeIcon icon={faMountainSun} className='md:w-8 md:h-8 w-6 h-6' /> 
            <div className='flex flex-col pl-4' >
              <span>{data.trektype}</span>
              <span>{data.trektypename}</span>
              </div>
            </div>
            <div className="flex flex-row items-center md:w-[13rem] mt-6 md:mt-0">
            <FontAwesomeIcon icon={faPersonHiking} className='md:w-8 md:h-8 w-6 h-6'/> 
            <div className='flex flex-col pl-4' >
              <span>{data.level}</span>
              <span>{data.levelname}</span>
              </div>
            </div>
            <div className="flex flex-row items-center md:w-[13rem] mt-6 md:mt-0">
            <FontAwesomeIcon icon={faHotel} className='md:w-8 md:h-8 w-6 h-6'/> 
            <div className='flex flex-col pl-4' >
              <span>{data.service}</span>
              <span>{data.servicename}</span>
              </div>
            </div>
            <div className="flex flex-row items-center md:w-[6rem] mt-6 md:mt-0">
            <FontAwesomeIcon icon={faMapLocationDot} className='md:w-8 md:h-8 w-6 h-6' /> 
            <div className='flex flex-col pl-4' >{/* Replace with your icon */}
              <span>{data.state}</span>
              <span>{data.statename}</span>
              </div>
            </div>
          </div>
          <div className="hidden  md:flex justify-center items-center ">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-md"   onClick={() => setShowPopup(true)}> BOOK NOW</button>
        </div>
        </div>
      </div>
      </div>
   
     
      
      <div className="flex md:h-screen md:sticky md:top-0 ">
            <div className="hidden md:block md:w-1/4 min-h-screen bg-gray-200 p-4  " >
          
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
            <div className="ml-1/4 md:w-3/4 w-full overflow-y-auto">
            <section id="expedition-overview">
                <div className="bg-white md:p-10 p-4 text-black">
                    <div className="border-b-2 border-gray-300 md:py-8 py-2">
                        <div className="flex justify-between items-center md:hidden"> {/* hidden on medium and above screens */}
                            <h1 className="text-2xl font-bold md:mb-6 mb-2">EXPEDITION OVERVIEW</h1>
                            <button onClick={() => toggleSection("expedition")} className='text-xl'>
                            {openSection === "expedition"  ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                            </button>
                        </div>
                        {openSection === "expedition"  && (
                            <div className="md:hidden"> {/* hidden on medium and above screens */}
                                <SpecialOffers />
                                <FeatureList data={data} />
                            </div>
                        )}
                        <div className="hidden md:block"> {/* shown only on medium and above screens */}
                            <h1 className="text-3xl font-bold mb-6">EXPEDITION OVERVIEW</h1>
                            <SpecialOffers />
                            <FeatureList data={data} />
                        </div>
                    </div>
                </div>
                </section>
                <section id="experts">
            <div className="bg-white md:p-10 p-4 pt-0 md:pt-0">
            
                <div className="flex justify-between items-center md:hidden"> {/* hidden on medium and above screens */}
                    <h2 className="text-2xl font-bold md:mb-6 mb-2">EXPERTS ON THIS TRIP</h2>
                    <button onClick={() => toggleSection("expert")} className='text-xl'>
                    {openSection === "expert"  ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                    </button>
                </div>
                {openSection === "expert"  && (
                    <div className="md:hidden"> {/* hidden on medium and above screens */}
                        <ExpertContent data={data} />
                    </div>
                )}
                <div className="hidden md:block"> {/* shown only on medium and above screens */}
                    <h2 className="text-2xl font-bold mb-6">EXPERTS ON THIS TRIP</h2>
                    <ExpertContent data={data} />
                </div>
                </div>
        </section>
        <section id="itinerary">
    <div className="bg-white md:p-10 p-4 md:pt-0 text-black">
        <div className="border-b-2 border-t-2 border-gray-300 md:py-8 py-2">
            <div className="flex justify-between items-center md:hidden"> {/* hidden on medium and above screens */}
                <h1 className="text-2xl font-bold md:mb-6 mb-2">ITINERARY</h1>
                <button onClick={() => toggleSection("itinerary")} className='text-xl'>
                    {openSection === "itinerary" ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                </button>
            </div>
            {openSection === "itinerary" && (
                <div className="md:hidden"> {/* hidden on medium and above screens */}
                    <p className="text-gray-600 mb-10">{data.itinerary}</p>
                    <div className="container mx-auto">
                        {data && data.days && data.days.map((days, index) => (
                            <div key={index} className="border-b pb-4 mb-4">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen(index + 1)}>
                                    <h3 className="text-xl font-semibold">{days.day} : {days.cityName}</h3>
                                    <span>{openDay === index + 1 ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />}</span>
                                </div>
                                {openDay === index + 1 && (
                                    <div className="mt-4">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="flex-1 p-4 pl-0">
                                                {days && days.description && days.description.map((des, index) => (
                                                    <p key={index} className="mb-1 flex flex-row">
                                                        <FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px]' />
                                                        {des}
                                                    </p>
                                                ))}
                                                <p className="font-semibold pt-4">Meals : {days.meals}</p>
                                            </div>
                                            {days.image &&
                                                <div className="flex-none w-full md:w-1/3 p-4">
                                                    <Image
                                                        src={`http://localhost:4000/uploads/${days.image}`}
                                                        alt={days.imagealt}
                                                        width={400}
                                                        height={200}
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div className="hidden md:block"> {/* shown only on medium and above screens */}
                <h1 className="text-3xl font-bold mb-6">ITINERARY</h1>
                <p className="text-gray-600 mb-10">{data.itinerary}</p>
                <div className="container mx-auto">
                    {data && data.days && data.days.map((days, index) => (
                        <div key={index} className="border-b pb-4 mb-4">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen(index + 1)}>
                            <h3 className="text-xl font-semibold">{days.day} : {days.cityName}</h3>
                            <span>{openDay === index + 1 ? <FontAwesomeIcon icon={faCaretUp} className='pr-6'/> : <FontAwesomeIcon icon={faCaretDown} className='pr-6'/>}</span>
                        </div>
                        {openDay === index + 1 && (
                            <div className="mt-4">
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex-1 p-4 pl-0">
                                        {days && days.description && days.description.map((des, index) => (
                                            <p key={index} className="mb-1 flex flex-row">
                                                <FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px]' />
                                                {des}
                                            </p>
                                        ))}
                                        <p className="font-semibold pt-4">Meals : {days.meals}</p>
                                    </div>
                                    {days.image &&
                                        <div className="flex-none w-full md:w-1/3 p-4">
                                            <Image
                                                src={`http://localhost:4000/uploads/${days.image}`}
                                                alt={days.imagealt}
                                                width={400}
                                                height={200}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
)}
  </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
                <section id='what' >
                    
                <div className=" mx-auto bg-white p-10 pt-0 ">
      <h1 className="text-3xl font-bold mb-6">WHAT TO EXPECT</h1>
      <p className="text-gray-600 mb-6">
        {data.expectpara}
      </p>
      <h2 className="text-xl font-semibold mb-4">{data.expecthead1}</h2>
      <p className="text-gray-600 mb-6">
      {data.expecthead1para}
      </p>
      <h2 className="text-xl font-semibold mb-4">{data.expecthead2}</h2>
      <p className="text-gray-600 ">
      {data.expecthead2para}
      </p>
    </div>
                </section>
                <section id="date">
    <div className="bg-white md:p-10 p-4 pt-0 md:pt-0">
        
        <div className="flex justify-between items-center md:hidden"> {/* hidden on medium and above screens */}
            <h2 className="text-xl font-bold md:mb-6 mb-2">DATES & PRICES</h2>
            <button onClick={() => toggleSection("date")} className='text-xl'>
                {openSection === "date" ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
            </button>
        </div>
        {openSection === "date" && (
            <div className="md:hidden"> {/* hidden on medium and above screens */}
                <DateContent data={data} />
            </div>
        )}
        <div className="hidden md:block"> {/* shown only on medium and above screens */}
            <h2 className="text-xl font-bold mb-6">DATES & PRICES</h2>
            <DateContent data={data} />
        </div>
    </div>
</section>
 <section id='inclu'>
 <div className="flex justify-between p-10 pt-0 mx-auto bg-white">
 
      <div className="w-1/2 pr-4">
        <h2 className="mb-4 text-lg font-bold">WHAT'S INCLUDED</h2>
        <div>
           {data && data.included && data.included.map((included, idx) => (
            <div key={idx} className="mb-2 list-decimal flex flex-row "><FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px] ' />{included}</div>
          ))}
        </div>
      </div>
      <div className="border-l-2 border-gray-300 mx-4"></div>
      <div className="w-1/2 pl-4">
        <h2 className="mb-4 text-lg font-bold">WHAT'S NOT INCLUDED</h2>
        <div>
        {data && data.notincluded && data.notincluded.map((notincluded, idx) => (
            <div key={idx} className="mb-2 list-decimal flex flex-row "><FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px] ' />{notincluded}</div>
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
      {data && data.things && data.things.map((things, idx) => (
          <div key={idx} className="flex flex-row">
            <FontAwesomeIcon icon={faCircle} className='w-[5px] h-[5px] pr-2 pt-[9px] text-yellow-400' />{things}
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
 {data && data.faq && data.faq.map((faq, index) => (
             <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
             <div className="flex justify-start items-center cursor-pointer" onClick={() => toggleItem(index)}>
               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                 {openItem === index ? '−' : '+'}
               </div>
               <span className="font-medium text-lg">{faq.question}</span>
             </div>
             {openItem === index && <p className="mt-2 ml-14 text-gray-600">{faq.answer}</p>}
           </div>
      ))}
    </div>
    </div>
 </section>
                <section >
                <div className="container mx-auto p-10 pt-0 bg-white">
                <div className='border-t-2 border-gray-300' >
      <h2 className="text-2xl font-semibold mb-6 pt-10">RELATED TRIPS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Trip 1 */}
        {data && data.related && data.related.map((related, index) => (
        <div className="border rounded-lg overflow-hidden">
          <Image
            src={`http://localhost:4000/uploads/${related.rimage}`}
            alt={related.rimagealt}
            style={{ height: '200px' }}
            width={400} 
            height={300} 
          />
          <div className="p-4 bg-white">
            <div className="mb-4 border-b pb-2">
              <span className="text-lg font-semibold">{related.rday} <FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm w-4 h-4 pt-1 ' />{related.ramount}</span>
            </div>
            <h3 className="font-semibold text-xl mb-3">{related.rname}</h3>
            <p><strong>{related.rtype}</strong> {related.rtypename}</p>
            <p><strong>{related.rlevel}</strong> {related.rlevelname}</p>
            <p><strong>{related.rservice}</strong> {related.rservicename}</p>
          </div>
        </div>
        ))}
        {/* Trip 2 */}
      </div>
    </div>
    </div>
                </section>
                {/* Add other content sections similarly */}
            </div>
        </div>
    </div>
    {showPopup && <Booking  onClose={() => setShowPopup(false)} Batch={data.batch} reserveamount={data.reserveamount} foramount={data.fromamount} withoutamount={data.withoutamount} Name={data.name} /> }
    </div>
  )
}
const SpecialOffers = () => (
  <div className="shadow-md p-4 md:p-6 rounded-md mb-6 relative border border-gray-400">
      <h2 className="text-sm font-semibold mb-2">SPECIAL OFFERS</h2>
      <p>Experience Unbeatable Prices: Unleash exclusive travel advantages and Enjoy Up to 50% Off On Your Next Weekend Getaway!</p>
      <button className="mt-2 text-yellow-500 hover:underline">AVAIL NOW</button>
  </div>
);
const FeatureList = ({ data }) => (
  <>
      {data && data.over && data.over.map((over, index) => (
          <div key={index} className='mb-2'>{over}</div>
      ))}
  </>
);
const ExpertContent = ({ data }) => (
    <>
        <p className="text-gray-600 mb-10">{data.expertpara}</p>
        <div className="flex md:space-x-20 space-y-10 md:space-y-0 flex-col md:flex-row items-center md:items-start">
            {/* Expert 1 */}
            <div className="text-center ">
                <div className="w-40 h-40 relative rounded-full overflow-hidden mb-4">
                    <Image
                        src={`http://localhost:4000/uploads/${data.lead1pimg}`}
                        alt={data.lead1pimgalt}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h3 className="font-semibold text-lg">{data.lead1name}</h3>
                <p className="text-gray-500">{data.lead1oc}</p>
            </div>
            {/* Expert 2 */}
            <div className="text-center">
                <div className="w-40 h-40 relative rounded-full overflow-hidden mb-4">
                    <Image
                        src={`http://localhost:4000/uploads/${data.lead2pimg}`}
                        alt={data.lead2pimgalt}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h3 className="font-semibold text-lg">{data.lead2name}</h3>
                <p className="text-gray-500">{data.lead2oc}</p>
            </div>
        </div>
    </>
);
const DateContent = ({ data }) => (
  <div className="bg-white py-8 border-t-2 border-b-2 border-gray-300">
      <div className="border-b border-gray-300 mb-4 p-2">
          <h3>Batches</h3>
      </div>
      {data && data.batch && data.batch.map((batch, idx) => (
          <div className="flex justify-between items-center border-b border-gray-300 bg-gray-200 mb-4 p-4">
              <div>
                  <p className="text-lg font-bold">{batch.date}</p>
              </div>
              <div>
                  <div className='flex flex-row'>  
                      <FontAwesomeIcon icon={faIndianRupeeSign} className='text-sm w-4 h-4 pt-1 ' /> 
                      {batch.amount} /- Per Person
                  </div>
              </div>
              <div className="cursor-pointer">
                  <button className='bg-gray-500 py-2 px-10 rounded-lg text-white' >Send Enquiry</button>
              </div>
              <div className="cursor-pointer">
                  <button className='bg-yellow-500 py-2 px-10 rounded-lg' >Reserve Now</button>
              </div>
          </div>
      ))}
      <div className="text-sm text-gray-500">
          <p>All trip prices are per person based on double occupancy, are subject to change without notice and do not include airfare. All prices and fares are quoted in U.S. dollars.</p>
      </div>
  </div>
);
export default page
