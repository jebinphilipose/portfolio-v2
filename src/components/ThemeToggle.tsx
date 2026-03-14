'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full" style={{ background: 'var(--toggle-bg)', border: '1px solid var(--toggle-border)' }} />
  }

  return (
    <button
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center w-9 h-9 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-primary"
      style={{
        background: 'var(--toggle-bg)',
        border: '1px solid var(--toggle-border)',
        color: 'var(--muted-text)',
      }}
    >
      {theme === 'dark' ? (
        <Sun size={18} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon size={18} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  )
}
