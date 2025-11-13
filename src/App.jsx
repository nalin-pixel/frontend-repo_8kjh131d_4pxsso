import { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function Nav() {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-gray-900">My Portfolio</a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-black transition-colors"
            >
              Let’s talk
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-gray-600 uppercase">Portfolio</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Building playful, modern web experiences
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I craft interactive interfaces with a focus on clean design, smooth interactions, and accessible, scalable code.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">
              See projects
            </a>
            <a href="#contact" className="rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              Get in touch
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-gray-700">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-gray-900" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="hover:text-gray-900" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = useMemo(() => [
    {
      title: 'Interactive 3D Landing',
      description: 'A hero experience powered by WebGL + Spline with smooth scrolling and parallax layers.',
      link: '#',
      tags: ['Spline', 'React', 'Three'],
    },
    {
      title: 'SaaS Dashboard',
      description: 'A modular dashboard with responsive charts, themes, and role-based access control.',
      link: '#',
      tags: ['React', 'Tailwind', 'API'],
    },
    {
      title: 'Marketing Site',
      description: 'Lightning-fast marketing pages optimized for SEO and conversions with A/B testing hooks.',
      link: '#',
      tags: ['Vite', 'SEO', 'Analytics'],
    },
  ], []);

  return (
    <section id="projects" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-3 text-gray-700">A few highlights that showcase my approach to product design and engineering.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video mb-4 rounded-lg bg-gradient-to-br from-indigo-100 to-sky-100" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:gap-2 transition-all">
                View project <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a front-end engineer who loves bringing interfaces to life with motion and 3D. I turn complex problems into joyful, intuitive experiences.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I focus on performance, accessibility, and developer experience to ship resilient products quickly.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-200 via-sky-200 to-teal-200" />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Spline', 'Three.js', 'FastAPI', 'MongoDB', 'Vite'
  ];
  return (
    <section id="skills" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Skills</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s) => (
            <div key={s} className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-800">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-t from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s build something</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I’d love to hear from you.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors">
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <a href="#home" className="hover:text-gray-900">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
