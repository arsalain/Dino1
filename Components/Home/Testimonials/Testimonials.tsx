'use client'
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
// import 'font-awesome/css/font-awesome.min.css'; 

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

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollTimer = null;

    const scrollTestimonials = () => {
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
        scrollContainer.scrollTop += 2;  // Slower scroll
      }
    };

    scrollTimer = setInterval(scrollTestimonials, 50);  // Slower interval

    return () => {
      clearInterval(scrollTimer);
    };
  }, [controls]);

  const cardVariants = {
      hover: {
        y: -10,
        boxShadow: "0px 10px 20px 4px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      },
      tap: { scale: 0.95 },
    };


  return (
      <section className="text-white bg-black p-8 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4 text-center">What Our Customers Say</h2>
        <div ref={containerRef} className="flex flex-wrap justify-center overflow-hidden rounded-lg shadow-lg h-[400px] bg-white" >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card relative bg-black rounded-lg shadow-lg p-4 m-2 flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto"
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cover rounded-full" style={{ backgroundImage: "url('https://i.picsum.photos/id/237/200/300.jpg')" }}></div>
                <h3 className="text-xl font-semibold ml-4">{testimonial.name}</h3>
              </div>
              <p className="text-base mb-4">{testimonial.content}</p>
              <div className="text-yellow-400 flex">
                {Array.from({ length: testimonial.rating } , (_, index)=> <FontAwesomeIcon icon={faStar} key={index}  />)}
              </div>
              <div className="mt-4">
                <img src="/Users/apple/backpackers-united/public/g-reviews.jpg" alt="Google Review" className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  );
}
export default TestimonialSection