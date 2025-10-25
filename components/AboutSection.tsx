import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='about' className="bg-white py-12 sm:py-16 md:py-20 lg:py-28 font-syne">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Headline & Description */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          
          {/* Headline */}
          <div className="w-full lg:w-1/2 mb-6 md:mb-8">
            <div className="wow animate__animated animate__fadeInLeft">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
                <div className="text-left">Where</div>
                <div className="text-left ml-8 sm:ml-12 md:ml-16 lg:ml-45"><span className="text-blue-600">Innovation</span></div>
                <div className="text-left">Meets Action</div>
              </h1>
            </div>
          </div>
          
          {/* Description */}
          <div className="w-full lg:w-1/2 lg:ml-auto mt-6 md:mt-8">
            <div className="wow animate__animated animate__fadeInRight">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-semibold text-left">
                ElevateX is an all-in-one mentoring session by IEEE JUSB. Be it research or industry, be it competitive coding, electronics or soft skill development, we have tracks tailor-made for your needs, complete with doubt-clearing, quick contests, real-world problems and webinars by field experts.
              </p>
            </div>
          </div>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 items-center wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
          
          {/* Image 1 (Left) */}
          <div className="sm:col-span-1 lg:col-span-2">
              <Image
                src="https://placeholder.pics/svg/400x500"
                alt="Business collaboration handshake"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-sm"
                //remove this when using actual images
                unoptimized={true} 
              />
          </div>
          
          {/* Image 2 (Center) */}
          <div className="sm:col-span-1 lg:col-span-2">
              <Image
                src="https://placeholder.pics/svg/400x300"
                alt="Individual focus with laptop"
                width={400}
                height={300}
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-sm"
                //remove this when using actual images
                unoptimized={true} 
              />
          </div>
          
          {/* Image 3 (Right) */}
          <div className="sm:col-span-2 lg:col-span-2">
              <Image
                src="https://placeholder.pics/svg/400x500"
                alt="Team strategy meeting"
                width={400}
                height={500}
                className="w-full h-auto object-cover rounded-2xl border border-gray-200 shadow-sm"
                //remove this when using actual images
                unoptimized={true} 
              />
          </div>
          
        </div>
      </div>
    </section>
  );
}

