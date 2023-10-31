"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Scrollbar,Pagination  } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// SwiperCore.use([Navigation, Scrollbar]);
const destinations = [
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
const TrekSlider = () => {
  return (
    <div className=" relative">
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
        scrollbar={{
          el: "#swiper-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar, Navigation, Pagination]}
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
         {destinations.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-lg shadow-lg relative group bg-white">
              <div className="overflow-hidden relative rounded-t-lg h-64 ">
                <Image
                  src={item.img}
                  alt={item.title}
                  objectFit="cover"
                  layout="fill"
                  className="transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 mb-4">{item.location}</p>
                <p>Starting from Rupees {item.price}</p>
              </div>
            </div>
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
export default TrekSlider;