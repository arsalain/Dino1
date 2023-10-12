'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,   faWhatsapp,  faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';


const sections = [
  {
    title: 'LEGAL',
    links: [
      { text: 'Terms of Use', url: '#' },
      { text: 'Privacy Policy', url: '#' },
      { text: 'Terms & Conditions', url: '#' },
      
    ],
  },
  {
    title: 'QUICK LINKS',
    links: [
      { text: 'Destinations', url: '#' },
      { text: 'Book a Trip', url: '#' },
      { text: 'International Trip', url: '#' },
    ],
  },
  {
    title: 'JOIN US',
    links: [
      { text: 'About Us', url: '#' },
      { text: 'Careers', url: '#' },
      { text: 'Partner with Us', url: '#' },
    ],
  },
];

const Footer = () =>{
  return (
    <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
      className="bg-black text-white"
    >
      <div className="text-center mb-6 relative ">
      <div className=" h-[300px] w-full ">
  <Image src="/home/Hero_image.jpg" alt="home footer image" layout="fill" objectFit="cover" className="absolute" />
</div>
<div className=" items-start w-1/2 absolute top-10 left-1/2 transform -translate-x-1/2">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          THE BEST OF BACKPACKERS UNITED DELIVERED TO YOUR INBOX
        </motion.h1>
        <motion.p
          className="mt-3 sm:mt-4 md:mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Sign up for more inspiring travel destinations, stories, and special offers from Backpackers United
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-3 sm:mt-4 md:mt-5 bg-yellow-500 hover:bg-yellow-600 py-2 px-6 sm:px-8 md:px-10 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 300 }}
        >
          SIGN UP
        </motion.button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-2">
      <div className="flex-grow-4 flex flex-col float-left pl-1 pt-[-1rem] items-center">
<div className="flex flex-row" >
<div className="mt-3">
   <Link href='/' className="">
      <Image src="/home/bplogo.jpg" className="rounded-full" width={40} height={40} />
   </Link>
</div>
<div className="flex flex-col mt-2 pl-2">
   <Link href='/' className="">
      <div className="text-2xl font-bold text-white font-lato">BACKPACKERS</div>
      <div className="text-sm font-bold text-red-600 relative top-[-0.525rem] font-lato text-center">
         UNITED
         <div className="absolute left-0 w-[65px] h-[2px] bg-white mt-[-0.75rem]"></div>
         <div className="absolute right-0 w-[65px] h-[2px] bg-white mt-[-0.75rem]"></div>
      </div>
   </Link>
</div>
</div>
<div className="flex space-x-6 text-xl pt-4">
      <a href="#" className="text-white hover:text-yellow-500">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#" className="text-white hover:text-yellow-500">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="#" className="text-white hover:text-yellow-500">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="#" className="text-white hover:text-yellow-500">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
</div>
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
          >
            <h2 className="font-bold mb-4">{section.title}</h2>
            <ul className="flex flex-col">
              {section.links.map((link) => (
                <li key={link.text} className="hover-effect">
                  <a href={link.url}><span>{link.text}</span></a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-6 md:mt-10">
        <div>FOLLOW US</div>
        <div className="text-right">2023 Backpackers United Copyright Information</div>
      </div>
    </motion.footer>
  );
}
export default Footer