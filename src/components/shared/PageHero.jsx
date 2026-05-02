import { Link } from 'react-router-dom'

const DEFAULT_BG = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80'

export default function PageHero({ title, subtitle, backgroundImage, breadcrumbs = [] }) {
  const bg = backgroundImage || DEFAULT_BG
  return (
    <section
      className="relative h-48 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-brown/65" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 mt-1 sm:mt-2 text-sm sm:text-base md:text-lg max-w-xl">{subtitle}</p>
        )}
        <nav className="flex items-center flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm text-white/60 mt-2 sm:mt-3">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1 sm:gap-2">
              <span>›</span>
              <span className={i === breadcrumbs.length - 1 ? 'text-teal-light' : 'hover:text-white'}>
                {crumb}
              </span>
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
