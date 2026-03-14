import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/PageShell'
import { getAllBlogPosts, formatDate } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on software engineering, and building products.',
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <PageShell>
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight dark:text-white leading-tight" style={{ color: 'var(--heading-text)' }}>
          Writing
        </h1>
        <p className="text-lg md:text-xl mx-auto max-w-xl leading-relaxed" style={{ color: 'var(--muted-text)' }}>
          Thoughts on software engineering, and building products. A collection
          of tutorials, case studies, and personal insights.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12" role="list">
        {posts.map((post) => (
          <article
            key={post.slug}
            role="listitem"
            className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
              <div className="flex items-center justify-between mb-4">
                <time dateTime={post.date} className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--muted-text)' }}>
                  {formatDate(post.date)}
                </time>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary">
                  {post.category}
                </span>
              </div>

              <h2
                className="text-2xl font-bold group-hover:text-primary transition-colors mb-4 leading-snug"
                style={{ color: 'var(--heading-text)' }}
              >
                {post.title}
              </h2>

              <p className="mb-8 line-clamp-3 leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                {post.excerpt}
              </p>

              <div className="mt-auto">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all"
                  aria-label={`Read article: ${post.title}`}
                >
                  Read article <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  )
}
