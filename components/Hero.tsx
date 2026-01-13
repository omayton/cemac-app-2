
import React from 'react';
import { ShieldCheck, Clock, Users, Activity, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/5531999693446";
  const emailUrl = "mailto:financeiroclinicacemac@gmail.com";

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#B78F54] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B78F54]/10 border border-[#B78F54]/20 text-[#B78F54] text-[11px] font-bold tracking-[0.2em] uppercase">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              CEMAC Remoções
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white uppercase tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B78F54] to-[#E5C185]">CEMAC Remoções</span>, <br />
                UTI MÓVEL, Neonatal e 
                ambulância simples.
              </h1>
              
              <p className="text-2xl md:text-4xl font-semibold text-slate-400 tracking-tight">
                Suporte <span className="text-[#B78F54]">básico ao avançado</span>. <br className="hidden md:block" />Atendimento 24h.
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-normal max-w-2xl">
              Há 14 anos atendendo o Centro-Oeste de Minas e todo o Brasil com excelência técnica e tecnologia de ponta. Bases em Bambuí, Piumhi e Divinópolis.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <a 
                href={emailUrl}
                className="group relative flex items-center justify-center gap-3 bg-white hover:bg-[#B78F54] text-slate-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:text-white"
              >
                <span className="text-xl">📩</span>
                SOLICITAR ORÇAMENTO
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-slate-900 font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(34,197,94,0.2)]"
              >
                <MessageCircle size={20} />
                WHATSAPP
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
              {[
                { label: 'Operação 24h', icon: <Clock size={14} /> },
                { label: 'UTI Neonatal', icon: <Activity size={14} /> },
                { label: 'Suporte Avançado', icon: <ShieldCheck size={14} /> },
                { label: 'Equipe Médica', icon: <Users size={14} /> },
              ].map((chip) => (
                <div key={chip.label} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  <span className="text-[#B78F54]">{chip.icon}</span>
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none relative group">
            <div className="absolute inset-0 bg-[#B78F54]/10 rounded-[2.5rem] blur-2xl transition-all duration-500"></div>
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 transition-all duration-500">
              <video 
                src="https://www.rkdigital.co/wp-content/uploads/2026/01/WhatsApp-Video-2025-12-16-at-10.03.23.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/5">
                <p className="text-white text-sm font-medium flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Segurança e Prontidão CEMAC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
