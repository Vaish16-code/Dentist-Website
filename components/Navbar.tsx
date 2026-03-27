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
      {/* Top Info Bar */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex items-center justify-between gap-4 text-xs sm:text-sm whitespace-nowrap">
          <div className="flex items-center gap-2 font-medium leading-none min-w-0 flex-1 text-[#4A5E72]">
            <svg className="w-4 h-4 text-[#1D96D3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Open Hour: 10:00 AM – 2:00 PM &nbsp;/&nbsp; 5:00 PM – 9:00 PM</span>
          </div>

          <div className="flex items-center gap-5 leading-none shrink-0">
            <a
              href={practoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity flex items-center"
              aria-label="Open Practo profile"
            >
              <img src="/images/practo-logo.png" alt="Practo" className="h-14 w-auto object-contain" />
            </a>

            <a href="tel:+918779648573" className="flex items-center gap-1.5 text-[#1565A8] hover:text-[#1D96D3] font-semibold transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 877-9648573
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-slate-100'
          : 'bg-white border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
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
                className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 ${
                  pathname === link.path
                    ? 'text-[#1565A8]'
                    : 'text-[#4A5E72] hover:text-[#1565A8]'
                }`}
              >
                {link.name}
                <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#1D96D3] rounded-full transition-all duration-300 ${
                  pathname === link.path ? 'w-full' : 'w-0 hover:w-full'
                }`} />
              </Link>
            ))}

            {/* Services dropdown
                FIX: The outer div catches hover events for both the button AND the menu.
                The dropdown uses pt-2 (visual gap) + mt-0 so there is NO physical gap
                that would let the mouse escape the hover zone when moving downward. */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`relative text-sm font-medium transition-colors duration-200 flex items-center gap-1 pb-0.5 ${
                  pathname.startsWith('/services')
                    ? 'text-[#1565A8]'
                    : 'text-[#4A5E72] hover:text-[#1565A8]'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#1D96D3] rounded-full transition-all duration-300 ${
                  pathname.startsWith('/services') || servicesOpen ? 'w-full' : 'w-0'
                }`} />
              </button>

              {/* Dropdown — zero top margin, padding creates the visual gap WITHOUT a mouse escape zone */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-60 z-[60] transition-all duration-200 origin-top ${
                servicesOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}>
                {/* Invisible bridge so hover doesn't break when moving from button → menu */}
                <div className="h-3" />
                <div className="bg-white border border-slate-100 rounded-xl shadow-xl">
                  <div className="py-2 px-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                          pathname === service.path
                            ? 'bg-[#E8F4FF] text-[#1565A8] font-semibold'
                            : 'text-[#4A5E72] hover:bg-[#F0F8FF] hover:text-[#1565A8]'
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {afterServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 ${
                  pathname === link.path
                    ? 'text-[#1565A8]'
                    : 'text-[#4A5E72] hover:text-[#1565A8]'
                }`}
              >
                {link.name}
                <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#1D96D3] rounded-full transition-all duration-300 ${
                  pathname === link.path ? 'w-full' : 'w-0'
                }`} />
              </Link>
            ))}


          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#1565A8] p-1"
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col p-6 gap-5">
            {beforeServicesLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`text-base font-medium ${
                  pathname === link.path ? 'text-[#1565A8] font-semibold' : 'text-[#4A5E72]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className={`w-full flex items-center justify-between text-base font-medium ${
                  pathname.startsWith('/services') ? 'text-[#1565A8] font-semibold' : 'text-[#4A5E72]'
                }`}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`mt-2 overflow-hidden transition-all duration-200 ${
                mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 border-l-2 border-[#D0E8FF] space-y-1 mt-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                      className={`block py-2 text-sm ${
                        pathname === service.path
                          ? 'text-[#1565A8] font-semibold'
                          : 'text-[#4A5E72] hover:text-[#1565A8]'
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
                className={`text-base font-medium ${
                  pathname === link.path ? 'text-[#1565A8] font-semibold' : 'text-[#4A5E72]'
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
