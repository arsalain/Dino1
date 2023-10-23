'use client'
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
  const controls = useAnimation();
  const [changingText, setChangingText] = useState('TRAVEL');
  const words = ['TRAVEL', 'EXPLORE', 'DISCOVER', 'GET OUT', 'FIND PEACE'];
  const [searchInput, setSearchInput] = useState("")
  const [products, setProducts] = useState([]);
  const onSearch = (searchTerm) =>{
    setSearchInput(searchTerm)
  }
console.log(products,"prod")
  // const search = products.find(item => item.name == searchInput );
  const search = Array.isArray(products) ? products.find(item => item.name === searchInput) : null;
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i = (i + 1) % words.length;
      setChangingText(words[i]);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/trek'); // Use the path to your API route
        if (response.ok) {
          const data = await response.json();
          // setProducts(data);
          // if (Array.isArray(data)) {
            setProducts(data.data);
          // } else {
          //   console.error('API did not return an array:', data); // Add this line
          // }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className='relative' >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center relative"
    >
   <div className=" h-screen w-full ">
  <Image src="/home/Hero_image.jpg" alt="Description" layout="fill" objectFit="cover" className="absolute" />
</div>
      <div className="flex flex-col  items-start  md:w-1/2 absolute top-1/3 left-5 md:top-[40%] md:left-[10%]">
        <motion.h1
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white md:text-4xl"
        >
          IT'S TIME TO <span className="text-yellow-500">{changingText}</span>
        </motion.h1>
        <motion.p
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base md:text-lg md:p-2 mt-4 text-white rounded"
        >
          Discover amazing places at exclusive deals!
        </motion.p>
        <div className=" flex flex-row mt-6 ">
      <div className="px-3 py-2 rounded-lg bg-white w-[200px] md:w-[380px] ">
        <input
          type="text"
          placeholder="Search"
          className="bg-white  text-black outline-none"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
        />
        {Array.isArray(products) && products
          .filter((item) => {
            const searchTerm = searchInput.toLowerCase();
            const fullname = item.name.toLowerCase();
            return searchTerm && fullname.startsWith(searchTerm) && fullname !== searchTerm;
          })
          .map((list,index) => (
            <div className="text-black" onClick={() => onSearch(list.name)} key={index}>
              {list.name}
            </div>
          ))}
      </div>
      <motion.button
               initial={{ backgroundColor: "#FBBF24", color: "#000" }}
               whileHover={{ backgroundColor: "#000", color: "#FBBF24", scale: 1.05 }}
               transition={{ duration: 0.3 }}
            className="border border-yellow-500  w-[80px] h-[40px] md:w-[90px] rounded-lg ml-2 text-black shadow-lg"
          >
        {search ? (
          <Link href={`/product/${search.id}`}>
            
            Explore
    
          </Link>
        ) : (
          <div>Explore</div>
        )}
      </motion.button>
    </div>
      </div>
    </motion.div>
    </div>
  );
}

export default Hero