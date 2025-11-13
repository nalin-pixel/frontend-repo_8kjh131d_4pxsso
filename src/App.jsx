import { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, ExternalLink, Film, Scissors, Palette, Music2, Play } from 'lucide-react';

function Nav() {
  const links = [
    { href: '#reel', label: 'Reel' },
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900">Video Editor Portfolio</a>
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
              Book a project
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

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-widest text-gray-600 uppercase">Cinematic storytelling</p>
          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Crafting standout edits for brands, creators, and music videos
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I specialize in pacing, color, and sound to shape emotion and keep audiences engaged across social, commercial, and narrative formats.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reel" className="rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">
              Watch reel
            </a>
            <a href="#contact" className="rounded-full border border-gray-300 px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
              Book a project
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

function Reel() {
  return (
    <section id="reel" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Editor’s reel</h2>
            <p className="mt-3 text-gray-700">A quick cut of commercial, music, and social pieces.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black transition-colors">
            <Film className="h-4 w-4" /> Book now
          </a>
        </div>

        <div className="mt-8 relative rounded-2xl overflow-hidden ring-1 ring-black/10 shadow-sm bg-black">
          <video
            className="w-full h-full"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            poster="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1600&auto=format&fit=crop"
            controls
          />
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = useMemo(() => [
    {
      title: 'Streetwear Brand — Launch Film',
      role: 'Edit • Color • Sound',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
      tags: ['Commercial', '16:9', '60s'],
    },
    {
      title: 'Indie Artist — Music Video',
      role: 'Edit • VFX • Color',
      src: 'https://www.w3schools.com/html/movie.mp4',
      poster: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1600&auto=format&fit=crop',
      tags: ['MV', '2:1', '3m'],
    },
    {
      title: 'Fitness Creator — Short Form',
      role: 'Edit • Motion',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      poster: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
      tags: ['Social', '9:16', '30s'],
    },
  ], []);

  return (
    <section id="work" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-3 text-gray-700">A few edits that highlight pacing, rhythm, and storytelling.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
                <video
                  className="h-full w-full object-cover"
                  src={p.src}
                  poster={p.poster}
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="rounded-full bg-white/90 p-3 shadow">
                    <Play className="h-6 w-6 text-gray-900" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.role}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs rounded-full bg-gray-100 text-gray-700 px-2.5 py-1">{t}</span>
                ))}
              </div>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:gap-2 transition-all">
                Enquire about this style <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Scissors, title: 'Editing & Assembly', desc: 'Narrative structure, pacing, transitions, multi-cam, captions.' },
    { icon: Palette, title: 'Color & Finishing', desc: 'Primary/secondary correction, looks, film emulation, noise + grain.' },
    { icon: Film, title: 'Social & Ads', desc: 'Short form hooks, UGC pacing, platform-native ratios and specs.' },
    { icon: Music2, title: 'Sound Polish', desc: 'SFX, mixing, music cutdowns, dialogue cleanup and mastering.' },
  ];
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <s.icon className="h-6 w-6 text-gray-900" />
              <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      quote: 'Brought our brand film to life with sharp pacing and beautiful color. Turnaround was fast and collaborative.',
      author: 'Ava Chen, Creative Director',
    },
    {
      quote: 'Understood the vibe instantly. The short-form edits crushed across platforms and lifted CTR.',
      author: 'Marcus Lee, Growth Lead',
    },
    {
      quote: 'Seamless process from brief to delivery. Sound and rhythm took the video from good to great.',
      author: 'Indie Artist',
    },
  ];
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-gradient-to-t from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What clients say</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.author} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-800">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-gray-700">— {q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s cut your next project</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Share your brief, references, and delivery timeline. I’ll reply within 24 hours with availability and a quote.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black transition-colors">
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors">
            <Github className="h-4 w-4" /> Portfolio code
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
        <p>© {new Date().getFullYear()} Your Name — Video Editor. All rights reserved.</p>
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
        <Reel />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
