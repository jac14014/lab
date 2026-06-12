import { useEffect, useRef, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Foundation', href: '#foundation' },
  { label: 'The Gap', href: '#gap' },
  { label: 'Lineage', href: '#lineage' },
  { label: 'c-ECO', href: '#ceco' },
  { label: 'Publications', href: '#publications' },
  { label: 'Governance', href: '#governance' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = NAV_ITEMS.map(item => {
        const el = document.querySelector(item.href);
        if (!el) return { id: item.href, top: 0 };
        const rect = el.getBoundingClientRect();
        return { id: item.href, top: rect.top };
      });

      const current = sections.reduce((closest, section) => {
        if (section.top <= 150 && section.top > closest.top) return section;
        return closest;
      }, { id: '', top: -Infinity });

      if (current.id) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#0D0D0F]/90 backdrop-blur-md border-b border-hasse-border2'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full border border-hasse-amber/40 flex items-center justify-center group-hover:border-hasse-amber transition-colors duration-500">
              <span className="font-display text-hasse-amber text-xs">H</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-hasse-text text-sm tracking-wide">HASSE FOUNDATION</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-hasse-text3 -mt-0.5">Law · Memory · Living Systems</div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`relative px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                  activeSection === item.href
                    ? 'text-hasse-amber'
                    : 'text-hasse-text2 hover:text-hasse-text'
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-hasse-amber" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-hasse-text2 hover:text-hasse-text p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D0D0F]/95 backdrop-blur-md border-t border-hasse-border2 px-6 pb-6 pt-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`block py-3 text-sm uppercase tracking-[0.12em] transition-colors ${
                activeSection === item.href ? 'text-hasse-amber' : 'text-hasse-text2'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
