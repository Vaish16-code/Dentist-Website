'use client';

import { useState } from 'react';

const reviews = [
  {
    name: "Sakshi Kolse",
    initial: "S",
    date: "Google Review",
    review: "It was a great experience with Dr. Gharat. The treatment was extremely smooth, painless, and well-managed. There was almost no waiting time, and the staff was very supportive throughout. I previously had a trauma related to a root canal treatment, but this time the entire procedure was completely pain-free. The clinic is very hygienic as well."
  },
  {
    name: "Ved G",
    initial: "V",
    date: "Google Review",
    review: "The dentists were very professional. I had a very professional experience at this dental clinic. The dentists explained every procedure clearly and the staff was also very cooperative and welcoming."
  },
  {
    name: "Dev Wable",
    initial: "D",
    date: "Google Review",
    review: "I can't say enough good things about Dr. Sameer Gharat! I came in with 7 deep cavities and was honestly pretty nervous, but he made the entire process feel effortless. He was incredibly caring, patient, and made sure I felt comfortable every step of the way. Each visit was smooth, and he took the time to explain everything clearly without ever rushing."
  },
  {
    name: "Sfurti Sinha",
    initial: "S",
    date: "Google Review",
    review: "Superb experience. I have been receiving treatment from Dr. Sameer since last one year. My entire dental situation was explained beautifully before the treatment started. The entire process went smoothly. Utmost care was taken by everyone including Shruti, Dr. Nikita, and of course Dr. Sameer. Highly recommended."
  },
  {
    name: "Pratiksha Kharat",
    initial: "P",
    date: "Google Review",
    review: "It was a good experience. The doctors and staff are so polite and co-operative. They make sure you are comfortable during the whole treatment. Staff member Shruti is very friendly and sweet. I would definitely recommend this clinic."
  },
  {
    name: "Jyotsna Kamble",
    initial: "J",
    date: "Google Review",
    review: "Coming to Dental Essential was very good. It was a different experience compared to other clinics. Dental equipment is advanced. Dr. Sameer has good experience, provides painless treatment, and the staff treated me very well."
  },
];

// Initials → colour mapping (navy palette tones)
const avatarColors: Record<string, string> = {
  S: '#1565A8',
  V: '#1D96D3',
  D: '#1558A0',
  P: '#1D96D3',
  J: '#1565A8',
};

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 2;
  const maxIndex = Math.ceil(reviews.length / cardsToShow) - 1;

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const visibleReviews = reviews.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  return (
    <section className="py-20 bg-[#F0F8FF]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <span className="section-label">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] mt-1">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {visibleReviews.map((review, index) => (
            <div
              key={currentIndex * cardsToShow + index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E0F0FF] hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                    style={{ background: avatarColors[review.initial] || '#1565A8' }}
                  >
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1565A8] text-sm">{review.name}</h4>
                    <p className="text-[#8096A7] text-xs">{review.date}</p>
                    <div className="text-yellow-400 text-sm mt-0.5 tracking-tight">★★★★★</div>
                  </div>
                </div>
                {/* Google G */}
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Review text */}
              <p className="text-[#4A5E72] text-sm leading-relaxed line-clamp-5">
                &ldquo;{review.review}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Navigation + dots */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i ? 'w-6 bg-[#1565A8]' : 'w-2 bg-[#A8D4F0]'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-xl border-2 border-[#E0F0FF] bg-white flex items-center justify-center hover:border-[#1565A8] hover:bg-[#1565A8] hover:text-white text-[#1565A8] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-xl bg-[#1565A8] text-white flex items-center justify-center hover:bg-[#1D96D3] transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Review CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?sca_esv=f23db4616a8d669b&sxsrf=ANbL-n74QN63lqasZ0MoC8IKYrODsTsifg:1774629149458&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUujFBQv4aAzu6oj4HZtLN4UEynhFhNjJUoddLZ41jzVHeGZFPUz4icYLelbAD9mFNWRENDWYVMi1cbKpM8XtMJSIIhqscnCmVHzEYAdzTdzJmR-NaDAckuMBk7ja26jNQNAXlg%3D&q=Dental+Essential+Advanced+Dental+Clinic+Reviews&sa=X&ved=2ahUKEwjJ0L7gwMCTAxVqQvEDHdNwHKUQ0bkNegQILBAF&biw=1280&bih=551&dpr=1.5#lrd=0x3be7e81616f46375:0x6dd5b8bc34a46c9c,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#1565A8] hover:bg-[#1D96D3] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Review us on</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
