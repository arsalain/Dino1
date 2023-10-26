import PopularDestinations from '@/Components/Home/Destinations/PopularDestinations'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import Hero from '@/Components/Home/Hero/Hero'
import Image from 'next/image'
import TestimonialSection from '@/Components/Home/Testimonials/Testimonials'
import Promo from '@/Components/Home/Promo/Promo'
import TrekSlider from '@/Components/Trekslider/Trekslide'

export default function Home() {
  return (
    <main className="flex flex-col bg-black">
      <div >
    <Header />
    <Hero />

     <section className="pt-16 pb-12" data-aos="fade-up">
  <div className="mx-auto md:px-10 px-4">
    <div className="flex flex-wrap items-end md:justify-center mb-5 space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex-none">
        <div className="text-left md:text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white">International Destinations</h2>
          <div className=" text-sm text-gray-600">
          Unveil the world's hidden gems and iconic landmarks.
          </div>
        </div>
      </div>
    </div>
    
    <div className=" md:pt-10 pt-3">
      <PopularDestinations />
    </div>
  </div>

</section> 
<div className='mx-10'>
  <TrekSlider />
</div>
<section data-aos="fade-up">
<div className='mx-auto'>
    <Promo />
  </div>

</section>

<TestimonialSection />
    {/* <Footer /> */}
      </div>
    </main>
  )
}
