
import React from 'react';
import { Check, ShieldCheck, ArrowRight, MessageCircle, Mail } from 'lucide-react';

export const FinalOffer: React.FC = () => {
  const whatsappUrl = "https://wa.me/5531999693446";
  const emailUrl = "mailto:financeiroclinicacemac@gmail.com";
  
  const finalBenefits = [
    "Suporte básico e avançado de vida completo.",
    "Equipe técnica qualificada e humanizada.",
    "Frota moderna: UTI Adulto e Neonatal.",
    "Contratação: Consórcio, Licitação ou Particular.",
    "14 anos de tradição e segurança no transporte."
  ];

  const categories = [
    "Prefeituras", "Consórcios", "Planos de Saúde", "Eventos", "Particular"
  ];

  return (
    <section className="py-24 bg-[#2A2836] relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-[#1E1C27] border border-white/5 shadow-[0_0_100px_rgba(183,143,84,0.08)] relative group">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B78F54]/5 blur-[120px] rounded-full"></div>
          
          <div className="p-10 md:p-20 flex flex-col lg:flex-row gap-16 relative z-10">
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <p className="text-[#B78F54] font-bold text-xs uppercase tracking-[0.4em]">Prontidão 24 Horas</p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.05] uppercase tracking-tight">
                  QUERO CONTRATAR A <br />
                  <span className="text-[#B78F54]">SEMAC REMOÇÕES</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
                Serviço médico especializado para contratos públicos, empresas, eventos e remoções particulares.
              </p>

              <div className="space-y-5">
                {finalBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#B78F54]/10 flex items-center justify-center text-[#B78F54] flex-shrink-0">
                      <Check size={14} />
                    </div>
                    <span className="text-slate-300 text-base md:text-lg font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-white/5">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.3em] mb-6 text-center lg:text-left">Atendemos Prontamente:</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {categories.map(c => (
                    <span key={c} className="px-5 py-2 rounded-xl bg-white/[0.04] border border-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8 lg:p-14 rounded-[2.5rem] bg-white/[0.01] border border-white/[0.03]">
              <div className="w-20 h-20 rounded-3xl bg-[#B78F54] flex items-center justify-center text-slate-900 shadow-2xl mb-2 animate-float">
                <ShieldCheck size={44} />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">SOLICITAR ORÇAMENTO</h3>
                <p className="text-slate-400 text-sm md:text-base">Nossa equipe comercial está pronta para processar sua demanda via E-mail ou WhatsApp.</p>
              </div>

              <div className="w-full flex flex-col gap-4">
                <a 
                  href={emailUrl}
                  className="group flex items-center justify-center gap-4 bg-white hover:bg-[#B78F54] text-slate-900 hover:text-white font-black px-10 py-6 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-white/5"
                >
                  <Mail size={22} className="group-hover:-rotate-12 transition-transform" />
                  <span className="text-lg md:text-xl uppercase">ENVIAR E-MAIL</span>
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </a>

                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-slate-900 font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-green-500/10"
                >
                  <MessageCircle size={20} />
                  <span className="text-base uppercase tracking-wider">FALAR NO WHATSAPP</span>
                </a>
              </div>

              <div className="flex flex-col items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-slate-500 text-[11px] font-bold uppercase tracking-[0.3em]">
                  <span className="w-2 h-2 rounded-full bg-[#B78F54] animate-pulse"></span>
                  Retorno Prioritário
                </div>
                <div className="text-center opacity-70">
                  <p className="text-slate-500 text-xs font-medium leading-relaxed max-w-xs">
                    Sócios: Thiara Peixoto Aguiar e Alberto Messias Garcia de Carvalho.
                  </p>
                  <p className="text-[10px] text-[#B78F54] uppercase tracking-widest font-extrabold mt-2">CRM/MG ATIVO E REGULARIZADO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
