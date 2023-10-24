import PopularDestinations from '@/Components/Home/Destinations/PopularDestinations'
import Footer from '@/Components/Navbar/Footer/Footer'
import Header from '@/Components/Navbar/Header/Header'
import Hero from '@/Components/Home/Hero/Hero'
import Image from 'next/image'
import TestimonialSection from '@/Components/Home/Testimonials/Testimonials'

export default function Home() {
  return (
    <main className="flex flex-col ">
      <div >
    <Header />
    <Hero />

    <section className="pt-16 pb-12" data-aos="fade-up">
  <div className="container mx-auto">
    <div className="flex flex-wrap items-end mb-5 space-y-5 md:space-y-0 md:space-x-5">
      <div className="flex-none">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Popular Destinations</h2>
          <p className="mt-5 sm:mt-0 text-gray-600">
            These popular destinations have a lot to offer
          </p>
        </div>
      </div>
      {/* End flex-none */}
      
      <div className="flex-none md:hidden">
        <a href="/destinations" className="inline-flex items-center px-4 py-2 bg-yellow-200 text-white-600 hover:bg-yellow-300 hover:text-white-700">
          View All Destinations
        </a>
      </div>
      {/* End flex-none */}
    </div>
    {/* End flex */}
    
    <div className="relative pt-10 sm:pt-5">
      <PopularDestinations />
    </div>
  </div>
  {/* End container */}
</section>
<TestimonialSection />
    {/* <Footer /> */}
      </div>
    </main>
  )
}
