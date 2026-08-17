import Reveal from './Reveal';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-cream/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
          Selected work
        </Reveal>
        <Reveal as="h2" className="mt-3 font-hn text-3xl font-semibold sm:text-4xl">
          Key projects
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-cream/15 sm:grid-cols-2 sm:divide-x sm:divide-cream/15">
          {projects.map((p) => (
            <Reveal key={p.title} className="pt-8 sm:px-8 sm:first:pl-0">
              <h3 className="font-hn text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.description}</p>
              <p className="mt-6 border-t border-cream/10 pt-4 text-xs text-cream/50">
                <span className="font-hn font-semibold text-cream">{p.metricValue}</span> {p.metricLabel}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
