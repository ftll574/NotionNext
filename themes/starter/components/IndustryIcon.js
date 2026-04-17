const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: '100%',
  height: '100%',
  'aria-hidden': true
}

const icons = {
  electronics: (
    <svg {...baseProps}>
      <path d='M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m16-6h-2m2 6h-2M7 7h10v10H7z' />
    </svg>
  ),
  automotive: (
    <svg {...baseProps}>
      <path d='M5 17h14l-1.5-6a2 2 0 00-1.94-1.5H8.44A2 2 0 006.5 11L5 17zm0 0v2m14-2v2M7 14h.01M17 14h.01' />
    </svg>
  ),
  appliance: (
    <svg {...baseProps}>
      <path d='M5 4h14v16H5V4zm2 3h10M7 11h10M7 15h6' />
    </svg>
  ),
  medical: (
    <svg {...baseProps}>
      <path d='M12 4v16m-8-8h16' />
    </svg>
  ),
  packaging: (
    <svg {...baseProps}>
      <path d='M20 7l-8-4-8 4v10l8 4 8-4V7zM4 7l8 4m0 0l8-4m-8 4v10' />
    </svg>
  ),
  industrial: (
    <svg {...baseProps}>
      <path d='M3 20h18M5 20V10l5 3V10l5 3V8l4 2v10' />
    </svg>
  )
}

export const IndustryIcon = ({ name, className = 'w-12 h-12 text-primary' }) => {
  const icon = icons[name] || null
  return <div className={className}>{icon}</div>
}

export default IndustryIcon
