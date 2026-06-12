import ParticleCanvas from './ParticleCanvas';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ManifestoSection from './ManifestoSection';
import ProblemSection from './ProblemSection';
import LineageSection from './LineageSection';
import CECOSection from './CECOSection';
import VertentesSection from './VertentesSection';
import GovernanceSection from './GovernanceSection';
import FooterSection from './FooterSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0F] text-hasse-text overflow-x-hidden">
      {/* Particle background */}
      <ParticleCanvas />

      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="relative" style={{ zIndex: 2 }}>
        <HeroSection />
        <ManifestoSection />
        <ProblemSection />
        <LineageSection />
        <CECOSection />
        <VertentesSection />
        <GovernanceSection />
        <FooterSection />
      </main>
    </div>
  );
}
