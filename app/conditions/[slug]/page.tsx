import { getConditionBySlug, getAllConditionSlugs } from '@/data/conditions';
import { services } from '@/data/services';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getAllConditionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return { title: 'Page Not Found | Dental Essential' };
  }

  return {
    title: condition.metaTitle,
    description: condition.metaDescription,
    alternates: {
      canonical: `https://www.dentalessential.co.in/conditions/${condition.slug}`,
    },
    openGraph: {
      title: condition.metaTitle,
      description: condition.metaDescription,
      type: 'article',
    },
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const relatedServices = condition.relatedServiceSlugs
    .map(s => services.find(svc => svc.slug === s))
    .filter(Boolean);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": condition.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <Link href="/#dental-problems" className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Problems
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{condition.heroHeading}</h1>
          <p className="text-sky-100 max-w-2xl text-lg">{condition.heroSubheading}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none"><path d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z" fill="white"/></svg>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg prose-sky max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {condition.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-8 mb-3">{trimmed.replace('### ', '')}</h3>;
                }
                if (trimmed.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-sky-600 mt-10 mb-4">{trimmed.replace('## ', '')}</h2>;
                }
                if (/^\d+\.\s/.test(trimmed)) {
                  return (
                    <p key={index} className="ml-6 mb-2">
                      <span className="font-semibold text-sky-600">{trimmed.split('.')[0]}.</span>{' '}
                      <span dangerouslySetInnerHTML={{ __html: trimmed.replace(/^\d+\.\s/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>') }} />
                    </p>
                  );
                }
                if (trimmed.startsWith('- ')) {
                  return (
                    <div key={index} className="flex gap-3 ml-4 mb-2">
                      <span className="text-sky-500 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: trimmed.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>') }} />
                    </div>
                  );
                }
                return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>') }} />;
              })}
            </div>
          </div>
        </div>
      </article>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-pink-500">Frequently Asked</span>{' '}
            <span className="text-sky-500">Questions</span>
          </h2>
          <div className="space-y-4">
            {condition.faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl border border-sky-100 overflow-hidden group">
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

      {/* Related Treatments */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            <span className="text-pink-500">Recommended</span>{' '}
            <span className="text-sky-500">Treatments</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((svc) => svc && (
              <Link key={svc.slug} href={`/services/${svc.slug}`} className="bg-white p-6 rounded-xl border-2 border-sky-100 hover:border-sky-300 shadow-sm hover:shadow-md transition-all group">
                <h3 className="font-semibold text-gray-800 group-hover:text-sky-600 transition-colors mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{svc.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Expert Help Today</h2>
          <p className="text-sky-100 mb-6">Book a consultation at Dental Essential in Panvel. Our team will diagnose your problem and recommend the best treatment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">Book Consultation</Link>
            <a href="https://wa.me/918779646573" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
