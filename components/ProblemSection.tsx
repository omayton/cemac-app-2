
import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const points = [
    "Garantir segurança e estrutura no transporte de pacientes (simples ou críticos).",
    "Ter uma empresa experiente para atender prefeituras, consórcios e licitações.",
    "Dispor de UTI Móvel Adulto/Neonatal com equipamentos de ponta.",
    "Contratar ambulâncias para eventos, empresas e operações especiais.",
    "Contar com uma equipe humanizada, treinada e com protocolos claros.",
    "Suporte integrado com possibilidade de auxílio em transporte aéreo."
  ];

  return (
    <section className="py-20 bg-[#2A2836] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              ESTE SERVIÇO É PARA <br />
              <span className="text-[#B78F54] underline decoration-[#8A7655] underline-offset-8">
                VOCÊ QUE PRECISA:
              </span>
            </h2>
            
            <div className="grid grid-cols-1 gap-4">
              {points.map((point, i) => (
                <div 
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#B78F54]/30 transition-all duration-300"
                >
                  <div className="mt-1 p-1 rounded-full bg-[#B78F54]/20 text-[#B78F54]">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-slate-300 font-medium group-hover:text-white transition-colors">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full space-y-8">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/3] group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe Médica Profissional" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2836] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider border border-red-500/30">
                    Emergência Crítica
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#B78F54]/20 text-[#B78F54] text-[10px] font-bold uppercase tracking-wider border border-[#B78F54]/30">
                    Suporte Avançado
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">Equipamentos de última geração em todas as unidades</h3>
                <p className="text-slate-400 text-sm">Monitores multiparamétricos, ventiladores mecânicos e suporte vital avançado completo.</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 rounded-3xl bg-[#B78F54]/10 border border-[#B78F54]/20">
              <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-[#B78F54] flex items-center justify-center text-slate-900">
                <AlertCircle />
              </div>
              <p className="text-[#B78F54]/90 text-sm">
                <strong className="text-white">Atenção:</strong> Transporte indevido gera riscos irreversíveis. Conte com estrutura profissional certificada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
