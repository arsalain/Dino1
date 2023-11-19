'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/Components/Navbar/Header/Header';
import Footer from '@/Components/Navbar/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import { faGift, faPercent, faConciergeBell, faCalendarCheck, faMapMarkedAlt, faBlackTie, faPlaneDeparture, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import AccordionItem from '@/Components/Member/Accordian/Accordianitem';


const Page = () => {
const backgroundImages = [
'https://source.unsplash.com/random/?mountains',
'https://source.unsplash.com/random/?beach',
'https://source.unsplash.com/random/?jungle',
];
const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

useEffect(() => {
const intervalId = setInterval(() => {
setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
}, 3000);
return () => clearInterval(intervalId);
}, []);

const adventures = [
{ src: '/pass/pass1.jpg', alt: 'Adventure 1' },
{ src: '/pass/pass2.jpg', alt: 'Adventure 1' },
{ src: '/pass/pass3.jpg', alt: 'Adventure 1' },
{ src: '/pass/pass4.webp', alt: 'Adventure 1' },
{ src: '/pass/pass5.jpg', alt: 'Adventure 1' },
{ src: '/pass/pass6.webp', alt: 'Adventure 1' },
{ src: '/destination/nepal.jpg', alt: 'Adventure 1' },
{ src: '/destination/dubai.jpg', alt: 'Adventure 1' },
{ src: '/destination/bhutan.jpg', alt: 'Adventure 1' },
{ src: '/destination/vietnam.jpg', alt: 'Adventure 1' },
{ src: '/destination/ANDAMAN.jpg', alt: 'Adventure 1' },
{ src: '/destination/inter.jpg', alt: 'Adventure 1' },
];
const treks = [
'Ali Bedni Bugyal Trek', 'Bali Pass Trek', 'Beas Kund Trek', 'Bhrigu Lake Trek',
'Brahmatal Trek', 'Dayara Bugyal Trek', 'Deo Tibba Base Camp', 'Chopta Chandrashila',
'Brahmatal Trek', 'Dayara Bugyal Trek', 'Deo Tibba Base Camp', 'Chopta Chandrashila',
'Brahmatal Trek', 'Dayara Bugyal Trek', 'Deo Tibba Base Camp', 'Chopta Chandrashila',
'Brahmatal Trek', 'Dayara Bugyal Trek', 'Deo Tibba Base Camp', 'Chopta Chandrashila',
];

const tours = [
'European Backpacking Tour', 'Amazon Rainforest Adventure', 'Sahara Desert Expedition', 'Nordic Fjords Cruise',
'Australian Outback Safari', 'Mediterranean Culinary Tour', 'Southeast Asian Culture Trek', 'Alaskan Glacier Hike',
'Australian Outback Safari', 'Mediterranean Culinary Tour', 'Southeast Asian Culture Trek', 'Alaskan Glacier Hike',
'Australian Outback Safari', 'Mediterranean Culinary Tour', 'Southeast Asian Culture Trek', 'Alaskan Glacier Hike',
'Australian Outback Safari', 'Mediterranean Culinary Tour', 'Southeast Asian Culture Trek', 'Alaskan Glacier Hike',
];
const tabs = ['General', 'Safety', 'Service', 'Policy', 'Booking', 'Payment'];
const faqContent = {
General: [
{ question: 'What is the purpose of this platform?', answer: 'This platform serves as a central hub for adventure seekers to discover and book experiences.' },
{ question: 'How do I create an account?', answer: 'You can create an account by clicking on the sign-up button and following the instructions.' },
{
question: 'Are the listed adventures suitable for beginners?',
answer: 'Absolutely! We cater to all levels of experience and provide detailed information on the difficulty level for each adventure.'
},
{
question: 'Can I book adventures for a large group?',
answer: 'Yes, group bookings are available, and we can accommodate a variety of group sizes. Please contact us for more details.'
},
{
question: 'What support is available if I encounter issues during my adventure?',
answer: 'We provide 24/7 support for any issues or emergencies that may arise during your adventure. Your safety and satisfaction are our top priorities.'
}
],
Safety: [
{ question: 'What safety measures are in place for the adventures?', answer: 'We ensure all adventures meet strict safety standards and are led by qualified professionals.' },
{ question: 'Are there any specific health requirements?', answer: 'Participants should be in good health and may be required to sign a waiver before embarking on an adventure.' },
{
question: 'How are emergencies handled during an adventure?',
answer: 'Our guides are trained in emergency response, and we have protocols in place to handle situations swiftly, including evacuation if necessary.'
},
{
question: 'Is travel insurance required for participants?',
answer: 'While not mandatory, we highly recommend travel insurance for all participants to cover unexpected events.'
},
{
question: 'Do you provide safety gear for high-risk activities?',
answer: 'Yes, all necessary safety equipment is provided and is required to be used for high-risk activities to ensure participant safety.'
}
],
Service: [
{ question: 'What types of services are offered?', answer: 'We offer a variety of services including guided tours, equipment rentals, and personalized adventure planning.' },
{ question: 'How can I give feedback on a service?', answer: 'Feedback can be provided directly through your account dashboard after completing an adventure.' },
{
question: 'Can services be customized for private groups?',
answer: 'Absolutely, we offer customizable services to cater to the unique needs of private groups and corporate teams.'
},
{
question: 'Are there guides available for all adventures?',
answer: 'Yes, every adventure includes access to experienced guides who ensure a safe and enjoyable experience.'
},
{
question: 'What languages do your services support?',
answer: 'Our services are offered in multiple languages to accommodate a diverse range of adventurers from around the world.'
}
],
Policy: [
{ question: 'What is your cancellation policy?', answer: 'Cancellations made more than 48 hours before the adventure start will receive a full refund.' },
{ question: 'Do you have a loyalty program?', answer: 'Yes, we offer a loyalty program for frequent adventurers that provides discounts and special offers.' },
],
Booking: [
{ question: 'How do I book an adventure?', answer: 'You can book an adventure by browsing our offerings and selecting the book now option for your chosen experience.' },
{ question: 'Can I change my booking?', answer: 'Bookings can be modified up to 24 hours before the scheduled start time, subject to availability.' },
],
Payment: [
{ question: 'What payment methods are accepted?', answer: 'We accept all major credit cards, PayPal, and select cryptocurrency payments.' },
{ question: 'Is my payment information secure?', answer: 'We use state-of-the-art security measures to ensure your payment information is always protected.' },
],
};

// State for the active tab
const [activeTab, setActiveTab] = useState(tabs[0]);
return (
<div className='bg-gradient-to-r from-gray-900 to-gray-800 text-white'>
<Header />

{/* Dynamic background section */}
<div className="relative h-screen">
<div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay */}
<div className="flex items-center justify-center bg-no-repeat bg-cover bg-center transition-opacity duration-1000 h-full"
style={{ backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})` }}>
{/* Content for the dynamic background section */}
<div className="text-center text-white p-12 z-10">
<h1 className="text-5xl font-bold mb-6"><span className='text-yellow-500'>Explore South India:</span> Your Pass, Backpackers Style</h1>
<p className="text-xl mb-6">Embark on amazing expeditions with our Backpackers United Community with the Travel Pass. One stop shop for amazing experiences and a lifetime of memories.</p>
<button className="text-yellow-400 border border-yellow-400 font-bold py-2 px-4 rounded-full hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-colors duration-300">
JOIN NOW
</button>
</div>
</div>
</div>
<div className="bg-black">
<div className="py-12 px-4">
{/* Changed text-white to text-black */} {/* Added text-white class */}
<h2 className="text-4xl font-bold text-center mb-5 text-yellow-500">Exclusive Benefits</h2>
<div className="flex justify-center  md:pb-10">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px]" />
      </div>
<p className="text-justify mx-6 mb-10 break-words">
Join the Backpackers United Member community once you avail the travel pass!  It offers you a choice of either 20 treks or tours, each promising unforgettable experiences under Trek pass and Tour passes respectively. You'll also get additional benefits like round-the-clock travel concierge, member only trips, fixed discounts on trips other than the ones included in the pass, customised travel plans, and more. Embrace the extraordinary with Backpackers United, where each experience enriches your travel with amazing perks, making every getaway more than just a trip – it's a journey of discovery and a world full of backpacking enthusiasts!
</p>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 text-black">
{/* Welcome Bonus Card */}
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{  background: 'linear-gradient(to right, #B2BEC3, #636E72)', color: '#333333' }}>
 
{/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={faGift} className="text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left">
<h3 className="text-lg font-semibold mb-2">Giveaway</h3>
<p>Unlock your adventure with our exclusive giveaway</p>
<div className="mb-4">
</div>
</div>
</div>
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{ background: 'linear-gradient(to right, #fff59d, #ffeb3b)', color: '#333333' }}>
 
{/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={faPercent} className=" text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left text-black ">
<h3 className="text-lg font-semibold mb-2">Save 50% Today</h3>
<p>Save 50% Today: Half Price, Full Value!</p>
</div>
</div>
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{ background: 'linear-gradient(to right, #4F5D75, #2D3A45)', color: '#333333' }}>
 
{/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={ faConciergeBell} className="text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left text-black">
<h3 className="text-lg font-semibold mb-2">24/7 Travel Concierge</h3>
<p>Journey nonstop with our 24/7 concierge service</p>
</div>
</div>
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{ background: 'linear-gradient(to right, #fff59d, #ffeb3b)', color: '#333333' }}>
  
{/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={faCalendarCheck} className="text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left text-black">
<h3 className="text-lg font-semibold mb-2">Member Only Immutes
</h3>
<p>Exclusive Access: Member-Only Minutes.</p>
</div>
</div>
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{ background: 'linear-gradient(to right, #fff59d, #ffeb3b)', color: '#333333' }}>
  {/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={faMapMarkedAlt} className="text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left text-black">
<h3 className="text-lg font-semibold mb-2">Fixed Discounts
</h3>
<p>Fixed Discounts on Extended Trips, Beyond 2D/1N </p>
</div>
</div>
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{ background: 'linear-gradient(to right, #fff59d, #ffeb3b)', color: '#333333' }}>
 
{/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={faMapMarkedAlt} className="text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left text-black">
<h3 className="text-lg font-semibold mb-2">Customized Travel Plans
</h3>
<p>Your journey, your way: Customized Travel Plans.</p>
</div>
</div>
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{ background: 'linear-gradient(to right, #fff59d, #ffeb3b)', color: '#333333' }}>
 
{/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={faPlaneDeparture} className="text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left text-black">
<h3 className="text-lg font-semibold mb-2">No Blackout Dates
</h3>
<p>Travel when you want: No Blackout Dates, no restrictions.</p>
</div>
</div>
<div className="rounded-lg shadow p-6 flex flex-col items-end" style={{ background: 'linear-gradient(to right, #fff59d, #ffeb3b)', color: '#333333' }}>
 
{/* Image on the right */}
<div className="mb-4">
<FontAwesomeIcon icon={faCreditCard} className="text-black text-3xl" />
</div>
{/* Text on the left */}
<div className="text-left text-black">
<h3 className="text-lg font-semibold mb-2">EMI Option Available
</h3>
<p>Budget-friendly with Monthly EMI Options.</p>
</div>
</div>
</div>
<div className="bg-black text-white pl-auto pr-auto ">
<div className="container mx-auto my-12 p-6 relative">
{/* Overlay Title */}
<div className="relative">
{/* Image Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
{adventures.map((adventure, index) => (
<div key={index} className="relative w-full h-[150px] ">
{/* Ensure your images are square by providing the same width and height, or by using aspect-ratio classes */}
<Image
src={adventure.src}
alt={adventure.alt}
layout="fill"
objectFit="cover"
className="rounded-lg"
/>
</div>
))}
</div>

<div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
<div className="text-white text-4xl font-bold p-4 bg-black bg-opacity-50 rounded-lg">
150+ DESTINATIONS
</div>
</div>
</div>


{/* Stats Section */}
<div className="flex justify-around mt-12">
<div className="text-center">
<span className="text-6xl font-bold text-yellow-500">20</span>
<p className="text-xl font-semibold">TREKS TO </p>
<p className="text-xl font-semibold"> CHOOSE FROM</p>
</div>
<div className="text-center">
<span className="text-6xl font-bold text-yellow-500">20</span>
<p className="text-xl font-semibold">TOURS TO </p>
<p className="text-xl font-semibold"> CHOOSE FROM</p>
</div>
<div className="text-center">
<span className="text-6xl font-bold text-yellow-500">50%</span>
<p className="text-xl font-semibold">DISCOUNTED  </p>
<p className="text-xl font-semibold"> RATES</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white py-12">
<div className="container mx-auto px-4">
<div className="text-center mb-10 text-black">
<h2 className="text-2xl font-semibold ">Unlock a World of Adventure with Backpackers United Travel Pass</h2>
<div className="flex justify-center  md:pt-3">
        <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" />
      </div>
<p className="mt-4 text-gray-600 text-justify break-words mx-6">
Embark on an extraordinary journey with our exclusive Travel Pass. Gain access to over 150 + unique travel experiences worldwide, designed for adventurous souls seeking exploration, connection, and unforgettable moments. Whether you're yearning for a thrilling trek through breathtaking landscapes or a cultural tour that unveils hidden gems, our Trek and Tour Pass is your key to a seamless backpacking adventure tailored to your wanderlust. More than just a pass, it's your ticket to a world of discovery.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
<div className="flex flex-col items-center text-center">
<h3 className="text-xl font-semibold text-black">All in one platform</h3>
<div className="flex justify-center  md:pt-3">
        <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" />
      </div>
<p className="mt-2 text-gray-500 text-justify break-words">
Discover experiences from around the world that excite you. At BanBanjara,
there's something for everyone.
</p>
</div>

<div className="flex flex-col items-center text-center">
<h3 className="text-xl font-semibold text-black">Never Settle for Average</h3>
<div className="flex justify-center  md:pt-3">
        <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" />
      </div>
<p className="mt-2 text-gray-500 text-justify break-words">
Verified Suppliers ensuring that you don't have to do the tedious work of finding a
quality operator for your plans.
</p>
</div>

<div className="flex flex-col items-center text-center">
<h3 className="text-xl font-semibold text-black">Truly Unique Experiences</h3>
<div className="flex justify-center  md:pt-3">
        <hr className="border-t-2 border-yellow-500 md:w-[60PX] w-[30px]" />
      </div>
<p className="mt-2 text-gray-500 text-justify break-words">
We're always on the lookout for new and unique experiences to make your trip truly
memorable.
</p>
</div>
</div>
</div>
</div>


{/* Rest of the page content */}
{/* ... */}
{/* Make sure to replace < /> with the actual Faq component call and pass the necessary props */}
{/* <Faq faqItems={faqItems} /> */}
<div className="relative text-white text-center py-12" style={{ background: 'linear-gradient(to right, #7b4397, #dc2430)' }}>
{/* Title */}
<h1 className="text-4xl font-bold mb-6">TREK PASS 2023</h1>
<h2 className="text-2xl font-semibold mb-8">20 FREE TREKS</h2>

{/* Treks grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
{treks.map((trek, index) => (
<div key={index} className="bg-white bg-opacity-20 rounded-full px-6 py-2">
<Link href={`/treks/${trek.replace(/\s+/g, '-').toLowerCase()}`}>
<div className="hover:text-gray-300">{trek}</div>
</Link>
</div>
))}
</div>
</div>
<div className="relative text-white text-center py-12"
style={{ background: 'linear-gradient(to right, #0000FF, #00FF00)' }}>
{/* Title */}

{/* Tours grid */}
<div className="relative text-white text-center "
style={{ background: 'linear-gradient(to right, #0000FF, #00FF00)' }}>
{/* Title */}
<h1 className="text-4xl font-bold mb-6">BIKAT PASS 2023</h1>
<h2 className="text-2xl font-semibold mb-8">Explore Exciting Destinations</h2>

{/* Tours grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
{tours.map((tour, index) => (
<div key={index} className="bg-white bg-opacity-20 rounded-full px-6 py-2">
<Link href={`/tours/${tour.replace(/\s+/g, '-').toLowerCase()}`}>
<div className="hover:text-gray-300">{tour}</div>
</Link>
</div>
))}
</div>
</div>
</div>
<div className="bg-black py-12">
<div className="container mx-auto">
<div className="flex justify-center mb-6 border-b border-yellow-500">
{tabs.map((tab, index) => (
<button
key={index}
className={`px-4 py-2 text-sm sm:text-base md:text-lg border-b-2 ${activeTab === tab ? 'text-yellow-500 border-yellow-500' : 'text-gray-400 border-gray-700'}`}
onClick={() => setActiveTab(tab)}
>
{tab}
</button>
))}
</div>
<div className="max-w-4xl mx-auto px-4">
{faqContent[activeTab]?.map((item, index) => (
<div key={index} className="mb-4">
<h3 className="text-xl font-semibold text-gray-200">{index + 1}. {item.question}</h3>
<p className="text-gray-400 mt-2">{item.answer}</p>
</div>
))}
</div>
</div>
</div>

<Footer />
</div>
);
};
export default Page;
