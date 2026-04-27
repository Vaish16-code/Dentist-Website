'use client';

import { useEffect, useState } from 'react';

const reviews = [
  {
    name: "manali karande",
    initial: "M",
    date: "Google Review",
    review: "As a self aware difficult patient, it's very hard for me to trust and be calm during treatments. But my whole treatment with Dr Sameer has been so tension free and comfortable, I needed A LOT of things fixed from cavities to aesthetic and my decision to get everything done from Dr Sameer was absolutely correct! He understood what exactly I needed and has done such a fantastic job on my teeth and my families teeth as well. He gave me the confidence to smile on cameras :) Now if I ask anyone to guess which of my front teeth are fake, people ALWAYS choose the real one! being an EXTREMELY anxious person when it comes to health, it was a 1000/100 experience, even during Covid. He even educated us on how a healthy dental care routine should be, we have been following that and my pearly whites are still flawless! Here I am after almost 8 months since my very long treatment got done, waiting for my routine checkup (which we never bothered to do before), happily waiting for the doc :) You can put your faith on Dr Sameer & team"
  },
  {
    name: "Dev Wable",
    initial: "D",
    date: "Google Review",
    review: "I can't say enough good things about Dr. Sameer Gharat! I came in with 7 deep cavities and was honestly pretty nervous, but he made the entire process feel effortless. He was incredibly caring, patient, and made sure I felt comfortable every step of the way. Each visit was smooth, and he took the time to explain everything clearly without ever rushing. You can tell he truly cares about his patients and takes pride in his work. I'm so grateful to have found such a skilled and compassionate dentist - highly recommend!"
  },
  {
    name: "Indira N Menon Narayana kutty Menon",
    initial: "I",
    date: "Google Review",
    review: "I came to see Dr Sameer Gharat for removal of my teeth in the front jaw. He advised me not to remove the natural teeth and he did root canal and saved my teeth. So I was able to put partial denture on the existing teeth. The entire procedure was painless. I appreciate the Doctor for his prompt and sincere treatment. I recommend everyone to consult Sameer Gharat for dental problems and wish him all success in future."
  },
  {
    name: "Pooja Singh",
    initial: "P",
    date: "Google Review",
    review: "It was a great experience being treated by Dr. Sameer Sir. He follows a modern approach and explains every aspect of the treatment with great patience, which made me feel comfortable and well-informed throughout the process. The treatment was smooth and well-managed. The clinic is equipped with the latest technology and maintains a high standard of hygiene. The entire team is courteous, friendly, and supportive. Overall, it was an excellent experience, and I would highly recommend their services. 👍☺️"
  },
  {
    name: "sfurti sinha",
    initial: "H",
    date: "Google Review",
    review: "Superb experience. I have been receiving the treatment from Dr. Sameer since last one year. My entire dental situation was explained beautifully before the treatment started. The entire process went smoothly. Utmost care was taken by everyone including Shruti, Dr. Nikita and of course Dr. Sameer that i receive the best of the deals. Care with personal touch. Highly recommended."
  },
  {
    name: "kirti shah",
    initial: "K",
    date: "Google Review",
    review: "We live in USA. I came to Panvel and I heard about this clinic. My wife had dental implants. Dr. Sameer is very professional and perfectionist. We are very satisfied with his treatment. He did very good job. I will highly recommend him for any dental treatment. We are fortunate to have him as a dentist."
  },
];

export default function ReviewsCarousel() {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, Math.ceil(reviews.length / cardsToShow) - 1);

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth >= 768 ? 2 : 1);
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

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
    <section className="py-16 bg-[#F0F8FF]">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-sky-500 text-2xl md:text-3xl font-bold mb-2">
          Success Stories
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-10">
          Happy Patient Saying....
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {visibleReviews.map((review, index) => (
            <div
              key={currentIndex * cardsToShow + index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Header with avatar, name, and Google logo */}
              <div className="flex items-start justify-between mb-1">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold text-xl">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-base">{review.name}</h4>
                    <p className="text-sm text-slate-400">{review.date}</p>
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
              <p className="text-slate-600 text-sm leading-relaxed mt-4">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-3">
          <button
            onClick={prevSlide}
            type="button"
            className="w-12 h-12 rounded-lg border-2 border-sky-200 flex items-center justify-center hover:border-sky-500 hover:bg-sky-50 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            type="button"
            className="w-12 h-12 rounded-lg border-2 border-sky-500 bg-sky-50 flex items-center justify-center hover:bg-sky-100 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
