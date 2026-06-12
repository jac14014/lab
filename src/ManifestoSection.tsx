import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.manifesto-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'top 25%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44"
      style={{ zIndex: 2, background: 'linear-gradient(180deg, #0D0D0F 0%, #111116 50%, #0D0D0F 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="manifesto-text">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-hasse-amber/40" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-amber">Manifesto</span>
          </div>

          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-hasse-text leading-relaxed font-light">
            In 2014, a realization emerged — not as theory, but as{' '}
            <em className="text-hasse-amber not-italic" style={{ fontStyle: 'italic' }}>
              lived understanding
            </em>:
            time is life as memory. Time is not an external container in which events
            occur. It is the way life records itself. It is continuity, inscription, and
            consequence.
          </blockquote>

          <div className="mt-12 flex items-center gap-6">
            <div className="w-1 h-12 bg-gradient-to-b from-hasse-amber/60 to-transparent" />
            <div>
              <p className="text-sm text-hasse-text2 leading-relaxed max-w-xl">
                The Johann Christian Hasse Foundation exists to develop, test, and disseminate
                governance frameworks capable of operating effectively under conditions of
                systemic uncertainty and ecological threshold risk.
              </p>
              <p className="mt-4 text-sm text-hasse-text2 leading-relaxed max-w-xl">
                Where conventional institutions assume stability, the Foundation operates on
                the premise that systems — ecological, economic, and social — can undergo
                rapid, irreversible transitions when critical thresholds are crossed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
