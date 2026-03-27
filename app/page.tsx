// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import ReviewsCarousel from "@/components/ReviewsCarousel";
import DoctorProfileCarousel from "@/components/DoctorProfileCarousel";
import { services } from '@/data/services';

export default function HomePage() {
  const featuredServices = services.slice(0, 5);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-white py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-14 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-medium">
              Top Notch Dental Services in Panvel
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-pink-500">A smile is your best</span>{' '}
              <span className="text-sky-500">
                accessory—let’s make it shine!
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              At Dental Essential, we believe a healthy smile is the key to
              confidence and well-being. Our expert team provides gentle,
              personalized care using the latest technology.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-sky-500 hover:bg-sky-600 transition text-white px-8 py-3 rounded-md shadow-lg"
            >
              Book Appointment
            </Link>

            <div className="ml-4 mt-8 bg-white shadow rounded-lg px-8 py-3 inline-flex items-center gap-3 border border-gray-200">
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4V2H8v2H4v3a4 4 0 004 4h.09A6.002 6.002 0 0011 15.91V18H8v2h8v-2h-3v-2.09A6.002 6.002 0 0015.91 11H16a4 4 0 004-4V4h-4z" />
              </svg>
              <span className="text-sm font-medium">
                Famdent Award Winner
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[420px] h-[420px] bg-sky-400 rounded-full blur-2xl"></div>
            <div className="absolute w-[460px] h-[460px] bg-sky-300 rounded-full"></div>

            <div className="relative w-[500px] h-[600px] animate-float">
              <Image
                src="/images/home/babypic.png"
                alt="Happy Child Brushing Teeth"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
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
                src="/images/gallery/clinic-2.png"
                alt="Dental Essential team"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sky-600 text-xl md:text-2xl font-semibold mb-2">Who are we?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-5">
              The Essence of Dental Care in Navi Mumbai
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
             At Dental Essential Clinic, we provide high-quality, patient-focused dental care in a comfortable and friendly environment. Led by Dr. Sameer Gharat, our team combines advanced technology with a compassionate approach to deliver personalized treatments with a strong emphasis on precision, hygiene, and patient comfort. From routine check-ups to advanced dental procedures, we are dedicated to helping you achieve a healthy, confident smile.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-6 py-3 rounded-lg font-medium transition"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTOR PROFILE */}
      <DoctorProfileCarousel />

      {/* HOME SERVICES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-sky-600 text-2xl md:text-3xl font-bold mb-2">Treatment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Comprehensive Dental Solutions for a Radiant Smile
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our most sought-after treatments designed to restore health, function, and confidence in every smile.
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
                    alt={service.title}
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
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS SECTION */}
      <ReviewsCarousel />
    </main>
  );
}