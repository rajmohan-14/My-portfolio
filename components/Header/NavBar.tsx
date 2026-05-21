'use client'
import React, { useState } from 'react'
import Logo from './Logo'
import { BarIcon, XMarkIcon } from '../Icons'
import NavMenu from './NavMenu'

const NavBar = ({className=""}) => {
  const [openMenu, setopenMenu] = useState(false)
  return (
    <div className={className}>

      {/* Desktop — untouched */}
      <div className='mx-auto hidden w-[90%] items-center gap-6 rounded-lg border border-normalText/25 px-4 py-3 dark:border-normalDarkText/25 lg:flex backdrop-blur-md'>
        <Logo />
        <NavMenu />
      </div>

      {/* Mobile only */}
      <div className='relative flex w-full items-center justify-center lg:!hidden'>
        <span
          className='absolute left-6 top-1/2 -translate-y-1/2 z-50 cursor-pointer'
          onClick={() => setopenMenu(!openMenu)}
        >
          {openMenu
            ? <XMarkIcon className='text-headingText dark:text-headingDarkText' />
            : <BarIcon className='text-headingText dark:text-headingDarkText' />
          }
        </span>
        <Logo />
        {openMenu && (
          <div className='absolute top-[150%] left-1/2 -translate-x-1/2 z-50 w-[90%] flex flex-col items-center rounded-md bg-primaryColor bg-opacity-30 py-8 drop-shadow-md backdrop-blur-3xl'>
            <NavMenu />
          </div>
        )}
      </div>

    </div>
  )
}

export default NavBar
