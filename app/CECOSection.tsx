import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LAYERS = [
  {
    num: '01',
    title: 'Doctrinal Governance',
    subtitle: 'Closed Core · Non-Delegable · Non-Executable',
    desc: 'The closed doctrinal core defines legal ontology, temporal logic, and systemic premises. Not operational, executable, or delegable. Preserves conceptual integrity and normative coherence.',
  },
  {
    num: '02',
    title: 'Decisional Governance',
    subtitle: 'Calibration · Contestation · Binding Resolution',
    desc: 'Translates certified risk signals into non-discretionary governance action. The decisional layer operates through evidence-based trigger logic and legally structured intervention.',
  },
  {
    num: '03',
    title: 'Scientific Governance',
    subtitle: 'Data Custodians · Calibration Council · Peer Review',
    desc: 'Methodological validation, parameter review, threshold governance. Scientific integrity at the core of every governance decision.',
  },
  {
    num: '04',
    title: 'Sectoral Governance',
    subtitle: 'Ecological · Financial · Institutional · Social',
    desc: 'Domain-specific adaptation of governance frameworks to sectoral realities. Each sector maintains autonomy while integrating into the systemic architecture.',
  },
  {
    num: '05',
    title: 'Technical Governance',
    subtitle: 'Implementation · Monitoring · Reporting',
    desc: 'Operational execution, sensor networks, data pipelines, and reporting mechanisms. The technical layer ensures continuous system observation.',
  },
];

export default function CECOSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ceco-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.ceco-heading', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.ceco-layer',
        { opacity: 0, x: 20 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.ceco-layers', start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ceco"
      className="relative py-28 md:py-36"
      style={{ zIndex: 2, background: 'linear-gradient(180deg, #0D0D0F 0%, #0F1014 50%, #0D0D0F 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="ceco-heading grid lg:grid-cols-2 gap-10 lg:gap-20 mb-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-amber mb-4 block">
              Predictive Governance Framework
            </span>
            <h2 className="font-display text-display-md text-hasse-text font-light leading-tight">
              The <em className="text-hasse-amber">c-ECO</em> Doctrine
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-hasse-text2 leading-relaxed mb-4">
              The c-ECO Predictive Governance Framework evaluates whether a technically
              feasible, institutionally viable, economically defensible, and legally plausible
              approach to a structural failure that existing governance architectures have not
              resolved.
            </p>
            <p className="text-hasse-text2 leading-relaxed">
              c-ECO is the activation layer that existing monitoring systems lack — converting
              certified risk signals into automatic, non-discretionary, legally enforceable
              governance action before destabilizing thresholds are crossed.
            </p>
            <a
              href="https://c-eco.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-hasse-amber text-[11px] uppercase tracking-[0.15em] hover:gap-3 transition-all duration-300 group"
            >
              <span>Visit c-eco.org</span>
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Governance Layers */}
        <div className="ceco-layers">
          <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-text3 mb-6 block">
            Vacant Layered Governance Architecture
          </span>
          <div className="space-y-3">
            {LAYERS.map((layer) => (
              <div
                key={layer.num}
                className="ceco-layer group border border-hasse-border2 hover:border-hasse-border bg-[#0D0D0F]/60 hover:bg-[#111116]/80 transition-all duration-500 cursor-default"
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="flex items-center gap-4 md:w-64 shrink-0">
                    <span className="font-mono text-2xl text-hasse-amber/40 group-hover:text-hasse-amber/70 transition-colors">
                      {layer.num}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-hasse-text group-hover:text-hasse-text transition-colors">
                        {layer.title}
                      </h3>
                      <p className="text-[10px] text-hasse-text3 mt-0.5">{layer.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-hasse-text2 leading-relaxed flex-1">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <a
            href="https://c-eco.org/foundation/memo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-hasse-amber/40 text-hasse-amber text-[11px] uppercase tracking-[0.15em] hover:bg-hasse-amber/10 transition-all duration-500"
          >
            Read the Memorandum
          </a>
          <a
            href="https://c-eco.org/foundation/org-chart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hasse-text3 text-[11px] uppercase tracking-[0.15em] hover:text-hasse-text transition-colors duration-300"
          >
            View Full Org Chart →
          </a>
        </div>
      </div>
    </section>
  );
}
