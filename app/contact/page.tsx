"use client";

import { FormEvent, useState } from 'react';
import { services } from '@/data/services';

export default function ContactPage() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formspreeEndpoint) {
      setFormStatus({
        type: 'error',
        message: 'Form is not configured yet. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local.',
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Appointment Request - ${formData.firstName} ${formData.lastName}`,
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        errors?: Array<{ message?: string }>;
      };

      if (!response.ok) {
        throw new Error(result.errors?.[0]?.message || 'Failed to submit form.');
      }

      setFormStatus({
        type: 'success',
        message: 'Appointment request sent successfully. Our receptionist will contact you soon.',
      });

      setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-sky-100 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white text-gray-800 placeholder:text-gray-400 text-sm transition-all duration-200";

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── PAGE HEADER ── */}
      <div className="relative bg-gradient-to-br from-sky-500 to-sky-600 py-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative">
          <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Get In Touch</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Book an Appointment
          </h1>
          <p className="text-sky-100 max-w-xl mx-auto text-sm">
            Book your appointment and experience professional, gentle dental care at{' '}
            <span className="font-semibold text-pink-200">Dental</span>{' '}
            <span className="font-semibold text-sky-100">Essential</span>.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 100V0C240 66.6667 480 100 720 100C960 100 1200 66.6667 1440 0V100H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

      {/* ── QUICK CONTACT CARDS ── */}
      <div className="max-w-5xl mx-auto px-6 py-10 grid sm:grid-cols-3 gap-5 -mt-0">
        {[
          {
            icon: (
              <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            ),
            label: 'Call Us',
            value: '+91 877-9648573',
            href: 'tel:+918779648573',
          },
          {
            icon: (
              <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ),
            label: 'Find Us',
            value: 'Vishrali Naka, Panvel – 410206',
            href: 'https://maps.google.com/?q=Dental+Essential+Panvel',
          },
          {
            icon: (
              <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            label: 'Opening Hours',
            value: '10 AM–2 PM / 5–9 PM',
            href: null,
          },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-2xl p-5 border border-sky-100 shadow-sm flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
              {card.icon}
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{card.label}</p>
              {card.href ? (
                <a href={card.href} className="text-sky-600 font-semibold text-sm hover:text-pink-500 transition-colors">
                  {card.value}
                </a>
              ) : (
                <p className="text-sky-600 font-semibold text-sm">{card.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 pb-20">

        {/* Map + Address */}
        <div className="bg-white rounded-2xl shadow-sm border border-sky-100 overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Dental%20Essential%20Advanced%20Dental%20Clinic&ll=18.980009,73.1144911&z=18&output=embed"
            height="320"
            className="w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
          <div className="p-6 space-y-4">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                title: 'Clinic Address',
                content: 'Shop no. 16, Building No. 7/B, Gurusharnam Complex, Vishrali Naka, Panvel – 410206'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                title: 'Phone',
                content: '+91 877-9648573'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: 'Working Hours',
                content: 'Mon – Sat: 10:00 AM – 2:00 PM / 5:00 PM – 9:00 PM\nSunday: Closed'
              }
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sky-600 text-sm mb-0.5">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Appointment Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-sky-100">
          <span className="section-label">Appointment</span>
          <h2 className="text-2xl font-extrabold mt-1 mb-7">
            <span className="text-pink-500">Book Your</span>{' '}
            <span className="text-sky-500">Visit</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <input
                value={formData.firstName}
                onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                className={inputClass}
                placeholder="First Name"
                required
              />
              <input
                value={formData.lastName}
                onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                className={inputClass}
                placeholder="Last Name"
                required
              />
            </div>

            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className={inputClass}
              placeholder="Email Address"
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className={inputClass}
                placeholder="Phone Number"
                required
              />

              <select
                value={formData.service}
                onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                className={inputClass}
                required
              >
                <option value="" disabled>Select Treatment</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className={inputClass}
              placeholder="Message (optional)"
              rows={4}
            />

            {formStatus && (
              <div className={`rounded-xl px-4 py-3 text-sm font-medium ${
                formStatus.type === 'success'
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {formStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Book Appointment'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
