import { poppins } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'

const FooterLogo = () => {
  return (
    <h1
      className={`text-3xl font-semibold tracking-wide text-headingText dark:text-headingDarkText lg:text-xl ${poppins.className}`}
    >
      <Link href='/#home'>
   <span className='text-primaryColor'>R</span>aj
<span className='text-primaryColor'>Dev</span>
      </Link>
    </h1>
  )
}

export default FooterLogo
