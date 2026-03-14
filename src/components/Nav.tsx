'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center justify-center mb-16" role="navigation" aria-label="Main navigation">
      <div className="flex items-center gap-6 md:gap-8">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? 'font-bold text-primary'
                  : 'text-[--muted-text] hover:text-primary'
              }`}
              style={!isActive ? { color: 'var(--muted-text)' } : undefined}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </Link>
          )
        })}
        <ThemeToggle />
      </div>
    </nav>
  )
}
