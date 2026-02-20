"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Train, Car, Navigation, Plane, AlertCircle, ArrowLeft } from "lucide-react";

export default function HowToReach() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/chandnichowk.png"
          alt="Chandni Chowk Background"
          fill
          className="object-cover object-center opacity-40"
          quality={100}
        />
      </div>
      {/* Background Overlay */}
      <div className="fixed inset-0 -z-10 bg-[#f8e1d4]/80 mix-blend-overlay" />

      {/* Header */}
      <div className="relative py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            How to Reach
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            Hotel Holiday Inn Aerocity is located inside the Aerocity Hospitality District, 
            near Indira Gandhi International Airport (T3).
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 pb-20">
        {/* Venue Info Card */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 md:p-10 shadow-xl mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#0F516B] rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Holiday Inn New Delhi International Airport
              </h2>
              <p className="text-gray-600">
                Aerocity Hospitality District, New Delhi - 110037
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Nearest Metro: <span className="font-semibold text-[#0F516B]">Delhi Aerocity</span> (Airport Express Line)
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/A89YMpjsK3h69xgV9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0F516B] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0F516B]/90 transition-all flex items-center gap-2 shadow-lg"
            >
              <Navigation className="w-5 h-5" />
              Open Maps
            </a>
          </div>
        </div>

        {/* Transport Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Metro Section */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-[#0F516B]/90 p-5">
              <div className="flex items-center gap-3">
                <Train className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">🚇 Via Metro</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-[#0F516B] text-white rounded-full flex items-center justify-center font-bold text-xs">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Reach New Delhi Metro Station</h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Interchange to Orange line (Airport Express). Follow signage.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-[#0F516B] text-white rounded-full flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Board Train Towards Airport</h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Take train to Dwarka Sector 21. Get down at <span className="font-semibold text-[#0F516B]">Delhi Aerocity</span>.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-[#0F516B] text-white rounded-full flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Walk to Hotel</h4>
                  <p className="text-gray-600 text-xs mt-0.5">
                    Exit from <span className="font-semibold">Gate 01</span>. Just <span className="font-semibold text-[#0F516B]">350m</span> walk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cab Section */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-[#0F516B]/90 p-5">
              <div className="flex items-center gap-3">
                <Car className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">🚕 Via Cab</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white/50 rounded-xl p-3">
                <p className="text-xs text-gray-500 mb-1">Enter destination:</p>
                <p className="font-semibold text-gray-900 text-sm">
                  Holiday Inn New Delhi International Airport – Aerocity
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#0F516B]">✓</span>
                  <span className="text-gray-600">Set drop location as Hotel Entrance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0F516B]">✓</span>
                  <span className="text-gray-600">Hotel is inside Aerocity near IGI T3</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0F516B]">✓</span>
                  <span className="text-gray-600">Keep ID ready for security check</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Airport Section - Full Width */}
          <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-xl md:col-span-2">
            <div className="bg-[#0F516B]/90 p-5">
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">✈️ From Airport</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4">From Terminal 3:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-xl p-4 flex items-center gap-3">
                  <Train className="w-6 h-6 text-[#0F516B]" />
                  <div>
                    <span className="font-semibold text-gray-900">Airport Metro</span>
                    <p className="text-gray-600 text-sm">Get down at Delhi Aerocity station, then 350m walk to hotel</p>
                  </div>
                </div>
                <div className="bg-white/50 rounded-xl p-4 flex items-center gap-3">
                  <Car className="w-6 h-6 text-[#0F516B]" />
                  <div>
                    <span className="font-semibold text-gray-900">Cab (Ola/Uber)</span>
                    <p className="text-gray-600 text-sm">Direct to Holiday Inn Aerocity (~5-10 mins)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 md:p-8 shadow-xl mb-10">
          <div className="flex items-center gap-3 mb-5">
            <AlertCircle className="w-6 h-6 text-[#0F516B]" />
            <h3 className="text-xl font-bold text-gray-900">📌 Important Notes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Keep government ID handy (required at hotel security)",
              "Aerocity is a secured zone — vehicle checks may occur",
              "Look for signage: Holiday Inn – IHG Group",
              "Google Maps works accurately inside Aerocity",
              "Approach Aerocity helpdesk if needed",
              "Autos are generally not permitted in Aerocity area",
            ].map((note, index) => (
              <div key={index} className="flex items-start gap-2 bg-white/40 rounded-xl p-3">
                <span className="text-[#0F516B] font-bold">•</span>
                <span className="text-gray-700 text-sm">{note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Link Card */}
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-6 shadow-xl mb-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📍 Get Directions</h3>
          <a
            href="https://maps.app.goo.gl/A89YMpjsK3h69xgV9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0F516B] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#0F516B]/90 transition-all shadow-lg"
          >
            <Navigation className="w-5 h-5" />
            Open in Google Maps
          </a>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-white/70 transition-all shadow-lg border border-white/40"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

