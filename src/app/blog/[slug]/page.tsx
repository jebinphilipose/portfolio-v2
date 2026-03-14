import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock } from 'lucide-react'
import { PageShell } from '@/components/PageShell'
import { getAllBlogPosts, getBlogPostBySlug, formatDate } from '@/lib/content'

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
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <PageShell>
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

        <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-medium prose-code:before:content-none prose-code:after:content-none">
          <div
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />
        </article>
      </div>
    </PageShell>
  )
}

// Simple markdown to HTML for the content display
function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|l])(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hul])/g, '$1')
    .replace(/(<\/[hul][^>]*>)<\/p>/g, '$1')
}
