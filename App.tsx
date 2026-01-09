
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Benefits } from './components/Benefits';
import { Credibility } from './components/Credibility';
import { FinalOffer } from './components/FinalOffer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const SectionSeparator = () => (
  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B78F54]/40 to-transparent"></div>
);

function App() {
  const whatsappUrl = "https://wa.me/5531999693446";

  return (
    <div className="min-h-screen bg-[#2A2836] selection:bg-[#B78F54] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <SectionSeparator />
        
        <ProblemSection />
        <SectionSeparator />
        
        <Benefits />
        <SectionSeparator />
        
        <Credibility />
        <SectionSeparator />
        
        <FinalOffer />
        <SectionSeparator />
        
        <FAQ />
        <SectionSeparator />
      </main>

      <Footer />

      {/* WhatsApp Sticky Mobile Toggle (Enhanced) */}
      <a 
        href={whatsappUrl} 
        target="_blank"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-2xl shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 md:hidden"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.2h.1M3 21l1.9-1.9M17 11l-2.5 2.5a1.5 1.5 0 0 0 0 2l1.5 1.5M11 11l2.5 2.5a1.5 1.5 0 0 1 0 2l-1.5 1.5" />
          <path d="M12 13h10" />
        </svg>
      </a>
    </div>
  );
}

export default App;
