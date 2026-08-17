import Reveal from './Reveal';

export default function IntroVideo() {
  return (
    <section className="border-t border-cream/15 px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal as="p" className="font-hn text-xs uppercase tracking-[0.2em] text-cream/50">
          Introduction
        </Reveal>
        <Reveal as="h2" className="mt-3 font-hn text-3xl font-semibold sm:text-4xl">
          A quick hello
        </Reveal>

        <Reveal className="mt-10">
          <div className="aspect-video w-full border border-cream/20 bg-black">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              poster="video/intro-poster.jpg"
              aria-label="Introduction video from Suriya Prakash"
            >
              <source src="video/intro.webm" type="video/webm" />
              <source src="video/intro.mp4" type="video/mp4" />
              Your browser doesn&apos;t support embedded video.{' '}
              <a href="video/intro.mp4" className="underline">
                Download the video
              </a>{' '}
              instead.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
