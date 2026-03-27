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
    review: "I can’t say enough good things about Dr. Sameer Gharat! I came in with 7 deep cavities and was honestly pretty nervous, but he made the entire process feel effortless. He was incredibly caring, patient, and made sure I felt comfortable every step of the way. Each visit was smooth, and he took the time to explain everything clearly without ever rushing. You can tell he truly cares about his patients and takes pride in his work. I’m so grateful to have found such a skilled and compassionate dentist — highly recommend!" 
  },
  { 
    name: "Sfurti Sinha", 
    initial: "S", 
    date: "Google Review", 
    review: "Superb experience. I have been receiving treatment from Dr. Sameer since last one year. My entire dental situation was explained beautifully before the treatment started. The entire process went smoothly. Utmost care was taken by everyone including Shruti, Dr. Nikita, and of course Dr. Sameer so that I received the best care. Care with personal touch. Highly recommended." 
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

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 2;
  const maxIndex = Math.ceil(reviews.length / cardsToShow) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const visibleReviews = reviews.slice(
    currentIndex * cardsToShow,
    currentIndex * cardsToShow + cardsToShow
  );

  return (
    <section className="py-16 bg-amber-50/50">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sky-600 text-2xl md:text-3xl font-bold mb-2">
          Success Stories
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Happy Patient Saying....
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {visibleReviews.map((review, index) => (
            <div
              key={currentIndex * cardsToShow + index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              {/* Header with avatar, name, and Google logo */}
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-700 text-base">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                    <div className="text-yellow-500 text-sm mt-0.5">★★★★★</div>
                  </div>
                </div>
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-amber-500 hover:bg-amber-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-lg border-2 border-amber-500 bg-white flex items-center justify-center hover:bg-amber-50 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Review us button */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?sca_esv=e2250487dc351849&rlz=1C1CHBD_enIN1197IN1197&sxsrf=ANbL-n59mFYhM4vLAQ8ylRRyYq5r_SWDcA:1774273891388&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUujFBQv4aAzu6oj4HZtLN4UEynhFhNjJUoddLZ41jzVHeGZFPUz4icYLelbAD9mFNWRENDWYVMi1cbKpM8XtMJSIIhqscnCmVHzEYAdzTdzJmR-NaDAckuMBk7ja26jNQNAXlg%3D&q=Dental+Essential+Advanced+Dental+Clinic+Reviews&sa=X&ved=2ahUKEwi_656olbaTAxVEmq8BHVRxAMwQ0bkNegQIKRAF&biw=1280&bih=551&dpr=1.5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium transition shadow-md"
          >
            <span>Review us on</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
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
