
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
      text: "Precisávamos de um parceiro confiável para remoções e suporte em eventos. Atendimento rápido, equipe preparada e estrutura impecável.",
      author: "Gestor de Eventos",
      role: "Parceiro Corporativo"
    },
    {
      text: "A segurança no transporte e o cuidado com o paciente fazem toda a diferença. Profissionalismo e humanização do começo ao fim.",
      author: "Familiar de Paciente",
      role: "Particular"
    }
  ];

  return (
    <section id="credibility" className="py-24 bg-[#2A2836] overflow-hidden relative">
      {/* Background Neon Line - Moved to top to act as a separator instead of cutting the text */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B78F54]/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                14 anos de experiência com contratos sólidos e serviço confiável.
              </h2>
              <div className="w-20 h-1.5 bg-[#B78F54] rounded-full"></div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Atuamos há cerca de 14 anos em Divinópolis, Bambuí, Piumhi e diversas outras cidades da região. Todos os contratos são formalizados com nossos parceiros e, até o momento, não houve intercorrências que contrariem o serviço ofertado.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-5xl font-black text-white">+{stats.years}</span>
                <p className="text-sm font-bold text-[#B78F54] uppercase tracking-widest">Anos de Atuação</p>
              </div>
              <div className="space-y-2">
                <span className="text-5xl font-black text-[#B78F54]">100%</span>
                <p className="text-sm font-bold text-[#8A7655] uppercase tracking-widest">Contratos sem Intercorrências</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
              <Award className="text-[#B78F54] w-10 h-10" />
              <div>
                <p className="text-white font-bold">Referência no Centro-Oeste de MG</p>
                <p className="text-slate-400 text-xs">Excelência em Atendimento Hospitalar</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-6">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className="p-8 rounded-[2.5rem] bg-[#1E1C27] border border-white/5 relative group hover:bg-[#23212D] transition-all duration-500"
                >
                  <Quote className="absolute top-6 right-8 text-[#B78F54]/10 w-16 h-16 group-hover:text-[#B78F54]/20 transition-colors" />
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-[#B78F54] text-[#B78F54]" />)}
                  </div>
                  <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B78F54] to-[#8A7655] p-[2px]">
                       <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold uppercase text-xs">
                         {t.author.charAt(0)}
                       </div>
                    </div>
                    <div>
                      <p className="text-white font-bold">{t.author}</p>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 text-center italic uppercase tracking-widest">
              * Depoimentos ilustrativos representativos da satisfação real de nossos parceiros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
