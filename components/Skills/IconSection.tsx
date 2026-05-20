'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import {
  GitHubIcon,
  GitIcon,
  MySQLIcon,
  PostgreSQLIcon,
  TailwindIcon,
  VSCodeIcon,
  HTMLIcon,
  CSSIcon,
  JSIcon,
} from '../Icons'
import Icon from './Icon'
import { oswald } from '@/app/fonts'

// Inline SVG icons
const PythonIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M63.8 3C45.2 3 46.4 11 46.4 11L46.4 19.4H64.2V22H29.6C29.6 22 18 20.6 18 39.4C18 58.2 28.2 57.6 28.2 57.6H34.4V48.8C34.4 48.8 34 38 44.8 38H62.4C62.4 38 72.6 38.2 72.6 28.2V13.4C72.6 13.4 74.2 3 63.8 3ZM54.2 9.4C56.2 9.4 57.8 11 57.8 13C57.8 15 56.2 16.6 54.2 16.6C52.2 16.6 50.6 15 50.6 13C50.6 11 52.2 9.4 54.2 9.4Z" fill="#3776AB"/>
    <path d="M64.2 125C82.8 125 81.6 117 81.6 117L81.6 108.6H63.8V106H98.4C98.4 106 110 107.4 110 88.6C110 69.8 99.8 70.4 99.8 70.4H93.6V79.2C93.6 79.2 94 90 83.2 90H65.6C65.6 90 55.4 89.8 55.4 99.8V114.6C55.4 114.6 53.8 125 64.2 125ZM73.8 118.6C71.8 118.6 70.2 117 70.2 115C70.2 113 71.8 111.4 73.8 111.4C75.8 111.4 77.4 113 77.4 115C77.4 117 75.8 118.6 73.8 118.6Z" fill="#FFD43B"/>
  </svg>
)

const DjangoIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M54 4H73V90C63 92 57 93 48 93C31 93 22 85 22 70C22 55 32 46 50 46C53 46 55 46 54 47V4ZM54 60C52 59 50 59 48 59C40 59 36 63 36 70C36 77 40 81 48 81C50 81 52 81 54 80V60Z" fill="#44B78B"/>
    <path d="M82 27H101V97C101 111 99 118 93 123C87 128 78 130 67 129L64 116C72 117 77 116 80 113C83 110 82 106 82 97V27Z" fill="#44B78B"/>
    <rect x="82" y="4" width="19" height="18" fill="#44B78B"/>
  </svg>
)

const FastAPIIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path fill="#009688" d="M64 8L16 120h24l48-112h-24zm16 0l-8 24h16l24 88h16L96 8H80z"/>
  </svg>
)

const RedisIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M121 89C121 97 95 104 63 104C31 104 5 97 5 89C5 81 31 74 63 74C95 74 121 81 121 89Z" fill="#912626"/>
    <path d="M121 89V96C121 104 95 111 63 111C31 111 5 104 5 96V89C5 97 31 104 63 104C95 104 121 97 121 89Z" fill="#C6302B"/>
  </svg>
)

const DockerIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M116 54C114 53 107 52 101 53C100 45 95 38 87 34L84 32L82 35C79 40 78 48 79 54C80 57 81 60 83 62C80 64 76 65 72 65H6C5 73 7 82 12 89C17 96 25 100 35 101C56 102 72 93 81 74C88 74 97 74 101 70C104 67 107 62 108 57L109 54L116 54Z" fill="#2391E6"/>
  </svg>
)
// ADD these after DockerIcon:

const JavaIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M47 88s-3 2 2 3c6 1 9 1 16 0 0 0 2 1 4 2-14 6-32-1-22-5zm-3-10s-3 2 2 3c6 2 20 2 29-1 0 0 1 1 3 2-25 7-53 1-34-4z" fill="#0074BD"/>
    <path d="M70 61c5 6-1 11-1 11s13-7 7-15c-5-8-9-11 13-24 0 0-35 9-19 28z" fill="#EA2D2E"/>
    <path d="M102 97s2 2-2 3c-8 2-33 3-40 0-2-1 2-2 3-2l4 1c-5-3-30 1-13 3 17 2 43-1 48-5zM49 74s-14 3-5 5c4 0 11 0 18-1-6-1-9-2-13-4zm28 16c10-5 5-10 2-9l-2 1c0-1 0-1 1-1 8-4 14 8-1 9z" fill="#0074BD"/>
    <path d="M76 14S89 27 63 43c-20 12-5 19 0 27-9-8-15-15-11-22 7-10 25-15 24-34z" fill="#EA2D2E"/>
    <path d="M52 112c-1 0 1 1 1 1 13 4 51 3 52-4 0 0-1 3-17 5-18 2-35 0-36-2z" fill="#0074BD"/>
  </svg>
)

const CppIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M64 8L12 38v52l52 30 52-30V38L64 8z" fill="#00599C"/>
    <path d="M64 18L22 42v44l42 24 42-24V42L64 18z" fill="#004482"/>
    <path d="M64 28L32 46v36l32 18 32-18V46L64 28z" fill="#00599C"/>
    <text x="44" y="74" fill="white" fontSize="28" fontWeight="bold" fontFamily="Arial">C+</text>
  </svg>
)

const NumpyIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 20L20 40v32l36 20 36-20V40L56 20z" fill="#4DABCF"/>
    <path d="M56 20v52l36-20V40L56 20z" fill="#013243"/>
    <path d="M20 72l36 20 36-20-36-20-36 20z" fill="#4DABCF"/>
    <path d="M72 56h8v4h-8v8h-4v-8h-8v-4h8v-8h4v8zM88 56h8v4h-8v8h-4v-8h-8v-4h8v-8h4v8z" fill="white"/>
  </svg>
)

const PandasIcon = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <rect x="46" y="10" width="16" height="48" rx="8" fill="#130754"/>
    <rect x="66" y="30" width="16" height="48" rx="8" fill="#130754"/>
    <rect x="46" y="70" width="16" height="48" rx="8" fill="#130754"/>
    <rect x="66" y="50" width="16" height="48" rx="8" fill="#E70488"/>
    <rect x="26" y="30" width="16" height="48" rx="8" fill="#E70488"/>
  </svg>
)

const IconSection = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  React.useEffect(() => {
    if (isInView) controls.start('visible')
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        staggerChildren: 0.1,
      },
    },
  }

  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial='hidden'
      animate={controls}
      className={`w-full pt-8 ${oswald.className}`}
    >

      {/* Backend */}
      <div className='flex flex-col items-center justify-around gap-10 pb-10 lg:flex-row lg:gap-0'>
        <div className='flex flex-col items-center'>
          <span className='pb-5 text-primaryColor'>Backend</span>

          <div className='grid grid-cols-3 gap-4 sm:grid-cols-5 lg:flex lg:flex-wrap'>
            {[
              { icon: <PythonIcon className='aspect-square w-10' />, text: 'Python', progress: 90 },
              { icon: <DjangoIcon className='aspect-square w-10' />, text: 'Django', progress: 85 },
              { icon: <FastAPIIcon className='aspect-square w-10' />, text: 'FastAPI', progress: 80 },
              { icon: <PostgreSQLIcon className='aspect-square w-10' />, text: 'PostgreSQL', progress: 80 },
              { icon: <RedisIcon className='aspect-square w-10' />, text: 'Redis', progress: 75 },
            ].map((icon, i) => (
              <Icon
                key={i}
                initialAnimation='bottom'
                icon={icon.icon}
                progress={icon.progress}
                text={icon.text}
                variants={iconVariants}
                className=''
              />
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className='flex flex-col items-center'>
          <span className='pb-5 text-primaryColor'>Frontend</span>

          <div className='grid grid-cols-4 gap-5 lg:flex lg:flex-wrap'>
            {[
              { icon: <HTMLIcon className='aspect-square w-10' />, text: 'HTML', progress: 85 },
              { icon: <CSSIcon className='aspect-square w-10' />, text: 'CSS', progress: 80 },
              { icon: <JSIcon className='aspect-square w-10' />, text: 'JavaScript', progress: 75 },
              { icon: <TailwindIcon className='aspect-square w-10' />, text: 'Tailwind', progress: 85 },
            ].map((icon, i) => (
              <Icon
                key={i}
                initialAnimation='bottom'
                icon={icon.icon}
                progress={icon.progress}
                text={icon.text}
                variants={iconVariants}
                className=''
              />
            ))}
          </div>
        </div>
      </div>

      {/* Programming Languages */}
      <div className='flex flex-col items-center pb-10'>
        <span className='pb-5 text-primaryColor'>Programming Languages</span>

        <div className='grid grid-cols-3 gap-6 lg:flex lg:flex-wrap lg:gap-5'>
          {[
            { icon: <PythonIcon className='aspect-square w-10' />, text: 'Python', progress: 90 },
         { icon: <JavaIcon className='aspect-square w-10' />, text: 'Java', progress: 75 },
          { icon: <CppIcon className='aspect-square w-10' />, text: 'C++', progress: 80 },
          ].map((icon, i) => (
            <Icon
              key={i}
              initialAnimation='bottom'
              icon={icon.icon}
              progress={icon.progress}
              text={icon.text}
              variants={iconVariants}
              className=''
            />
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className='flex flex-col items-center'>
        <span className='pb-5 text-primaryColor'>Tools & Others</span>

        <div className='grid grid-cols-4 gap-3 sm:grid-cols-5 lg:flex lg:flex-wrap lg:gap-5'
>
          {[
            { icon: <GitIcon className='aspect-square w-10' />, text: 'Git', progress: 90 },
            { icon: <GitHubIcon className='aspect-square w-10' />, text: 'GitHub', progress: 90 },
            { icon: <DockerIcon className='aspect-square w-10' />, text: 'Docker', progress: 70 },
            { icon: <MySQLIcon className='aspect-square w-10' />, text: 'MySQL', progress: 75 },
            { icon: <VSCodeIcon className='aspect-square w-10' />, text: 'VS Code', progress: 95 },
            { icon: <NumpyIcon className='aspect-square w-10' />, text: 'NumPy', progress: 80 },
            { icon: <PandasIcon className='aspect-square w-10' />, text: 'Pandas', progress: 80 },
          ].map((icon, i) => (
            <Icon
              key={i}
              initialAnimation='bottom'
              icon={icon.icon}
              progress={icon.progress}
              text={icon.text}
              variants={iconVariants}
              className=''
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default IconSection