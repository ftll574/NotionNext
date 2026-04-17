import { useEffect, useState } from 'react'

/**
 * 右下浮動「立即詢價」CTA。
 * - 捲到 hero 下方才顯示
 * - 若 contact-section 或 footer 出現在畫面中則隱藏，避免與本區塊重疊
 * - reduced-motion 時不做 transform 動畫
 */
export default function FloatingInquiryButton({
  targetId = 'contact-section',
  label = '立即詢價'
}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const target = document.getElementById(targetId)
    const footer = document.querySelector('footer')

    let targetInView = false
    let footerInView = false

    const updateVisibility = () => {
      const scrolled = window.scrollY > 400
      setVisible(scrolled && !targetInView && !footerInView)
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === target) targetInView = entry.isIntersecting
          if (entry.target === footer) footerInView = entry.isIntersecting
        })
        updateVisibility()
      },
      { threshold: 0.05 }
    )

    if (target) io.observe(target)
    if (footer) io.observe(footer)

    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', updateVisibility)
    }
  }, [targetId])

  const handleClick = e => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      aria-label={label}
      className={`fixed z-40 bottom-4 right-4 md:bottom-8 md:right-8
        inline-flex items-center gap-2 rounded-full
        bg-gradient-to-r from-primary to-[#0096db]
        px-5 py-3 md:px-6 md:py-3.5
        text-sm md:text-base font-semibold text-white
        shadow-lg hover:shadow-2xl
        transition-all duration-300 ease-out
        cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${
          visible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }
        motion-reduce:transition-none motion-reduce:translate-y-0`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z'
        />
      </svg>
      <span>{label}</span>
    </a>
  )
}
