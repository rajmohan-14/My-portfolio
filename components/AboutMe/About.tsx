'use client'
import React, { useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'framer-motion'
import HeadingSection from '../HeadingSection'
import Heading from '../Heading'
import Paragraph from '../Paragraph'

const About = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  // const { ref, inView } = useInView({
  //   triggerOnce: true, // Only trigger once
  //   threshold: 0.1, // Trigger when 10% of the component is in view
  // });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1
      }
    }
  }
  const childVariant2 = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.2
      }
    }
  }

  const paraVariant1 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.3
      }
    }
  }
  const paraVariant2 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.4
      }
    }
  }
  const paraVariant3 = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100,
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.5
      }
    }
  }
  const paraVariant4 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
      ease: 'easeInOut',
      duration: 0.5,
      delay: 0.6
    }
  }
}

  return (
    <motion.div
      ref={ref} // Ref to the container to observe when it enters the viewport
      className='container'
      variants={containerVariants}
      initial='hidden'
      animate={controls}
    >
      <HeadingSection
        text='About Me'
        className='hidden md:inline-block'
        variants={childVariants}
      />
      <Heading
        text='Who am I?'
        className='text-center md:text-left'
        variants={childVariant2}
      />
      <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="I’m Raj Mohan, a final-year Information Science student and Backend Developer from Bengaluru, passionate about building scalable full-stack applications that solve real-world problems."
        variants={paraVariant1}
      />
      <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="My focus lies in backend engineering, AI integrations, and creating clean, efficient systems that deliver seamless user experiences. I enjoy transforming ideas into production-ready products using modern technologies and scalable architecture."
        variants={paraVariant2}
      />
      <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="Driven by curiosity and continuous learning, I stay updated with emerging technologies, development practices, and industry trends to build applications that are not only functional, but future-ready. From optimizing performance and designing robust APIs to developing responsive user experiences, I strive to create impactful digital solutions."
        variants={paraVariant3}
      />
       <Paragraph
        className='text-balance w-[85%] mx-auto text-center md:w-full md:text-left'
        text="Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community while continuously improving my craft as a software engineer."
        variants={paraVariant4}
      />
    </motion.div>
  )
}

export default About
