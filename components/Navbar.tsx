'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const practoUrl = 'https://www.practo.com/navi-mumbai/clinic/dental-essential-old-panvel';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const beforeServicesLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];

  const afterServicesLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Painless Root Canal', path: '/services/painless-root-canal' },
    { name: 'Dental Implants', path: '/services/dental-implants' },
    { name: 'Dental Braces', path: '/services/braces' },
    { name: 'Clear Aligners', path: '/services/clear-aligners' },
    { name: 'Smile Designing', path: '/services/smile-designing' },
    { name: 'Pediatric Dentistry', path: '/services/pediatric-dentistry' },
    { name: 'Crowns and Bridges', path: '/services/crowns-and-bridges' },
    { name: 'Dentures', path: '/services/dentures' },
    { name: 'Wisdom Tooth Extraction', path: '/services/wisdom-tooth-extraction' },
    { name: 'Full Mouth Rehabilitation', path: '/services/full-mouth-rehabilitation' },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white text-slate-700 border-b border-sky-100">
        {/* Mobile: two rows stacked. sm+: single row side-by-side */}
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Row 1 (mobile only): Open hours — full width, centered */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 py-1.5 text-sky-600 font-medium text-xs border-b border-sky-50">
            <img src="/images/clock-icon.svg" alt="Clock" className="w-3.5 h-3.5 shrink-0" />
            <span>Open: 10 AM – 2 PM &amp; 5 PM – 9 PM</span>
          </div>

          {/* Main row */}
          <div className="flex items-center justify-between gap-4 py-2">
            {/* Open hours — visible on sm+ in main row */}
            <div className="hidden sm:flex items-center gap-2 font-medium text-xs md:text-sm leading-none text-sky-600 flex-1">
              <img src="/images/clock-icon.svg" alt="Clock" className="w-4 h-4 shrink-0" />
              <span>Open: 10 AM – 2 PM &amp; 5 PM – 9 PM</span>
            </div>

            <div className="flex items-center gap-4 md:gap-6 shrink-0 ml-auto">
              <a
                href={practoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity flex items-center shrink-0"
                aria-label="Open Practo profile"
              >
                <img
                  src="/images/practo-logo.png"
                  alt="Practo"
                  className="h-7 sm:h-8 md:h-10 w-auto object-contain"
                />
              </a>

              <a href="tel:+918779648573" className="flex items-center gap-1.5 md:gap-2 shrink-0 text-slate-700 hover:text-sky-500 transition-colors">
                <img src="/images/contact-icon.svg" alt="Phone" className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                <span className="font-semibold text-xs sm:text-sm md:text-base">+91 877-9648573</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <nav
        className={`transition-all duration-300 border-b ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-sky-100' : 'bg-white border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

        {/* Logo Only */}
        <Link href="/" className="flex items-center group">
          <img
            src="/images/logo.png"
            alt="Dental Essential Logo"
            className="h-11 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {beforeServicesLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative text-sm font-medium transition duration-300 ${
                pathname === link.path
                  ? 'text-sky-500'
                  : 'text-slate-700 hover:text-sky-500'
              }`}
            >
              {link.name}

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-500 transition-all duration-300 ${
                  pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`relative text-sm font-medium transition duration-300 flex items-center gap-1 ${
                pathname.startsWith('/services')
                  ? 'text-sky-500'
                  : 'text-slate-700 hover:text-sky-500'
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-500 transition-all duration-300 ${
                  pathname.startsWith('/services') ? 'w-full' : servicesOpen ? 'w-full' : 'w-0'
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-sky-100 rounded-xl shadow-lg z-[60] transition-all duration-200 origin-top ${
                servicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === service.path
                        ? 'bg-sky-50 text-sky-600 font-medium'
                        : 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {afterServicesLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative text-sm font-medium transition duration-300 ${
                pathname === link.path
                  ? 'text-sky-500'
                  : 'text-slate-700 hover:text-sky-500'
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-500 transition-all duration-300 ${
                  pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

          {/* Book Appointment CTA Button */}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-slate-700"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-sky-100 shadow-md">
          <div className="flex flex-col p-6 gap-6">

            <div className="flex items-center justify-between pb-2 border-b border-sky-50">
              <img
                src="/images/logo.png"
                alt="Dental Essential Logo"
                className="h-10 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-sky-500 transition-colors"
                aria-label="Close navigation menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            {beforeServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  pathname === link.path
                    ? 'text-sky-500 font-semibold'
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between text-lg ${
                  pathname.startsWith('/services')
                    ? 'text-sky-500 font-semibold'
                    : 'text-slate-700'
                }`}
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <svg className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`mt-2 overflow-hidden transition-all duration-200 ${
                  mobileServicesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-3 border-l-2 border-sky-200 space-y-1">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      onClick={() => {
                        setOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className={`block py-2 text-base ${
                        pathname === service.path
                          ? 'text-sky-500 font-semibold'
                          : 'text-slate-700 hover:text-sky-500'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {afterServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  pathname === link.path
                    ? 'text-sky-500 font-semibold'
                    : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Book Appointment CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-center bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
