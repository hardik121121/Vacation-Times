import { useState, useRef } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'
import Toast from '../components/shared/Toast'

const contactDetails = [
  { Icon: MdPhone,      label: 'Call Us',       value: '+91 98370 89181',           href: 'tel:+919837089181' },
  { Icon: MdEmail,      label: 'Email',          value: 'vivek@vacationtimes.co.in', href: 'mailto:vivek@vacationtimes.co.in' },
  { Icon: MdLocationOn, label: 'Address',        value: '95 Gwalior Road, Agra, UP' },
  { Icon: MdAccessTime, label: 'Hours',          value: 'Mon–Sat: 9 AM – 7 PM IST' },
]

const socials = [
  { name: 'Facebook',    Icon: FaFacebook,  href: 'https://www.facebook.com/people/Vacation-time/61587861606824/' },
  { name: 'Instagram',   Icon: FaInstagram, href: 'https://www.instagram.com/vacationtimes.co/' },
  { name: 'WhatsApp',    Icon: FaWhatsapp,  href: 'https://wa.me/919837089181' },
  { name: 'X (Twitter)', Icon: FaXTwitter,  href: 'https://x.com/CoVacationtimes' },
  { name: 'LinkedIn',    Icon: FaLinkedin,  href: 'https://www.linkedin.com/in/vacation-times/' },
]


const initialForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]     = useState(initialForm)
  const [toast, setToast]   = useState(false)
  const [errors, setErrors] = useState({})

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const msg = [
      `*Travel Enquiry – Vacation Times*`, ``,
      `*Name:* ${form.name}`, `*Email:* ${form.email}`,
      `*Phone:* ${form.phone || 'Not provided'}`,
      ``, `*Message:*`, form.message,
    ].join('\n')
    try { window.open(`https://wa.me/919837089181?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer') } catch (_) {}
    setForm(initialForm)
    setToast(true)
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const inputClass = (field) =>
    `w-full px-3 py-2.5 rounded-lg border text-brown bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal transition-all text-sm ${
      errors[field] ? 'border-red-400' : 'border-cream-dark focus:border-teal'
    }`

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          minHeight: '82vh',
          backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brown/60" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto">
          <span className="inline-block text-teal-light text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            ✦ &nbsp;Vacation Times&nbsp; ✦
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
            Let's Start Your<br />Adventure!
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8">
            Tell us about your dream destination and we'll craft a personalised journey just for you.
          </p>
          <a href="tel:+919837089181" className="inline-flex items-center justify-center bg-amber hover:bg-amber-light text-white font-semibold px-10 py-3.5 rounded-full transition-colors text-sm sm:text-base min-h-[48px]">
              Call Us
            </a>
        </div>
      </section>

      {/* ── Page body ── */}
      <section ref={formRef} className="bg-cream py-12 sm:py-14 lg:py-16 scroll-mt-16 overflow-x-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

          {/* ── Single contact card ── */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* Form + Map grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left — Form */}
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-1">Get in Touch</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown mb-1">Send Us a Message</h2>
                <div className="w-10 h-1 bg-amber rounded-full mb-6" />

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brown-light mb-1.5">Full Name</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className={inputClass('name')} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brown-light mb-1.5">Email Address <span className="text-red-400">*</span></label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className={inputClass('email')} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brown-light mb-1.5">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className={inputClass('phone')} />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brown-light mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your dream trip..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brown hover:bg-brown-light text-white font-bold py-3.5 rounded-lg transition-colors text-sm tracking-widest uppercase min-h-[48px] mt-1"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right — Map */}
              <div className="flex flex-col p-6 sm:p-8 lg:p-10 lg:border-l border-cream-dark bg-cream/40">
                <p className="text-teal text-xs font-semibold tracking-[0.2em] uppercase mb-1">Our Location</p>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-brown mb-4">Find Us Here</h3>
                {/* Map with office photo inset */}
                <div className="relative flex-1 min-h-64 sm:min-h-72 lg:min-h-0 rounded-xl overflow-hidden border border-cream-dark shadow-md">
                  <iframe
                    title="Vacation Times Office Location"
                    src="https://maps.google.com/maps?q=95+Gwalior+Road+Naulakha+Agra+UP+282001+India&output=embed&z=15"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {/* Office photo inset overlay */}
                  <div className="absolute top-3 right-3 w-28 sm:w-36 h-20 sm:h-24 rounded-lg overflow-hidden shadow-2xl border-2 border-white ring-1 ring-black/10 z-10">
                    <img
                      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80"
                      alt="Vacation Times office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Info bar (inside card, below divider) ── */}
            <div className="border-t border-cream-dark px-6 sm:px-8 lg:px-10 py-5 space-y-4 lg:space-y-0">
              {/* Contact details — 2 cols on mobile, 4 on desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {contactDetails.map(({ Icon, label, value, href }) => (
                  <div key={label}>
                    <p className="text-xs font-bold text-brown mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-brown-medium text-xs hover:text-teal transition-colors break-all">{value}</a>
                    ) : (
                      <p className="text-brown-medium text-xs">{value}</p>
                    )}
                  </div>
                ))}
              </div>
              {/* Social icons — always visible, left-aligned on mobile */}
              <div className="flex gap-2 pt-1 lg:pt-0 lg:justify-end">
                {socials.map(({ name, Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-8 h-8 rounded-full bg-brown hover:bg-teal flex items-center justify-center text-white transition-colors flex-shrink-0"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

          </div>{/* end contact card */}
        </div>
      </section>

      <Toast
        show={toast}
        message="Message opened in WhatsApp — tap Send to reach us!"
        onClose={() => setToast(false)}
      />
    </>
  )
}
