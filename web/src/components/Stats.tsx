import Reveal from './Reveal';
import { stats } from '../data/content';

export default function Stats() {
  return (
    <section className="border-t border-cream/15 px-6 py-16 sm:px-10">
      <Reveal className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y divide-cream/15 border border-cream/15 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="p-6 sm:p-8">
            <p className="font-hn text-3xl font-semibold sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-cream/60">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
