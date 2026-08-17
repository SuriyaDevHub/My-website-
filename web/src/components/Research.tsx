import Reveal from './Reveal';
import { research, education, certifications } from '../data/content';

export default function Research() {
  return (
    <section id="research" className="scroll-mt-24 border-t border-cream/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-16 sm:grid-cols-2">
        <div>
          <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
            Focus areas
          </Reveal>
          <Reveal as="h2" className="mt-3 font-hn text-3xl font-semibold sm:text-4xl">
            Research interests
          </Reveal>
          <Reveal as="p" className="mt-6 text-sm text-cream/60">
            Driven by continuous learning and innovation, currently pursuing research in:
          </Reveal>
          <ul className="mt-6 divide-y divide-cream/15 border-t border-cream/15">
            {research.map((r) => (
              <Reveal key={r} as="li" className="py-4 text-sm text-cream/70">
                {r}
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
            Academics
          </Reveal>
          <Reveal as="h2" className="mt-3 font-hn text-3xl font-semibold sm:text-4xl">
            Education &amp; certifications
          </Reveal>

          <ul className="mt-6 divide-y divide-cream/15 border-t border-cream/15">
            {education.map((e) => (
              <Reveal key={e.degree} as="li" className="flex items-baseline justify-between gap-3 py-4">
                <div>
                  <p className="font-hn text-sm font-semibold">{e.degree}</p>
                  <p className="mt-1 text-sm text-cream/60">{e.org}</p>
                </div>
                <p className="whitespace-nowrap font-hn text-xs text-cream/50">{e.date}</p>
              </Reveal>
            ))}
          </ul>

          <ul className="mt-8 space-y-2">
            {certifications.map((c) => (
              <Reveal key={c} as="li" className="text-sm text-cream/70">
                — {c}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
