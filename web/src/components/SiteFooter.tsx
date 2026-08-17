function scrollToTop() {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-cream/15 px-6 py-6 sm:px-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between font-hn text-xs text-cream/50">
        <p>&copy; {new Date().getFullYear()} Suriya Prakash Ravikumar. All rights reserved.</p>
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-cream/50"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
