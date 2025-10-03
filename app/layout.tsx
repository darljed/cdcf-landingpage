import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CDCF | Christ-Driven Christian Fellowship – A Place to Belong and Grow in Faith',
  description: 'Join CDCF (Christ-Driven Christian Fellowship), a Bible-believing community in San Pablo, Laguna, where people grow deeper in faith, build meaningful relationships, and live out the Gospel together. Experience worship, discipleship, and fellowship with us this Sunday.',
  keywords: 'CDCF, CDCF Worship, Christ-Driven Christian Fellowship, Christian Church Philippines, Bible church, Worship services, Sunday service, Christian community, Church near me, Fellowship group, Discipleship, Faith community',
  openGraph: {
    title: 'CDCF | Christ-Driven Christian Fellowship',
    description: 'A welcoming Christian church community in [City] — grow your faith, connect with others, and encounter God with CDCF.',
    type: 'website',
    url: 'https://cdcf.online',
    images: [{
      url: 'https://cdcf.online/og-image.png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CDCF | Christ-Driven Christian Fellowship',
    description: 'Discover CDCF — a Christ-driven church focused on worship, discipleship, and transforming lives through the Gospel.',
    images: ['https://cdcf.online/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}