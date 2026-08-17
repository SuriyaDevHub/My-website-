import Reveal from './Reveal';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="jobs" className="scroll-mt-24 border-t border-cream/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
          Career
        </Reveal>
        <Reveal as="h2" className="mt-3 font-hn text-3xl font-semibold sm:text-4xl">
          Professional experience
        </Reveal>

        <div className="mt-12 divide-y divide-cream/15 border-t border-cream/15">
          {experience.map((job) => (
            <Reveal key={job.role} className="py-10">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-hn text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm text-cream/60">{job.org}</p>
                </div>
                <p className="font-hn text-sm text-cream/50">{job.date}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm leading-relaxed text-cream/70">
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
