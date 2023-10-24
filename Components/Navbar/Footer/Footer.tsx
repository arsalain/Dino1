'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-black text-white "
    >
      <div className="flex flex-col md:flex-row md:justify-around md:items-center py-6 px-4">
        {/* Logo and Social Media Icons */}
        <div className="flex flex-col items-start md:items-center mb-8 md:mb-0 space-y-4">
          <div className="flex flex-row space-x-4">
            <Link href='/'>
              <Image src="/home/bplogo.jpg" alt="logo image" className="rounded-full" width={40} height={40} />
            </Link>
            <div className="flex flex-col">
              <Link href='/'>
                <div className="text-2xl font-semibold text-white">BACKPACKERS</div>
              </Link>
              <div className="text-sm font-bold text-red-600 relative top-[-0.525rem]">
                UNITED
              </div>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="hidden md:flex md:space-x-6 md:text-xl md:pt-4">
            <motion.a href="#" className="text-white hover:text-yellow-500" whileHover={{ scale: 1.4 }}>
              <FontAwesomeIcon icon={faFacebookF} />
            </motion.a>
            <motion.a href="#" className="text-white hover:text-yellow-500" whileHover={{ scale: 1.4 }}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </motion.a>
            <motion.a href="#" className="text-white hover:text-yellow-500" whileHover={{ scale: 1.4 }}>
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
            <motion.a href="#" className="text-white hover:text-yellow-500" whileHover={{ scale: 1.4 }}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </motion.a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4  " >
        {sections.map((section, index) => (
  <motion.div key={section.title} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }} className="flex flex-col md:items-center md:mb-8 mb-4 md:space-y-4 space-y-0">
    <h2 className="font-semibold md:text-xl text-lg">{section.title}</h2>
    <ul className="flex flex-col md:items-center md:space-y-2 space-y-0 mt-1">
      {section.links.map((link) => (
        <motion.li key={link.text} className="relative group hover:text-yellow-500" whileHover={{ y: -4, scale: 1.05 }}>
          <Link href={link.url} className="relative z-10  text-xs md:text-base">{link.text}</Link>
          <motion.div className="absolute h-[2px] bg-yellow-500 left-0 right-0 bottom-0 opacity-0 transform -translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.div>
        </motion.li>
      ))}
    </ul>
  </motion.div>
))} 


{/* Contact Us */}
<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 }} className="flex flex-col md:items-center md:space-y-4 space-y-2">
  <h2 className="font-semibold md:text-xl  text-lg md:mb-4">CONTACT US</h2>
  <div className="flex flex-col md:items-center md:mb-3 mb-0 relative group md:p-2">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex md:items-center md:space-x-3 space-x-1 z-10">
      <FontAwesomeIcon icon={faPhone} className="text-white group-hover:text-black" />
      <div className="text-xs group-hover:text-black md:text-lg relative">+91 8310180586</div>
    </motion.div>
    <motion.div className="absolute h-full w-full bg-yellow-500 left-0 top-0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out"
    ></motion.div>
  </div>
  <div className="flex flex-col items-center md:mb-3 relative group md:p-2">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex items-center md:space-x-3 space-x-1 z-10">
      <FontAwesomeIcon icon={faEnvelope} className="text-white group-hover:text-black" />
      <div className="text-xs md:text-lg group-hover:text-black relative" >info@backpackersunited.in</div>
    </motion.div>
    <motion.div className="absolute h-full w-full bg-yellow-500 left-0 top-0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out"
    ></motion.div>
  </div>
</motion.div>
      </div>
      </div>
      <div className="md:hidden flex space-x-6  text-lg items-center justify-center pt-4 border-t-2 border-white" >
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faWhatsapp} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div className="text-center text-sm md:mt-6 mt-4 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          2023 Backpackers United Copyright Information
        </motion.div>
        </div>
    </motion.footer>
  );
}

export default Footer;