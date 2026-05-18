import { poppins } from '@/app/fonts'
import Link from 'next/link'
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  WhatsAppIcon
} from '../Icons'

const FooterMenu = () => {
  return (
    <div
      className={`flex flex-col items-center gap-4 font-light lg:flex-row lg:gap-8 ${poppins.className}`}
    >
      <div className='flex flex-col items-center lg:flex-row lg:gap-3'>
        <a href='tel:+917970571876'>7970571876</a>
        <a href='mailto:rajmohan14k@gmail.com'>rajmohan14k@gmail.com</a>
      </div>
      <ul className='flex items-center gap-2'>
       
        {/* <li>
          <TwitterIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li> */}
        <li>
          <Link href="https://www.linkedin.com/in/rajmohan14/">
            <LinkedInIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href="https://github.com/rajmohan-14">
            <GithubIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        <li>
          <Link href="https://wa.me/+917970571876">
            <WhatsAppIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
          </Link>
        </li>
        {/* <li>
          <TelegramIcon className='aspect-square w-5 text-headingText dark:text-headingDarkText' />
        </li> */}
      </ul>
    </div>
  )
}

export default FooterMenu
