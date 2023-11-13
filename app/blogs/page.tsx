"use client"
import Head from 'next/head';
import Footer from '@/Components/Navbar/Footer/Footer';
import Header from '@/Components/Navbar/Header/Header';
import { useState } from 'react';
// This function is a placeholder for where you would fetch actual data
const fetchData = () => {
  // Placeholder for a single row of cards
  const rowOfCards = [
    {
      imageUrl: '/destination/dubai.jpg',
      title: 'Antelope Canyon',
      description: 'Guided Tour Package',
    },
    {
      imageUrl: '/destination/srilanka.jpg',
      title: 'Sahara Desert',
      description: 'Experience Sunset Camel Ride',
    },
    {
      imageUrl: '/destination/vietnam.jpg',
      title: 'Eiffel Tower',
      description: 'Exploring Top Things to Do',
    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Great Wall of China',
      description: 'Historic Landmark Tour',
    },
    // Add more cards as needed
  ];
  // Repeat the rowOfCards 4 times to create 4 rows
  return [...Array(4)].flatMap(() => rowOfCards);
};
// Placeholder data for page 2
const page2Data = [
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Grand Canyon Adventure',
    description: 'Hike the Majestic Grand Canyon',
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Northern Lights Expedition',
    description: 'Witness the Mesmerizing Aurora Borealis',
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Machu Picchu Discovery',
    description: 'Explore the Ancient Ruins of Machu Picchu',
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Tropical Paradise Getaway',
    description: 'Relax on the Pristine Beaches of a Tropical Island',
  },
];
export default function Home() {
  // Constants for pagination
  const cardsPerPage = 8; // Adjust the number of cards per page
  const totalCards = fetchData().length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  // State for the current page
  const [currentPage, setCurrentPage] = useState(1);
  // Handle pagination logic
  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  // Get data based on the current page
  const getPageData = () => {
    if (currentPage === 1) {
      return fetchData();
    } else if (currentPage === 2) {
      return page2Data;
    }
    // Add more conditions for additional pages if needed
    return [];
  };
  // Calculate the range of cards to display based on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = currentPage * cardsPerPage;
  // Slice the data to get the cards for the current page
  const cards = getPageData().slice(startIndex, endIndex);
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Travel Blog</title>
        <meta name="description" content="A travel blog showcasing various destinations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header and Footer components can be uncommented once you have them set up */}
      <Header />
      <main className="p-5">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="flex items-center pt-8 mb-8">
            <div className="bg-yellow-500 w-1 h-16 mr-8"></div>
            <h1 className="text-7xl font-bold">Blogs</h1>
            <span className="text-yellow-500 text-9xl" style={{ top: '-0.1em' }}>.</span>
          </div>
          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {cards.map((card, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img className="w-full h-48 object-cover" src={card.imageUrl} alt={card.title} />
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-2">{card.title}</h2>
                  <p className="text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center space-x-4">
            {[1, 2].map((pageNumber) => (
              <button
                key={pageNumber}
                className={`px-4 py-2 border ${
                  currentPage === pageNumber ? 'bg-yellow-500 text-white' : 'bg-gray-700 text-yellow-500'
                }`}
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer /> {/* Your custom footer component */}
    </div>
  );
}