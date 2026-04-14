import { services } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export const metadata = {
  title: 'Our Treatments | Dental Essential',
  description: 'Explore our comprehensive dental treatments including root canal treatment, dental implants, braces, smile designing, and more.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-sky-500 to-sky-600 py-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            COMPREHENSIVE DENTAL CARE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Treatments
          </h1>
          <p className="text-sky-100 max-w-2xl mx-auto text-lg">
            From routine check-ups to advanced treatments, we offer a full range of dental treatments 
            to keep your smile healthy and beautiful.
          </p>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Expert Care</span>{' '}
              <span className="text-sky-500">for Every Smile</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive dental treatments using the latest technology and techniques 
              to ensure the best outcomes for our patients.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pink-500 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Dental Essential, we combine expertise with compassion to deliver exceptional dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-amber-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4V2H8v2H4v3a4 4 0 004 4h.09A6.002 6.002 0 0011 15.91V18H8v2h8v-2h-3v-2.09A6.002 6.002 0 0015.91 11H16a4 4 0 004-4V4h-4z" />
                  </svg>
                ),
                title: "Award Winning",
                desc: "Recognized for excellence in dental care"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-orange-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Latest Technology",
                desc: "State-of-the-art equipment and techniques"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Gentle Care",
                desc: "Pain-free treatments with patient comfort"
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-sky-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5V10a2 2 0 00-2-2h-3M2 20h5M7 20v-4a2 2 0 012-2h6a2 2 0 012 2v4M7 20h10M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  </svg>
                ),
                title: "Expert Team",
                desc: "Highly qualified and experienced dentists"
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center border border-sky-50 hover:border-sky-200 transition-colors">
                <span className="mb-4 block">{item.icon}</span>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
