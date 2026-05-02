import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="Vacation Times" className="h-9 sm:h-11 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors pb-0.5 whitespace-nowrap ${
                  isActive
                    ? 'text-teal border-b-2 border-teal'
                    : 'text-brown-medium hover:text-teal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/contact"
            className="hidden lg:block bg-teal hover:bg-teal-dark text-white text-sm font-semibold px-4 xl:px-5 py-2 rounded-full transition-colors whitespace-nowrap"
          >
            Book a Trip
          </Link>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2.5 min-w-[44px] min-h-[44px] items-center"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-5 sm:w-6 bg-brown transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-5 sm:w-6 bg-brown transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 sm:w-6 bg-brown transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden bg-white border-t border-cream-dark transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-4 sm:px-6 py-3 gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 px-3 rounded-lg text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                  isActive ? 'bg-teal/10 text-teal font-semibold' : 'text-brown-medium hover:bg-cream hover:text-teal'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 mb-1 bg-teal text-white text-sm font-semibold px-5 py-3 rounded-full text-center transition-colors hover:bg-teal-dark min-h-[48px] flex items-center justify-center"
          >
            Book a Trip
          </Link>
        </nav>
      </div>
    </header>
  )
}
