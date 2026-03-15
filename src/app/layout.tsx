import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jebinphilipose.dev'),
  title: {
    default: 'Jebin Philipose | Senior Software Engineer',
    template: '%s | Jebin Philipose',
  },
  description:
    'Senior Software Engineer with 4+ years of experience building scalable B2B SaaS products. Specializing in Python, Django, Node.js, AWS, and PostgreSQL.',
  keywords: [
    'software engineer',
    'backend engineer',
    'Python',
    'Django',
    'AWS',
    'PostgreSQL',
    'Node.js',
    'fullstack',
  ],
  authors: [{ name: 'Jebin Philipose' }],
  creator: 'Jebin Philipose',
  alternates: {
    canonical: 'https://jebinphilipose.dev',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jebinphilipose.dev',
    title: 'Jebin Philipose | Senior Software Engineer',
    description:
      'Senior Software Engineer with 4+ years of experience building scalable B2B SaaS products.',
    siteName: 'Jebin Philipose',
    images: [{ url: '/avatar-512.jpg', width: 512, height: 512, alt: 'Jebin Philipose' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jebin Philipose | Senior Software Engineer',
    description:
      'Senior Software Engineer with 4+ years of experience building scalable B2B SaaS products.',
    creator: '@jebinphilipose',
    images: ['/avatar-512.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f6f8' },
    { media: '(prefers-color-scheme: dark)', color: '#101622' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
      <body suppressHydrationWarning className="bg-bg-light dark:bg-bg-dark font-display text-slate-900 dark:text-slate-100 antialiased transition-colors duration-300">
        <a href="#main-content" className="skip-nav">Skip to main content</a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
