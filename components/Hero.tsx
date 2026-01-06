
import React from 'react';
import { ShieldCheck, Clock, Users, Activity, MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#B78F54] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B78F54]/10 border border-[#B78F54]/20 text-[#B78F54] text-xs font-bold tracking-wider uppercase">
              <span className="flex h-2 w-2 rounded-full bg-[#B78F54] animate-pulse"></span>
              Operação 24 Horas Ativa
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-white">
              Transporte de pacientes com suporte do <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B78F54] to-[#8A7655]">básico ao avançado</span> de vida
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              UTI Móvel Adulto e Neonatal + Ambulância Simples, com equipe qualificada e equipamentos de última geração. Atendemos Bambuí, Piumhi, Divinópolis e região há 14 anos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-slate-900 font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 neon-border overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <span className="text-xl">🚑</span>
                SOLICITAR ORÇAMENTO AGORA
              </button>
              
              <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-[#B78F54]/30 hover:border-[#B78F54] text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:bg-[#B78F54]/10 active:scale-95">
                <MessageCircle className="text-[#B78F54]" />
                FALAR NO WHATSAPP
              </button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
              {[
                { label: '14 anos de atuação', icon: <Clock size={14} /> },
                { label: 'Contratos Sólidos', icon: <ShieldCheck size={14} /> },
                { label: 'Suporte Avançado', icon: <Activity size={14} /> },
                { label: 'Atendimento Humanizado', icon: <Users size={14} /> },
              ].map((chip) => (
                <div key={chip.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                  <span className="text-[#B78F54]">{chip.icon}</span>
                  {chip.label}
                </div>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none relative group">
            <div className="absolute inset-0 bg-[#B78F54]/20 rounded-[2.5rem] blur-2xl group-hover:bg-[#B78F54]/30 transition-all duration-500"></div>
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group-hover:scale-[1.01] transition-transform duration-500">
              <video 
                src="https://cemacremocoes.com.br/wp-content/uploads/2026/01/WhatsApp-Video-2025-12-16-at-10.03.23.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/5">
                <p className="text-white text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Operação CEMac: Excelência e Segurança em MG
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
