"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,Scrollbar,Pagination  } from 'swiper/modules';
// SwiperCore.use([Navigation, Scrollbar]);
const destinations = [
  {
    title: "Kedar Kanta Trek",
    location: "Singtur Range, Uttarakhand",
    rating: 4.7,
    reviews: 3014,
    price: 18000,
    img: "/home/kedar.jpg",
    badge: "BREAKFAST INCLUDED",
  },
  {
    title: "Hamta Pass Trek",
    location: "Kullu valley , Himachal Pradesh",
    rating: 4.8,
    reviews: 2345,
    price: 19000,
    img: "/home/hamta.jpg",
  },
  {
    title: "Great Lakes Trek",
    location: " Sonamarg , J & K",
    rating: 4.7,
    reviews: 3014,
    price: 20000,
    img: "/home/lake.jpg",
    badge: "BEST SELLER",
  },
  {
    title: "Valley of Flowers Treks",
    location: "Uttarakhand",
    rating: 4.5,
    reviews: 5633,
    price: 18000,
    img: "/home/valley.jpg",
    badge: "TOP RATED",
  },
  {
    title: "Roop Kund",
    location: "Uttarakhand",
    rating: 4.5,
    reviews: 5633,
    price: 18000,
    img: "/home/roop.jpg",
    badge: "TOP RATED",
  },
];
const TrekSlider = () => {
  return (
    <div className=" p-4 relative">
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
                  className="h-64 transform transition-transform duration-300 group-hover:scale-110 rounded-lg"
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
      <div className="flex justify-center mt-4 items-center">
    <button className="swiper-but-prev flex items-center justify-center w-5 h-5 shadow-md rounded-full text-black mr-1">&#8592;</button> {/* Unicode left arrow */}
    <div className="swiper-pagination"></div>
    <button className="swiper-but-next flex items-center justify-center w-5 h-5 shadow-md rounded-full text-black ml-1">&#8594;</button> {/* Unicode right arrow */}
</div>
    </div>
  );
};
export default TrekSlider;