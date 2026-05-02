import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static params for all treatments
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each treatment page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Treatment Not Found | Dental Essential',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.dentalessential.co.in/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'article',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isFullMouthRehabilitation = service.slug === 'full-mouth-rehabilitation';

  // Get related services
  const relatedServices = service.relatedSlugs
    .map(s => services.find(svc => svc.slug === s))
    .filter(Boolean);

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Banner Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Treatments
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title} in Panvel
          </h1>
          <p className="text-sky-100 max-w-2xl text-lg">
            {service.shortDescription}
          </p>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Treatment Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Treatment Image */}
            <div className={`relative rounded-2xl overflow-hidden shadow-lg ${
              isFullMouthRehabilitation
                ? 'bg-white'
                : 'h-80 lg:h-96 bg-gradient-to-br from-sky-100 to-sky-200'
            }`}>
              <img 
                src={service.bannerImage} 
                alt={`${service.title} treatment at Dental Essential clinic in Panvel`}
                className={`w-full block ${
                  isFullMouthRehabilitation
                    ? 'h-auto object-contain'
                    : 'h-full object-cover'
                }`}
              />
            </div>

            {/* Description */}
            <div>
              <span className="inline-block bg-sky-100 text-sky-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                About This Treatment
              </span>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-pink-500">
                  {['Dentures', 'Braces', 'Implants', 'Aligners'].some(word => service.title.includes(word)) ? 'What are' : 'What is'}
                </span>{' '}
                <span className="text-sky-500">{service.title}?</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Problems Section */}
      {service.patientProblems.length > 0 && (
        <section className="py-12 bg-sky-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              <span className="text-pink-500">Common Problems</span>{' '}
              <span className="text-sky-500">This Treatment Solves</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.patientProblems.map((problem) => (
                <span key={problem} className="bg-white px-5 py-2.5 rounded-full border border-sky-200 text-gray-700 text-sm font-medium shadow-sm">
                  {problem}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              If you are experiencing any of these issues, {service.title.toLowerCase()} at Dental Essential in Panvel can help.{' '}
              <Link href="/contact" className="text-sky-600 font-medium hover:underline">Book a consultation →</Link>
            </p>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Benefits of</span>{' '}
              <span className="text-sky-500">{service.title}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of choosing this treatment at{' '}
              <span className="font-semibold">
                <span className="text-pink-500">Dental</span>{' '}
                <span className="text-sky-500">Essential</span>
              </span>
              .
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">Treatment</span>{' '}
              <span className="text-sky-500">Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here&apos;s what you can expect during your {service.title.toLowerCase()} treatment journey at our Panvel clinic.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-sky-200" />

            <div className="space-y-8">
              {service.treatmentSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-white p-6 rounded-xl border-2 border-sky-100 shadow-sm hover:shadow-lg transition-shadow inline-block ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {step.step}
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {service.faqs.length > 0 && (
        <section className="py-16 bg-white" id="faqs">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="text-pink-500">Frequently Asked</span>{' '}
              <span className="text-sky-500">Questions</span>
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-xl border border-sky-100 overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-800 hover:text-sky-600 transition-colors list-none flex items-center justify-between">
                    {faq.question}
                    <svg className="w-5 h-5 text-sky-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get {service.title}?
          </h2>
          <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
            Book your consultation at Dental Essential in Panvel. Our expert team will evaluate your condition and recommend the best treatment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg" id={`cta-book-${service.slug}`}>
              Book Appointment
            </Link>
            <a href="https://wa.me/918779646573" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="text-pink-500">Related</span>{' '}
            <span className="text-sky-500">Treatments</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relatedService) => relatedService && (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="bg-white p-6 rounded-xl border-2 border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors mb-2">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relatedService.shortDescription}
                  </p>
                </Link>
              ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
            >
              View All Treatments
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
