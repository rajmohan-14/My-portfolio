import Hero from './Hero'
import NavBar from './NavBar'
import ParticlesBackground from './ParticlesBackground'  // add this

const HeroSection = () => {
  return (
    <div
      id='home'
      className='relative mx-auto mt-4 w-full rounded-t-3xl bg-[#f1f6fb] pb-16 pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] md:min-h-screen lg:max-w-[1440px]'
      // ↑ add "relative" — it's needed so particles position correctly
    >
      <ParticlesBackground />  {/* add this */}
      <div className='relative z-10 block lg:hidden'>  {/* add z-10 so nav stays above particles */}
        <NavBar />
      </div>
      <div className='relative z-10'>  {/* wrap Hero too */}
        <Hero />
      </div>
    </div>
  )
}

export default HeroSection