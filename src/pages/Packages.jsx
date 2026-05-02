import { FiPackage, FiPhone, FiCreditCard } from 'react-icons/fi'
import { FaHandsPraying } from 'react-icons/fa6'
import { packages } from '../data/packages'
import PackageCard from '../components/shared/PackageCard'
import AssistanceBanner from '../components/shared/AssistanceBanner'

const perks = [
  { Icon: FaHandsPraying, text: 'Pranaam Service Available' },
  { Icon: FiPackage,     text: 'Luggage Assistance' },
  { Icon: FiPhone,       text: '24/7 On-Trip Support' },
  { Icon: FiCreditCard,  text: 'Flexible Payment Plans' },
]

const featuredPackages = packages.filter(p => p.featured)
const standardPackages  = packages.filter(p => !p.featured)

export default function Packages() {
  return (
    <>
      {/* ── Page header ── */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-brown/60" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-teal-light text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2">
            Explore the World
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Travel Packages
          </h1>
          <div className="w-16 h-1 bg-amber mx-auto mt-3 rounded-full" />
          <p className="text-white/80 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Handcrafted itineraries for every traveller — from cultural escapes to island adventures.
          </p>
        </div>
      </section>

      {/* ── Packages grid ── */}
      <section className="bg-cream py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">

          {/* Featured row — 2 large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredPackages.map(p => (
              <PackageCard key={p.id} pkg={p} featured={true} />
            ))}
          </div>

          {/* Standard row — 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {standardPackages.map(p => (
              <PackageCard key={p.id} pkg={p} featured={false} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Perks strip ── */}
      <section className="bg-white py-8 sm:py-12 px-4 sm:px-6 border-t border-cream-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {perks.map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-teal" />
              </div>
              <p className="text-brown-medium text-xs sm:text-sm font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <AssistanceBanner />
    </>
  )
}
