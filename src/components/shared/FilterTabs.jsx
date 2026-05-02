export default function FilterTabs({ tabs, active, onChange }) {
  return (
    <div className="w-full overflow-x-auto pb-1 -mb-1">
      <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center px-1">
        {tabs.map(tab => (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              active === tab.value
                ? 'bg-teal text-white shadow-md'
                : 'bg-white text-brown border border-cream-dark hover:border-teal hover:text-teal'
            }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span className={`ml-1.5 text-xs ${active === tab.value ? 'text-white/80' : 'text-brown-medium'}`}>
                ({tab.count})
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
