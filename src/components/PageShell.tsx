import { Nav } from './Nav'
import { Footer } from './Footer'

interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-2xl mx-auto px-6 py-12">
      <Nav />
      <main id="main-content" className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
