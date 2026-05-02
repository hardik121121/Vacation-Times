import { useState, useEffect, useCallback } from 'react'
import { FiInstagram, FiChevronLeft, FiChevronRight, FiMap, FiGlobe, FiShield } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa6'

import PageHero from '../components/shared/PageHero'
import AssistanceBanner from '../components/shared/AssistanceBanner'
import StaggerTestimonials from '../components/shared/StaggerTestimonials'

const founderImages = [
  { src: '/Vivek Kaushal/WhatsApp Image 2026-04-27 at 15.12.09 (1).jpeg', pos: 'center' },
  { src: '/Vivek Kaushal/WhatsApp Image 2026-04-27 at 15.12.09.jpeg',     pos: 'center' },
  { src: '/Vivek Kaushal/WhatsApp Image 2026-04-27 at 15.12.10 (1).jpeg', pos: 'center' },
  { src: '/Vivek Kaushal/WhatsApp Image 2026-04-27 at 15.12.11 (1).jpeg', pos: 'center' },
  { src: '/Vivek Kaushal/WhatsApp Image 2026-04-27 at 15.12.11 (2).jpeg', pos: 'center' },
]

function FounderCarousel() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(true)

  const goTo = useCallback((idx) => {
    setFading(false)
    setTimeout(() => {
      setCurrent(idx)
      setFading(true)
    }, 250)
  }, [])

  const prev = () => goTo(current === 0 ? founderImages.length - 1 : current - 1)
  const next = useCallback(() => goTo(current === founderImages.length - 1 ? 0 : current + 1), [current, goTo])

  useEffect(() => {
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [next])

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl group">
      <img
        key={current}
        src={founderImages[current].src}
        alt={`Vivek Kaushal — founder of Vacation Times`}
        style={{ objectPosition: founderImages[current].pos }}
        className={`w-full h-64 sm:h-80 lg:h-96 object-cover transition-opacity duration-500 ${fading ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Gradient label */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-3 px-4">
        <p className="text-white text-sm font-semibold">Vivek Kaushal</p>
        <p className="text-white/70 text-xs">Founder, Vacation Times</p>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-teal flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        <FiChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-teal flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        <FiChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-12 inset-x-0 flex justify-center gap-1.5">
        {founderImages.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}

const corporateClients = [
  { name: 'HDFC Bank',          logo: '/logos/hdfc.svg' },
  { name: 'ICICI Bank',         logo: '/logos/icici.svg' },
  { name: 'Reliance',           logo: '/logos/reliance.svg' },
  { name: 'Taj Hotels',         logo: '/logos/taj.png' },
  { name: 'Radisson Hotels',    logo: 'https://statics.radissonhotels.com/main/img/logo/radisson/rhg-logotype.svg' },
  { name: 'Benaras Udyog',      logo: 'https://www.benaraudyog.com/wp-content/uploads/2022/09/logo-2.svg' },
  { name: 'Yatharth Hospitals', logo: '/logos/yatharth.png' },
  { name: 'IndiGo Airlines',    logo: 'https://www.goindigo.in/content/dam/skyplus6e/in/en/assets/global/images/icons/favicon.png' },
]


export default function AboutUs() {
  return (
    <>
      <PageHero
        title="About Vacation Times"
        subtitle="7 years of turning travel dreams into lifelong memories"
        breadcrumbs={['About Us']}
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Our Story */}
      <section className="bg-cream py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 sm:mb-3">Our Story</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown mb-4 sm:mb-5">
              Born From a Passion for Discovery
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-amber rounded-full mb-6 sm:mb-8" />
            <ol className="relative border-l-2 border-cream-dark space-y-6 sm:space-y-7 ml-1">
              <li className="pl-6 sm:pl-7 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber flex-shrink-0 ring-4 ring-cream" />
                <p className="text-xs font-bold text-amber uppercase tracking-widest mb-1">The Beginning <span className="normal-case font-medium">(June 2019)</span></p>
                <p className="text-brown-medium text-sm leading-relaxed">
                  Founded by <span className="font-semibold text-brown">Vivek Kaushal</span> with a belief that extraordinary travel should be accessible to everyone — not just a privileged few.
                </p>
              </li>
              <li className="pl-6 sm:pl-7 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-teal flex-shrink-0 ring-4 ring-cream" />
                <p className="text-xs font-bold text-teal uppercase tracking-widest mb-1">Growing Trust</p>
                <p className="text-brown-medium text-sm leading-relaxed">
                  A small Agra boutique grew into one of <span className="font-semibold text-brown">India's most trusted travel brands</span>, serving families, luxury seekers, and adventurers.
                </p>
              </li>
              <li className="pl-6 sm:pl-7 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brown flex-shrink-0 ring-4 ring-cream" />
                <p className="text-xs font-bold text-brown uppercase tracking-widest mb-1">Curated Every Step</p>
                <p className="text-brown-medium text-sm leading-relaxed">
                  Every trip personally crafted — from <span className="font-semibold text-brown">off-the-beaten-path adventures</span> to bespoke luxury escapes — for thousands of happy travellers.
                </p>
              </li>
              <li className="pl-6 sm:pl-7 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-amber flex-shrink-0 ring-4 ring-cream" />
                <p className="text-xs font-bold text-amber uppercase tracking-widest mb-1">Today</p>
                <p className="text-brown-medium text-sm leading-relaxed">
                  A global network of <span className="font-semibold text-brown">trusted local partners</span> united by our commitment to authentic, responsible, and unforgettable travel.
                </p>
              </li>
            </ol>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <FounderCarousel />
            <div className="flex gap-3 justify-center">
              <a
                href="https://www.facebook.com/share/17iwuhHYDo/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-brown-medium hover:text-teal transition-colors border border-cream-dark rounded-full px-4 py-2 min-h-[40px]"
              >
                <FaFacebook className="w-4 h-4" /> Facebook
              </a>
              <a
                href="https://www.instagram.com/vivek_kaushal2001?igsh=dWN0NW02Y2FkNms="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-brown-medium hover:text-teal transition-colors border border-cream-dark rounded-full px-4 py-2 min-h-[40px]"
              >
                <FiInstagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Clients */}
      <section className="bg-white border-y border-cream-dark py-8 sm:py-10 overflow-hidden">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <p className="text-brown-medium text-xs font-semibold tracking-[0.25em] uppercase">Trusted by Leading Corporates</p>
        </div>
        <div className="relative">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white to-transparent" />

          <div className="flex items-center" style={{ animation: 'marquee 28s linear infinite' }}>
            {[...corporateClients, ...corporateClients].map((c, i) => (
              <img
                key={i}
                src={c.logo}
                alt={c.name}
                className="flex-shrink-0 mx-10 sm:mx-14 h-8 sm:h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Vacation Times */}
      <section className="bg-cream py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left — 3 bullet points */}
          <div className="w-full lg:w-1/2">
            <p className="text-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">Our Edge</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown mb-4">Why Vacation Times?</h2>
            <div className="w-14 h-1 bg-amber rounded-full mb-8" />

            <div className="space-y-8">

              {/* Point 1 — Curated Itineraries */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center">
                  <FiMap
                    className="w-8 h-8 text-teal"
                    style={{ animation: 'float 3s ease-in-out infinite' }}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brown mb-1">Curated Itineraries</h3>
                  <p className="text-brown-medium text-sm leading-relaxed">
                    Every journey is hand-crafted by travel experts who know each destination intimately — no cookie-cutter packages, only bespoke experiences tailored to you.
                  </p>
                </div>
              </div>

              {/* Point 2 — Trusted & Safe */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber/10 flex items-center justify-center">
                  <FiShield
                    className="w-8 h-8 text-amber"
                    style={{ animation: 'heartbeat 2s ease-in-out infinite' }}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brown mb-1">Safe &amp; Trusted</h3>
                  <p className="text-brown-medium text-sm leading-relaxed">
                    With verified local partners, 24/7 on-trip support, and a 7-year track record, your safety and satisfaction come first — always.
                  </p>
                </div>
              </div>

              {/* Point 3 — Global Reach */}
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brown/10 flex items-center justify-center">
                  <FiGlobe
                    className="w-8 h-8 text-brown"
                    style={{ animation: 'spin-slow 6s linear infinite' }}
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brown mb-1">Global Destinations</h3>
                  <p className="text-brown-medium text-sm leading-relaxed">
                    From the beaches of Bali to the peaks of Patagonia — we cover 120+ destinations across 6 continents, opening every corner of the world to you.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right — photo collage */}
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {/* Large image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                alt="Travel planning"
                className="w-full h-52 sm:h-64 lg:h-72 object-cover"
              />
            </div>
            {/* Two small images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=400&q=80"
                  alt="Adventure travel"
                  className="w-full h-32 sm:h-40 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=400&q=80"
                  alt="Scenic destination"
                  className="w-full h-32 sm:h-40 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Left — image */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/office.jpeg"
                alt="Vacation Times office"
                className="w-full h-64 sm:h-80 lg:h-[420px] object-cover"
              />
              {/* teal overlay badge */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-teal/90 to-transparent pt-16 pb-5 px-6">
                <p className="font-heading text-white font-bold text-lg sm:text-xl leading-snug">
                  "Every journey begins with a single dream."
                </p>
                <p className="text-white/70 text-xs mt-1">— Vivek Kaushal, Founder</p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="w-full lg:w-7/12">
            <p className="text-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">What Drives Us</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown mb-4">Mission &amp; Vision</h2>
            <div className="w-14 h-1 bg-amber rounded-full mb-8" />

            <div className="space-y-8">
              {/* Mission */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-teal/10 flex items-center justify-center">
                  <span className="text-teal text-lg">✦</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-brown mb-2">Our Mission</h3>
                  <p className="text-brown-medium leading-relaxed text-sm sm:text-base">
                    To connect people with the world through thoughtfully crafted travel experiences that inspire, transform, and create lasting memories — while respecting the cultures, communities, and environments we visit.
                  </p>
                </div>
              </div>

              {/* divider */}
              <div className="border-t border-cream-dark" />

              {/* Vision */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-amber/10 flex items-center justify-center">
                  <span className="text-amber text-lg">◈</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-brown mb-2">Our Vision</h3>
                  <p className="text-brown-medium leading-relaxed text-sm sm:text-base">
                    To be the world's most trusted travel partner — where every journey is a story worth telling. We envision a future where sustainable, conscious travel enriches both the traveller and the destination.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* What Our Customers Say */}
      <section className="bg-white py-12 sm:py-16 border-t border-cream-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">Happy Travellers</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown">What Our Customers Say</h2>
            <div className="w-14 sm:w-16 h-1 bg-amber mx-auto mt-3 rounded-full" />
          </div>
          <StaggerTestimonials />
        </div>
      </section>

      <AssistanceBanner />
    </>
  )
}
