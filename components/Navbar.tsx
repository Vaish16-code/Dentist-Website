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

  const isHome = pathname === '/'; // ✅ KEY LINE

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

  // 🎨 COLORS
  const topBarBg = isHome
    ? 'bg-gradient-to-r from-[#b8962e] via-[#D4AF37] to-[#f0d46b] border-[#c5a646]'
    : 'bg-gradient-to-r from-[#9D174D] to-[#BE185D] border-[#BE185D]';

  const accentText = isHome ? 'text-[#c9a227]' : 'text-[#BE185D]';
  const hoverText = isHome ? 'hover:text-[#b8962e]' : 'hover:text-[#BE185D]';
  const underline = isHome ? 'bg-[#c9a227]' : 'bg-[#BE185D]';

  const dropdownHover = isHome
    ? 'hover:bg-[#fff7db] hover:text-[#b8962e]'
    : 'hover:bg-pink-50 hover:text-[#BE185D]';

  const ctaBtn = isHome
    ? 'bg-gradient-to-r from-[#C9A227] to-[#E6C200]'
    : 'bg-[#BE185D] hover:bg-[#9D174D]';

  return (
    <header className="sticky top-0 z-50">

      {/* TOP BAR */}
      <div className={`${topBarBg} text-white border-b shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="flex sm:hidden items-center justify-center gap-1.5 py-1.5 text-white/90 text-xs border-b border-white/20">
            <img src="/images/clock-icon.svg" className="w-3.5 h-3.5" />
            <span>Open: 10 AM – 2 PM & 5 PM – 9 PM</span>
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="hidden sm:flex items-center gap-2 text-white/90 text-sm">
              <img src="/images/clock-icon.svg" className="w-4 h-4" />
              <span>Open: 10 AM – 2 PM & 5 PM – 9 PM</span>
            </div>

            <div className="flex items-center gap-5 ml-auto">
              <a href={practoUrl} target="_blank" rel="noopener noreferrer">
                <img src="/images/practo-logo.png" className="h-8 md:h-10" />
              </a>

              <a href="tel:+918779648573" className="flex items-center gap-2 text-white hover:text-pink-100">
                <img src="/images/contact-icon.svg" className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold text-sm md:text-base">
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
                <span className={`absolute left-0 -bottom-1 h-[2px] ${underline} ${
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
              <button className={`text-sm ${hoverText}`}>
                Services
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
                className={`text-sm ${
                  pathname === link.path ? accentText : `text-slate-700 ${hoverText}`
                }`}
              >
                {link.name}
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

          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
        </div>
      </nav>

    </header>
  );
}