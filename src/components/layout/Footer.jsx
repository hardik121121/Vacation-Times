import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'Facebook', Icon: FaFacebook, href: 'https://www.facebook.com/people/Vacation-time/61587861606824/' },
  { label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/vacationtimes.co/' },
  { label: 'WhatsApp', Icon: FaWhatsapp, href: 'https://wa.me/919837089181' },
  { label: 'X', Icon: FaXTwitter, href: 'https://x.com/CoVacationtimes' },
  { label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/vacation-times/' },
]

const contactItems = [
  { Icon: MdLocationOn, text: '95, Gwalior Road, Naulakha, Agra, UP - 282001' },
  { Icon: MdPhone, text: '+91 98370 89181', href: 'tel:+919837089181' },
  { Icon: MdEmail, text: 'vivek@vacationtimes.co.in', href: 'mailto:vivek@vacationtimes.co.in' },
  { Icon: MdAccessTime, text: 'Mon–Sat: 9AM – 7PM IST' },
]

export default function Footer() {
  return (
    <footer className="bg-brown text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex mb-4">
            <img src="/logo.png" alt="Vacation Times" className="h-12 w-auto object-contain" />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Crafting unforgettable travel experiences for over 7 years. Your journey, our passion.
          </p>
          <div className="flex gap-3 mt-5 flex-wrap">
            {socials.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-teal hover:border-teal transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-white font-semibold mb-4 text-base">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm hover:text-teal-light transition-colors flex items-center gap-1.5">
                  <span className="text-teal text-xs">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-white font-semibold mb-4 text-base">Contact Us</h4>
          <ul className="space-y-3">
            {contactItems.map(({ Icon, text, href }) => (
              <li key={text} className="flex gap-2.5 items-start text-sm">
                <Icon className="w-4 h-4 text-teal-light flex-shrink-0 mt-0.5" />
                {href ? (
                  <a href={href} className="hover:text-teal-light transition-colors break-all">{text}</a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50 text-center sm:text-left">
          <p>© 2026 <a href="https://vacationtimes.co.in/" target="_blank" rel="noopener noreferrer" className="text-teal-light hover:underline">Vacation Times</a>. All rights reserved.</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/privacy" className="hover:text-teal-light transition-colors">Privacy</Link>
            <span className="text-cream/30">|</span>
            <Link to="/terms" className="hover:text-teal-light transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
