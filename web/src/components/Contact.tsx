import Reveal from './Reveal';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <section id="message" className="scroll-mt-24 border-t border-cream/15 px-6 py-24 text-center sm:px-10 sm:py-36">
      <div className="mx-auto max-w-2xl">
        <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
          Let&apos;s connect
        </Reveal>
        <Reveal as="h2" className="mt-3 font-hn text-3xl font-semibold sm:text-4xl">
          Open to new opportunities and conversations
        </Reveal>
        <Reveal as="p" className="mt-6 text-sm text-cream/60">
          Whether it&apos;s a role, a project, or just a chat about AI and data — feel free to reach out.
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-hn text-sm">
          <a href={contact.emailHref} className="underline decoration-cream/30 underline-offset-4 transition-opacity hover:opacity-60">
            {contact.email}
          </a>
          <a href={contact.phoneHref} className="underline decoration-cream/30 underline-offset-4 transition-opacity hover:opacity-60">
            {contact.phone}
          </a>
          <a
            href={contact.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-cream/30 underline-offset-4 transition-opacity hover:opacity-60"
          >
            {contact.linkedinLabel}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
