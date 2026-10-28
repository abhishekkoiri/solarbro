import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolarCalculator } from './components/SolarCalculator';
import { Solutions } from './components/Solutions';
import { ElevatedPergolaSpotlight } from './components/ElevatedPergolaSpotlight';
import { TurnkeyProcess } from './components/TurnkeyProcess';
import { ProjectGallery } from './components/ProjectGallery';
import { WhyUs } from './components/WhyUs';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';

export function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalNote, setLeadModalNote] = useState<string | undefined>();

  const handleOpenLeadModal = (note?: string) => {
    setLeadModalNote(note);
    setIsLeadModalOpen(true);
  };

  const handleCloseLeadModal = () => {
    setIsLeadModalOpen(false);
    setLeadModalNote(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-slate-900 selection:bg-amber-400 selection:text-slate-900">
      {/* Sticky Header */}
      <Navbar onOpenLeadModal={handleOpenLeadModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenLeadModal={handleOpenLeadModal} />
        <SolarCalculator onOpenLeadModal={handleOpenLeadModal} />
        <Solutions onOpenLeadModal={handleOpenLeadModal} />
        <ElevatedPergolaSpotlight onOpenLeadModal={handleOpenLeadModal} />
        <TurnkeyProcess onOpenLeadModal={handleOpenLeadModal} />
        <ProjectGallery onOpenLeadModal={handleOpenLeadModal} />
        <WhyUs />
        <FaqSection onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Free 3D Drone Survey & Feasibility Modal */}
      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={handleCloseLeadModal}
        initialNote={leadModalNote}
      />
    </div>
  );
}

export default App;
