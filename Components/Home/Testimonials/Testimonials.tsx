'use client'
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'Jane Doe',
        content: 'A wonderful experience from start to finish.',
        rating: 4,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.This was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommend',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'Jane Doe',
        content: 'A wonderful experience from start to finish.',
        rating: 4,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.This was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommendThis was a fantastic trip! Highly recommend',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },
      {
        name: 'John Doe',
        content: 'This was a fantastic trip! Highly recommend.',
        rating: 5,
      },

];

const TestimonialSection = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [pauseScroll, setPauseScroll] = useState(false);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    const scrollTestimonials = () => {
      if (pauseScroll) return;

      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
        controls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        }).then(() => {
          scrollContainer.scrollTop = 0;
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          });
        });
      } else {
        scrollContainer.scrollTop += 2;
      }
    };

    const scrollTimer = setInterval(scrollTestimonials, 50);

    return () => {
      clearInterval(scrollTimer);
    };
  }, [controls, pauseScroll]);

  return (
  <div>
    <motion.section 
      initial={{ backgroundColor: 'white' }}
      animate={{ backgroundColor: 'black' }}
      transition={{ duration: 1 }}
      className="text-white md:p-16 px-8 py-10 flex flex-col items-center relative"
    >
      <div className='absolute md:top-10 md:left-10 top-3 left-3 text-xl md:text-4xl text-yellow-500'><FontAwesomeIcon icon={faQuoteLeft} /></div>
      <div className='absolute md:bottom-8 md:right-10 bottom-3 right-3 text-xl md:text-4xl text-yellow-500'><FontAwesomeIcon icon={faQuoteRight} /></div>
      <motion.h2 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl font-semibold mb-4 text-center"
      >
        What Our Customers Say
      </motion.h2>
      <div 
        ref={containerRef} 
        className="relative flex flex-wrap justify-center overflow-hidden rounded-lg shadow-lg md:h-[600px] h-[400px] bg-black"
        style={{ overflowY: 'scroll' }}
        onMouseEnter={() => setPauseScroll(true)}
        onMouseLeave={() => setPauseScroll(false)}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-4 m-2 flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto text-black"  // Changed to white background and black text
            initial={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-cover rounded-full" style={{ backgroundImage: "url('https://i.picsum.photos/id/237/200/300.jpg')" }}></div>
              <h3 className="text-xl font-semibold ml-4">{testimonial.name}</h3>
            </div>
            <p className="text-base mb-4">{testimonial.content}</p>
            <div className="text-yellow-400 flex">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <FontAwesomeIcon icon={faStar} key={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </motion.section>
          <div className="flex md:justify-between md:mb-12 text-yellow-500 mx-4 md:mx-40 gap-4 my-5">
          <div className="text-center">
              <h3 className="text-sm md:text-3xl mb-2">4.7</h3>
              <p className='text-sm md:text-base'>Google Rating</p>
          </div>
          <div className="text-center">
              <h3 className="text-sm md:text-3xl mb-2">100,000+</h3>
              <p className='text-sm md:text-base'>Delighted Traveler</p>
          </div>
          <div className="text-center">
              <h3 className="text-sm md:text-3xl mb-2">100+</h3>
              <p className='text-sm md:text-base'>Adventure Locations</p>
          </div>
          <div className="text-center">
              <h3 className="text-sm md:text-3xl mb-2">574,974</h3>
              <p className='text-sm md:text-base'>Our Volunteers</p>
          </div>
      </div>
      </div>
  );
};

export default TestimonialSection;