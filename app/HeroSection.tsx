import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        '.hero-line-1',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-line-2',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          '.hero-line-3',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          scrollRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out' },
          '-=0.3'
        );

      gsap.to(scrollRef.current, {
        y: 8,
        duration: 1.5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="foundation"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Subtle radial glow behind text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(38 45% 58% / 0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative text-center px-6 max-w-5xl mx-auto">
        {/* Overline */}
        <div className="mb-8 opacity-0" ref={subtitleRef}>
          <span className="text-[11px] uppercase tracking-[0.35em] text-hasse-text3 font-body">
            Johann Christian Hasse Foundation · Est. 2014
          </span>
        </div>

        {/* Main Title */}
        <div ref={titleRef} className="font-display">
          <h1 className="text-display-xl font-light text-hasse-text leading-none">
            <span className="hero-line-1 block opacity-0">Time is</span>
            <span className="hero-line-2 block opacity-0 italic text-hasse-amber font-normal" style={{ marginTop: '-0.05em' }}>
              life
            </span>
            <span className="hero-line-3 block opacity-0" style={{ marginTop: '-0.05em' }}>
              as memory.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-12 opacity-0" ref={subtitleRef}>
          <p className="text-sm text-hasse-text2 leading-relaxed max-w-lg mx-auto font-body">
            A foundation for anticipatory governance, legal architecture, and the
            preservation of living systems.
          </p>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex items-center justify-center gap-4 opacity-0" ref={subtitleRef}>
          <a
            href="#gap"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#gap')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-6 py-2.5 border border-hasse-amber/50 text-hasse-amber text-[11px] uppercase tracking-[0.2em] font-body hover:bg-hasse-amber/10 transition-all duration-500"
          >
            Explore Our Work
          </a>
          <a
            href="#lineage"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#lineage')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-2.5 text-hasse-text3 text-[11px] uppercase tracking-[0.2em] font-body hover:text-hasse-text transition-colors duration-300"
          >
            The Lineage
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-hasse-text3">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-hasse-text3/40 to-transparent" />
      </div>
    </section>
  );
}
