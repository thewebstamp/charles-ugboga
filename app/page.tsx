// app/page.tsx
import Hero from '@/components/Hero'
import PageNavigation from '@/components/PageNavigation'
import ServicesSection from '@/components/ServicesSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js & SEO Developer',
  description: 'Professional Next.js developer and SEO expert specializing in high-performance web applications. Let\'s build something amazing together.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PageNavigation />
    </>
  )
}