"use client"
import { useState,useEffect,FC } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import BlogSlider from '@/Components/Blogs/Blogsslider/BlogSlider';
import Header from '@/Components/Navbar/Header/Header';
interface PageProps {
  params: {
      name: string;
  }
}
const page = FC<PageProps> = ({ params })=> {
  // State to track which activity's description is expanded
  const [expandedId, setExpandedId] = useState(null);
  const [blog, setBlog] = useState({});
  // Function to handle toggling the expanded state of activity descriptions
  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const name = params.name
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/blog/${name}`);
      const data = await response.json();
      console.log("ata",data)
      setBlog(data);
    };

    if (name) {
      fetchData();
    }
  }, [name])
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
     <div className='bg-black w-full'>
      <Header />
     <div className="flex  pt-20">
       <div className="bg-yellow-500 w-1 h-16 mr-8 self-center"></div> 
      <h1 className="text-4xl pt-10 text-white">
{blog.name}
</h1>
       <span className="text-yellow-500 text-9xl  relative" style={{top: '-0.2em'}}>.</span> 
      </div>
       <div className="ml-9">
      {blog && blog.over && blog.over.map((over, index) => (
          <p className="text-gray-300 " key={index}  >
     {over}
     </p>
      ))} 
    </div> 
  
       {/* Activity Section */}
       {/* Activity Section */}
       <div className="bg-black py-8">
  <div className="container mx-auto px-16 grid grid-cols-2 gap-5">
  {blog && blog.blogs && blog.blogs.map((blogs, index) => (
      <div key={blogs._id} className="mb-6 shadow-lg rounded-lg overflow-hidden border border-white">
        <div className="relative h-[200px]">
          <Image
            src={`http://localhost:4000/uploads/${blogs.image}`}
            alt={blogs.imagealt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6 bg-black">
          <h3 className="text-2xl font-bold mb-3 text-white">{blogs.title}</h3>
          <p className={`text-white mt-4 ${expandedId !== blogs._id ? 'line-clamp-2' : ''}`}>
            {blogs.para}
          </p>
          <button
            className="text-yellow-400 hover:yellow-400 transition-colors mt-4"
            onClick={() => toggleExpanded(blogs._id)}
          >
            {expandedId === blogs._id ? 'Read Less' : 'Read More'}
          </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* BlogSlider Component */}
      <BlogSlider data={blog} />
      </div> 
    </>
  );
}
export default page;