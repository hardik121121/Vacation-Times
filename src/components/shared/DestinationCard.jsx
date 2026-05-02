import { Link } from 'react-router-dom'

export default function DestinationCard({ destination }) {
  return (
    <div className="relative rounded-2xl overflow-hidden h-56 sm:h-64 md:h-72 group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/30 to-transparent" />

      <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full border border-white/30">
        Best: {destination.bestTime}
      </span>

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
        <p className="text-teal-light text-xs font-semibold tracking-widest uppercase">{destination.country}</p>
        <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mt-0.5">{destination.name}</h3>
        <p className="text-white/70 text-xs sm:text-sm mt-1 line-clamp-2">{destination.description}</p>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-1 text-teal-light text-sm font-semibold mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          Explore →
        </Link>
      </div>
    </div>
  )
}
