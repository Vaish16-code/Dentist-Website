import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* ── HERO SECTION ── */}
      <div className="w-full h-[65vh] relative overflow-hidden">
        <Image
          src="/smilewomen.png"
          alt="Dental Essential Clinic"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1565A8]/75 via-[#1565A8]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-14">
            <span className="section-label text-[#38BDF8] mb-3 block">About Us</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-xl">
              Caring for Your Smile,<br />Every Step of the Way
            </h1>
            <p className="text-slate-200 max-w-md text-sm md:text-base leading-relaxed mb-6">
              Advanced dental care in a warm, comfortable environment — led by Dr. Sameer Gharat and his dedicated team.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 bg-white text-[#1565A8] hover:bg-[#38BDF8] hover:text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* ── WELCOME SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label">Welcome To</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] mt-1 mb-6">
            Dental Essential
          </h2>
          <p className="text-[#4A5E72] leading-relaxed mb-4">
            At Dental Essential, we believe a healthy smile is the key to confidence and well-being. Our expert team provides gentle, personalized care using the latest technology to keep your teeth healthy and your visits stress-free.
          </p>
          <p className="text-[#4A5E72] leading-relaxed">
            From routine check-ups to advanced cosmetic and restorative procedures, we are committed to delivering outstanding dental care tailored to every patient&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* ── MISSION SECTION ── */}
      <section className="py-20 bg-[#F0F8FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">
          <div className="relative">
            <div className="absolute -left-3 -top-3 w-14 h-14 bg-[#E0F0FF] rounded-xl hidden md:block" />
            <Image
              src="/mission.jpg"
              alt="Our Mission"
              width={500}
              height={370}
              className="rounded-2xl shadow-xl relative border border-[#E0F0FF]"
            />
          </div>

          <div>
            <span className="section-label">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] mt-1 mb-5">
              Our Mission
            </h2>

            <p className="text-[#4A5E72] leading-relaxed mb-4">
              Our mission is to deliver exceptional dental care that goes beyond treating teeth — we care for people. We believe every patient deserves to feel heard, respected, and at ease.
            </p>

            <p className="text-[#4A5E72] leading-relaxed mb-8">
              By blending advanced technology with a gentle, personalized approach, we strive to support not just your oral health, but your overall well-being.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1565A8] hover:bg-[#1D96D3] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOCTORS & STAFF SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] mt-1 mb-3">
              Our Doctors &amp; Staff
            </h2>
            <p className="text-[#4A5E72] max-w-2xl mx-auto text-sm">
              Meet our dedicated team of dental professionals committed to providing you with exceptional care and beautiful smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                image: "/images/doctor.jpeg",
                alt: "Dr. Sameer Ramchandra Gharat",
                badge: "Chief Dentist",
                name: "Dr. Sameer Ramchandra Gharat",
                role: "Prosthodontist & Implantologist",
                qual: "BDS, MDS – Prosthodontics & Implantology",
                desc: "With 16+ years of experience, Dr. Sameer specialises in dental implants, crowns, bridges, and complete smile makeovers. He is a member of IDA & Indian Prosthodontic Society.",
                objectPos: "object-top"
              },
              {
                image: "/images/staff/orthodontist.jpeg",
                alt: "Visiting Orthodontist",
                badge: "Visiting Specialist",
                name: "Visiting Orthodontist",
                role: "Braces & Aligners Specialist",
                qual: "BDS, MDS – Orthodontics",
                desc: "Expert in traditional braces, clear aligners, and jaw correction treatments. Available on scheduled days for consultations and follow-ups.",
                objectPos: "object-top"
              },
              {
                image: "/images/staff/clinical-staff.jpeg",
                alt: "Clinical Staff",
                badge: "Clinical Team",
                name: "Clinical Support Staff",
                role: "Dental Assistants & Hygienists",
                qual: "Trained & Certified Professionals",
                desc: "Our skilled assistants ensure smooth procedures, maintain sterilisation protocols, and provide chairside support for all treatments.",
                objectPos: "object-center"
              },
              {
                image: "/images/staff/reception.jpeg",
                alt: "Front Desk Staff",
                badge: "Front Desk",
                name: "Reception Team",
                role: "Patient Coordinators",
                qual: "Customer Service Trained",
                desc: "Our friendly reception team handles appointments, insurance queries, and ensures you feel welcomed from the moment you walk in.",
                objectPos: "object-center"
              },
              {
                image: "/images/staff/pediatric.jpeg",
                alt: "Pediatric Dentist",
                badge: "Visiting Specialist",
                name: "Visiting Pediatric Dentist",
                role: "Children's Dental Specialist",
                qual: "BDS, MDS – Pedodontics",
                desc: "Specialised in treating children with gentle care, making dental visits fun and fear-free for your little ones.",
                objectPos: "object-top"
              },
              {
                image: "/images/staff/sterilization.jpeg",
                alt: "Sterilization Staff",
                badge: "Hygiene Team",
                name: "Sterilisation Team",
                role: "Infection Control Specialists",
                qual: "Certified in Sterilisation Protocols",
                desc: "Ensuring the highest standards of hygiene and sterilisation for all instruments and equipment used in treatments.",
                objectPos: "object-center"
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-[#E0F0FF] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 bg-[#F0F8FF]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className={`object-cover ${member.objectPos}`}
                  />
                  <div className="absolute top-4 left-4 bg-[#1565A8] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {member.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#1565A8] mb-0.5">{member.name}</h3>
                  <p className="text-[#1D96D3] text-sm font-semibold mb-1">{member.role}</p>
                  <p className="text-[#8096A7] text-xs mb-3">{member.qual}</p>
                  <p className="text-[#4A5E72] text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES SECTION ── */}
      <section className="py-20 bg-[#F0F8FF]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Our Clinic</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1565A8] mt-1 mb-3">
              State-of-the-Art Facilities
            </h2>
            <p className="text-[#4A5E72] max-w-2xl mx-auto text-sm">
              Step inside our modern, welcoming clinic designed for your comfort and equipped with cutting-edge dental technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 md:row-span-2">
              <img
                src="/images/gallery/clinic-1.png"
                alt="Modern Treatment Room"
                className="w-full h-full min-h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] border border-[#E0F0FF]"
              />
            </div>

            {[
              { src: "/images/gallery/clinic-2.png", alt: "Pediatric Dental Room" },
              { src: "/images/gallery/clinic-3.png", alt: "Treatment Chair" },
              { src: "/images/gallery/clinic-4.png", alt: "Reception & Certificates" },
              { src: "/images/gallery/clinic-5.png", alt: "Advanced X-Ray Machine" },
            ].map((img) => (
              <div key={img.alt}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.01] border border-[#E0F0FF]"
                />
              </div>
            ))}

            <div className="bg-[#1565A8] rounded-2xl p-6 flex flex-col justify-center items-center text-white shadow-lg">
              <span className="text-4xl font-extrabold">16+</span>
              <span className="text-[#38BDF8] text-sm mt-2 font-medium">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
