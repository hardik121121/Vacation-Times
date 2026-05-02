import { FaQuoteLeft, FaStar } from 'react-icons/fa6'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-brown-light rounded-2xl p-6 flex flex-col">
      <FaQuoteLeft className="w-8 h-8 text-teal mb-3 flex-shrink-0" />
      <p className="text-cream/85 text-sm leading-relaxed flex-1">{testimonial.review}</p>
      <div className="flex mt-3 mb-4 gap-0.5">
        {[1, 2, 3, 4, 5].map(i => (
          <FaStar key={i} className="w-4 h-4 text-amber" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-teal/40 flex-shrink-0"
        />
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-cream/60 text-xs">{testimonial.location}</p>
          <p className="text-teal-light text-xs">{testimonial.trip}</p>
        </div>
      </div>
    </div>
  )
}
