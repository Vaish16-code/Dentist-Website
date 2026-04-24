"use client";

import { useEffect, useState, FormEvent } from "react";
import { services } from "@/data/services";

type FormStatus = {
  type: "success" | "error";
  message: string;
};

type FormDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  service: string;
  message: string;
};

export default function AppointmentPopup() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);

  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  });

  // Show after 1 sec (every refresh)
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formspreeEndpoint) {
      setFormStatus({
        type: "error",
        message: "Form is not configured.",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus(null);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Appointment - ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setFormStatus({
        type: "success",
        message: "We’ll contact you shortly!",
      });

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setOpen(false), 2000);
    } catch {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3">

      {/* Modal */}
      <div className="relative w-full max-w-4xl grid md:grid-cols-2 gap-8 p-6 md:p-10 rounded-3xl shadow-2xl
        bg-white/30 backdrop-blur-xl border border-white/20">

        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/30 text-white flex items-center justify-center text-xl hover:bg-white/50 transition"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-center justify-center">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/home/babypic.jpeg"
              alt="Dental Care"
              className="w-[340px] h-[400px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center text-white">

<p className="text-xl font-bold mb-2 drop-shadow-md">
  <span className="text-pink-500">Book</span>{" "}
  <span className="text-sky-300">Appointment</span>
</p>

          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Healthy Smiles Begin with{" "}
            <span className="text-sky-300">Gentle Care</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                required
              />
              <input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                required
              />

              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-1 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-sky-400 outline-none text-sm"
                required
              >
                <option value="" className="text-black">Select Treatment</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title} className="text-black">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              placeholder="Message (Optional)"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-sky-400 outline-none text-sm"
            />

            {formStatus && (
              <p
                className={`text-sm ${
                  formStatus.type === "success"
                    ? "text-green-300"
                    : "text-red-300"
                }`}
              >
                {formStatus.message}
              </p>
            )}

            <button
              disabled={isSubmitting}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold text-sm transition shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Book Appointment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}