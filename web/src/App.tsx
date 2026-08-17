import Hero from './components/Hero';
import IntroVideo from './components/IntroVideo';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Contact from './components/Contact';
import SiteFooter from './components/SiteFooter';
import { useRevealSweep } from './hooks/useRevealSweep';

export default function App() {
  useRevealSweep();

  return (
    <main id="top" className="bg-black text-cream">
      <Hero />
      <IntroVideo />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Research />
      <Contact />
      <SiteFooter />
    </main>
  );
}
