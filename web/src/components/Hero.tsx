import { useState } from 'react';
import { ChevronDown, Menu, Sparkles, X } from 'lucide-react';
import sunsetBg from '../assets/images/sunset-bg.webp';

const navLinks = [
  { label: 'Home', href: '#top', active: true },
  { label: 'Work', href: '#work', dropdown: true },
  { label: 'Story', href: '#story' },
  { label: 'Contact', href: '#message' },
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img src={sunsetBg} alt="" className="absolute inset-0 h-full w-full object-cover" />

      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-base font-medium text-white">
          <Sparkles size={22} strokeWidth={1.5} />
          <span>Suriya Prakash Ravikumar</span>
        </a>

        <nav className="liquid-glass hidden items-center gap-1 rounded-xl px-2 py-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`flex items-center gap-0.5 rounded-md px-3 py-1.5 text-sm transition-colors ${
                link.active ? 'bg-white/15 text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={13} className="mt-px" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="resume/Suriya-Prakash-Ravikumar-Resume.pdf"
            download
            className="liquid-glass rounded-full px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Résumé
          </a>
          <a
            href="#message"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Say Hello
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="liquid-glass rounded-lg p-2 text-white md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {menuOpen && (
        <div className="liquid-glass absolute inset-x-4 top-[72px] z-30 flex flex-col gap-1 rounded-2xl p-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm ${
                link.active ? 'bg-white/15 text-white' : 'text-white/80'
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={14} />}
            </a>
          ))}
          <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
            <a
              href="resume/Suriya-Prakash-Ravikumar-Resume.pdf"
              download
              className="liquid-glass flex-1 rounded-full px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Résumé
            </a>
            <a
              href="#message"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Say Hello
            </a>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 z-10 max-w-2xl px-6 pb-10 sm:px-12 sm:pb-16">
        <h1 className="mb-4 text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Building Agentic AI for Modern Finance
        </h1>
        <p className="mb-7 max-w-md text-sm leading-relaxed text-white/60">
          AI &amp; Machine Learning professional turning complex financial challenges into
          intelligent, automated solutions — from agentic systems to enterprise-scale analytics,
          built for real operational impact.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#message"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:px-7 sm:text-base"
          >
            Get in Touch
          </a>
          <a
            href="#work"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:px-7 sm:text-base"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}
