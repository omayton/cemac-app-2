
import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';

export const FinalOffer: React.FC = () => {
  const whatsappUrl = "https://wa.me/5531999693446";
  
  const finalBenefits = [
    "Estrutura completa para suporte básico e avançado de vida.",
    "Equipe qualificada com conduta técnica e atendimento humanizado.",
    "Frota preparada (Adulto, Neonatal e Ambulância Simples).",
    "Modelo de contratação flexível: Consórcio ou Licitação.",
    "Experiência comprovada com parceiros formais há 14 anos."
  ];

  const categories = [
    "Prefeituras", "Consórcios", "Planos de Saúde", "Eventos", "Particular"
  ];

  return (
    <section className="py-24 bg-[#2A2836] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-[#1E1C27] border border-white/10 shadow-[0_0_100px_rgba(183,143,84,0.1)] relative group">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B78F54]/10 blur-[100px] rounded-full"></div>
          
          <div className="p-8 md:p-16 flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <p className="text-[#B78F54] font-bold text-xs uppercase tracking-[0.4em]">Solicite agora</p>
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                  QUERO CONTRATAR A <br />
                  <span className="text-[#B78F54]">SEMAC REMOÇÕES</span>
                </h2>
              </div>
              <p className="text-xl text-slate-400 font-medium">
                Serviço de ambulância especializado para contratos públicos, empresas, eventos e particular.
              </p>

              <div className="space-y-4">
                {finalBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#B78F54]/20 flex items-center justify-center text-[#B78F54] flex-shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-300 font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.2em] mb-4">Atendemos Prontamente:</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map(c => (
                    <span key={c} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-wider">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 lg:bg-white/5 lg:p-12 rounded-[2rem] border border-transparent hover:border-white/5 transition-colors">
              <div className="w-20 h-20 rounded-3xl bg-[#B78F54] flex items-center justify-center text-slate-900 shadow-[0_0_30px_rgba(183,143,84,0.4)] animate-bounce mb-4">
                <ShieldCheck size={48} strokeWidth={2.5} />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Disponibilidade Imediata</h3>
                <p className="text-slate-400 text-sm">Nossa equipe comercial retornará seu contato em poucos minutos.</p>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full group relative flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-slate-900 font-black px-10 py-6 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 neon-border"
              >
                <span className="text-lg uppercase">SOLICITAR ORÇAMENTO AGORA</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>

              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Resposta Rápida
                  <span className="mx-2">•</span>
                  Atendimento Profissional
                </div>
                <div className="space-y-1">
                  <p className="text-slate-600 text-[10px] font-medium max-w-xs leading-relaxed">
                    Sócios: Thiara Peixoto Aguiar e Alberto Messias Garcia de Carvalho.
                  </p>
                  <p className="text-[9px] text-slate-700 uppercase tracking-widest font-bold">Registro CRM/MG Ativo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
