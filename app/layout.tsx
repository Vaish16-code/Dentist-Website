import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Dental Essential | Best Dentist in Panvel for Tooth Pain, Missing Teeth & Smile Makeover',
  description: 'Facing tooth pain, jaw pain, missing teeth, or spacing issues? Dental Essential in Old Panvel offers painless root canal, dental implants, braces, smile makeover & more. Book a consultation today.',
  keywords: 'dentist in Panvel, tooth pain treatment, missing teeth replacement, dental implants Panvel, root canal Panvel, braces Panvel, smile makeover, jaw pain dentist, best dental clinic Old Panvel',
  alternates: {
    canonical: 'https://www.dentalessential.co.in',
  },
  openGraph: {
    title: 'Dental Essential | Best Dentist in Panvel',
    description: 'Expert dental care for tooth pain, missing teeth, jaw pain, and smile makeover in Old Panvel, Navi Mumbai.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Dental Essential',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Dental Essential",
  "alternateName": "Dental Essential Advanced Dental Clinic",
  "description": "Best dental clinic in Old Panvel offering painless root canal, dental implants, braces, clear aligners, smile makeover, and more.",
  "url": "https://www.dentalessential.co.in",
  "telephone": "+918779648573",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 16, Building No. 7/B, Gurusharnam Complex, Vishrali Naka",
    "addressLocality": "Old Panvel",
    "addressRegion": "Maharashtra",
    "postalCode": "410206",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.980009,
    "longitude": 73.1144911
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "17:00",
      "closes": "21:00"
    }
  ],
  "priceRange": "₹₹",
  "image": "https://www.dentalessential.co.in/images/logo.png",
  "sameAs": [
    "https://www.instagram.com/dentalessential_drsameergharat",
    "https://www.practo.com/navi-mumbai/clinic/dental-essential-old-panvel"
  ],
  "founder": {
    "@type": "Person",
    "name": "Dr. Sameer Ramchandra Gharat",
    "jobTitle": "Prosthodontist & Implantologist"
  },
  "medicalSpecialty": [
    "Prosthodontics",
    "Implantology",
    "Orthodontics",
    "Endodontics",
    "Pediatric Dentistry",
    "Oral Surgery"
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 18.980009,
      "longitude": 73.1144911
    },
    "geoRadius": "20000"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
