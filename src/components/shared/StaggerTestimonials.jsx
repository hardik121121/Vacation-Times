import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import clsx from 'clsx'

const SQRT_5000 = Math.sqrt(5000)

const travelTestimonials = [
  {
    tempId: 0,
    testimonial: "Our Bali trip was absolutely perfect from start to finish. Rice terrace walks, private temple visits at sunrise — truly magical.",
    by: "Sarah M., New York, USA",
    imgSrc: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    tempId: 1,
    testimonial: "The Rajasthan Royal Tour was the honeymoon of our dreams. Heritage hotels, camel rides at sunset — Vacation Times delivered pure royalty.",
    by: "James & Preethi O., London, UK",
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    tempId: 2,
    testimonial: "Traveled with my family of five to Kerala — the houseboat under a sky full of stars is something I'll never forget. Best holiday ever!",
    by: "Mei-Lin C., Singapore",
    imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    tempId: 3,
    testimonial: "From airport pickups to surprise sunset dinners, every detail was handled beautifully. I didn't have to worry about a single thing.",
    by: "Arjun P., Mumbai, India",
    imgSrc: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    tempId: 4,
    testimonial: "I've used five different agencies. None come close to Vacation Times for personalisation. They genuinely listen to what you want.",
    by: "Carla T., Toronto, Canada",
    imgSrc: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    tempId: 5,
    testimonial: "A hotel issue on our Switzerland trip was resolved in under an hour — at midnight. That level of support is truly extraordinary.",
    by: "Raj & Sunita N., Delhi, India",
    imgSrc: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    tempId: 6,
    testimonial: "The Maldives package was worth every rupee. Private villa, snorkelling with manta rays, beach candlelight dinner. Pure bliss.",
    by: "Ananya K., Bengaluru, India",
    imgSrc: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    tempId: 7,
    testimonial: "Europe in 14 days across 9 cities — not a single missed train. Vivek and the team planned it with military precision. Absolutely flawless.",
    by: "Thomas H., Dublin, Ireland",
    imgSrc: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    tempId: 8,
    testimonial: "As a solo traveller, safety was my top concern. Vacation Times made sure I had a trusted guide at every stop. Never felt alone.",
    by: "Priya V., Hyderabad, India",
    imgSrc: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    tempId: 9,
    testimonial: "Our Ladakh trip was transformative — monasteries, mountain passes, stargazing at 15,000 feet. An experience our family will relive forever.",
    by: "The Sharma Family, Agra, India",
    imgSrc: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    tempId: 10,
    testimonial: "Booked a last-minute Andamans trip and they pulled it off in 48 hours with a brilliant itinerary. Genuinely impressed!",
    by: "Neha & Rohit M., Pune, India",
    imgSrc: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    tempId: 11,
    testimonial: "Every trip with Vacation Times feels made specifically for us. They listen, they remember, and they always exceed expectations.",
    by: "David L., Sydney, Australia",
    imgSrc: "https://randomuser.me/api/portraits/men/39.jpg",
  },
]

function TestimonialCard({ position, testimonial, handleMove, cardSize }) {
  const isCenter = position === 0

  return (
    <div
      onClick={() => handleMove(position)}
      className={clsx(
        'absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out',
        isCenter
          ? 'z-10 bg-brown text-white border-brown'
          : 'z-0 bg-white text-brown border-cream-dark hover:border-brown-light'
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: 'polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)',
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? '0px 8px 0px 4px #E8E0D0' : '0px 0px 0px 0px transparent',
      }}
    >
      <span
        className={clsx(
          'absolute block origin-top-right rotate-45',
          isCenter ? 'bg-brown-light' : 'bg-cream-dark'
        )}
        style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        className="mb-4 h-14 w-12 bg-cream object-cover object-top"
        style={{ boxShadow: '3px 3px 0px #F5F0E8' }}
      />
      <h3 className={clsx(
        'text-base sm:text-lg font-medium font-body leading-snug',
        isCenter ? 'text-white' : 'text-brown'
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={clsx(
        'absolute bottom-8 left-8 right-8 text-sm italic',
        isCenter ? 'text-white/80' : 'text-brown-medium'
      )}>
        — {testimonial.by}
      </p>
    </div>
  )
}

export default function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(365)
  const [list, setList] = useState(travelTestimonials)

  const handleMove = (steps) => {
    const newList = [...list]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setList(newList)
  }

  useEffect(() => {
    const update = () => setCardSize(window.matchMedia('(min-width: 640px)').matches ? 365 : 290)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-cream/50" style={{ height: 600 }}>
      {list.map((testimonial, index) => {
        const position = list.length % 2
          ? index - (list.length + 1) / 2
          : index - list.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-white border-2 border-cream-dark hover:bg-brown hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-14 w-14 items-center justify-center text-2xl transition-colors bg-white border-2 border-cream-dark hover:bg-brown hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2"
          aria-label="Next testimonial"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}
