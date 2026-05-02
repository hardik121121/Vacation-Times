import { useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiX } from 'react-icons/fi'

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [show])

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-2xl shadow-xl min-w-[280px] max-w-sm">
        <FaWhatsapp className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-medium flex-1">{message}</p>
        <button onClick={onClose} className="flex-shrink-0 hover:opacity-75 transition-opacity">
          <FiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
