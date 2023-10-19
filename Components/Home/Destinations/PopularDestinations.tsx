'use client'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Scrollbar } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { destinations2 } from "./data"; // Make sure the path is correct
// import SwiperCore, { Navigation, Scrollbar } from 'swiper';
// TypeScript type definitions

// SwiperCore.use([Navigation, Scrollbar]);
const PopularDestinations = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
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
            slidesPerView: 2,
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
        {destinations2.map((item) => (
          <SwiperSlide key={item.id}>
   <div className="block rounded-lg shadow-lg overflow-hidden relative group hover:bg-opacity-100 transition-all ease-out duration-300">
    <div className="aspect-w-3 aspect-h-4 absolute">
        <Image
            width={300}
            height={300}
            src={item.img}
            alt={item.city}
            className="transition-transform ease-out duration-600 transform hover:scale-110"
        />
    </div>

    <div className="flex flex-col justify-between text-center p-7 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
        <div className="text-white text-base mb-40 transition-opacity ease-out duration-500">{item.hoverText}</div>
        <div className="transition-transform ease-out duration-500 transform group-hover:translate-y-0">
            <h4 className="text-2xl md:text-xl leading-snug text-white mb-4">
                {item.city}
            </h4>
            <Link href="#">
                <button className="w-full py-3 bg-white text-black rounded-md">
                    Discover
                </button>
            </Link>
        </div>
    </div>

    {/* Hover Effects */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-all ease-out duration-300"></div>
</div>


               {/* <div className="block rounded-lg shadow-lg overflow-hidden relative group hover:bg-opacity-100">
    <div className="aspect-w-3 aspect-h-4 absolute">
        <Image
            width={300}
            height={300}
            src={item.img}
            alt={item.city}
        />
    </div>

    <div className="flex flex-col justify-between text-center p-7 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-2000">
        <div className="text-white text-base mb-40">{item.hoverText}</div>
        <div>
            <h4 className="text-2xl md:text-xl leading-snug text-white mb-4">
                {item.city}
            </h4>
            <Link href="#">
                <button className="w-full py-3 bg-white text-black rounded-md">
                    Discover
                </button>
            </Link>
        </div>
    </div>
</div> */}

          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between mt-4">
      <button className="swiper-button-prev flex items-center justify-center w-5 h-5  shadow-md rounded-full ">
</button>
<button className="swiper-button-next flex items-center justify-center w-10 h-5  shadow-md rounded-full ">
</button>
      {/* <button className="swiper-button-prev bg-black text-black !important"></button>
<button className="swiper-button-next"></button> */}
<div className=" bg-black-200  " id="swiper-scrollbar"></div>

      </div>
    </>
  );
};

export default PopularDestinations;