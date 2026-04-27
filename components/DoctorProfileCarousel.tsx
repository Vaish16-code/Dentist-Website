"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function DoctorProfileCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/doctor.jpeg",
      alt: "Dr. Sameer R. Gharat",
      type: "doctor"
    },
    {
      image: "/images/awards/famdent.jpeg",
      alt: "Famdent Excellence Award 2023",
      type: "award"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-pink-500 text-xl md:text-2xl font-semibold tracking-wider uppercase">
            Doctor Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Meet Our Dentist In Panvel
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">

            {/* Image Carousel */}
              <div className="relative h-[360px] sm:h-[500px] md:h-[650px] bg-gradient-to-br from-amber-50 to-white">              
              {/* Decorative dots */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block z-10">
                <div className="grid grid-cols-6 gap-2 p-4">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-sky-300"></div>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div className="relative h-full w-full p-2 sm:p-3">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-4 sm:inset-8 transition-opacity duration-500 ${
                      currentSlide === index
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className={`rounded-2xl w-full h-full ${
                        slide.type === 'doctor'
                          ? 'object-cover object-top'
                          : 'object-contain'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? 'bg-sky-500 w-6'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Doctor Info */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Dr. Sameer R. Gharat
              </h3>

              <p className="text-gray-600 mb-4">
                Founder and chief at Dental Eseential advanced dental clinic
              </p>

              <div className="mb-6">
                <p className="font-bold text-gray-800">16+ Years Experience</p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Sameer Gharat is a founder and chief at Dental Eseential advanced 
                dental clinic. He has a proven track record of bringing the best 
                outcomes for his patients. With an incredible experience of 16+ years, 
                Dr. Sameer has become a well-known dentist for providing the safest and 
                the most appropriate dental solutions for his patients.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                Dr. Sameer completed his BDS from the prestigeous D Y Patil School of 
                Dentistry in 2010. Later he did Clinical Assistant programme at 
                Government Dental College and hospital Mumbai and has been active 
                since in the field of dentistry.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                He has completed his Masters in dental Surgery in the field of 
                Prosthetic dentistry and Oral Implantology from the D.Y. Patil School 
                of dentistry in 2014. Dr sameer has extensive experience in Implant 
                Dentistry, Complex Full mouth Rehabilitation Procedures and Cosmetic 
                Dentistry. He is a certified Laser dentist as well as Invisalign 
                provider.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                Dr. Sameer works with a strong belief in creating smiles that enhance 
                the overall life quality of his patients.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t pt-8">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gray-800">5000+</p>
                  <p className="text-gray-500 text-sm">Patients Treated</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gray-800">MDS</p>
                  <p className="text-gray-500 text-sm">Qualification</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-gray-800">16+</p>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 pb-8">
            <button
              onClick={prevSlide}
              type="button"
              className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-800 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              type="button"
              className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}