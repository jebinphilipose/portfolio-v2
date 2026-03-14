import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageShell } from '@/components/PageShell'
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Layers,
  Cpu,
  CloudCog,
  Zap,
  Network,
} from 'lucide-react'
import {
  SiPython,
  SiDjango,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiCelery,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiClojure,
  SiGooglecloud,
} from 'react-icons/si'
import { FaAws, FaJava, FaStackExchange, FaAngellist } from 'react-icons/fa'
import { TbBrandCpp } from 'react-icons/tb'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Senior Software Engineer with 4+ years of experience building scalable B2B SaaS products.',
}

const techStack = [
  // Languages
  { label: 'Python', icon: SiPython, color: 'bg-yellow-500/10', iconColor: '#3776AB' },
  { label: 'JavaScript (ES6)', icon: SiJavascript, color: 'bg-yellow-400/10', iconColor: '#F7DF1E' },
  { label: 'Java', icon: FaJava, color: 'bg-red-500/10', iconColor: '#ED8B00' },
  { label: 'C++', icon: TbBrandCpp, color: 'bg-blue-600/10', iconColor: '#00599C' },
  { label: 'Clojure', icon: SiClojure, color: 'bg-green-600/10', iconColor: '#5881D8' },
  // Frameworks & Libraries
  { label: 'Django', icon: SiDjango, color: 'bg-green-800/10', iconColor: '#092E20' },
  { label: 'Flask', icon: SiFlask, color: 'bg-neutral-500/10', iconColor: '#555555' },
  { label: 'Node.js', icon: SiNodedotjs, color: 'bg-green-500/10', iconColor: '#339933' },
  { label: 'Express.js', icon: SiExpress, color: 'bg-neutral-400/10', iconColor: '#555555' },
  { label: 'React.js', icon: SiReact, color: 'bg-cyan-500/10', iconColor: '#61DAFB' },
  { label: 'Next.js', icon: SiNextdotjs, color: 'bg-neutral-500/10', iconColor: '#000000' },
  { label: 'Celery', icon: SiCelery, color: 'bg-green-400/10', iconColor: '#37814A' },
  // Frontend
  { label: 'HTML', icon: SiHtml5, color: 'bg-orange-500/10', iconColor: '#E34F26' },
  { label: 'CSS', icon: SiCss, color: 'bg-blue-500/10', iconColor: '#1572B6' },
  // Databases
  { label: 'PostgreSQL', icon: SiPostgresql, color: 'bg-blue-500/10', iconColor: '#4169E1' },
  { label: 'MySQL', icon: SiMysql, color: 'bg-sky-600/10', iconColor: '#4479A1' },
  { label: 'MongoDB', icon: SiMongodb, color: 'bg-green-500/10', iconColor: '#47A248' },
  { label: 'Redis', icon: SiRedis, color: 'bg-red-500/10', iconColor: '#DC382D' },
  // Infrastructure & DevOps
  { label: 'AWS', icon: FaAws, color: 'bg-orange-500/10', iconColor: '#FF9900' },
  { label: 'GCP', icon: SiGooglecloud, color: 'bg-blue-400/10', iconColor: '#4285F4' },
  { label: 'Docker', icon: SiDocker, color: 'bg-sky-500/10', iconColor: '#2496ED' },
  { label: 'Kubernetes', icon: SiKubernetes, color: 'bg-blue-600/10', iconColor: '#326CE5' },
  { label: 'Git', icon: SiGit, color: 'bg-orange-600/10', iconColor: '#F05032' },
  { label: 'CI/CD', icon: CloudCog, color: 'bg-violet-500/10', iconColor: '#7C3AED' },
  // Architecture & Practices
  { label: 'REST API Design', icon: Network, color: 'bg-teal-500/10', iconColor: '#0D9488' },
  { label: 'Microservices', icon: Layers, color: 'bg-indigo-500/10', iconColor: '#6366F1' },
  { label: 'System Design', icon: Cpu, color: 'bg-purple-500/10', iconColor: '#9333EA' },
  { label: 'Performance Optimization', icon: Zap, color: 'bg-amber-500/10', iconColor: '#F59E0B' },
]

