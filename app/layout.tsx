import Cursor from '@/components/Cursor'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import type { Metadata } from 'next'
import { oswald } from './fonts'
import './globals.css'
import PageLoader from '@/components/PageLoader'
import { NavbarWrapper } from '@/components/NavbarWrapper'
import { BackToTop } from '@/components/aspect-ui'

export const metadata: Metadata = {
  title: 'Raj Mohan | Portfolio',
  description:
    'Aspiring Software Engineer passionate about building scalable applications, solving real-world problems, and continuously learning modern technologies in AI, web development. Final year IT student with hands-on experience in Django, WebSockets, Celery, Redis, RAG pipelines, and more.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${oswald.className} bg-[#f1f6fb] dark:bg-[#262626] relative max-h-screen overflow-y-scroll`}
      >
        <PageLoader />
        <Cursor />
        <NavbarWrapper />

        {children}

        <BackToTop
          className="p-2 border border-primaryColor bg-primaryColor bg-opacity-10
          text-primaryColor backdrop-blur-xl"
        >
          <ChevronUpIcon className='w-6' />
        </BackToTop>
      </body>
    </html>
  )
}