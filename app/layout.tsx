import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Luccazs Portfolio | Front-End Developer',
  description: 'Portfolio de desenvolvedor front-end especializado em criar experiências digitais incríveis',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: './projetos/logopl.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: './projetos/logopl.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: './projetos/logopl.png',
        type: 'image/svg+xml',
      },
    ],
    
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
