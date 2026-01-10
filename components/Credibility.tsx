
import React, { useState, useEffect } from 'react';
import { Quote, Star, Award } from 'lucide-react';

export const Credibility: React.FC = () => {
  const [stats, setStats] = useState({ years: 0, cities: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({ years: 14, cities: 12 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      text: "Atendimento rápido, equipe preparada e estrutura impecável para nossos eventos críticos.",
      author: "Gestor Regional",
      role: "Parceiro Corporativo"
    },
    {
      text: "A segurança no transporte e o cuidado com o paciente fazem toda a diferença.",
      author: "Familiar",
      role: "Particular"
    }
  ];

  return (
    <section id="credibility" className="py-24 bg-[#2A2836] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-5">
              <p className="text-[#B78F54] font-bold text-xs uppercase tracking-[0.4em]">Experiência de Mercado</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase tracking-tight">
                14 anos de excelência <br />
                <span className="text-[#B78F54]">em serviços críticos.</span>
              </h2>
              <div className="w-20 h-1.5 bg-[#B78F54] rounded-full"></div>
            </div>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Atuamos com contratos sólidos em Divinópolis, Bambuí e Piumhi. Nossa trajetória é marcada pela ausência de intercorrências e total conformidade técnica.
            </p>

            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-2">
                <span className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">+{stats.years}</span>
                <p className="text-xs font-bold text-[#B78F54] uppercase tracking-[0.2em]">Anos de Atuação</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl md:text-7xl font-extrabold text-[#B78F54] tracking-tighter">100%</span>
                <p className="text-xs font-bold text-[#8A7655] uppercase tracking-[0.2em]">Confiabilidade</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-6 px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/5 group transition-colors">
              <Award className="text-[#B78F54] w-10 h-10" />
              <div>
                <p className="text-white text-lg font-bold tracking-tight">Referência no Centro-Oeste</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Excelência Técnica Certificada</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="p-10 rounded-2xl bg-[#1E1C27] border border-white/5 relative group transition-all duration-500 shadow-2xl"
                >
                  <Quote className="absolute top-8 right-10 text-[#B78F54]/5 w-16 h-16" />
                  <div className="flex gap-1.5 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-[#B78F54] text-[#B78F54]" />)}
                  </div>
                  <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#B78F54]/10 flex items-center justify-center text-[#B78F54] font-bold text-sm">
                       {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-base font-bold">{t.author}</p>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
