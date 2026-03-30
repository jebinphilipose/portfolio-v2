import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import { PageShell } from '@/components/PageShell'
import { getAllBlogPosts, getBlogPostBySlug, formatDate } from '@/lib/content'
import { marked, Renderer } from 'marked'

// Custom renderer: open all links in a new tab
const renderer = new Renderer()
renderer.link = ({ href, title, text }: { href: string; title?: string | null; text: string }) => {
  const titleAttr = title ? ` title="${title}"` : ''
  return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`
}
marked.use({ renderer })

// Post-process marked HTML to convert GitHub-style alert blocks into styled callouts
function parseMarkdown(content: string): string {
  const html = marked.parse(content) as string

  const alertTypes: Record<string, { bg: string; border: string; title: string; icon: string }> = {
    NOTE: { bg: 'rgba(9,105,218,0.08)', border: '#0969da', title: '#0969da', icon: 'ℹ️' },
    TIP: { bg: 'rgba(26,127,55,0.08)', border: '#1a7f37', title: '#1a7f37', icon: '💡' },
    IMPORTANT: { bg: 'rgba(130,80,223,0.08)', border: '#8250df', title: '#8250df', icon: '🔔' },
    WARNING: { bg: 'rgba(154,103,0,0.08)', border: '#9a6700', title: '#9a6700', icon: '⚠️' },
    CAUTION: { bg: 'rgba(207,34,46,0.08)', border: '#cf222e', title: '#cf222e', icon: '🚫' },
  }

  return html.replace(
    /<blockquote>\s*<p>\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*([\s\S]*?)<\/p>\s*<\/blockquote>/g,
    (_match, type: string, body: string) => {
      const t = alertTypes[type]
      const label = type.charAt(0) + type.slice(1).toLowerCase()
      return `<div style="background:${t.bg};border-left:4px solid ${t.border};border-radius:6px;padding:12px 16px;margin:16px 0">
  <div style="font-weight:700;margin-bottom:4px;color:${t.title}">${t.icon} ${label}</div>
  <div>${body.trim()}</div>
</div>`
    }
  )
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Jebin Philipose',
      url: 'https://jebinphilipose.dev',
    },
    url: `https://jebinphilipose.dev/blog/${post.slug}`,
  }

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to writing
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <time
              dateTime={post.date}
              className="text-[10px] font-bold uppercase tracking-widest text-slate-500"
            >
              {formatDate(post.date)}
            </time>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary">
              {post.category}
            </span>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <Clock size={11} aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        <hr className="border-slate-200 dark:border-slate-800 mb-12" />

        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:before:content-none prose-code:after:content-none prose-blockquote:before:content-none prose-blockquote:after:content-none">
          <div
            dangerouslySetInnerHTML={{ __html: parseMarkdown(post.content) }}
          />
        </article>
      </div>
    </PageShell>
  )
}

