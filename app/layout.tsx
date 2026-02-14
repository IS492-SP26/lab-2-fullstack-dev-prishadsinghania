import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Prisha Dipesh Singhania | Data Analytics Engineer',
  description:
    'Data Analyst with interest in Artificial Intelligence and Machine Learning. Currently pursuing MS in Information Management at UIUC.',
  authors: [{ name: 'Prisha Singhania' }],
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'Prisha Dipesh Singhania',
    description:
      'Self-driven and an inquisitive analyst with a knack for unraveling complex data puzzles, transforming chaos into clarity, and delivering impactful solutions.',
    url: 'https://github.com/Prishads/prishadsinghania.github.io',
    siteName: 'Prisha Dipesh Singhania',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
