'use client'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const teamMembers = [
  {
    name: 'Habeeb Ul Haq',
    designation: 'CEO & Founder',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/73f4d0db7dbcff2cbc04dc25bd47d343.th.jpeg'
  },
  {
    name: 'R Ashwin Kumar',
    designation: 'Human Resources',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/85291087b00e4499ebc47af3653d1621.th.jpeg'
  },
  {
    name: 'Tejas Ram',
    designation: 'Operations Manager',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/8ba5c19c720f59be85c8706658f11b9d.th.jpeg'
  },
  {
    name: 'Syed Shadab Mehdi',
    designation: 'Business Development Manager',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/d40c39f59fdd5f671ef78fc839e1a364.th.jpeg'
  },
  {
    name: 'Mohammed Sahil J',
    designation: 'Sales Manager',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/7fc97c715cba1418ba568778a4592834.th.jpeg'
  },
  {
    name: 'Tahir Shariff',
    designation: 'Quality & Risk Analyst',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/357348b2b672570cec29e5ba1a06a6f3.th.jpeg'
  },
  {
    name: 'Aviral',
    designation: 'Content Creator',
    photoUrl: ''
  },
  {
    name: 'Mohamed Aaqib',
    designation: 'Product Manager',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/e8d69514f420273af3eec397e9d51172.th.jpeg'
  },
  {
    name: 'Jafar Sharief',
    designation: 'Operations Head - Thailand',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/3271e63b2c2cc449c24241d0b46dda54.th.jpeg'
  },
  {
    name: 'Syed Mudassir Hussain',
    designation: 'Software Developer',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/ecfb610ff5d3ee28de180779787ba87a.th.jpeg'
  },{
    name: 'Pramod',
    designation: 'Outdoor Lead Manager',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/f4ff1be7d7d4868f68f3ac9be453287c.th.jpeg'
  },
  {
    name: 'Bharath M',
    designation: 'Outdoor Lead Manager',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/5591f97fcdff7e41e3e128054337d124.th.jpeg'
  },
  {
    name: 'Saad Adnan',
    designation: 'Accounts',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/04246e04c2161fe29055555bd6f81966.th.jpeg'
  },
  {
    name: 'Shreekanth G',
    designation: 'Operations',
    photoUrl: 'https://imgtr.ee/images/2023/11/02/b3e9269d3c2bede3fe000a6bfcf3817a.th.jpeg'
  },
  {
    name: 'Abhinandan M Kumar',
    designation: 'Business Development',
    photoUrl: ''
  },
];
const aboutUsVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};
const teamMemberVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};
const imageHoverVariants = {
  hover: { scale: 1.1 }
};
// AboutUs Component
const AboutUs = () => {
  return (
    <div >
      <Header />
      <div className='bg-black '>
      <motion.div initial="initial" animate="animate" transition="transition" className="container mx-auto px-4 py-6 bg-black">
        <div className="pt-16"></div>
        <motion.h1 variants={aboutUsVariants} className="text-center text-5xl text-yellow-500">Our Story</motion.h1>
        <div className="flex justify-center  md:pt-5">
        <hr className="border-t-2 border-white md:w-[60PX] w-[30px] mb-8" />
      </div>
        <div className="flex flex-row justify-between items-center gap-10">
          <motion.div variants={aboutUsVariants} className="text-white lg:w-1/2 text-justify break-words">
            <p>Welcome to Backpackers United – your gateway to extraordinary, life-changing travel experiences! Since our inception in 2017, we've grown rapidly into a vibrant community for adventurous souls seeking the road less traveled. Our enthusiastic team is on a relentless mission to unveil nature's hidden jewels, advocating sustainable and responsible exploration.</p>
            <p>We excel in crafting journeys that resonate with diverse interests. From mesmerizing treks and thrilling cycling adventures to bespoke holiday packages and backpacking escapades, we have it all. Our clients rave about the unforgettable memories and friendships forged on our trips.</p>
            <p>Embark on a journey with Backpackers United. Let's create stories worth telling and memories that last a lifetime. Adventure is out there – let's discover it together!</p>
          </motion.div>
          {/* <div className='ml-10'> */}
          <div className="lg:w-1/2 relative w-full h-[300px] ">
            <Image src="/about/about.jpg" alt="Travel Story" layout='fill' objectFit="contain" className="rounded-lg"/>
          </div>
          {/* </div> */}
        </div>
        <motion.h2 variants={aboutUsVariants} className="text-center text-5xl text-yellow-500 my-6">Meet Our Backpackers</motion.h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={teamMemberVariants} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
              <motion.div whileHover="hover" className="bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <Image src={member.photoUrl || "/default-avatar.jpg"} alt={member.name} width={128} height={128} className="rounded-full mx-auto border-4 border-yellow-500"/>
                <h3 className="text-white text-xl mt-4">{member.name}</h3>
                <p className="text-yellow-500">{member.designation}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
      <Footer />
      </div>
  );
};
export default AboutUs;
