import Hero from './Hero'
import NavBar from './NavBar'
import ParticlesBackground from './ParticlesBackground'  // add this
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div
      id='home'
      className='relative mx-auto mt-4 w-full rounded-t-3xl bg-[#f1f6fb] pb-16 pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] md:min-h-screen lg:max-w-[1440px]'
      // ↑ add "relative" — it's needed so particles position correctly
    >
      <ParticlesBackground />  {/* add this */}
      <div className='relative z-30 block lg:hidden'>
        <NavBar />
      </div>
      <div className='absolute right-4 top-6 z-40 lg:hidden'>
        <Link
          href='/Raj-Mohan-Resume.pdf'
          target='_blank'
          className='rounded-lg bg-primaryColor px-3 py-1 text-headingDarkText inline-flex gap-2 items-center relative'
        >
          Resume
          <span className='inline-flex size-2 animate-ping rounded-full bg-white opacity-75'></span>
          <span className='absolute top-1/2 -translate-y-1/2 right-3 inline-flex size-2 rounded-full bg-white'></span>
        </Link>
      </div>
      <div className='relative z-10'>
        <Hero />
      </div>
    </div>
  )
}

export default HeroSection