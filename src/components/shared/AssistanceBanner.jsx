import { FiHeadphones } from 'react-icons/fi'

export default function AssistanceBanner() {
  return (
    <section className="bg-teal py-10 sm:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <FiHeadphones className="w-10 h-10 sm:w-12 sm:h-12 text-white flex-shrink-0 hidden sm:block" />
          <div>
            <h2 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white uppercase leading-snug">
              Your Dream Trip, Crafted Just for You
            </h2>
            <p className="text-white/80 text-sm mt-1">
              Get a personalised itinerary tailored to your dates, budget &amp; style.
            </p>
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
  )
}
