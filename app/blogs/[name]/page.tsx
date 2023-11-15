"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import BlogSlider from '@/Components/Blogs/Blogsslider/BlogSlider';
export default function Home() {
  // State to track which activity's description is expanded
  const [expandedId, setExpandedId] = useState(null);
  // Function to handle toggling the expanded state of activity descriptions
  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const activities = [
    {
      id: 1,
      title: "Mountain Hike in Wayanad, Kerala - Flat 15% Off",
      imageUrl: "/images/mountain-hike.jpg",
      description: "Explore the majestic mountains of Wayanad with our guided hiking tours. Experience breathtaking views and serene nature as you ascend to the summit.",
      rating: "4.5",
      numberOfReviews: "120",
      price: "1500.00",
      badgeText: "Flat 15% Off"
    },
    {
      id: 2,
      title: "Walk Through the Natural Trail of Wayanad, Kerala Flat 27% Off",
      imageUrl: "/images/natural-trail.jpg", // Replace with your image path
      description: "Discover the hidden trails of Wayanad's lush forests. Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.Discover the hidden trails of Wayanad's lush forests.A perfect adventure for nature lovers looking to escape the hustle and bustle of city life.",
      rating: "4.8",
      numberOfReviews: "98",
      price: "749.00",
      badgeText: "Flat 27% Off"
    },
    // ...add more activities as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  // Animation variants for the card container
  const containerVariants = {
    enter: (direction) => ({
      x: direction < 0 ? -1000 : 1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  // Animation variants for the card scale
  const cardVariants = {
    rest: { scale: 0.95 },
    hover: { scale: 1 },
  };
  return (
    <>
    <div className='bg-black '>
       <div className="flex items-center mb-12 pt-8">
      <div className="bg-yellow-500 w-1 h-16 mr-8 self-center"></div>
      <h1 className="text-7xl inline-block align-middle text-white">
  Wayanad
</h1>
      <span className="text-yellow-500 text-9xl inline-block align-middle relative" style={{top: '-0.1em'}}>.</span>
      </div>
      <div className="ml-9">
        <p className="text-gray-300 mt-2">
      Welcome to Wayanad: Kerala's Verdant Paradise
<br />
      </p>
      <p className="text-gray-300 mt-2">
      Wayanad, situated in the heart of Kerala's Western Ghats, is a pristine district known for its lush landscapes and a harmonious blend of nature and culture. This enchanting destination, often called the "Land of Paddy Fields," offers a tranquil escape surrounded by rolling hills, dense forests, and sprawling tea and coffee plantations. Wayanad is home to a rich variety of wildlife, making it a perfect retreat for nature enthusiasts. From the towering Chembra Peak to the serene Banasura Sagar Dam, its natural splendor is a visual treat, while its cultural diversity, with indigenous tribes and vibrant festivals, adds a unique dimension to the experience. Wayanad invites adventure seekers to explore its winding trails, chase waterfalls, and savor Kerala's culinary delights. Committed to eco-tourism and sustainability, the district ensures responsible travel practices, making it a destination that promises unforgettable memories of unspoiled beauty and warm hospitality.
<br />
      </p>
      <p className="text-gray-300 mt-2">
      Wayanad is not just a treat for nature lovers; it's a cultural mosaic as well. The indigenous tribes of Wayanad, including the Paniyas and Kurichiyas, contribute to the region's rich cultural tapestry. For adventure seekers, Wayanad presents a wealth of opportunities, from trekking through the ancient Edakkal Caves, which are adorned with prehistoric petroglyphs, to chasing the cascading waters of Soochipara and Meenmutty waterfalls. The vast tea estates offer captivating plantation walks, where you can immerse yourself in the region's natural beauty while learning about the tea-making process.<br />
      </p>
      <p className="text-gray-300 mt-2">
      Discover more about Wayanad's top attractions, activities, and travel tips as you plan your visit to this captivating paradise.
      </p>
    </div>
    </div>
      <Head>
        <title>Travel Carousel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="bg-black text-3xl font-bold pt-10 pl-9 text-yellow-400 text-center">
  BLOGS
</h2>
       {/* Activity Section */}
       {/* Activity Section */}
       <div className="bg-black py-8">
  <div className="container mx-auto px-16">
    <h2 className="text-3xl font-bold mb-4 text-center text-white">Must Things to Do in Wayanad</h2>
    {activities.map(activity => (
      <div key={activity.id} className="mb-6 shadow-lg rounded-lg overflow-hidden border border-white">
        <div className="relative">
          <Image
            src={activity.imageUrl}
            alt={activity.title}
            width={1920}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
          <span className="absolute top-4 left-4 bg-yellow-400 text-white text-xs px-2 py-1 rounded">
            {activity.badgeText}
          </span>
        </div>
        <div className="p-6 bg-black">
          <h3 className="text-2xl font-bold mb-3 text-white">{activity.title}</h3>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-2">{activity.rating}</span>
            <span className="text-sm text-white">({activity.numberOfReviews} reviews)</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold text-yellow-400">₹{activity.price}</span>
            <button className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
              Book Now
            </button>
          </div>
          <p className={`text-white mt-4 ${expandedId !== activity.id ? 'line-clamp-3' : ''}`}>
            {activity.description}
          </p>
          <button
            className="text-yellow-400 hover:yellow-400 transition-colors mt-4"
            onClick={() => toggleExpanded(activity.id)}
          >
            {expandedId === activity.id ? 'Read Less' : 'Read More'}
          </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* BlogSlider Component */}
      <BlogSlider />
    </>
  );
}