// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import ReviewsCarousel from "@/components/ReviewsCarousel";
import DoctorProfileCarousel from "@/components/DoctorProfileCarousel";
import { services } from '@/data/services';
import AppointmentPopup from "@/components/AppointmentPopup";

export const metadata = {
  title: 'Dental Essential | Tooth Pain, Missing Teeth & Smile Makeover Treatment in Panvel',
  description: 'Facing tooth pain, jaw pain, missing teeth, or want a smile makeover? Dental Essential in Panvel offers painless root canal, dental implants, braces, aligners & more. Book your consultation today.',
  alternates: {
    canonical: 'https://www.dentalessential.co.in',
  },
};

const dentalProblems = [
  { problem: "Tooth Pain or Sensitivity", description: "Severe toothache, pain while eating hot or cold food, or throbbing pain that keeps you awake at night.", link: "/services/painless-root-canal", treatment: "Painless Root Canal" },
  { problem: "Missing Teeth or Gaps", description: "Lost a tooth due to injury or decay? Struggling with gaps that affect your confidence and chewing ability.", link: "/services/dental-implants", treatment: "Dental Implants" },
  { problem: "Crooked or Spaced Teeth", description: "Spacing in front teeth, overlapping teeth, or misalignment making you conscious about your smile.", link: "/services/braces", treatment: "Braces & Aligners" },
  { problem: "Jaw Pain or Swelling", description: "Pain in the right or left jaw, difficulty opening your mouth, or swelling at the back of your mouth.", link: "/services/wisdom-tooth-extraction", treatment: "Wisdom Tooth Extraction" },
  { problem: "Loose or Ill-Fitting Dentures", description: "Old dentures not fitting anymore? Cannot chew food properly or dentures keep slipping while talking.", link: "/services/dentures", treatment: "Custom Dentures" },
  { problem: "Want a Confident Smile", description: "Planning a smile makeover for your wedding, career, or just everyday confidence? We can help.", link: "/services/smile-designing", treatment: "Smile Designing" },
];

const homeFaqs = [
  { question: "Which is the best dental clinic in Panvel?", answer: "Dental Essential is one of the leading dental clinics in Panvel, offering advanced treatments including dental implants, smile designing, Invisalign, aligners, root canal treatment, and full mouth rehabilitation under the care of experienced dental specialists." },
  { question: "What dental treatments do you offer in Panvel?", answer: "We provide a comprehensive range of dental services, including dental implants, root canal treatment, teeth cleaning, tooth extraction, smile makeovers, veneers, crowns and bridges, Invisalign, aligners, dentures, and pediatric dentistry." },
  { question: "Do you offer dental implants in Panvel?", answer: "Yes, we provide high-quality dental implant treatment to replace missing teeth. Dental implants are a long-lasting and natural-looking solution that restores both function and aesthetics." },
  { question: "How much do dental implants cost in Panvel?", answer: "The cost of dental implants varies depending on the number of implants required, the complexity of the case, and any additional procedures needed. We recommend scheduling a consultation for a personalized treatment plan and cost estimate." },
  { question: "Do you provide Invisalign and clear aligners?", answer: "Yes, we offer Invisalign and other clear aligner solutions to help patients achieve straighter teeth without traditional metal braces. A consultation can determine your suitability for aligner treatment." },
  { question: "Is root canal treatment painful?", answer: "Modern root canal treatment is performed under local anesthesia and is generally comfortable. Most patients experience minimal discomfort during the procedure and significant relief from tooth pain afterward." },
  { question: "How often should I visit a dentist?", answer: "Most patients should visit a dentist every six months for routine checkups and professional cleaning. Regular visits help detect dental issues early and maintain optimal oral health." },
  { question: "Do you offer emergency dental treatment in Panvel?", answer: "Yes, we provide emergency dental care for severe toothaches, broken teeth, dental infections, knocked-out teeth, and other urgent dental concerns. Contact us immediately for prompt assistance." },
  { question: "What is smile designing?", answer: "Smile designing is a cosmetic dental procedure that enhances the appearance of your smile through treatments such as veneers, teeth whitening, aligners, and gum contouring. The treatment plan is customized to your facial features and goals." },
  { question: "Do you treat children?", answer: "Yes, we provide pediatric dental care, including routine checkups, cavity treatment, preventive care, fluoride application, and oral health education for children." },
  { question: "What is full mouth rehabilitation?", answer: "Full mouth rehabilitation involves restoring the function, health, and appearance of all teeth using a combination of treatments such as crowns, bridges, implants, veneers, and restorative procedures." },
  { question: "Do you offer teeth whitening treatment?", answer: "Yes, we provide professional teeth whitening treatments that can safely and effectively brighten your smile and remove stains caused by food, beverages, smoking, and aging." },
  { question: "How can I book an appointment at your dental clinic in Panvel?", answer: "You can book an appointment by calling our clinic, sending a WhatsApp message, or filling out the appointment form on our website." },
  { question: "Why should I choose Dental Essential in Panvel?", answer: "Dental Essential combines advanced technology, experienced specialists, personalized treatment plans, and patient-focused care to deliver high-quality dental solutions for individuals and families." },
  { question: "Do you provide free consultations for Invisalign and aligners?", answer: "Yes, we offer consultation appointments for patients interested in Invisalign and clear aligner treatments. During the consultation, our specialists will assess your teeth and discuss suitable treatment options." },
  { question: "What are the signs that I may need a dental checkup?", answer: "Common signs include tooth pain, bleeding gums, sensitivity to hot or cold foods, bad breath, loose teeth, swollen gums, or visible cavities. Early diagnosis can prevent more serious dental problems." },
  { question: "Is dental treatment covered by insurance?", answer: "Many dental insurance plans cover preventive and restorative treatments. Our team can assist you in understanding your coverage and available payment options." },
  { question: "How long does a dental implant procedure take?", answer: "The treatment timeline depends on individual cases. While implant placement can often be completed in a single visit, the full healing and restoration process may take several months for optimal results." },
  { question: "Are cosmetic dental treatments safe?", answer: "Yes, cosmetic treatments such as veneers, teeth whitening, and smile designing are safe when performed by qualified dental professionals using approved materials and techniques." },
  { question: "Do you accept patients from New Panvel, Kamothe, Kalamboli, and Kharghar?", answer: "Yes, patients regularly visit our clinic from Panvel, New Panvel, Kamothe, Kalamboli, Kharghar, Taloja, and nearby areas for specialized dental care and advanced treatments." },
];

