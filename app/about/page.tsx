"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState hook

const doctors = [
{
    name: "Dr. Ansil Pappachan",
    title: "Consultant Braces Treatment Specialist (Orthodontist)",
    image: "/images/doctors/ansil.jpeg", // Ensure you have this image in your public folder
    description: [
      "A Post graduate from the renowned College of Dental Sciences, Dharwad, Dr. Ansil brings over 12 years of specialized experience. He has become one of the most sought-after braces specialists in Mumbai.",
      "A compassionate perfectionist, he has transformed the lives of thousands of patients. He is a member of the Indian Orthodontists Society and is specially trained in lingual braces and the Invisalign system.",
    ],
    specialties: [
      "Lingual Braces Specialist",
      "Invisalign System",
      "Dentofacial Orthopedics",
      "Self-Ligating Braces",
    ],
  },
  {
    name: "Dr. Sidharth Shah",
    title: "Orthodontics and Dentofacial Orthopaedics",
    image: "/images/doctors/sid.jpeg", // Ensure you have this image in your public folder
    description: [
      "Dr. Sidharth Shah holds a BDS and MDS in Orthodontics. With over 11 years of experience, he is recognized as a Top 1% Invisalign provider in India.",
      "As a Diamond Invisalign Provider, he has treated over 800 patients with clear aligner therapy. His practice focuses on advanced, aesthetic solutions and personalized, state-of-the-art care.",
    ],
    specialties: [
      "Diamond Invisalign Provider",
      "Clear Aligner Therapy",
      "Aesthetic Solutions",
      "Dentofacial Orthopaedics",
    ],
  },
];

