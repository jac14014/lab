import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VERTENTES = [
  {
    id: 'note',
    label: 'NOTE',
    title: 'Enduring Texts',
    desc: 'Core doctrinal publications of the Hasse Foundation — texts that establish, explain, and justify the conceptual foundations of the c-ECO framework. These are not journalistic or opinion pieces. They are meant to remain meaningful across time, resisting passing intellectual trends.',
    features: ['Doctrinal publications', 'Conceptual foundations', 'c-ECO framework documentation'],
    link: 'https://c-eco.org/foundation.html#note',
  },
  {
    id: 'feature',
    label: 'FEATURE',
    title: 'Living Systems Inquiry',
    desc: 'Extended analytical essays exploring law, ecology, governance, and systemic memory. Feature texts investigate threshold dynamics, anticipatory governance, and the temporal architecture of institutions through rigorous interdisciplinary inquiry.',
    features: ['Interdisciplinary essays', 'Threshold dynamics analysis', 'Governance research'],
    link: 'https://c-eco.org/foundation.html#feature',
  },
  {
    id: 'dossier',
    label: 'DOSSIER',
    title: 'Field Documentation',
    desc: 'Empirical records from the Amazon Living Lab — translating territorial and institutional memory into structures capable of guiding future action. Dossiers combine field data, legal analysis, and governance protocols into operational documents.',
    features: ['Amazon Lab field data', 'Legal & governance protocols', 'Operational documentation'],
    link: 'https://c-eco.org/foundation.html#dossier',
  },
];

export default function VertentesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.vert-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.vert-heading', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.vert-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.vert-cards', start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="publications"
      className="relative py-28 md:py-36"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="vert-heading mb-16 lg:mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-amber mb-4 block">
            Publications
          </span>
          <h2 className="font-display text-display-md text-hasse-text font-light leading-tight">
            Three <em className="text-hasse-amber">Vertentes</em>
          </h2>
          <p className="mt-5 text-hasse-text2 leading-relaxed max-w-2xl">
            The Foundation publishes through three distinct channels, each with a specific
            purpose, audience, and temporal intention.
          </p>
        </div>

        {/* Cards */}
        <div className="vert-cards grid md:grid-cols-3 gap-6">
          {VERTENTES.map((v) => (
            <a
              key={v.id}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              className="vert-card group block border border-hasse-border2 hover:border-hasse-amber/40 bg-[#0D0D0F]/40 hover:bg-hasse-amber/[0.02] transition-all duration-500"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-hasse-amber">
                    {v.label}
                  </span>
                  <span className="w-8 h-8 rounded-full border border-hasse-border2 group-hover:border-hasse-amber/40 flex items-center justify-center transition-colors duration-500">
                    <svg
                      className="w-3 h-3 text-hasse-text3 group-hover:text-hasse-amber transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </span>
                </div>

                <h3 className="font-display text-2xl text-hasse-text mb-3 group-hover:text-hasse-text transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-hasse-text2 leading-relaxed mb-6 flex-1">{v.desc}</p>

                <div className="space-y-2 pt-4 border-t border-hasse-border2">
                  {v.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-hasse-amber/60" />
                      <span className="text-[11px] text-hasse-text3">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-px bg-hasse-border" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-hasse-text3">
              Read more at{' '}
              <a
                href="https://c-eco.org/foundation.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-hasse-amber hover:underline"
              >
                c-eco.org/foundation
              </a>
            </span>
            <div className="w-16 h-px bg-hasse-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
