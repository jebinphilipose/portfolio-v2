import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Code, Star, Mail } from 'lucide-react'
import { PageShell } from '@/components/PageShell'
import { getAllProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of technical projects — each represents a challenge I loved tackling.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <PageShell>
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight dark:text-white" style={{ color: 'var(--heading-text)' }}>
          Selected Work
        </h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--muted-text)' }}>
          A collection of my technical projects, each represents a challenge I loved tackling.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12" role="list">
        {projects.map((project) => (
          <article
            key={project.slug}
            role="listitem"
            className="group relative flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
            style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <div className="aspect-video overflow-hidden relative" style={{ borderBottom: '1px solid var(--card-border)' }}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 672px) 100vw, 672px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
              <div className="flex items-center justify-between mb-2">
                <h2
                  className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors"
                  style={{ color: 'var(--heading-text)' }}
                >
                  {project.title}
                </h2>
                {project.featured && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary flex-shrink-0">
                    Featured
                  </span>
                )}
              </div>

              <p className="mb-6 line-clamp-2 leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      role="listitem"
                      className="text-[11px] font-medium px-2 py-1 rounded"
                      style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5">
                  {project.caseStudyUrl && (
                    <Link href={project.caseStudyUrl} className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-primary transition-colors" style={{ color: 'var(--heading-text)' }} aria-label={`View case study for ${project.title}`}>
                      Case Study <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                  {project.sourceUrl && (
                    <Link href={project.sourceUrl} className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-primary transition-colors" style={{ color: 'var(--muted-text)' }} aria-label={`View source for ${project.title}`}>
                      Source <Code size={14} aria-hidden="true" />
                    </Link>
                  )}
                  {project.liveDemoUrl && (
                    <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-primary transition-colors" style={{ color: 'var(--heading-text)' }} aria-label={`View live demo for ${project.title}`}>
                      Live Demo <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold hover:text-primary transition-colors" style={{ color: 'var(--heading-text)' }} aria-label={`View GitHub for ${project.title}`}>
                      GitHub <Star size={14} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-20 text-center" aria-labelledby="cta-heading">
        <div className="p-8 md:p-10 rounded-xl bg-primary/5 border border-primary/10">
          <h3 id="cta-heading" className="text-2xl md:text-3xl font-bold mb-4 tracking-tight dark:text-white" style={{ color: 'var(--heading-text)' }}>
            Want to work together?
          </h3>
          <p className="mb-8 max-w-sm mx-auto text-sm md:text-base leading-relaxed" style={{ color: 'var(--muted-text)' }}>
            I&apos;m currently available for freelance opportunities or full-time roles.
          </p>
          <Link
            href="mailto:contact@jebinphilipose.dev"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all transform hover:scale-105 text-sm"
          >
            <Mail size={16} aria-hidden="true" />
            Email Me
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
