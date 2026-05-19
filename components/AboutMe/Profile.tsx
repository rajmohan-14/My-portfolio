'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '../../public/profilePic.png'
import HeadingSection from '../HeadingSection'
import {
  GithubIcon,
  LinkedInIcon,
  WhatsAppIcon
} from '../Icons'
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className='aspect-square w-6' fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.537V8.395L11.61 19.582h-.73L4.505 8.395v7.538c-.052.385.076.774.347 1.052l2.52 3.054v.404H0v-.404l2.52-3.054c.27-.278.39-.67.326-1.052V6.887z"/>
  </svg>
)

const Profile = () => {
  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
    ease: 'easeInOut'
  }
  return (
    <div className='relative mb-16 flex flex-col items-center lg:mb-0'>
      <HeadingSection text='About Me' className='mx-auto mb-8 md:hidden' />
      <motion.div
        className='mx-auto aspect-square w-[260px] overflow-hidden rounded-full border border-primaryColor drop-shadow-lg'
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ...spring, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src={ProfilePic}
          alt='Raj Mohan'
          // layout='responsive'
          width={400}
          height={400}
          className='rounded-2xl'
          priority
        />
      </motion.div>
      <motion.div
        className='absolute -bottom-10 left-1/2 flex w-[260px] flex-col items-center justify-center rounded-lg border border-primaryColor bg-primaryColor bg-opacity-10 px-4 py-2 text-center backdrop-blur-xl'
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: '-50%', opacity: 1 }}
        transition={{ ...spring, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
      // whileTap={{ scale: 0.95 }}
      >
        <span className='pb-1 text-headingText dark:text-headingDarkText'>
         Raj Mohan
        </span>
        <ul className='flex items-center gap-2'>
          <li>
            
          </li>
          {/* <li>
            <TwitterIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
          </li> */}
          <li>
            <Link href="https://www.linkedin.com/in/rajmohan14/">
              <LinkedInIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/rajmohan-14">
              <GithubIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/+917970571876">
              <WhatsAppIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
            </Link>
          </li>
          <li>
  <Link href="https://medium.com/@rajmohan14k">
    <MediumIcon />
  </Link>
</li>
          {/* <li>
            <TelegramIcon className='aspect-square w-6 text-headingText dark:text-headingDarkText' />
          </li> */}
        </ul>
      </motion.div>
    </div>
  )
}

export default Profile
