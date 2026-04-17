import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { useState } from 'react'
import { SVGCircleBG } from './svg/SVGCircleBG'
import { SVGQuestion } from './svg/SVGQuestion'

const FAQ_KEYS = [1, 2, 3, 4]

const FaqItem = ({ index, question, answer, isOpen, onToggle }) => {
  const contentId = `faq-answer-${index}`
  const buttonId = `faq-question-${index}`

  return (
    <div className='mb-4 rounded-xl border border-gray-100 dark:border-dark-3 bg-white dark:bg-dark-2 overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className='w-full flex items-start gap-4 px-5 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
      >
        <span className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
          <SVGQuestion />
        </span>
        <span className='flex-1 min-w-0'>
          <h3 className='text-base sm:text-lg font-semibold text-dark dark:text-white leading-snug'>
            {question}
          </h3>
        </span>
        <svg
          aria-hidden='true'
          className={`mt-1 h-5 w-5 flex-shrink-0 text-body-color dark:text-dark-6 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </button>

      <div
        id={contentId}
        role='region'
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className='overflow-hidden'>
          <p
            dangerouslySetInnerHTML={{ __html: answer }}
            className='px-5 pb-5 pl-[4.25rem] text-base text-body-color dark:text-dark-6 leading-relaxed'
          />
        </div>
      </div>
    </div>
  )
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = i => {
    setOpenIndex(prev => (prev === i ? -1 : i))
  }

  const items = FAQ_KEYS.map(k => ({
    question: siteConfig(`STARTER_FAQ_${k}_QUESTION`, '', CONFIG),
    answer: siteConfig(`STARTER_FAQ_${k}_ANSWER`, '', CONFIG)
  })).filter(item => item.question)

  return (
    <section
      id='faq-section'
      className='relative overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]'
    >
      <div className='container mx-auto'>
        <div className='mx-auto mb-[60px] max-w-[520px] text-center px-4'>
          <span className='mb-2 block text-lg font-semibold text-primary'>
            {siteConfig('STARTER_FAQ_TITLE', '', CONFIG)}
          </span>
          <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
            {siteConfig('STARTER_FAQ_TEXT_1', '', CONFIG)}
          </h2>
          <p className='mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6'>
            {siteConfig('STARTER_FAQ_TEXT_2', '', CONFIG)}
          </p>
        </div>

        <div className='mx-auto max-w-3xl px-4'>
          {items.map((item, i) => (
            <FaqItem
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>

      {/* 背景裝飾 */}
      <div aria-hidden='true'>
        <span className='absolute left-4 top-4 -z-[1]'>
          <SVGCircleBG />
        </span>
        <span className='absolute bottom-4 right-4 -z-[1]'>
          <SVGCircleBG />
        </span>
      </div>
    </section>
  )
}
