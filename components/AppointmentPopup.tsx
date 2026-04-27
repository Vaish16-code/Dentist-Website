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

  const closePopup = () => {
    setOpen(false);
  };

  // Show after 1 sec (every refresh)
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Allow keyboard dismiss when popup is open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

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
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/45 backdrop-blur-sm p-3 sm:p-4 md:p-6"
      onClick={closePopup}
    >
      <div className="mx-auto flex min-h-full items-center justify-center">
        {/* Modal */}
        <div
          className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 rounded-2xl md:rounded-3xl border border-white/20 bg-white/30 p-4 sm:p-5 md:p-8 lg:p-10 shadow-2xl backdrop-blur-xl"
          onClick={(event) => event.stopPropagation()}
        >

          {/* Close Button */}
          <button
            type="button"
            onClick={closePopup}
            aria-label="Close appointment popup"
            className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/30 text-white text-xl transition hover:bg-white/50 sm:right-4 sm:top-4"
          >
            ✕
          </button>

          {/* LEFT IMAGE */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[340px] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
              <img
                src="/images/home/babypic.jpeg"
                alt="Dental Care"
                className="h-52 w-full object-cover sm:h-64 lg:h-[400px]"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center text-white">

            <p className="mb-2 text-lg sm:text-xl font-bold drop-shadow-md">
              <span className="text-pink-500">Book</span>{" "}
              <span className="text-sky-300">Appointment</span>
            </p>

            <h2 className="mb-5 sm:mb-6 text-3xl sm:text-4xl font-bold leading-tight">
              Healthy Smiles Begin with{" "}
              <span className="text-sky-300">Gentle Care</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="w-full px-3 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:ring-2 focus:ring-sky-400 outline-none text-sm"
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
                rows={4}
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
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold text-sm transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}