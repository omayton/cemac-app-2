
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#benefits' },
    { label: 'Experiência', href: '#credibility' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#2A2836]/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-7'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#hero" className="hover:opacity-80 transition-opacity">
          {/* Logo increased by ~20%: h-12 -> h-[58px], h-14 -> h-[68px] */}
          <Logo className="h-[58px] md:h-[68px]" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-base font-semibold text-slate-300 hover:text-[#B78F54] transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5500000000000" 
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-slate-900 px-7 py-3 rounded-full text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          >
            <MessageCircle size={20} />
            WHATSAPP
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2A2836] border-b border-white/10 animate-fade-in-down shadow-2xl">
          <nav className="flex flex-col p-8 gap-6">
            {menuItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-xl font-bold text-slate-200 border-b border-white/5 pb-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://wa.me/5500000000000" 
              className="flex items-center justify-center gap-3 bg-green-500 text-slate-900 py-5 rounded-2xl font-black text-lg mt-2 shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle size={24} />
              FALAR NO WHATSAPP
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
