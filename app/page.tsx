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
      {/* ── HERO SECTION ── */}
      <section className="relative bg-white overflow-hidden py-4 md:py-0">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F0F8FF] rounded-full -translate-y-1/3 translate-x-1/4 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E0F0FF] rounded-full translate-y-1/3 -translate-x-1/4 opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-14 grid md:grid-cols-2 gap-10 items-center relative">
          {/* Left column */}
          <div className="py-12 md:py-16">
            <span className="inline-flex items-center gap-2 bg-[#E0F0FF] text-[#1D96D3] px-4 py-1.5 rounded-full text-xs font-700 tracking-wide uppercase mb-6">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Top Dental Services in Panvel
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] text-[#1565A8] mb-5">
              Your Smile Deserves{' '}
              <span className="text-[#1D96D3]">Expert Care</span>
            </h1>

            <p className="text-[#4A5E72] text-base md:text-lg leading-relaxed max-w-lg mb-8">
              At Dental Essential, we believe a healthy smile is the key to confidence and well-being. Our expert team provides gentle, personalized care using the latest technology.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-[#1565A8] hover:bg-[#1D96D3] text-white px-7 py-3.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Book Appointment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-[#1565A8] text-[#1565A8] hover:bg-[#1565A8] hover:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Famdent badge */}
            <div className="mt-8 inline-flex items-center gap-3 bg-white border border-[#E0F0FF] shadow-md rounded-xl px-5 py-3">
              <div className="w-9 h-9 rounded-full bg-[#F0F8FF] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#1D96D3]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="text-[#1565A8] font-bold text-sm">Famdent Award Winner</p>
                <p className="text-[#8096A7] text-xs">Excellence in Dentistry 2023</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center items-center py-8 md:py-16">
            <div className="absolute w-[380px] h-[380px] bg-[#1D96D3] rounded-full opacity-10 blur-3xl" />
            <div className="absolute w-[400px] h-[400px] bg-[#38BDF8] rounded-full opacity-15" />
            <div className="relative w-[420px] h-[520px] animate-float">
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

      {/* ── STATS BAR ── */}
      <section className="bg-[#1565A8] py-5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { number: '16+', label: 'Years Experience' },
            { number: '5000+', label: 'Patients Treated' },
            { number: '10+', label: 'Treatments Offered' },
            { number: '4.9★', label: 'Google Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-extrabold text-white">{stat.number}</p>
              <p className="text-[#38BDF8] text-xs font-medium mt-0.5 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHO ARE WE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            {/* Decorative corner accent */}
            <div className="absolute -left-3 -top-3 w-16 h-16 bg-[#E0F0FF] rounded-xl hidden md:block" />
            <div className="absolute -right-3 -bottom-3 w-12 h-12 bg-[#F0F8FF] rounded-xl hidden md:block" />
            <div className="relative rounded-2xl overflow-hidden border border-[#E0F0FF] shadow-xl">
              <Image
                src="/images/gallery/clinic-2.png"
                alt="Dental Essential clinic"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <span className="section-label">Who Are We</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] leading-tight mb-5">
              The Essence of Dental Care<br />in Navi Mumbai
            </h2>
            <p className="text-[#4A5E72] leading-relaxed mb-8 text-[0.97rem]">
              At Dental Essential Clinic, we provide high-quality, patient-focused dental care in a comfortable and friendly environment. Led by Dr. Sameer Gharat, our team combines advanced technology with a compassionate approach to deliver personalized treatments with a strong emphasis on precision, hygiene, and patient comfort.
            </p>

            {/* Feature bullets */}
            <ul className="space-y-3 mb-8">
              {[
                'Advanced technology & equipment',
                'Comfortable, stress-free environment',
                'Personalised treatment plans',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#4A5E72]">
                  <div className="w-5 h-5 rounded-full bg-[#E0F0FF] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#1D96D3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1565A8] hover:bg-[#1D96D3] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Learn About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOCTOR PROFILE ── */}
      <DoctorProfileCarousel />

      {/* ── SERVICES SECTION ── */}
      <section className="py-20 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="section-label">Our Treatments</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] mb-3 mt-1">
              Comprehensive Dental Solutions
            </h2>
            <p className="text-[#4A5E72] max-w-2xl mx-auto text-sm md:text-base">
              Explore our most sought-after treatments designed to restore health, function, and confidence in every smile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl border border-[#E0F0FF] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-5 text-center"
              >
                <div className="relative bg-[#F0F8FF] group-hover:bg-[#E0F0FF] rounded-xl mb-4 h-36 overflow-hidden transition-colors duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 20vw"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-[#1565A8] font-bold text-sm mb-1.5 line-clamp-2">{service.title}</h3>
                <p className="text-[#8096A7] text-xs leading-relaxed line-clamp-3">{service.shortDescription}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-[#1565A8] text-[#1565A8] hover:bg-[#1565A8] hover:text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
      <ReviewsCarousel />
    </main>
  );
}