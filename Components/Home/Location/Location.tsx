'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
const LocationListSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const internationalLocations = ["Bhutan", "Cambodia", "Dubai", "Indonesia", "Maldives", "Singapore", "Sri Lanka", "Thailand", "Vietnam"];
  const northIndianLocations = ["Agra", "Bir", "Darjeeling", "Delhi", "Gangtok","Jaipur", "Jodhpur", "Leh", "Manali", "Meghalaya", "Rishikesh" ,"Shimla", "Spiti", "Srinagar", "Udaipur"];
  const southIndianLocations = ["Alleppey", "Bangalore", "Chennai", "Chikmagalur", "Coorg", "Dandeli", "Goa", "Gokarna", "Hampi", "Hyderabad", "Kochi", "Kodaikanal", "Kozhikode", "Mangalore", "Mysore", "Munnar", "Murdeshwar", "Ooty", "Pondicherry", "Varkala", "Wayanad"];
  const displayLocations = (locations) => (
    <div className="flex flex-wrap justify-center">
      {locations.map((location, idx) => (
        <motion.div
        key={idx}
        className="m-2 cursor-pointer"
        whileHover={{ scale: 1.2, color: '#FFC34D' }}
        whileTap={{ scale: 0.9 }}
      >
        {location}
      </motion.div>
      ))}
    </div>
  );
  return (
    <div className="bg-black text-white py-8 border-b border-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-6">Our Locations</h2>
        <div className="text-lg mb-6">
          <span onClick={() => setActiveCategory('all')} className={activeCategory === 'all' ? 'underline cursor-pointer' : 'cursor-pointer'}>All</span> |
          <span onClick={() => setActiveCategory('international')} className={activeCategory === 'international' ? 'underline cursor-pointer' : 'cursor-pointer'}> International</span> |
          <span onClick={() => setActiveCategory('northIndian')} className={activeCategory === 'northIndian' ? 'underline cursor-pointer' : 'cursor-pointer'}> North Indian</span> |
          <span onClick={() => setActiveCategory('southIndian')} className={activeCategory === 'southIndian' ? 'underline cursor-pointer' : 'cursor-pointer'}> South Indian</span>
        </div>
        <div className="text-gray-300 text-sm">
          {activeCategory === 'all' || activeCategory === 'international' ? displayLocations(internationalLocations) : null}
          {activeCategory === 'all' || activeCategory === 'northIndian' ? displayLocations(northIndianLocations) : null}
          {activeCategory === 'all' || activeCategory === 'southIndian' ? displayLocations(southIndianLocations) : null}
        </div>
      </div>
    </div>
  );
};
export default LocationListSection;