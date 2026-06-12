import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LINEAGE = [
  {
    period: '1718–1781',
    location: 'Kiel',
    title: 'Andreas Weber',
    subtitle: 'Rational Cosmology & Public Governance',
    description:
      'Rector of the University of Kiel. Transformed rationalism into early systems biology. Understood that nature imposes biological and systemic limits that cannot be legislated away — integrating scientific discipline directly into state administration.',
    quote: 'Nature imposes limits that cannot be legislated away.',
  },
  {
    period: '1779–1830',
    location: 'Bonn',
    title: 'Johann Christian Hasse',
    subtitle: 'Juridical Architecture',
    description:
      'Rector of the University of Bonn. Translated systemic legacy into the legal realm. Conceived law as temporal architecture — framing the jurist not merely as interpreter of norms, but as designer of institutional durability.',
    quote: 'Law as a temporal architecture for institutional durability.',
  },
  {
    period: '1874–1908',
    location: 'Belem',
    title: 'Eduard Johannes Heinrich Hass',
    subtitle: 'Territory & Execution',
    description:
      'Carried the legacy of rectors and administrators into the Amazon. Chief of Municipal Gardening under Intendant Antonio Lemos. Transformed urban ecology through the Municipal Horto and systematic arborization of Belem.',
    quote: 'Systems cease to be theoretical. They become climatic, botanical, urban.',
  },
  {
    period: '2014–Present',
    location: 'Global',
    title: 'The Foundation',
    subtitle: 'Continuity, Not Inheritance',
    description:
      'The Johann Christian Hasse Foundation does not exist to canonize ancestors. It exists to preserve a method of thinking that treats institutions as living structures and law as a temporal responsibility.',
    quote: 'Time is life as memory.',
  },
];

export default function LineageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lineage-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.lineage-heading', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.lineage-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.lineage-list', start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="lineage"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ zIndex: 2, background: '#0D0D0F' }}
    >
      {/* Background decorative vertical line */}
      <div className="absolute left-6 lg:left-1/3 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-hasse-border to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="lineage-heading mb-16 lg:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-amber mb-4 block">
            From Kiel to the Amazon
          </span>
          <h2 className="font-display text-display-md text-hasse-text font-light leading-tight">
            A <em className="text-hasse-amber">Family</em> of Thought
          </h2>
          <p className="mt-6 text-hasse-text2 leading-relaxed max-w-2xl">
            Across generations, its figures approached the same intuition from different domains:
            philosophy and theology, science and medicine, law and institutional design, urbanism
            and ecology. They did not share a doctrine, but a method.
          </p>
        </div>

        {/* Desktop: split layout */}
        <div className="lineage-list grid lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Left: Timeline navigation */}
          <div className="lg:col-span-1 space-y-1">
            {LINEAGE.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`lineage-item w-full text-left px-5 py-4 border-l-2 transition-all duration-500 group ${
                  activeIdx === i
                    ? 'border-hasse-amber bg-hasse-amber/[0.04]'
                    : 'border-hasse-border2 hover:border-hasse-border'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-[10px] tracking-wider transition-colors ${
                      activeIdx === i ? 'text-hasse-amber' : 'text-hasse-text3'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>
                <div
                  className={`mt-1 font-display text-lg transition-colors ${
                    activeIdx === i ? 'text-hasse-text' : 'text-hasse-text2 group-hover:text-hasse-text'
                  }`}
                >
                  {item.location}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detail */}
          <div className="lg:col-span-2 relative">
            <div className="sticky top-32">
              {LINEAGE.map((item, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    activeIdx === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-hasse-amber">{item.period}</span>
                    <span className="w-8 h-px bg-hasse-border" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-hasse-text3">
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-hasse-text font-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-hasse-amber italic mb-6 font-display">{item.subtitle}</p>
                  <p className="text-hasse-text2 leading-relaxed mb-8 max-w-xl">{item.description}</p>
                  <blockquote className="border-l-2 border-hasse-amber pl-5 py-2">
                    <p className="font-display text-lg text-hasse-text italic">"{item.quote}"</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-24 lg:mt-32 text-center">
          <p className="font-display text-xl md:text-2xl text-hasse-text italic max-w-3xl mx-auto leading-relaxed">
            Life cannot be governed as if it were{' '}
            <em className="text-hasse-amber">static</em>,{' '}
            <em className="text-hasse-amber">fragmentary</em>, or{' '}
            <em className="text-hasse-amber">reversible</em>.
          </p>
        </div>
      </div>
    </section>
  );
}
