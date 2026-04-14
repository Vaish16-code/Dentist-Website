import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F0F8FF] text-slate-700 border-t border-sky-100">

      {/* Top wave — sky blue */}
      <div className="bg-white leading-none">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: '100%', height: '50px', display: 'block' }}>
          <path d="M0 0C360 50 1080 50 1440 0V50H0V0Z" fill="#F0F8FF" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Brand ── */}
          <div>
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Dental Essential"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Providing exceptional dental care with the latest technology and a compassionate, patient-first approach.
            </p>

            {/* Book on Practo */}
            <a
              href="https://www.practo.com/navi-mumbai/clinic/dental-essential-old-panvel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm mb-5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-13 9h16a1 1 0 001-1V7a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
              </svg>
              Book on Practo
            </a>

            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-sky-100 hover:bg-sky-500 text-sky-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-sky-100 hover:bg-sky-500 text-sky-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Treatments', path: '/services' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-slate-500 hover:text-sky-500 transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider mb-5">Our Treatments</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Painless Root Canal', path: '/services/painless-root-canal' },
                { label: 'Dental Implants', path: '/services/dental-implants' },
                { label: 'Dental Braces', path: '/services/braces' },
                { label: 'Clear Aligners', path: '/services/clear-aligners' },
                { label: 'Smile Designing', path: '/services/smile-designing' },
                { label: 'Pediatric Dentistry', path: '/services/pediatric-dentistry' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-slate-500 hover:text-sky-500 transition-colors font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3 className="text-slate-800 text-sm font-bold uppercase tracking-wider mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-500 leading-relaxed">
                  Shop 16, Bldg 7/B, Gurusharnam Complex,<br />Vishrali Naka, Old Panvel – 410206
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+918779648573" className="text-slate-600 hover:text-sky-500 transition-colors font-semibold">
                  +91 877-9648573
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-slate-500">
                  <p>Mon–Sat: 10 AM – 2 PM</p>
                  <p>Mon–Sat: 5 PM – 9 PM</p>
                  <p className="text-sky-500 font-medium">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-sky-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Dental Essential. All rights reserved.</p>
          <p className="text-sky-500 font-medium">Advanced Dental Clinic, Panvel</p>
        </div>
      </div>
    </footer>
  );
}
