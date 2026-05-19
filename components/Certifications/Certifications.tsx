'use client'
import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import HeadingSection from '../HeadingSection'
import { oswald } from '@/app/fonts'

const certs = [
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services / Coursera',
    date: 'April 1, 2026',
    link: 'https://www.coursera.org/account/accomplishments/verify/6MRYJECK3Q2Z',
    badge: '☁️'
  },
{
  title: 'AI/ML for Geodata Analysis',
  issuer: 'Indian Institute of Remote Sensing (IIRS),ISRO',
  date: 'Sep 2024',
  link: '',
  badge: '/badges/isro.svg'

   },
   {

    title: 'Full Stack Development',
    issuer: 'Infosys Springboard',
    date: 'Sep2025',
    link: '#',
    badge: '💻'
  },
  {
    title: 'Introduction to Large Language Models',
    issuer: 'Google',
    date: 'Sep 2025',
    link: 'https://www.skills.google/public_profiles/31296080-ccd7-44fd-87f5-6396933a90d5/badges/18128033?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
    badge: '🤖'
  },
]

const Certifications = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  React.useEffect(() => {
    if (isInView) controls.start('visible')
  }, [controls, isInView])

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } }
  }

  return (
    <section id='certifications' className={`mx-auto w-full max-w-[1200px] px-4 py-16 md:px-8 lg:px-16 ${oswald.className}`}>
      <HeadingSection text='Certifications & Achievements' className='mb-10' />
      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={controls}
        className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
      >
        {certs.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target='_blank'
            rel='noopener noreferrer'
            variants={item}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className='flex flex-col gap-2 rounded-xl border border-primaryColor/20 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-all hover:border-primaryColor hover:shadow-md dark:bg-[#2a2a2a]/60'
          >
            {cert.badge.startsWith('/') ? (
  <img src={cert.badge} alt={cert.issuer} className='h-10 w-10 object-contain' />
) : (
  <span className='text-3xl'>{cert.badge}</span>
)}
            <h4 className='text-base font-semibold text-headingText dark:text-headingDarkText'>
              {cert.title}
            </h4>
            <p className='text-sm text-normalText dark:text-normalDarkText'>{cert.issuer}</p>
            <span className='mt-auto text-xs text-primaryColor'>{cert.date}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

export default Certifications