const connectLinks = [
  { href: 'https://github.com/jebinphilipose/', label: 'GitHub', icon: Github, variant: 'dark' as const },
  { href: 'https://in.linkedin.com/in/jebin-philipose/', label: 'LinkedIn', icon: Linkedin, variant: 'primary' as const },
  { href: 'https://stackexchange.com/users/9958388/jebin-philipose?tab=accounts/', label: 'StackExchange', icon: FaStackExchange, variant: 'default' as const },
  { href: 'https://angel.co/u/jebinphilipose/', label: 'AngelList', icon: FaAngellist, variant: 'default' as const },
  { href: 'mailto:contact@jebinphilipose.dev', label: 'Email', icon: Mail, variant: 'default' as const },
  { href: '/Jebin_Philipose_Senior_Backend_Engineer.pdf', label: 'Resume', icon: FileText, variant: 'default' as const },
]

export default function AboutPage() {
  return (
    <PageShell>
      {/* Profile Section */}
      <header className="flex flex-col items-center text-center mb-16">
        <div className="relative group mb-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000" aria-hidden="true" />
          <div className="relative rounded-full p-1" style={{ background: 'var(--card-border)' }}>
            <Image
              src="/profile.webp"
              alt="Jebin Philipose"
              width={128}
              height={128}
              priority
              className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white" style={{ color: 'var(--heading-text)' }}>
            Jebin Philipose
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-normal" style={{ color: 'var(--muted-text)' }}>
            I am a{' '}
            <span className="text-primary font-semibold">Senior Software Engineer</span>{' '}
            with 4+ years of experience building scalable B2B SaaS products from
            0 → 1, translating complex business requirements into reliable,
            production-grade systems. My core strength lies in designing
            architectures that scale efficiently under load. I work primarily with{' '}
            <span className="text-primary font-semibold">Python (Django), PostgreSQL, Redis, Celery, Docker, AWS</span>
            , and modern microservices patterns, and have a strong track record of
            optimizing performance, reducing infrastructure costs, and eliminating
            system bottlenecks. I enjoy solving hard engineering problems—whether
            that means architecting new systems, debugging critical production
            issues, or refactoring legacy services for scale. While my deep
            expertise is in building robust, scalable backends, I am also fully
            equipped to deliver as a Fullstack Engineer depending on the needs of the team and the product.
          </p>
        </div>
      </header>

      {/* Current Role */}
      <section className="mb-16 text-center" aria-labelledby="current-role-heading">
        <h2 id="current-role-heading" className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
          Current Role
        </h2>
        <div
          className="p-8 rounded-xl transition-all duration-300 text-left"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 dark:text-white" style={{ color: 'var(--heading-text)' }}>
                Senior Software Engineer
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--muted-text)' }}>
                Leading backend architecture and performance optimization for distributed systems.
              </p>
            </div>
            <a
              href="https://in.linkedin.com/in/jebin-philipose/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn Profile"
              className="text-primary hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <ExternalLink size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16 text-center" aria-labelledby="tech-stack-heading">
        <h2 id="tech-stack-heading" className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
          Tech Stack
        </h2>
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { display: flex; width: max-content; }
          .marquee-left  { animation: marquee-left 40s linear infinite; }
          .marquee-viewport:hover .marquee-left { animation-play-state: paused; }
        `}</style>

        <div className="marquee-viewport overflow-hidden relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10" style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10" style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }} />
          <div className="marquee-track marquee-left">
            {[...techStack, ...techStack].map(({ label, icon: Icon, color, iconColor }, i) => (
              <div
                key={`skill-${i}`}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl mx-2 shrink-0"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              >
                <span className={`flex items-center justify-center size-7 rounded ${color}`} aria-hidden="true">
                  <Icon size={16} style={{ color: iconColor }} />
                </span>
                <span className="font-semibold text-sm whitespace-nowrap" style={{ color: 'var(--heading-text)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="text-center" aria-labelledby="connect-heading">
        <h2 id="connect-heading" className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8">
          Connect
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {connectLinks.map(({ href, label, icon: Icon, variant }) => {
            let cls = ''
            let style = {}
            if (variant === 'dark') {
              cls = 'hover:opacity-90'
              style = { background: '#111213', color: '#ffffff' }
            } else if (variant === 'primary') {
              cls = 'bg-primary/10 text-primary hover:bg-primary/20'
            } else {
              cls = 'dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 hover:opacity-90'
              style = { background: 'var(--card-bg)', color: 'var(--heading-text)', border: '1px solid var(--card-border)' }
            }
            return (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
                rel={href.startsWith('http') || href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-bold transition-all text-sm ${cls}`}
                style={style}
              >
                <Icon size={18} aria-hidden="true" />
                {label}
              </Link>
            )
          })}
        </div>
      </section>
    </PageShell>
  )
}
