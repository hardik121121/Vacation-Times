import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiPlay } from 'react-icons/fi'
import { photos } from '../data/gallery'
import PageHero from '../components/shared/PageHero'

// Bento pattern for 3-col grid, repeating every 10 items:
// [span-2][span-1] · [1][1][1] · [1][span-2] · [1][1][1]
const WIDE = new Set([0, 6])

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxItems, setLightboxItems] = useState([])
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const allPhotos = photos.filter(p => p.type === 'photo')
  const allVideos = photos.filter(p => p.type === 'video')

  const openLightbox = (items, idx) => {
    setLightboxItems(items)
    setLightboxIdx(idx)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const prev = (e) => {
    e.stopPropagation()
    setLightboxIdx(i => (i === 0 ? lightboxItems.length - 1 : i - 1))
  }
  const next = (e) => {
    e.stopPropagation()
    setLightboxIdx(i => (i === lightboxItems.length - 1 ? 0 : i + 1))
  }

  const [primaryVideo, ...secondaryVideos] = allVideos

  return (
    <>
      <PageHero
        title="Travel Gallery"
        subtitle="A glimpse of the wonders that await you"
        breadcrumbs={['Gallery']}
        backgroundImage="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-cream py-10 sm:py-14 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* ── Two-column body ── */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8">

            {/* Left — bento photo grid (60%) */}
            <div className="lg:flex-[3] min-w-0">
              {/* Heading sits above photos */}
              <div className="mb-5 sm:mb-6">
                <p className="text-teal text-xs font-semibold tracking-widest uppercase mb-1">Photography</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold italic text-brown leading-tight">
                  Our World in Pictures
                </h2>
                <div className="w-10 h-0.5 bg-amber mt-2 rounded-full" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {allPhotos.map((photo, idx) => {
                  const wide = WIDE.has(idx % 10)
                  return (
                    <div
                      key={photo.id}
                      className={`relative group cursor-pointer rounded-xl overflow-hidden col-span-1 ${wide ? 'lg:col-span-2' : ''}`}
                      onClick={() => openLightbox(allPhotos, idx)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/45 transition-colors duration-300 flex items-end">
                        <p className="flex items-center gap-1 text-white text-xs font-medium px-2.5 pb-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FiMapPin className="w-3 h-3 flex-shrink-0" /> {photo.location}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right — video panel (40%) */}
            <div className="lg:flex-[2] min-w-0 flex flex-col gap-3">
              {/* Heading sits above videos */}
              <div className="mb-2 lg:text-right">
                <p className="text-teal text-xs font-semibold tracking-widest uppercase mb-1">Videography</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold italic text-brown leading-tight">
                  Stories in Motion
                </h2>
                <div className="w-10 h-0.5 bg-amber mt-2 rounded-full lg:ml-auto" />
              </div>
              {/* Primary large video */}
              {primaryVideo && (
                <div
                  className="relative group cursor-pointer rounded-xl overflow-hidden"
                  onClick={() => openLightbox(allVideos, 0)}
                >
                  <img
                    src={primaryVideo.poster}
                    alt={primaryVideo.alt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brown/50 group-hover:bg-brown/60 transition-colors duration-300">
                    <div className="absolute top-3 left-3">
                      <img src="/logo.png" alt="Vacation Times" className="h-6 w-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-teal/80 group-hover:bg-teal flex items-center justify-center transition-colors duration-300 shadow-lg">
                        <FiPlay className="w-6 h-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-brown/80 to-transparent">
                      <p className="text-white text-sm font-semibold leading-snug line-clamp-2">
                        {primaryVideo.alt}
                      </p>
                      <p className="flex items-center gap-1 text-white/70 text-xs mt-0.5">
                        <FiMapPin className="w-3 h-3 flex-shrink-0" />
                        {primaryVideo.location}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Secondary videos */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {secondaryVideos.map((video, idx) => (
                  <div
                    key={video.id}
                    className={`relative group cursor-pointer rounded-xl overflow-hidden ${idx === secondaryVideos.length - 1 && secondaryVideos.length % 2 !== 0 ? 'col-span-2' : 'col-span-1'}`}
                    onClick={() => openLightbox(allVideos, idx + 1)}
                  >
                    <img
                      src={video.poster}
                      alt={video.alt}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brown/50 group-hover:bg-brown/60 transition-colors duration-300">
                      <div className="absolute top-2 left-2">
                        <img src="/logo.png" alt="Vacation Times" className="h-4 w-auto" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-teal/80 group-hover:bg-teal flex items-center justify-center transition-colors duration-300">
                          <FiPlay className="w-4 h-4 text-white ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 px-2 py-1.5 bg-gradient-to-t from-brown/80 to-transparent">
                        <p className="text-white text-xs font-medium line-clamp-1">{video.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-teal-light transition-colors z-10 w-11 h-11 flex items-center justify-center bg-white/10 rounded-full"
          >
            <FiX className="w-5 h-5" />
          </button>

          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 text-white hover:text-teal-light transition-colors z-10 w-11 h-11 flex items-center justify-center bg-white/10 rounded-full"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <div onClick={e => e.stopPropagation()} className="max-w-5xl w-full px-14 sm:px-16 md:px-20">
            {lightboxItems[lightboxIdx]?.type === 'video' ? (
              <video
                key={lightboxItems[lightboxIdx]?.src}
                src={lightboxItems[lightboxIdx]?.src}
                poster={lightboxItems[lightboxIdx]?.poster}
                controls
                autoPlay
                className="max-h-[75vh] sm:max-h-[80vh] w-full rounded-lg sm:rounded-xl bg-black"
              />
            ) : (
              <img
                src={lightboxItems[lightboxIdx]?.src}
                alt={lightboxItems[lightboxIdx]?.alt}
                className="max-h-[75vh] sm:max-h-[80vh] w-full object-contain rounded-lg sm:rounded-xl"
              />
            )}
            <p className="flex items-center justify-center gap-1.5 text-cream/70 text-xs sm:text-sm mt-2 sm:mt-3">
              <FiMapPin className="w-3.5 h-3.5" />
              {lightboxItems[lightboxIdx]?.location}
              <span className="mx-1">·</span>
              {lightboxIdx + 1} / {lightboxItems.length}
            </p>
          </div>

          <button
            onClick={next}
            className="absolute right-2 sm:right-4 text-white hover:text-teal-light transition-colors z-10 w-11 h-11 flex items-center justify-center bg-white/10 rounded-full"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  )
}
