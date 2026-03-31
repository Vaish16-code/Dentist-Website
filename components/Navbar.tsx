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

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

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

  // Common palette for nav accents
  const topBarBg = 'bg-[#c8d4e6] border-[#b7c6db]';
  const accentText = 'text-slate-700';
  const hoverText = 'hover:text-slate-700';
  const underline = 'bg-slate-700';
  const dropdownHover = 'hover:bg-slate-50 hover:text-slate-700';
  const ctaBtn = 'bg-sky-500 hover:bg-sky-500';

  return (
    <header className="sticky top-0 z-50">

      {/* TOP BAR */}
      <div className={`${topBarBg} text-slate-700 border-b shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="flex sm:hidden items-center justify-center gap-1.5 py-1.5 text-slate-700 text-xs border-b border-[#b7c6db]">
            <img src="/images/clock-icon.svg" className="w-3.5 h-3.5" alt="Clock" />
            <span>Open: 10 AM – 2 PM & 5 PM – 9 PM</span>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="hidden sm:flex items-center gap-2 text-slate-700 text-sm whitespace-nowrap">
              <img src="/images/clock-icon.svg" className="w-4 h-4" alt="Clock" />
              <span>Open: 10 AM – 2 PM & 5 PM – 9 PM</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 ml-auto whitespace-nowrap">
              <a href={practoUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <img src="/images/practo-logo.png" className="h-5 sm:h-8 md:h-10" alt="Practo" />
              </a>

              <a href="tel:+918779648573" className="flex items-center gap-1.5 sm:gap-2 text-slate-800 hover:text-slate-900 shrink-0">
                <img src="/images/contact-icon.svg" className="w-4 h-4 md:w-5 md:h-5" alt="Phone" />
                <span className="font-semibold text-xs sm:text-sm md:text-base leading-none">
                  +91 877-9648573
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-md'
          : 'bg-white/70 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between">

          <Link href="/">
            <img src="/images/logo.png" className="h-11 md:h-12" />
          </Link>

          <div className="hidden md:flex items-center gap-8">

            {beforeServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-medium ${
                  pathname === link.path ? accentText : `text-slate-700 ${hoverText}`
                }`}
              >
                {link.name}
                <span className={`absolute left-0 -bottom-1 h-0.5 ${underline} ${
                  pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`relative text-sm ${pathname.startsWith('/services') ? accentText : hoverText}`}>
                Services
                <span className={`absolute left-0 -bottom-1 h-0.5 ${underline} ${
                  pathname.startsWith('/services') ? 'w-full' : 'w-0'
                }`} />
              </button>

              <div className={`absolute top-full mt-3 w-64 bg-white border rounded-xl shadow-xl ${
                servicesOpen ? 'block' : 'hidden'
              }`}>
                {serviceLinks.map((s) => (
                  <Link
                    key={s.path}
                    href={s.path}
                    className={`block px-4 py-2 text-sm text-slate-700 ${dropdownHover}`}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            {afterServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm ${
                  pathname === link.path ? accentText : `text-slate-700 ${hoverText}`
                }`}
              >
                {link.name}
                <span className={`absolute left-0 -bottom-1 h-0.5 ${underline} ${
                  pathname === link.path ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className={`${ctaBtn} text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-md transition`}
            >
              Book Appointment
            </Link>

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-slate-700"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pb-4 pt-3 space-y-1">
            {beforeServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === link.path ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <span>{mobileServicesOpen ? '−' : '+'}</span>
              </button>

              {mobileServicesOpen && (
                <div className="ml-3 mt-1 space-y-1 border-l border-slate-200 pl-3">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.path}
                      href={s.path}
                      className={`block rounded-md px-3 py-2 text-sm ${
                        pathname === s.path ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {afterServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === link.path ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 block rounded-lg bg-sky-500 px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </nav>

    </header>
  );
}