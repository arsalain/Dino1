'use client'
import React, { useState } from 'react';
const LocationListSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const internationalLocations = ["Bhutan", "Dubai", "Indonesia", "Maldives", "Sri Lanka", "Thailand", "Vietnam"];
  const northIndianLocations = ["Amritsar", "Chandigarh", "Delhi", "Jaipur", "Kolkata", "Leh", "Lucknow", "Mumbai", "Shimla", "Srinagar"];
  const southIndianLocations = ["Alleppey", "Bangalore", "Chennai", "Chikmagalur", "Coorg", "Dandeli", "Goa", "Gokarna", "Hampi", "Hyderabad", "Kochi", "Kodaikanal", "Kozhikode", "Mangalore", "Mysore", "Munnar", "Murdeshwar", "Ooty", "Pondicherry", "Varkala", "Wayanad"];
  const displayLocations = (locations) => (
    <div className="flex flex-wrap justify-center">
      {locations.map((location, idx) => (
        <div key={idx} className="m-2 hover:text-yellow-500 cursor-pointer">
          {location}
        </div>
      ))}
    </div>
  );
  return (
    <div className="bg-black text-white md:py-8 border-b border-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="md:text-3xl text-xl mb-6">Our Locations</h2>
        <div className="md:text-lg mb-6">
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