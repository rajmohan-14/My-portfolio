'use client'
import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import HeadingSection from '../HeadingSection'
import { oswald } from '@/app/fonts'

const certs = [
  {
    title: 'Python for Everybody',
    issuer: 'Coursera / University of Michigan',
    date: '2023',
    link: 'https://coursera.org',
    badge: '🐍'
  },
  {
    title: 'Django Web Framework',
    issuer: 'Meta / Coursera',
    date: '2023',
    link: 'https://coursera.org',
    badge: '🎯'
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: '2024',
    link: 'https://aws.amazon.com',
    badge: '☁️'
  },
  {
    title: 'State Level Hackathon Winner',
    issuer: 'Government of Karnataka',
    date: '2024',
    link: '#',
    badge: '🏆'
  },
  {
    title: 'State Level Hackathon Winner',
    issuer: 'Tech Fest — Bihar',
    date: '2023',
    link: '#',
    badge: '🏆'
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
            <span className='text-3xl'>{cert.badge}</span>
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