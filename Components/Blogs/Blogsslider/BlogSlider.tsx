"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Scrollbar,Pagination  } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
// SwiperCore.use([Navigation, Scrollbar]);
const dest = [
  {
    title: "Kedar Kanta Trek",
    location: "Singtur Range, Uttarakhand",
    price: 18000,
    img: "/home/kedar.jpg",
    badge: "BREAKFAST INCLUDED",
  },
  {
    title: "Hamta Pass Trek",
    location: "Kullu valley , Himachal Pradesh",
    price: 19000,
    img: "/home/hamta.jpg",
  },
  {
    title: "Great Lakes Trek",
    location: " Sonamarg , J & K",
    price: 20000,
    img: "/home/lake.jpg",
    badge: "BEST SELLER",
  },
  {
    title: "Valley of Flowers Treks",
    location: "Uttarakhand",
    price: 18000,
    img: "/home/valley.jpg",
    badge: "TOP RATED",
  },
  {
    title: "Roop Kund",
    location: "Uttarakhand",
    price: 18000,
    img: "/home/roop.jpg",
    badge: "TOP RATED",
  },
];
const  BlogSlider = () => {
  return (
    <div className="relative bg-black">
         <h2 className="text-3xl text-white font-bold text-center py-6">
        Explore Our Destinations
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
            nextEl: '.swiper-but-next',
            prevEl: '.swiper-but-prev'
        }}
        pagination={{
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + ' bg-black"></span>';
            },
        }}
        modules={[ Navigation, Pagination]}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
         {dest.map((item, idx) => (
   <SwiperSlide key={idx}>
   <Link href={`/${item.title}`} className="block"> {/* Make the entire card a link */}
     <div className="rounded-xl shadow-lg relative flex flex-col items-center justify-between h-full transition duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 transform bg-black text-white p-4">
     <div className="overflow-hidden relative rounded-xl h-60 w-full">
         <Image
           src={item.img}
           alt={item.title}
           objectFit="cover"
           layout="fill"
           className="transform transition-transform duration-300"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> {/* Gradient overlay */}
       </div>
       {item.badge && (
         <span className="absolute top-0 left-0 bg-yellow-500 text-white uppercase text-xs p-1 m-2 rounded">
           {item.badge}
         </span>
       )}
       <div className="p-4 text-center">
  <h4 className="text-lg mb-1">{item.title}</h4>
  <p className="text-sm mb-2">{item.location}</p>
       </div>
       <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-x-0 sm:space-x-4"> {/* Adjusted margin-top and space between price and button */}
  <div className="flex flex-col items-start mb-2 sm:mb-0">
    <p className="text-xs text-gray-400">Starting from</p>
    <p className="text-lg font-bold">INR {item.price}</p>
  </div>
  <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500 transition duration-300"> {/* Adjusted padding and hover effect for button */}
    Book Now
  </button>
</div>
</div>
   </Link>
  </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4 items-center">
    <button className="swiper-but-prev flex items-center justify-center w-5 h-5 shadow-md rounded-full mr-1"><FontAwesomeIcon icon={faArrowLeft} /></button> {/* Unicode left arrow */}
    <div className="swiper-pagination"></div>
    <button className="swiper-but-next flex items-center justify-center w-5 h-5 shadow-md rounded-full ml-1"><FontAwesomeIcon icon={faArrowRight} /></button> {/* Unicode right arrow */}
</div>
    </div>
  );
};
export default BlogSlider;