export default function AboutPage() {
  // --- React Hooks must be called at the top level of the component ---
  const [activeDoctor, setActiveDoctor] = useState(0);

  const nextDoctor = () => {
    setActiveDoctor((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setActiveDoctor((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const doctor = doctors[activeDoctor];
  // --- End of React Hooks and related declarations ---

  return (
    <div className="w-full">
      {/* ── HERO SECTION ── */}
      <div className="w-full h-[82vh]  relative overflow-hidden">
        <Image
          src="/images/about/about.jpg"
          alt="Dental Essential Clinic"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/75 via-sky-500/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-14">
            <span className="inline-block text-black text-base md:text-lg font-bold uppercase tracking-widest mb-3">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-xl">
              Caring for Your Smile,
              <br />
              Every Step of the Way
            </h1>
            <p className="text-slate-200 max-w-md text-sm md:text-base leading-relaxed mb-6">
              Advanced dental care in a warm, comfortable environment — led by Dr.
              Sameer Gharat and his dedicated team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-pink-500 text-white hover:bg-pink-600 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* ── WELCOME SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label text-lg! md:text-xl!">Welcome To</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-6">
            <span className="text-pink-500">Dental</span>{" "}
            <span className="text-sky-500">Essential</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At{" "}
            <span className="font-semibold">
              <span className="text-pink-500">Dental</span>{" "}
              <span className="text-sky-500">Essential</span>
            </span>
            , we believe a healthy smile is the key to confidence and well-being.
            Our expert team provides gentle, personalized care using the latest
            technology to keep your teeth healthy and your visits stress-free.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From routine check-ups to advanced cosmetic and restorative
            procedures, we are committed to delivering outstanding dental care
            tailored to every patient&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* ── MISSION SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center">
          <div className="relative">
            <div className="absolute -left-3 -top-3 w-14 h-14 bg-sky-100 rounded-xl hidden md:block" />
            <Image
              src="/images/about/mission.jpeg"
              alt="Our Mission"
              width={400}
              height={350}
              className="rounded-2xl shadow-xl ml-20 relative border border-sky-100"
            />
          </div>

          <div>
            <span className="section-label text-lg! md:text-xl!">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-5 leading-tight">
              <span className="text-pink-500">Our</span>{" "}
              <span className="text-sky-500">Mission</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is to deliver exceptional dental care that goes beyond
              treating teeth — we care for people. We believe every patient
              deserves to feel heard, respected, and at ease.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              By blending advanced technology with a gentle, personalized
              approach, we strive to support not just your oral health, but your
              overall well-being.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get in Touch
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      {/* ── DOCTORS & STAFF SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-3 leading-tight">
              <span className="text-pink-500">Our</span>{' '}
              <span className="text-sky-500">Team</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Meet our dedicated team of dental professionals committed to providing you with exceptional care and beautiful smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {[
              {
                image: "/images/doctor.jpeg",
                alt: "Dr. Sameer R. Gharat",
                badge: "Chief Dentist",
                name: "Dr. Sameer Ramchandra Gharat",
                role: "Prosthodontist & Implantologist",
                qual: "BDS, MDS – Prosthodontics & Implantology",
                desc: "With 16+ years of experience, Dr. Sameer specialises in dental implants, crowns, bridges, and complete smile makeovers. He is a member of IDA & Indian Prosthodontic Society.",
                objectPos: "object-top"
              },
{
  image: "/images/doctors/Nikita.jpeg",
  alt: "Dr. Nikita Mohokar",
  badge: "Associate Dentist",
  name: "Dr. Nikita Mohokar",
  role: "Associate Dentist",
  qual: "BDS",
  desc: "Dr. Nikita Mohokar provides patient-focused dental care with a gentle approach and attention to comfort at every visit.",
  
  objectPos: "object-center",  
  cardImageHeight: "h-80",       
  imageWidth: "w-full",
},
              {
                image: "/images/about/dental.jpg",
                alt: "Clinical Staff",
                badge: "Clinical Team",
                name: "Clinical Support Staff",
                role: "Dental Assistants & Hygienists",
                qual: "Trained & Certified Professionals",
                desc: "Our skilled assistants ensure smooth procedures, maintain sterilisation protocols, and provide chairside support for all treatments.",
                objectPos: "object-center"
              },
              {
                image: "/images/about/reception.jpeg",
                alt: "Front Desk Staff",
                badge: "Front Desk",
                name: "Reception Team",
                role: "Patient Coordinators",
                qual: "Customer Service Trained",
                desc: "Our friendly reception team handles appointments, insurance queries, and ensures you feel welcomed from the moment you walk in.",
                objectPos: "object-center"
              },
              {
                image: "/images/doctors/somya.jpeg",
                alt: "Dr. Somya Goel",
                badge: "Visiting Specialist",
                name: "Dr. Somya Goel",
                role: "Children's Dental Specialist",
                qual: "BDS, MDS – Pedodontics",
                desc: "Specialised in treating children with gentle care, making dental visits fun and fear-free for your little ones. Dr. Somya Goel",
                objectPos: "object-center",
                 imageHeight: "h-68",       
                 imageWidth: "w-full",
              },
              {
                image: "/images/about/sterlization.jpeg",
                alt: "Sterilization Staff",
                badge: "Hygiene Team",
                name: "Sterilisation Team",
                role: "Infection Control Specialists",
                qual: "Certified in Sterilisation Protocols",
                desc: "Ensuring the highest standards of hygiene and sterilisation for all instruments and equipment used in treatments.",
                objectPos: "object-top",
                imageHeight: "h-68",       
                imageWidth: "w-full",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden border border-sky-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`relative ${member.cardImageHeight ?? "h-64"} bg-sky-50`}>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className={`object-cover ${member.objectPos}`}
                  />
                  <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {member.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-0.5">{member.name}</h3>
                  <p className="text-sky-500 text-sm font-semibold mb-1">{member.role}</p>
                  <p className="text-gray-500 text-xs mb-3">{member.qual}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── DOCTORS SLIDER SECTION ── */}
      <section className="py-16 bg-[#f5f5f5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sky-500 font-bold text-sm  text-2xl md:text-4xl ">
                <span className="text-pink-500">Our</span>{" "}
              <span className="text-sky-500">Doctors</span>
            </span>

            <h2 className="mt-2 text-2xl md:text-4xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
              Our Specialist Doctors Committed to
              <br />
              Your Dental Well-being
            </h2>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Left Side */}
            <div className="relative flex justify-center lg:justify-start">

              <button
                onClick={prevDoctor}
                className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md hover:bg-sky-600 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="relative ml-25 z-10 w-[270px] md:w-[320px] h-[360px] md:h-[400px] overflow-hidden  shadow-lg">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="relative">
              <button
                onClick={nextDoctor}
                className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-sky-500 text-white items-center justify-center shadow-md hover:bg-sky-600 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                {doctor.name}
              </h3>

              <p className="text-sky-500 font-semibold text-xs md:text-sm mb-5">
                {doctor.title}
              </p>

              <div className="space-y-3 text-gray-600 text-xs md:text-sm leading-6 md:leading-7">
                {doctor.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-7 mb-7">
                {doctor.specialties.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-700 text-xs md:text-sm font-medium"
                  >
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500 shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-6 py-2.5 text-xs md:text-sm font-semibold text-white shadow-md transition hover:bg-sky-600"
              >
                Book an appointment
              </Link>

              {/* Slider Dots */}
              <div className="mt-7 flex items-center gap-2.5">
                {doctors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDoctor(index)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      activeDoctor === index
                        ? "bg-sky-500 scale-110"
                        : "border border-gray-400 bg-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FACILITIES SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-lg! md:text-xl!">Our Clinic</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-1 mb-3 leading-tight">
              <span className="text-pink-500">State-of-the-Art</span>{" "}
              <span className="text-sky-500">Facilities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Step inside our modern, welcoming clinic designed for your comfort
              and equipped with cutting-edge dental technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="md:col-span-2 md:row-span-2">
              <img
                src="/images/gallery/clinic-1.png"
                alt="Modern Treatment Room"
                className="w-full h-full min-h-[300px] object-cover rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] border border-sky-100"
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
                  className="w-full h-48 object-cover rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.01] border border-sky-100"
                />
              </div>
            ))}

            <div className="bg-gradient-to-br from-sky-500 via-sky-600 to-blue-600 rounded-2xl p-6 flex flex-col justify-center items-center text-white shadow-lg">
              <span className="text-4xl font-extrabold">16+</span>
              <span className="text-white/90 text-sm mt-2 font-medium">
                Years of Excellence
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
