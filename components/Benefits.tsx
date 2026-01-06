
import React from 'react';
import { Activity, Baby, Truck, HeartHandshake, MapPin, Zap, MonitorSmartphone } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Básico ao Avançado",
      desc: "Suporte completo conforme a necessidade clínica do paciente.",
      icon: <Activity className="text-[#B78F54]" />
    },
    {
      title: "UTI Móvel Adulto",
      desc: "Equipamentos de ponta e equipe médica e de enfermagem preparada.",
      icon: <MonitorSmartphone className="text-[#B78F54]" />
    },
    {
      title: "UTI Móvel Neonatal",
      desc: "Transporte especializado para os recém-nascidos que exigem cuidado máximo.",
      icon: <Baby className="text-[#B78F54]" />
    },
    {
      title: "Ambulância Simples",
      desc: "Para demandas operacionais, remoções e transportes de baixa complexidade.",
      icon: <Truck className="text-[#B78F54]" />
    },
    {
      title: "Atendimento Humanizado",
      desc: "Foco total no acolhimento, respeito e dignidade do paciente e família.",
      icon: <HeartHandshake className="text-[#B78F54]" />
    },
    {
      title: "Cobertura Regional",
      desc: "Estratégica em Bambuí, Piumhi, Divinópolis e entorno de MG.",
      icon: <MapPin className="text-[#B78F54]" />
    },
    {
      title: "Agilidade & Segurança",
      desc: "Processos e logística otimizada por 14 anos de experiência real.",
      icon: <Zap className="text-[#B78F54]" />
    }
  ];

  return (
    <section id="benefits" className="py-24 medical-grid">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-sm font-bold text-[#B78F54] uppercase tracking-[0.3em]">Nossa Estrutura</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">Equipada para todas as necessidades:</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div 
              key={i}
              className="group p-8 rounded-[2rem] bg-[#1E1C27] border border-white/5 hover:border-[#B78F54]/50 hover:bg-[#23212D] transition-all duration-500 brand-glow"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                {b.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{b.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
          
          <div className="hidden xl:flex p-8 rounded-[2rem] bg-gradient-to-br from-[#B78F54] to-[#8A7655] flex-col justify-center items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <Activity className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">Prontidão Imediata</h4>
            <p className="text-slate-900/80 text-xs font-semibold">Suporte logístico especializado 24h</p>
          </div>
        </div>
      </div>
    </section>
  );
};
