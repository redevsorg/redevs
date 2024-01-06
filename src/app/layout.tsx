import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import { AOSInit } from './aos'

const hanken = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'redevs',
  description: 'We build websites for non-profits.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html className="scroll-smooth" lang="en">
      <AOSInit />
      <body className={hanken.className}>{children}</body>
    </html>
  )
}
