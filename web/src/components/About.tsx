import Reveal from './Reveal';
import { about, focusAreas } from '../data/content';

export default function About() {
  return (
    <section id="story" className="scroll-mt-24 border-t border-cream/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
          Story
        </Reveal>
        <Reveal as="h2" className="mt-3 max-w-2xl font-hn text-3xl font-semibold sm:text-4xl">
          Turning complex financial challenges into AI-powered solutions
        </Reveal>

        <div className="mt-12 grid gap-12 sm:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            {about.map((p, i) => (
              <Reveal key={i} as="p" className="text-cream/70">
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal as="div" className="border-t border-cream/15 pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <p className="font-hn text-sm font-semibold">Core focus areas</p>
            <ul className="mt-5 space-y-4">
              {focusAreas.map((f) => (
                <li key={f} className="border-t border-cream/10 pt-4 text-sm text-cream/60 first:border-t-0 first:pt-0">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
