import { useState } from 'react'
import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'
import PageHero from '../components/shared/PageHero'
import DestinationCard from '../components/shared/DestinationCard'
import FilterTabs from '../components/shared/FilterTabs'
import AssistanceBanner from '../components/shared/AssistanceBanner'

const regions = [
  { label: 'All Regions', value: 'all' },
  { label: 'Asia', value: 'asia' },
  { label: 'Europe', value: 'europe' },
  { label: 'Americas', value: 'americas' },
  { label: 'Africa', value: 'africa' },
]

export default function Destinations() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? destinations : destinations.filter(d => d.region === active)

  const tabsWithCount = regions.map(r => ({
    ...r,
    count: r.value === 'all' ? destinations.length : destinations.filter(d => d.region === r.value).length,
  }))

  return (
    <>
      <PageHero
        title="Our Destinations"
        subtitle="Explore the world's most captivating places"
        breadcrumbs={['Destinations']}
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-10 sm:py-14 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-brown-medium text-sm sm:text-base max-w-2xl mx-auto">
              From Asia's ancient temples to Africa's sweeping savannas — discover destinations that will take your breath away.
            </p>
          </div>

          <FilterTabs tabs={tabsWithCount} active={active} onChange={setActive} />

          <div key={active} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10">
            {filtered.map(d => <DestinationCard key={d.id} destination={d} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 sm:py-16 text-brown-medium">
              <p className="text-4xl mb-3">🌐</p>
              <p className="font-heading text-lg sm:text-xl">No destinations in this region yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-teal py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">Can't Decide Where to Go?</h2>
          <p className="text-white/80 mb-5 sm:mb-6 text-sm sm:text-base">Our travel experts will help you choose the perfect destination for your style and budget.</p>
          <Link to="/contact" className="inline-block bg-white text-teal font-semibold px-7 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-cream transition-colors text-sm sm:text-base">
            Talk to an Expert →
          </Link>
        </div>
      </section>

      <AssistanceBanner />
    </>
  )
}
