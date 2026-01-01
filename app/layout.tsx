import type { Metadata } from 'next'
import { Poetsen_One, Josefin_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poetsenOne = Poetsen_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: {
    default: 'Charles Ugboga - Next.js & SEO Developer',
    template: '%s | Charles Ugboga'
  },
  description: 'Professional Next.js developer and SEO expert specializing in high-performance web applications. Let\'s build something amazing together.',
  keywords: ['Next.js', 'React', 'SEO', 'TypeScript', 'Full Stack Developer'],
  authors: [{ name: 'Charles Ugboga' }],
  creator: 'Charles Ugboga',
  metadataBase: new URL('https://charlesugboga.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://charlesugboga.vercel.app',
    title: 'Charles Ugboga - Next.js & SEO Developer',
    description: 'Professional Next.js developer and SEO expert specializing in high-performance web applications.',
    siteName: 'Charles Ugboga Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poetsenOne.variable} ${josefinSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-body">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}