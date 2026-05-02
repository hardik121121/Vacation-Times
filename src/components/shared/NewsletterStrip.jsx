import { useState } from 'react'
import { MdCheckCircle } from 'react-icons/md'

export default function NewsletterStrip() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-teal py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Get Travel Inspiration in Your Inbox
        </h2>
        <p className="text-white/80 mt-2 sm:mt-3 text-base sm:text-lg">
          Exclusive deals, destination guides, and travel tips — delivered monthly.
        </p>
        {submitted ? (
          <div className="mt-6 sm:mt-8 bg-white/20 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-5 flex flex-col items-center gap-2">
            <MdCheckCircle className="w-10 h-10 text-white" />
            <p className="text-white font-semibold text-base sm:text-lg">Thank you for subscribing!</p>
            <p className="text-white/80 text-sm">We'll be in your inbox soon with amazing travel inspiration.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 sm:px-5 py-3 rounded-full text-brown bg-white placeholder-brown-medium focus:outline-none focus:ring-2 focus:ring-amber min-h-[48px]"
            />
            <button
              type="submit"
              className="bg-amber hover:bg-amber-light text-white px-6 sm:px-7 py-3 rounded-full font-semibold transition-colors whitespace-nowrap min-h-[48px]"
            >
              Subscribe
            </button>
          </form>
        )}
        <p className="text-white/60 text-xs mt-3 sm:mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
