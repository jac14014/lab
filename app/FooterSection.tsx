export default function FooterSection() {
  return (
    <footer className="relative py-20 md:py-28 border-t border-hasse-border2" style={{ zIndex: 2, background: '#0D0D0F' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top: memorial + nav */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
          {/* Memorial */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-hasse-amber/30 flex items-center justify-center">
                <span className="font-display text-hasse-amber text-sm">H</span>
              </div>
              <div>
                <div className="font-display text-sm text-hasse-text">HASSE FOUNDATION</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-hasse-text3">Law · Memory · Living Systems</div>
              </div>
            </div>
            <p className="text-sm text-hasse-text3 leading-relaxed italic font-display">
              &ldquo;Time is life as memory.&rdquo;
            </p>
            <div className="mt-6 pt-6 border-t border-hasse-border2">
              <span className="text-[9px] uppercase tracking-[0.2em] text-hasse-text3 block mb-1">Memorial</span>
              <span className="font-display text-sm text-hasse-text2">Maria Alvina Hass Goncalves Curvo Paim</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-hasse-text3 block mb-4">Navigate</span>
            <nav className="space-y-2">
              {[
                { label: 'Foundation', href: '#foundation' },
                { label: 'The Recognition-Action Gap', href: '#gap' },
                { label: 'Lineage', href: '#lineage' },
                { label: 'c-ECO Framework', href: '#ceco' },
                { label: 'Publications', href: '#publications' },
                { label: 'Governance', href: '#governance' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-sm text-hasse-text2 hover:text-hasse-amber transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* External */}
          <div className="lg:col-span-1">
            <span className="text-[9px] uppercase tracking-[0.2em] text-hasse-text3 block mb-4">External Resources</span>
            <nav className="space-y-2">
              {[
                { label: 'c-eco.org Portal', href: 'https://c-eco.org' },
                { label: 'ISM Brasil', href: 'https://c-eco.org/foundation/ism.html' },
                { label: 'c-ECO Memo', href: 'https://c-eco.org/foundation/memo' },
                { label: 'Org Chart', href: 'https://c-eco.org/foundation/org-chart' },
                { label: 'Legacy Foundation Page', href: 'https://c-eco.org/foundation.html' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-hasse-text2 hover:text-hasse-amber transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="mt-8">
              <span className="text-[9px] uppercase tracking-[0.2em] text-hasse-text3 block mb-2">Contact</span>
              <a
                href="mailto:contact@c-eco.org"
                className="text-sm text-hasse-amber hover:underline"
              >
                contact@c-eco.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-hasse-border2 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[10px] text-hasse-text3 uppercase tracking-[0.15em]">
            <span>&copy; 2014–2025 Johann Christian Hasse Foundation</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">All rights reserved</span>
          </div>
          <a
            href="https://c-eco.org/english.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-hasse-text3 hover:text-hasse-amber uppercase tracking-[0.15em] transition-colors"
          >
            Return to c-ECO Portal &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
