import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  readingTime: string
  content: string
}

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  featured: boolean
  image: string
  imageAlt: string
  caseStudyUrl?: string
  sourceUrl?: string
  liveDemoUrl?: string
  githubUrl?: string
  order: number
  content: string
}

function parseDate(dateStr: string): Date {
  return new Date(dateStr)
}

export function getAllBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, 'blog')
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      slug: data.slug || filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      readingTime: data.readingTime || '5 min read',
      content,
    } as BlogPost
  })

  return posts.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllBlogPosts()
  return posts.find((p) => p.slug === slug)
}

export function getAllProjects(): Project[] {
  const projectsDir = path.join(contentDirectory, 'projects')
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.mdx'))

  const projects = files.map((filename) => {
    const filePath = path.join(projectsDir, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
      slug: data.slug || filename.replace('.mdx', ''),
      title: data.title,
      description: data.description,
      tags: data.tags || [],
      featured: data.featured || false,
      image: data.image,
      imageAlt: data.imageAlt,
      caseStudyUrl: data.caseStudyUrl,
      sourceUrl: data.sourceUrl,
      liveDemoUrl: data.liveDemoUrl,
      githubUrl: data.githubUrl,
      order: data.order || 99,
      content,
    } as Project
  })

  return projects.sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects()
  return projects.find((p) => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}
