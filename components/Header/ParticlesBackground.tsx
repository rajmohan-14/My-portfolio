'use client'
import { useEffect } from 'react'
import Script from 'next/script'

const ParticlesBackground = () => {
  useEffect(() => {
    const init = () => {
      if (typeof window !== 'undefined' && (window as any).particlesJS) {
        ;(window as any).particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 700 } },
            color: { value: '#00c26c' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 200,
              color: '#00c26c',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: 'top',
              out_mode: 'out'
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: { enable: true, mode: 'grab' },
              onclick: { enable: true, mode: 'push' }
            },
            modes: {
              grab: { distance: 200, line_linked: { opacity: 1 } },
              push: { particles_nb: 4 }
            }
          },
          retina_detect: true
        })
      }
    }

    // slight delay to ensure script is loaded
    const timer = setTimeout(init, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        src='https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'
        strategy='afterInteractive'
      />
      <div
        id='particles-js'
        className='absolute inset-0 z-0'
      />
    </>
  )
}

export default ParticlesBackground