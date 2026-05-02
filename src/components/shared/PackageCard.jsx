import { FaStar } from 'react-icons/fa6'
import { MdCheckCircle } from 'react-icons/md'

function StarRating({ rating }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <FaStar
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? 'text-amber' : 'text-gray-200'}`}
        />
      ))}
    </span>
  )
}

export default function PackageCard({ pkg, featured = false }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className={`overflow-hidden flex-shrink-0 ${featured ? 'h-44 sm:h-52 lg:h-44' : 'h-44 sm:h-48'}`}>
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title + duration */}
        <h3 className="font-heading text-lg sm:text-xl font-bold text-brown leading-snug">
          {pkg.name}
          <span className="text-brown-medium font-normal text-sm"> ({pkg.duration})</span>
        </h3>

        {/* Stars + reviews */}
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={pkg.rating} />
          <span className="text-xs text-brown-medium">{pkg.reviewCount} reviews</span>
        </div>

        {/* Highlights */}
        <ul className="mt-3 space-y-1.5 flex-1">
          {pkg.highlights.slice(0, 4).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-brown-light">
              <MdCheckCircle className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Price on request + CTA */}
        <div className="mt-5 pt-4 border-t border-cream-dark">
          <div className="flex justify-end mb-3">
            <span className="text-xs font-semibold text-teal bg-teal-50 border border-teal/20 px-3 py-1 rounded-full">
              Price on Request
            </span>
          </div>
          <a
            href="https://api.whatsapp.com/send/?phone=919837089181&text="
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-brown hover:bg-brown-light text-white py-2.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] text-center leading-[44px]"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
