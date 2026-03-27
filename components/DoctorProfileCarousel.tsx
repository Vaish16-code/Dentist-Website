"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function DoctorProfileCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/doctor.jpeg",
      alt: "Dr. Sameer Ramchandra Gharat",
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
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="section-label">Doctor Profile</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] mt-1">
            Meet Our Dentist In Panvel
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-[#E0F0FF] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Carousel Side */}
            <div className="relative h-[450px] md:h-[500px] bg-gradient-to-br from-[#F0F8FF] to-white">
              {/* Decorative dots */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block z-10 opacity-50">
                <div className="grid grid-cols-6 gap-2 p-4">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-[#1D96D3]" />
                  ))}
                </div>
              </div>

              {/* Slides */}
              <div className="relative h-full w-full p-8">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-8 transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className={`rounded-2xl ${slide.type === 'doctor' ? 'object-cover object-top' : 'object-contain'}`}
                    />
                  </div>
                ))}
              </div>

              {/* Dot indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#1D96D3] w-6' : 'bg-[#A8D4F0] w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Doctor Info Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1565A8] mb-1">
                Dr. Sameer Ramchandra Gharat
              </h3>
              <p className="text-[#1D96D3] font-semibold mb-1 text-sm">
                Masters Degree In Prosthodontics &amp; Implantology
              </p>
              <div className="flex items-center gap-2 mb-5">
                <span className="inline-block bg-[#E0F0FF] text-[#1565A8] text-xs font-semibold px-3 py-1 rounded-full">Chief Dentist</span>
                <span className="inline-block bg-[#E0F0FF] text-[#1565A8] text-xs font-semibold px-3 py-1 rounded-full">16+ Years</span>
              </div>

              <p className="text-[#4A5E72] leading-relaxed mb-8 text-sm">
                Dr. Sameer Gharat is one of the best dentists in Panvel. He has completed his graduation from one of India&apos;s premier institutions and holds a Master&apos;s Degree in Prosthodontics &amp; Implantology. He specialises in dental implants, crowns, bridges, and complete smile makeovers.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#E0F0FF] pt-7">
                {[
                  { num: '5000+', label: 'Patients Treated' },
                  { num: '1', label: 'Excellence Award' },
                  { num: '16+', label: 'Years Experience' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-extrabold text-[#1565A8]">{s.num}</p>
                    <p className="text-[#8096A7] text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-3 pb-7 pt-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-[#E0F0FF] bg-white flex items-center justify-center hover:border-[#1565A8] hover:bg-[#1565A8] hover:text-white text-[#1565A8] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#1565A8] text-white flex items-center justify-center hover:bg-[#1D96D3] transition-all duration-200"
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