export default function HomePage() {
  const featuredServices = [services[0], services[1], services[3], services[2], services[4]];

  return (
    <>
    <AppointmentPopup />

    <main>
     {/* HERO SECTION */}
      <section className="bg-white overflow-hidden">
        <div className="w-full h-80 sm:h-105 md:h-130 lg:h-150" aria-hidden="true">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src="/videos/home%20video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-6 md:py-8">
          <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
            <span className="inline-block bg-sky-100 text-sky-600 px-4 py-1.5 rounded-full text-base md:text-lg lg:text-xl font-semibold">
                 Top-Rated Dental Clinic in Panvel, Navi Mumbai
             </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-pink-500">Consult the Best Dentist in Panvel</span>
            </h1>

            <p className="mt-6 text-gray-800 max-w-xl">
              Whether you&apos;re dealing with a toothache, jaw pain, spacing in teeth, or want a complete smile makeover —{' '}
              <span className="font-semibold">
                <span className="text-pink-500">Dental</span>{' '}
                <span className="text-sky-500">Essential</span>
              </span>{' '}
              provides gentle, advanced dental treatments in Panvel for the whole family.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Link
                href="/contact"
                className="inline-block bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-3 rounded-md shadow-lg"
                id="hero-book-appointment"
              >
                Book Consultation
              </Link>

              <div className="bg-white shadow rounded-lg px-4 sm:px-6 py-3 inline-flex items-center gap-2 sm:gap-3 border border-gray-200 max-w-full">
                <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4V2H8v2H4v3a4 4 0 004 4h.09A6.002 6.002 0 0011 15.91V18H8v2h8v-2h-3v-2.09A6.002 6.002 0 0015.91 11H16a4 4 0 004-4V4h-4z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium">
                  Famdent Award Winner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ARE WE SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-sky-100 rounded-md hidden md:block" />
            <div className="relative rounded-3xl overflow-hidden border-4 border-sky-100 shadow-lg">
              <Image
                src="/images/home/receptionteam.jpeg"
                alt="Dental Essential reception team in Panvel clinic"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sky-600 text-xl md:text-2xl font-semibold mb-2">Who are we?</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              <span className="text-pink-500">Advanced Dental Clinic</span>{' '}
              <span className="text-sky-500">You Can Trust in Panvel</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
             At{' '}
             <span className="font-semibold">
               <span className="text-pink-500">Dental</span>{' '}
               <span className="text-sky-500">Essential</span>
             </span>{' '}
             Clinic, we provide high-quality, patient-focused dental care in a comfortable and friendly environment. Led by Dr. Sameer Gharat, our team combines advanced technology with a compassionate approach to
             deliver personalized treatments — from relieving severe tooth pain to crafting the smile of your dreams. Whether it&apos;s missing teeth, jaw pain, or a child&apos;s first dental visit, we treat every concern with precision, hygiene, and genuine
             care.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FACING DENTAL PROBLEMS SECTION */}
      <section className="py-16 bg-sky-50" id="dental-problems">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-sky-600 text-2xl md:text-3xl font-bold mb-2">Facing Dental Problems?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Tell Us Your Problem We&apos;ll Find the Right Treatment
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Most patients don&apos;t know which treatment they need. That&apos;s okay! Just tell us what you&apos;re experiencing, and our expert team will guide you to the right solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dentalProblems.map((item) => (
              <Link
                key={item.problem}
                href={item.link}
                className="bg-white rounded-2xl border border-sky-100 shadow-sm hover:shadow-md hover:border-sky-300 transition-all p-6 group"
                id={`problem-${item.problem.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <h3 className="text-gray-800 font-semibold text-lg mb-2 group-hover:text-sky-600 transition-colors">{item.problem}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                <span className="text-sky-600 text-sm font-medium inline-flex items-center gap-1">
                  Recommended: {item.treatment}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <DoctorProfileCarousel />

      {/* HOME TREATMENTS SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
              <p className="text-sky-600 text-2xl md:text-3xl font-bold mb-2">Treatments</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Advanced Dental Solutions for Every Problem
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From painless root canal for severe toothache to dental implants for missing teeth — explore our expert treatments designed to restore your oral health and confidence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition p-4 text-center"
              >
                <div className="relative bg-sky-50 rounded-xl mb-4 h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} treatment at Dental Essential Panvel`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-gray-800 font-semibold text-sm mb-2 line-clamp-2">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{service.shortDescription}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition"
            >
              View All Treatments
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white" id="home-faq">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="text-pink-500">Common Questions</span>{' '}
              <span className="text-sky-500">From Our Patients</span>
            </h2>
            <p className="text-gray-600">Quick answers to help you make the right decision about your dental care.</p>
          </div>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-xl border border-sky-100 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-800 hover:text-sky-600 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-sky-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <ReviewsCarousel />

      {/* AREAS WE SERVE SECTION */}
      <section className="py-16 bg-gray-50" id="areas-we-serve">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div>
              <p className="text-pink-500 text-sm font-bold uppercase tracking-widest mb-3">
                Panvel &amp; Beyond
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Areas We Proudly Serve
              </h2>
              <p className="text-gray-500 mb-8 max-w-lg">
                We welcome patients looking for high-quality, trusted dental care from across Panvel and these surrounding communities:
              </p>

              {/* Area Tags Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {[
                  "New Panvel", "Old Panvel", "Kharghar",
                  "Kamothe", "Kalamboli", "Taloja",
                  "Ulwe", "Khandeshwar", "Panvel City",
                  "Navi Mumbai",
                ].map((area) => (
                  <div
                    key={area}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:border-sky-400 hover:text-sky-600 hover:shadow-sm transition-all text-center"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-xs leading-relaxed max-w-md">
                Are you searching for a <strong>dentist near me</strong>, <strong>dental clinic near me</strong>, or <strong>best dentist in Navi Mumbai</strong>? Patients choose Dental Essential for expert care, a gentle approach, and advanced dental solutions.
              </p>
            </div>

            {/* Right: Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80 lg:h-[420px]">
              <iframe
                src="https://www.google.com/maps?q=Dental%20Essential%20Advanced%20Dental%20Clinic&ll=18.980009,73.1144911&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Essential Clinic Location - Panvel, Navi Mumbai"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
     </>
  );
}