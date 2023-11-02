import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Scrollbar,Pagination  } from 'swiper/modules';
import Image from 'next/image';

const Destination = ({dest}) => {
  return (
    <>
       {/* <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: function (index, className) {
              return '<span class="' + className + ' bg-black"></span>';
            },
        }}
        modules={[Scrollbar, Pagination]}
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
      > */}
    {dest.map((destination) => (
        //   <SwiperSlide key={destination.id}>
            <div className="relative w-[300px] rounded-lg md:h-[300px] h-[400px]">
              <Image
                src={destination.image}
                alt={destination.alt}
                layout="fill"
                objectFit="cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-50"></div>
              {/* Text at top left */}
              <div className="absolute md:top-5 md:left-5 md:text-xl text-lg top-2 left-2 text-white">
                {destination.name}
                <hr className="border-t-2 border-white md:w-[20px] w-[20px]" />
              </div>
            </div>
        //   </SwiperSlide>
        ))}
   {/* </Swiper> */}
    </>
  )
}

export default Destination
