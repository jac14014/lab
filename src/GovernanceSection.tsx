import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROLES = [
  {
    title: 'Founder & Lead Architect',
    status: 'Vacancy — Open',
    scope: 'Doctrinal Authority & System Architecture',
    duties: ['Core conceptual framework', 'Systemic Governance Statute', 'Threshold Function Protocol', 'AI decision architecture'],
  },
  {
    title: 'Earth System Law Advisory',
    status: 'Vacancy — Open',
    scope: 'Non-Executive Advisory Function',
    duties: ['Doctrinal coherence', 'Alignment with Earth System Law', 'Non-operational advisory input'],
  },
  {
    title: 'Compliance & Institutional Integrity',
    status: 'Vacancy — Open',
    scope: 'Doctrinal-Normative Level',
    duties: ['Ex-ante compliance design', 'Institutional safeguards', 'Preventive governance', 'Integrity review'],
  },
  {
    title: 'Doctrinal Architecture Lead',
    status: 'Vacancy — Open',
    scope: 'Non-Delegable Doctrinal Authority',
    duties: ['Primacy of biophysical limits', 'Dynamic legal validity', 'Irreversibility as juridical variable', 'Contracts as temporal infrastructures'],
  },
];

export default function GovernanceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gov-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: '.gov-heading', start: 'top 80%' },
        }
      );

      gsap.fromTo(
        '.gov-role',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: '.gov-roles', start: 'top 75%' },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="governance"
      className="relative py-28 md:py-36"
      style={{ zIndex: 2, background: 'linear-gradient(180deg, #0D0D0F 0%, #0F1014 50%, #0D0D0F 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="gov-heading mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-amber mb-4 block">
            Institutional Architecture
          </span>
          <h2 className="font-display text-display-md text-hasse-text font-light leading-tight">
            Vacant <em className="text-hasse-amber">Governance</em>
          </h2>
          <p className="mt-5 text-hasse-text2 leading-relaxed max-w-2xl">
            The Foundation operates on a layered governance architecture. All positions
            are currently vacant — open to those who understand that institutions are living
            structures and law is a temporal responsibility.
          </p>
        </div>

        {/* Roles grid */}
        <div className="gov-roles grid md:grid-cols-2 gap-4">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="gov-role border border-hasse-border2 hover:border-hasse-border bg-[#0D0D0F]/40 hover:bg-[#111116]/60 transition-all duration-500 p-6 md:p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[9px] uppercase tracking-[0.15em] bg-hasse-amber/10 text-hasse-amber border border-hasse-amber/20 mb-3">
                    {role.status}
                  </span>
                  <h3 className="font-display text-xl text-hasse-text">{role.title}</h3>
                </div>
              </div>
              <p className="text-[11px] uppercase tracking-[0.1em] text-hasse-text3 mb-4">{role.scope}</p>
              <div className="flex flex-wrap gap-2">
                {role.duties.map((d) => (
                  <span
                    key={d}
                    className="text-[10px] text-hasse-text2 bg-hasse-bg2 px-2.5 py-1 border border-hasse-border2"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="mt-16 p-8 border border-hasse-border2 bg-[#0D0D0F]/40">
          <span className="text-[10px] uppercase tracking-[0.3em] text-hasse-amber mb-6 block">
            Governance Principles
          </span>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Primacy of Biophysical Limits',
                desc: 'Ecological constraints are not externalities to be managed but foundational parameters that governance must internalize.',
              },
              {
                title: 'Temporal Integrity of Law',
                desc: 'Legal systems must account for the time dimension of harm and intervention, recognizing that delays can render governance ineffective.',
              },
              {
                title: 'Reversibility Before Harm',
                desc: 'Governance should prioritize preventive action over post-hoc remediation, as ecological thresholds may be irreversible once crossed.',
              },
            ].map((p) => (
              <div key={p.title}>
                <h4 className="font-display text-base text-hasse-text mb-2">{p.title}</h4>
                <p className="text-sm text-hasse-text3 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://c-eco.org/foundation/org-chart"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-hasse-amber/40 text-hasse-amber text-[11px] uppercase tracking-[0.15em] hover:bg-hasse-amber/10 transition-all duration-500"
          >
            <span>View Complete Org Chart</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
