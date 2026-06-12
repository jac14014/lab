import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PIPELINE_STEPS = [
  { label: 'Detection', desc: 'Sensor networks, satellite monitoring, IoT infrastructure' },
  { label: 'Certification', desc: 'Methodological validation, parameter review' },
  { label: 'Trigger Logic', desc: 'Threshold governance, non-discretionary activation' },
  { label: 'Legal Activation', desc: 'Contractual incorporation, enforceability' },
  { label: 'Restoration', desc: 'Operational execution under certified protocols' },
];

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gap-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.gap-heading', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.gap-pipeline-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: '.gap-pipeline', start: 'top 75%' },
        }
      );

      gsap.fromTo(
        '.gap-stat',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.gap-stats', start: 'top 80%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gap"
      className="relative py-28 md:py-36"
      style={{ zIndex: 2 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="gap-heading grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-amber mb-4 block">
              The Central Problem
            </span>
            <h2 className="font-display text-display-md text-hasse-text font-light leading-tight">
              Recognition Exists;
              <br />
              <em className="text-hasse-amber">Activation</em> Does Not.
            </h2>
          </div>
          <div className="lg:pt-10">
            <p className="text-hasse-text2 leading-relaxed">
              The principal finding is not that systemic risk is unrecognized. It is
              increasingly recognized — by central banks, financial supervisors, insurance
              institutions, infrastructure authorities, and Earth system scientists — yet that
              recognition does not convert into timely, binding, and operationally effective
              intervention.
            </p>
            <div className="mt-6 p-4 border-l-2 border-hasse-amber bg-hasse-amber/[0.03]">
              <p className="font-display text-lg text-hasse-text italic">
                "This is the Recognition–Action Gap."
              </p>
            </div>
          </div>
        </div>

        {/* Pipeline */}
        <div className="gap-pipeline mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-text3 mb-8 block">
            c-ECO Activation Pipeline
          </span>
          <div className="flex flex-col md:flex-row gap-3 md:gap-0">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.label} className="gap-pipeline-item flex-1 relative group">
                <div className="md:text-center px-4 py-5 border border-hasse-border bg-[#0D0D0F]/60 hover:border-hasse-amber/40 hover:bg-hasse-amber/[0.02] transition-all duration-500 h-full">
                  <div className="font-mono text-[10px] text-hasse-amber mb-2 opacity-60">0{i + 1}</div>
                  <div className="font-display text-base text-hasse-text mb-1">{step.label}</div>
                  <div className="text-[11px] text-hasse-text3 leading-relaxed">{step.desc}</div>
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <>
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-5 h-5 bg-[#0D0D0F] border border-hasse-border rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-hasse-text3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="md:hidden flex justify-center py-2">
                      <svg className="w-4 h-4 text-hasse-text3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="gap-stats grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '2014', label: 'Foundation Year' },
            { value: 'c-ECO', label: 'Governance Framework' },
            { value: 'TFP', label: 'Threshold Function Protocol' },
            { value: 'Amazon', label: 'Living Lab Location' },
          ].map((stat) => (
            <div key={stat.label} className="gap-stat text-center md:text-left p-5 border border-hasse-border2 bg-[#0D0D0F]/40">
              <div className="font-mono text-xl md:text-2xl text-hasse-amber mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-hasse-text3">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
