
import React from 'react';
import { Activity, Baby, Truck, HeartHandshake, MapPin, Zap, MonitorSmartphone } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Básico ao Avançado",
      desc: "Suporte completo conforme a necessidade clínica do paciente.",
      icon: <Activity size={24} className="text-[#B78F54]" />
    },
    {
      title: "UTI Móvel Adulto",
      desc: "Assistência completa para pacientes críticos, gestantes e casos psiquiátricos.",
      icon: <MonitorSmartphone size={24} className="text-[#B78F54]" />
    },
    {
      title: "Neonatal e Infantil",
      desc: "Remoção segura com incubadoras e equipe especializada em pediatria.",
      icon: <Baby size={24} className="text-[#B78F54]" />
    },
    {
      title: "Ambulância Simples",
      desc: "Transportes de baixa complexidade com agilidade e conforto.",
      icon: <Truck size={24} className="text-[#B78F54]" />
    },
    {
      title: "Acolhimento Humano",
      desc: "Respeito e dignidade total ao paciente e seus familiares.",
      icon: <HeartHandshake size={24} className="text-[#B78F54]" />
    },
    {
      title: "Cobertura MG",
      desc: "Bases em Bambuí, Piumhi e Divinópolis para resposta rápida.",
      icon: <MapPin size={24} className="text-[#B78F54]" />
    },
    {
      title: "Agilidade Real",
      desc: "Logística otimizada por mais de uma década de experiência.",
      icon: <Zap size={24} className="text-[#B78F54]" />
    }
  ];

  return (
    <section id="benefits" className="py-24 medical-grid">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <p className="text-xs font-bold text-[#B78F54] uppercase tracking-[0.4em]">Nossa Estrutura</p>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase">Equipada para a vida</h3>
          <div className="w-20 h-1.5 bg-[#B78F54] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div 
              key={i}
              className="group p-10 rounded-2xl bg-[#1E1C27] border border-white/5 hover:border-[#B78F54]/30 transition-all duration-500 shadow-xl"
            >
              <div className="w-14 h-14 rounded-xl bg-white/[0.03] flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-[#B78F54]/10">
                {b.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{b.title}</h4>
              <p className="text-slate-400 text-base leading-relaxed">{b.desc}</p>
            </div>
          ))}
          
          <div className="hidden xl:flex p-10 rounded-2xl bg-gradient-to-br from-[#B78F54] to-[#8A7655] flex-col justify-center items-center text-center gap-6 shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <Activity className="text-white" size={32} />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">PRONTIDÃO TOTAL</h4>
              <p className="text-slate-900/80 text-xs font-bold leading-tight uppercase tracking-widest">Eventos & Empresas 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
