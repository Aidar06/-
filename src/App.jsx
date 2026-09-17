import React, { useState } from 'react';
import Envelope from './components/Envelope';
import Hero from './components/Hero';
import InvitationText from './components/InvitationText';
import CountdownCalendar from './components/CountdownCalendar';
import ProgramTimeline from './components/ProgramTimeline';
import DressCode from './components/DressCode';
import VenueMap from './components/VenueMap';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-slate-800 relative font-sans">
      {/* 1. Envelope Overlay (Click to open animation edge-to-edge overlay) */}
      <Envelope isOpen={isEnvelopeOpen} onOpen={handleEnvelopeOpen} />

      {/* Main Landing Page Content (Visible when unrolled) */}
      <div className={isEnvelopeOpen ? 'opacity-100 transition-opacity duration-1000' : 'opacity-[0.05] pointer-events-none'}>
        <Hero />
        <InvitationText />
        <CountdownCalendar />
        <ProgramTimeline />
        <DressCode />
        <VenueMap />
        <Footer />
        <MusicPlayer isAutoPlayTriggered={isEnvelopeOpen} />
      </div>
    </div>
  );
}
