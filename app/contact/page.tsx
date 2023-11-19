'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,  faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from '@/Components/Navbar/Header/Header';
import Footer from '@/Components/Navbar/Footer/Footer';
const Page = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
        script.async = true;
        script.defer = true;
        script.onload = function () {
            if (window.google && window.google.maps) {
                new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: 12.977323, lng: 77.638101 },
                    zoom: 8,
                });
            }
        };
        document.head.appendChild(script);
    }, []);
    return (
      <div className='bg-black'>
        <Header />
        <div className='h-20'></div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto px-4 ">
            <motion.h1
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl text-yellow-500 py-6"
            >
                Contact Us
            </motion.h1>
            <div className="bg-yellow-500 h-1 w-20 mx-auto mb-6"></div> {/* Adjust width here */}
            <div className="flex ">
                <div className="w-full flex flex-row p-4">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4"
                    >
                        <h2 className="text-2xl text-yellow-500">Address:-</h2>
                        <p className="text-white">Backpackers United, #817 Ground Floor, 10 A main, Indiranagar 1st Stage, Bengaluru- 560038</p>
                    <div className="mb-4">
                        <h2 className="text-2xl text-yellow-500">Sales:-</h2>
                        <p className="text-white">For questions about our products, group bookings, or special requests, please reach out to our sales team.</p>
                        <p className="text-white">
      Email: <Link href="mailto:info@backpackersunited.in" className="hover:text-yellow-500">info@backpackersunited.in</Link><br />
      Phone: <a href="tel:+918310180586" className="hover:text-yellow-500">+91 8310180586</a>
    </p>
                    </div>
                    </motion.div>
                    <div>
                    <div className="mb-4">
                        <h2 className="text-2xl text-yellow-500">Support:-</h2>
                        <p className="text-white">For questions about our products, group bookings, exclusive travel pass or special requests, please reach out to our sales team.</p>
                        <p className="text-white">
      Email: <a href="mailto:info@backpackersunited.in" className="hover:text-yellow-500">info@backpackersunited.in</a><br />
      Phone: <a href="tel:+919364099494" className="hover:text-yellow-500">+91 9364099494</a>
    </p>
                    </div>
                    <div className="mb-4">
    <h2 className="text-2xl text-yellow-500">Stay Connected:-</h2>
    <p className="text-white">Follow us on social media to stay updated on the latest adventures, offers, and travel stories.</p>
    <div className="flex space-x-4 pt-4">
                <Link href="https://www.facebook.com/backpackersunited1/" passHref>
                    <div target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                        <FontAwesomeIcon icon={faFacebookF} className="text-white text-3xl" />
                    </div>
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=918310180586&text&type=phone_number&app_absent=0" passHref>
                    <div target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
                    </div>
                </Link>
                <Link href="https://www.instagram.com/backpackers_united_/" passHref>
                    <div target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                        <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
                    </div>
                </Link>
            </div>
</div>
                    </div>
                </div>
                </div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-row p-4 "
                >
               {/* <div className="flex flex-wrap justify-between w-full"> */}
    {/* Form container */}
    <div className="w-full lg:w-1/2 p-4 pl-0 pr-0 text-bold">
  <h2 className="text-3xl text-yellow-500 mb-4">Get in Touch</h2>
  <form className="flex flex-col gap-4 max-w-md">
    <input
      type="text"
      placeholder="Your Name"
      className="p-2 rounded-md" // Added rounded-md class
    />
    <input
      type="email"
      placeholder="Your Email"
      className="p-2 rounded-md" // Added rounded-md class
    />
    <textarea
      placeholder="Your Message"
      className="p-2 h-32 rounded-md" // Added rounded-md class
    ></textarea>
    <button type="submit" className="bg-yellow-500 text-white p-2 rounded-md">Submit</button>
  </form>
</div>
    {/* Map container */}
    <div className="w-1/2 lg:w-1/2 p-4 pl-0">
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
{/* </div> */}
                </motion.div>
        </motion.div>
        <Footer />
        </div>
    );
};
export default Page;