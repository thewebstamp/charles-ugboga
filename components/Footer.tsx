import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient">Charles Ugboga</h3>
            <p className="text-gray-400 mt-2">Next.js & SEO Developer</p>
          </div>

          <div className="flex space-x-6">
            {[
              { icon: Linkedin, href: 'https://linkedin.com/in/charles-ugboga', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/thewebstamp', label: 'GitHub' },
              { icon: Mail, href: 'mailto:altherion1@gmail.com', label: 'Email' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label={item.label}
              >
                <item.icon size={24} />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Charles Ugboga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}