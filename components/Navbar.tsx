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
      <div className="bg-[#E9EEF2] text-slate-800 border-b border-slate-200 overflow-visible">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 flex items-center justify-between gap-4 text-xs sm:text-sm whitespace-nowrap overflow-visible">
          <div className="flex items-center gap-2 font-medium leading-none min-w-0 flex-1">
            <img
              src="/images/clock-icon.svg"
              alt="Clock"
              className="w-5 h-5 shrink-0"
            />
            <span>Open Hour 10:00 AM - 02:00 PM / 05:00 PM - 09:00 PM</span>
          </div>

          <div className="flex items-center gap-5 leading-none shrink-0 min-w-fit">
            <a
              href={practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-95 transition-opacity flex items-center shrink-0"
              aria-label="Open Practo profile"
            >
              <img
                src="/images/practo-logo.png"
                alt="Practo"
                className="h-8 w-auto object-contain"
              />
            </a>

            <a href="tel:+918779648573" className="flex items-center gap-2 shrink-0 text-slate-800 hover:text-sky-700 transition-colors">
              <img
                src="/images/contact-icon.svg"
                alt="Phone"
                className="w-5 h-5 shrink-0"
              />
              <span className="font-medium">+91 877-9648573</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      >

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
                  ? 'text-sky-600'
                  : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              {link.name}

              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 ${
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
                  ? 'text-sky-600'
                  : 'text-gray-700 hover:text-sky-600'
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 ${
                  pathname.startsWith('/services') ? 'w-full' : servicesOpen ? 'w-full' : 'w-0'
                }`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-[60] transition-all duration-200 origin-top ${
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
                        ? 'bg-sky-50 text-sky-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-sky-700'
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
                  ? 'text-sky-600'
                  : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              {link.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-sky-600 transition-all duration-300 ${
                  pathname === link.path
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-6 gap-6">

            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <img
                src="/images/logo.png"
                alt="Dental Essential Logo"
                className="h-10 w-auto object-contain"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-sky-600 transition-colors"
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
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-700'
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
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-700'
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
                <div className="pl-3 border-l border-gray-200 space-y-1">
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
                          ? 'text-sky-600 font-semibold'
                          : 'text-gray-700 hover:text-sky-600'
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
                    ? 'text-sky-600 font-semibold'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
