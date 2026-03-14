import Link from 'next/link'
import { PageShell } from '@/components/PageShell'

export default function NotFound() {
  return (
    <PageShell>
      <div className="flex flex-col items-center justify-center text-center py-24">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          Page not found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 max-w-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all text-sm"
        >
          Go home
        </Link>
      </div>
    </PageShell>
  )
}
