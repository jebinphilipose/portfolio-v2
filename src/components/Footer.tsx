import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer
      className="mt-32 pt-16 pb-12"
      style={{ borderTop: '1px solid var(--footer-border)' }}
    >
      <p
        className="text-sm text-center leading-relaxed mx-auto max-w-xs sm:max-w-none flex items-center justify-center gap-1 flex-wrap"
        style={{ color: 'var(--muted-text)' }}
      >
        <span>© {new Date().getFullYear()} Jebin Philipose. Built with</span>
        <Heart size={14} className="text-red-500 fill-red-500" aria-label="love" />
        <span>and Next.js. Designed using</span>
        <span className="whitespace-nowrap">Google Stitch.</span>
      </p>
    </footer>
  )
}
