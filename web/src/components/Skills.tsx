import Reveal from './Reveal';
import { skillCategories } from '../data/content';

export default function Skills() {
  return (
    <section id="expertise" className="scroll-mt-24 border-t border-cream/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
          Capabilities
        </Reveal>
        <Reveal as="h2" className="mt-3 font-hn text-3xl font-semibold sm:text-4xl">
          Technical &amp; domain expertise
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <Reveal key={cat.title} className="border-t border-cream/15 pt-6">
              <h3 className="font-hn text-base font-semibold">{cat.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{cat.items.join(' · ')}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
