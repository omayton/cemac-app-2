
import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const points = [
    "Garantir segurança e estrutura no transporte de pacientes críticos.",
    "Empresa experiente para atender prefeituras e licitações.",
    "UTI Móvel Adulto/Neonatal com equipamentos de ponta.",
    "Ambulâncias para eventos e operações especiais.",
    "Equipe humanizada com protocolos técnicos certificados.",
    "Suporte integrado para transporte aeromédico."
  ];

  return (
    <section className="py-24 bg-[#2A2836] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          <div className="flex-1 space-y-10">
            <div className="space-y-4">
              <p className="text-[#B78F54] font-bold text-xs uppercase tracking-[0.4em]">Soluções em Saúde</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
                ESTE SERVIÇO É PARA <br />
                <span className="text-[#B78F54]">VOCÊ QUE PRECISA:</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {points.map((point, i) => (
                <div 
                  key={i}
                  className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#B78F54]/20 transition-all duration-300"
                >
                  <div className="p-1.5 rounded-full bg-[#B78F54]/10 text-[#B78F54]">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-slate-300 text-base md:text-lg font-medium group-hover:text-white transition-colors">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full space-y-8">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/3] group shadow-2xl">
              <img 
                src="https://www.rkdigital.co/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-16-at-09.58.33-2.jpeg" 
                alt="Equipamentos de Última Geração CEMAC" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2836] via-[#2A2836]/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider border border-red-500/20">Emergência</span>
                  <span className="px-3 py-1 rounded-md bg-[#B78F54]/20 text-[#B78F54] text-[10px] font-bold uppercase tracking-wider border border-[#B78F54]/20">UTI Móvel</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight">Equipamentos de última geração</h3>
                <p className="text-slate-200 text-sm md:text-base font-medium opacity-90 leading-relaxed">Monitores multiparamétricos e suporte vital avançado completo em todas as unidades.</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#B78F54]/10 flex items-center justify-center text-[#B78F54]">
                <AlertCircle size={24} />
              </div>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                <strong className="text-white">Segurança em primeiro lugar:</strong> O transporte indevido gera riscos irreversíveis. Conte com estrutura técnica certificada, frota renovada e equipe médica especializada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
