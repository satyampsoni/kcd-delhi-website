"use client";

import Image from "next/image";

const images = [
  "/highlights/1.JPG",
  "/highlights/2.jpeg",
  "/highlights/3.JPG",
  "/highlights/4.JPG",
  "/highlights/5.JPG",
  "/highlights/6.JPG",
];

export default function Highlights() {
  return (
    <section className="relative w-full overflow-hidden py-24" id="highlights">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/jantar-mantar.svg"
          alt="Jantar Mantar Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-[2px]" />

      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Event Highlights
        </h2>
        <p className="text-white/80 mt-4 text-lg">
          Moments that made KCD Delhi 2026 unforgettable ✨
        </p>
      </div>

      {/* Floating Images */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll whitespace-nowrap px-6">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="relative min-w-[260px] h-[180px] md:min-w-[340px] md:h-[220px] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
            >
              <Image
                src={src}
                alt={`Highlight ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
