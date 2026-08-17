import { useEffect } from 'react';
import { X } from 'lucide-react';
import { nav, socials } from '../data/content';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  return (
    <div className="sm:hidden">
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed right-0 top-0 z-40 h-full w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transitionDuration: '600ms',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center text-cream transition-all duration-300"
          style={{
            transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
            opacity: open ? 1 : 0,
            transitionDelay: open ? '300ms' : '0ms',
          }}
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        <div className="mt-16">
          <p
            className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
            style={{
              transform: open ? 'translateY(0)' : 'translateY(12px)',
              opacity: open ? 1 : 0,
              transitionDelay: open ? '250ms' : '0ms',
            }}
          >
            Site Index
          </p>
          <nav className="mt-4 flex flex-col gap-2">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="font-hn text-4xl transition-all duration-500"
                style={{
                  transform: open ? 'translateY(0)' : 'translateY(24px)',
                  opacity: open ? 1 : 0,
                  transitionDelay: open ? `${300 + i * 80}ms` : '0ms',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-14">
          <p
            className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500"
            style={{
              transform: open ? 'translateY(0)' : 'translateY(12px)',
              opacity: open ? 1 : 0,
              transitionDelay: open ? '500ms' : '0ms',
            }}
          >
            Find Me
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {socials.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                className="font-hn text-sm transition-all duration-500"
                style={{
                  transform: open ? 'translateY(0)' : 'translateY(16px)',
                  opacity: open ? 1 : 0,
                  transitionDelay: open ? `${550 + i * 60}ms` : '0ms',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
