"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pb-24 md:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/indiagate.png"
          alt="India Gate Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#EAB308]/60 via-[#F97316]/50 to-[#14B8A6]/60 mix-blend-multiply" />

      <div className="container mx-auto px-6 md:px-12 pt-32 z-10">
        <div className="flex flex-col items-start gap-10 max-w-4xl">
          
          {/* Title */}
          <div className="flex flex-col items-start">
            {/* Mobile */}
            <h1 className="md:hidden mt-6 text-white text-4xl font-bold leading-tight drop-shadow-lg">
              KCD Delhi 2026
            </h1>

            {/* Desktop */}
            <h1 className="hidden md:block text-white text-6xl md:text-8xl font-bold leading-tight drop-shadow-lg px-2 py-4">
              KCD
              <br />
              Delhi
              <br />
              2026
            </h1>
          </div>

          {/* Thank You Message Card */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/40 rounded-3xl p-8 md:p-10 shadow-2xl max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              🎉 Thank You for Joining Us!
            </h2>

            <p className="text-white/90 text-base md:text-lg leading-relaxed">
              KCD Delhi 2026 was an incredible experience made possible by our
              amazing speakers, sponsors, volunteers, and community members.
            </p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed mt-4">
              Your energy, curiosity, and collaboration truly made this event
              unforgettable. We’re grateful to have shared this journey with you.
            </p>

            <div className="mt-6">
              <p className="text-white font-semibold text-lg">
                See you at the next one 🚀
              </p>
            </div>
          </div>

          {/* Optional Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-wrap">
            <Link
              href="#speakers"
              className="bg-[#0f172a] text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-[#0f172a]/90 transition-colors shadow-lg w-full sm:w-auto text-center"
            >
              View Speakers
            </Link>

            <Link
              href="#agenda"
              className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg w-full sm:w-auto backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
            >
              View Agenda
            </Link>

            <a
              href="https://community.cncf.io/events/details/cncf-kcd-new-delhi-presents-kcd-new-delhi-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/80 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg w-full sm:w-auto backdrop-blur-sm text-center hover:bg-white/10 transition-colors"
            >
              Official KCD Page
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}