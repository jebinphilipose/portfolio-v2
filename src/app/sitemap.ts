import { getAllBlogPosts, getAllProjects } from '@/lib/content'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllBlogPosts()
    const projects = getAllProjects()
    const base = 'https://jebinphilipose.com'

    return [
        { url: `${base}/about`, lastModified: new Date(), priority: 1.0 },
        { url: `${base}/blog`, lastModified: new Date(), priority: 0.8 },
        { url: `${base}/projects`, lastModified: new Date(), priority: 0.8 },
        ...posts.map(p => ({
            url: `${base}/blog/${p.slug}`,
            lastModified: new Date(p.date),
            priority: 0.6,
        })),
    ]
}
