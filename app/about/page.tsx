'use client'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import { motion } from 'framer-motion';
import Image from 'next/image';
import teamMembers from '@/Components/teamMembers/teamMembers'; 

const aboutUsVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const teamMemberVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { staggerChildren: 0.1, duration: 0.5, ease: "easeOut" }
};

const imageHoverVariants = {
  hover: { scale: 1.1, transition: { duration: 0.2 } }
};

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className='bg-black text-white'>
        <motion.div initial="initial" animate="animate" variants={aboutUsVariants} className="container mx-auto px-4 lg:px-24 py-12 lg:py-24">
          <motion.h1 className="text-center text-4xl lg:text-6xl text-yellow-500 mb-6">Our Story</motion.h1>
          <motion.hr className="border-t-2 border-white mx-auto w-16 mb-12" />
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <motion.div className="lg:w-1/2 text-justify">
              <p className="mb-6">Welcome to Backpackers United, your portal to extraordinary, transformative travel experiences. Since our journey began in 2017, we've blossomed into a thriving community for those who dare to explore the unknown. Our passionate team is dedicated to uncovering the marvels of nature, championing eco-conscious and mindful travel.</p>
              <p className="mb-6">At Backpackers United, we don't just plan trips; we curate adventures that resonate with your spirit of exploration. Be it through awe-inspiring treks, exhilarating cycling routes, custom-crafted holiday packages, or immersive backpacking experiences, our offerings are as diverse as the destinations we explore. Our clients cherish the lasting memories and bonds forged on our journeys.</p>
              <p>Join us at Backpackers United for an adventure that transcends the ordinary. Together, let's weave tales of discovery and create memories that echo through time. The adventure of a lifetime awaits – are you ready to step into the world of Backpackers United and uncover its wonders?</p>
            </motion.div>
            <div className="lg:w-1/2 w-full lg:h-[400px] h-[300px] relative">
              <Image src="/home/Hampta.webp" alt="Travel Story" layout='fill' objectFit="cover" className="rounded-lg"/>
            </div>
          </div>
          <motion.h2 className="text-center text-4xl lg:text-6xl text-yellow-500 my-12">Meet Our Backpackers</motion.h2>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={teamMemberVariants} className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                <motion.div whileHover="hover" variants={imageHoverVariants} className="bg-gray-800 h-[300px] rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <Image src={member.photoUrl || "/default-avatar.jpg"} alt={member.name} width={128} height={128} className="rounded-full mx-auto border-4 border-yellow-500"/>
                  <h3 className="text-xl mt-4">{member.name}</h3>
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