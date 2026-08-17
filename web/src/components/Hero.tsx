import { useState } from 'react';
import MobileDrawer from './MobileDrawer';
import { nav, socials, footerLeft, footerRight } from '../data/content';
import heroBg from '../assets/images/hero-bg.webp';
import heroPortrait from '../assets/images/hero-portrait.webp';

const year = new Date().getFullYear();

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover animate-fade-in" />

      <div
        className="absolute inset-x-0 top-[16vh] z-10 overflow-hidden animate-fade-up sm:top-[14vh]"
        style={{ animationDelay: '500ms' }}
      >
        <div className="marquee flex w-max animate-marquee whitespace-nowrap font-hn text-[16vh] font-semibold leading-none text-cream sm:text-[26vh]">
          <span className="pr-[6vw]">Suriya&nbsp;&mdash;&nbsp;Prakash</span>
          <span className="pr-[6vw]">Suriya&nbsp;&mdash;&nbsp;Prakash</span>
        </div>
      </div>

      <img
        src={heroPortrait}
        alt="Portrait"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-full w-full animate-rise-in object-contain object-bottom"
        style={{ animationDelay: '300ms' }}
      />

      <div
        className="absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 origin-left animate-line bg-cream sm:inset-x-10 sm:bottom-28"
        style={{ animationDelay: '1200ms' }}
      />

      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a
          href="#top"
          className="animate-fade-up font-hn text-lg tracking-wide text-cream"
          style={{ animationDelay: '800ms' }}
        >
          Suriya
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span className="animate-fade-up font-hn text-sm text-cream" style={{ animationDelay: '900ms' }}>
            {year}
          </span>

          <nav className="flex flex-col gap-0.5 font-hn text-sm">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className="animate-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1000 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-0.5 font-hn text-sm">
            {socials.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="animate-fade-up text-cream transition-opacity duration-300 hover:opacity-60"
                style={{ animationDelay: `${1150 + i * 80}ms` }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="animate-fade-up relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 sm:hidden"
          style={{ animationDelay: '900ms' }}
        >
          <span
            className="h-[1.5px] w-6 bg-cream transition-transform"
            style={{
              transitionDuration: '500ms',
              transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)',
              transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="h-[1.5px] w-6 bg-cream transition-opacity duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="h-[1.5px] w-6 bg-cream transition-transform"
            style={{
              transitionDuration: '500ms',
              transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)',
              transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed text-cream sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <div className="animate-fade-up" style={{ animationDelay: '1400ms' }}>
          {footerLeft.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="animate-fade-up text-right" style={{ animationDelay: '1550ms' }}>
          <p>{footerRight.label}</p>
          <p>{footerRight.value}</p>
        </div>
      </footer>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
