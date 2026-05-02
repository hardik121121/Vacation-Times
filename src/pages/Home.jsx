import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiHeadphones, FiChevronLeft, FiChevronRight,
  FiWifi, FiFeather, FiTruck, FiBriefcase,
} from 'react-icons/fi'
import { FaStar, FaBed, FaDumbbell } from 'react-icons/fa6'
import { MdRestaurant, MdPool } from 'react-icons/md'
import { packages } from '../data/packages'
import { destinations } from '../data/destinations'
import PackageCard from '../components/shared/PackageCard'
import DestinationCard from '../components/shared/DestinationCard'



const hotelStays = [
  { city: 'Agra',      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80' },
  { city: 'Goa',       image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80' },
  { city: 'Dubai',     image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80' },
  { city: 'New York',  image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&q=80' },
  { city: 'Jaipur',    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=400&q=80' },
  { city: 'Maldives',  image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80' },
  { city: 'Bangkok',   image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=400&q=80' },
  { city: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80' },
  { city: 'Paris',     image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80' },
  { city: 'Shimla',    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80' },
]

const facilities = [
  { Icon: FaBed,        color: '#8B5CF6', title: 'Luxury Rooms & Suites',     desc: 'Elegant designs, premium bedding.' },
  { Icon: MdRestaurant, color: '#F59E0B', title: 'Multicuisine Dining',       desc: 'Gourmet restaurants & room service.' },
  { Icon: MdPool,       color: '#06B6D4', title: 'Rooftop & Infinity Pools',  desc: 'Stunning views and relaxation.' },
  { Icon: FaDumbbell,   color: '#EF4444', title: 'Modern Fitness Center',     desc: 'State-of-the-art gym equipment.' },
  { Icon: FiFeather,    color: '#10B981', title: 'Spa & Wellness',            desc: 'Massage, sauna & rejuvenation.' },
  { Icon: FiWifi,       color: '#3B82F6', title: 'High-Speed Free Wi-Fi',     desc: 'Stay connected everywhere.' },
  { Icon: FiTruck,      color: '#F97316', title: 'Valet & Airport Transfers', desc: 'Seamless travel logistics.' },
  { Icon: FiBriefcase,  color: '#6366F1', title: 'Meeting & Event Spaces',    desc: 'Versatile venues for business.' },
]

const testimonials = [
  { id: 1, name: 'Sarah K.',  date: 'Nov. 2024', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', quote: 'Vacation Times turned our dream honeymoon into a reality! Every detail was seamlessly planned and executed.' },
  { id: 2, name: 'Rajesh M.', date: 'Dec. 2024', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80', quote: 'The Bali trip was absolutely magical. The team handled everything perfectly — highly recommend!' },
  { id: 3, name: 'Priya S.',  date: 'Jan. 2025', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80', quote: 'Best family vacation we\'ve ever had. Switzerland was breathtaking and the service was impeccable.' },
  { id: 4, name: 'Amit T.',   date: 'Feb. 2025', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80', quote: 'Vietnam trip exceeded all expectations. The local experiences curated by the team were outstanding.' },
  { id: 5, name: 'Neha R.',   date: 'Mar. 2025', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100&q=80', quote: 'The attention to detail and personal touches made our anniversary trip truly unforgettable.' },
]

export default function Home() {
  const [tIdx, setTIdx] = useState(0)
  const total = testimonials.length
  const prev = () => setTIdx(i => (i === 0 ? total - 1 : i - 1))
  const next = () => setTIdx(i => (i === total - 1 ? 0 : i + 1))
  const visible = [0, 1, 2].map(o => testimonials[(tIdx + o) % total])


  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/VIDEO-2026-05-02-13-42-08.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-brown/55" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="text-teal-light text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
              Welcome to Vacation Times
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Crafting Journeys<br />That Last a Lifetime
            </h1>
            <div className="w-16 h-1 bg-amber mt-5 rounded-full" />
            <p className="text-white/80 mt-5 text-sm sm:text-base leading-relaxed max-w-md">
              From handpicked destinations to personalised itineraries — your perfect escape is just one call away.
            </p>
            <div className="mt-8 flex flex-col xs:flex-row gap-3">
              <Link
                to="/packages"
                className="bg-teal hover:bg-teal-dark text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm text-center min-h-[44px] flex items-center justify-center"
              >
                Explore Packages
              </Link>
              <Link
                to="/contact"
                className="bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm text-center min-h-[44px] flex items-center justify-center"
              >
                Plan My Trip
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Destinations ── */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">Where to Go</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown uppercase">Top Destinations</h2>
            <div className="w-14 sm:w-16 h-1 bg-amber mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {destinations.slice(0, 4).map(dest => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/packages"
              className="inline-block bg-brown hover:bg-brown-light text-white font-semibold px-7 sm:px-8 py-3 rounded-full transition-colors text-sm sm:text-base"
            >
              Explore All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Packages ── */}
      <section className="bg-cream py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">Curated Trips</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown uppercase">Featured Travel Packages</h2>
            <div className="w-14 sm:w-16 h-1 bg-amber mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.slice(0, 3).map(p => <PackageCard key={p.id} pkg={p} />)}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              to="/packages"
              className="inline-block border-2 border-brown text-brown hover:bg-brown hover:text-white font-semibold px-7 sm:px-8 py-3 rounded-full transition-colors text-sm sm:text-base"
            >
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hotel Stays & Facilities ── */}
      <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden" style={{ backgroundColor: '#FDFAF4' }}>

        {/* Cityscape silhouette watermark */}
        <svg className="absolute bottom-0 left-0 w-full pointer-events-none" viewBox="0 0 1200 140" preserveAspectRatio="none" style={{ height: '140px', opacity: 0.06 }}>
          <path d="M0,140 L0,110 L40,110 L40,85 L55,85 L55,65 L65,65 L65,45 L75,45 L75,65 L85,65 L85,85 L100,85 L100,70 L115,70 L115,50 L122,50 L122,35 L130,35 L130,50 L137,50 L137,70 L155,70 L155,90 L175,90 L175,60 L185,60 L185,30 L193,30 L193,15 L200,15 L200,30 L207,30 L207,60 L220,60 L220,80 L240,80 L240,55 L255,55 L255,75 L270,75 L270,50 L280,50 L280,30 L288,30 L288,15 L295,15 L295,30 L302,30 L302,50 L315,50 L315,75 L330,75 L330,90 L350,90 L350,65 L365,65 L365,45 L375,45 L375,25 L382,25 L382,10 L390,10 L390,25 L397,25 L397,45 L410,45 L410,65 L425,65 L425,85 L445,85 L445,60 L458,60 L458,40 L468,40 L468,60 L480,60 L480,80 L500,80 L500,55 L510,55 L510,35 L518,35 L518,20 L526,20 L526,35 L534,35 L534,55 L548,55 L548,75 L565,75 L565,55 L578,55 L578,70 L595,70 L595,50 L605,50 L605,30 L613,30 L613,15 L620,15 L620,30 L628,30 L628,50 L642,50 L642,70 L658,70 L658,85 L678,85 L678,60 L690,60 L690,40 L698,40 L698,55 L710,55 L710,75 L728,75 L728,55 L740,55 L740,35 L748,35 L748,20 L756,20 L756,35 L764,35 L764,55 L778,55 L778,75 L795,75 L795,90 L815,90 L815,65 L828,65 L828,45 L836,45 L836,28 L844,28 L844,12 L851,12 L851,28 L858,28 L858,45 L870,45 L870,65 L885,65 L885,80 L905,80 L905,58 L916,58 L916,38 L924,38 L924,58 L936,58 L936,75 L952,75 L952,55 L962,55 L962,38 L970,38 L970,22 L978,22 L978,38 L986,38 L986,55 L1000,55 L1000,75 L1015,75 L1015,90 L1032,90 L1032,68 L1042,68 L1042,48 L1050,48 L1050,30 L1058,30 L1058,48 L1066,48 L1066,68 L1080,68 L1080,85 L1098,85 L1098,62 L1108,62 L1108,42 L1116,42 L1116,60 L1128,60 L1128,80 L1145,80 L1145,95 L1160,95 L1160,108 L1180,108 L1180,118 L1200,118 L1200,140 Z"
                fill="#B45309"/>
        </svg>

        {/* Compass rose — bottom right */}
        <svg className="absolute bottom-6 right-6 w-24 h-24 pointer-events-none" viewBox="0 0 80 80" style={{ opacity: 0.09 }}>
          <circle cx="40" cy="40" r="36" fill="none" stroke="#B45309" strokeWidth="0.8"/>
          <circle cx="40" cy="40" r="24" fill="none" stroke="#B45309" strokeWidth="0.6"/>
          <circle cx="40" cy="40" r="4" fill="none" stroke="#B45309" strokeWidth="0.8"/>
          <line x1="40" y1="4" x2="40" y2="76" stroke="#B45309" strokeWidth="0.6"/>
          <line x1="4" y1="40" x2="76" y2="40" stroke="#B45309" strokeWidth="0.6"/>
          <line x1="14" y1="14" x2="66" y2="66" stroke="#B45309" strokeWidth="0.4"/>
          <line x1="66" y1="14" x2="14" y2="66" stroke="#B45309" strokeWidth="0.4"/>
          <polygon points="40,4 37,20 40,26 43,20" fill="#B45309"/>
          <polygon points="40,76 37,60 40,54 43,60" fill="#B45309" opacity="0.5"/>
          <polygon points="4,40 20,37 26,40 20,43" fill="#B45309" opacity="0.5"/>
          <polygon points="76,40 60,37 54,40 60,43" fill="#B45309"/>
        </svg>

        <div className="max-w-7xl mx-auto relative z-10 space-y-14 sm:space-y-16">

          {/* ── Section 1: Hotel Stays ── */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown mb-8">
              Explore Hotel Stays
            </h2>

            <div className="overflow-hidden">
              <div className="flex gap-4" style={{ animation: 'marquee 35s linear infinite', width: 'max-content' }}>
                {[...hotelStays, ...hotelStays].map((stay, i) => (
                  <div
                    key={i}
                    className="relative rounded-3xl overflow-hidden flex-shrink-0"
                    style={{ width: '200px', height: '280px' }}
                  >
                    <img
                      src={stay.image}
                      alt={stay.city}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-brown/20 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-white font-heading font-bold text-base drop-shadow">
                      {stay.city}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Section 2: Facilities ── */}
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown mb-8">
              Facilities Available for Your Stay
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {facilities.map(({ Icon, color, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
                  style={{ border: '1px solid rgba(232,224,208,0.9)' }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2 flex-shrink-0" style={{ backgroundColor: `${color}18` }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <p className="font-heading font-bold text-brown text-[10px] sm:text-xs uppercase leading-snug">
                    {title}
                  </p>
                  <p className="text-brown-medium text-[9px] sm:text-[10px] italic leading-relaxed mt-1">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-cream py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">Happy Travellers</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-brown uppercase">What Our Travellers Say</h2>
            <div className="w-14 sm:w-16 h-1 bg-amber mx-auto mt-3 rounded-full" />
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={prev}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-cream-dark shadow-sm hover:bg-teal hover:border-teal hover:text-white text-brown-medium transition-all flex items-center justify-center"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {visible.map((t, i) => (
                <div key={`${t.id}-${i}`} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-cream-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(s => <FaStar key={s} className="w-3.5 h-3.5 text-amber" />)}
                    </div>
                  </div>
                  <p className="text-brown-medium text-sm leading-relaxed italic">"{t.quote}"</p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-cream-dark">
                    <p className="font-semibold text-brown text-sm">{t.name}</p>
                    <p className="text-brown-medium text-xs">{t.date}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={next}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-cream-dark shadow-sm hover:bg-teal hover:border-teal hover:text-white text-brown-medium transition-all flex items-center justify-center"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === tIdx ? 'w-6 bg-teal' : 'w-2 bg-cream-dark'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Assistance Banner ── */}
      <section className="bg-teal py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <FiHeadphones className="w-10 h-10 sm:w-12 sm:h-12 text-white flex-shrink-0 hidden sm:block" />
            <div>
              <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-snug">
                Your Dream Trip, Crafted Just for You
              </h2>
              <p className="text-white/80 text-sm mt-1">Get a personalised itinerary tailored to your dates, budget & style.</p>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:+919837089181"
              className="bg-brown hover:bg-brown-light text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap text-center min-h-[44px] flex items-center justify-center"
            >
              +91 98370 89181
            </a>
            <a
              href="https://wa.me/919837089181"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-cream text-brown font-semibold px-6 py-3 rounded-full transition-colors text-sm whitespace-nowrap text-center min-h-[44px] flex items-center justify-center"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
