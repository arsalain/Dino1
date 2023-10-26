"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Scrollbar } from 'swiper/modules';
// SwiperCore.use([Navigation, Scrollbar]);
const destinations = [
  {
    title: "Kedar Kanta Trek",
    location: "Singtur Range, Uttarakhand",
    rating: 4.7,
    reviews: 3014,
    price: 18000,
    img: "/home/kedarnath.jpg",
    badge: "BREAKFAST INCLUDED",
  },
  {
    title: "Hamta Pass Trek",
    location: "Kullu valley , Himachal Pradesh",
    rating: 4.8,
    reviews: 2345,
    price: 19000,
    img: "/home/m10 (10).jpg",
  },
  {
    title: "Great Lakes Trek",
    location: " Sonamarg , Jammu and Kashmir",
    rating: 4.7,
    reviews: 3014,
    price: 20000,
    img: "/home/m10 (8).jpg",
    badge: "BEST SELLER",
  },
  {
    title: "Valley of Flowers Treks",
    location: "Uttarakhand",
    rating: 4.5,
    reviews: 5633,
    price: 18000,
    img: "/home/winnats-pass-5455265_1920.jpg",
    badge: "TOP RATED",
  },
  {
    title: "hoii of Flowers Treks",
    location: "Uttarakhand",
    rating: 4.5,
    reviews: 5633,
    price: 18000,
    img: "/home/winnats-pass-5455265_1920.jpg",
    badge: "TOP RATED",
  },
];
const TrekSlider = () => {
  return (
    <>
    {/* <div className="mx-10" > */}
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
            nextEl: '.swiper-but-next',
            prevEl: '.swiper-but-prev'
          }}
        // scrollbar={{ draggable: true }}
        // className="overflow-visible"
        scrollbar={{
          el: "#swiper-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar, Navigation]}
        // navigation={{
        //   nextEl: ".js-destination-next",
        //   prevEl: ".js-destination-prev",
        // }}
        breakpoints={{
          500: {
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
              <div className="absolute top-2 left-2 p-1 bg-blue-600 text-white text-sm rounded-full">
                {item.badge}
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image
                  width={300}
                  height={300}
                  src={item.img}
                  alt={item.title}
                  className="h-64 transform transition-transform duration-300 group-hover:scale-110 rounded-lg" // Kept rounded-lg here
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl mb-2">{item.title}</h4>
                <p className="text-gray-500 mb-4">{item.location}</p>
                <div className="flex items-center mb-4">
                  <span className="mr-2">{item.rating}</span>
                  <span className="text-yellow-500">★</span>
                  <span className="ml-2 text-sm text-gray-500">({item.reviews} reviews)</span>
                </div>
                <p>Starting from Rupees {item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between mt-4">
      <button className="swiper-but-prev flex items-center justify-center w-5 h-5  shadow-md rounded-full text-white ">  Previous
</button>
<button className="swiper-but-next flex items-center justify-center w-10 h-5  shadow-md rounded-full  text-white">  Next
</button>
      {/* <button className="swiper-button-prev bg-black text-black !important"></button>
<button className="swiper-button-next"></button> */}
<div className=" bg-black-200  " id="swiper-scrollbar"></div>
      </div>
      {/* </div> */}
    </>
  );
};
export default TrekSlider;