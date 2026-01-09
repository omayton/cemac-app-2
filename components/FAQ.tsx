
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`group overflow-hidden rounded-[1.5rem] border transition-all duration-500 ${
        isOpen ? 'bg-[#1E1C27] border-[#B78F54]/40 shadow-[0_10px_40px_rgba(0,0,0,0.3)]' : 'bg-white/5 border-white/5 hover:border-white/10'
      }`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-7 text-left focus:outline-none transition-all"
      >
        <span className={`font-bold text-lg md:text-xl pr-6 transition-colors duration-300 ${isOpen ? 'text-[#B78F54]' : 'text-slate-200'}`}>
          {q}
        </span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
          isOpen ? 'bg-[#B78F54] text-slate-900 rotate-180' : 'bg-white/5 text-slate-500 group-hover:bg-white/10'
        }`}>
          <ChevronDown size={22} />
        </div>
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-7 pb-8">
          <div className="h-[1px] w-12 bg-[#B78F54]/30 mb-6"></div>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Quais tipos de ambulância vocês oferecem?",
      a: "Dispomos de uma frota completa composta por UTI Móvel Adulto, UTI Móvel Neonatal e unidades de Suporte Básico (Ambulância Simples), todas equipadas com tecnologia de ponta para cada nível de complexidade."
    },
    {
      q: "Quais regiões vocês atendem?",
      a: "Contamos com bases operacionais localizadas em Bambuí, Piumhi e Divinópolis, posicionadas estrategicamente para garantir atendimento ágil e eficiente em todo o Centro-Oeste de Minas Gerais. Além disso, realizamos remoções intermunicipais e interestaduais, mediante agendamento prévio."
    },
    {
      q: "Vocês atendem eventos e empresas?",
      a: "Sim. Oferecemos pacotes completos para cobertura de eventos de qualquer porte, além de contratos de ambulância dedicada para indústrias e empresas com atividades de alto risco."
    },
    {
      q: "Como funciona a contratação por prefeitura/consórcio?",
      a: "Temos vasta experiência no setor público. A contratação pode ser efetuada via adesão a Consórcios Intermunicipais de Saúde ou através de processos licitatórios (pregão, dispensa, etc.)."
    },
    {
      q: "Vocês fazem atendimento particular?",
      a: "Atendemos o setor particular para remoções hospitalares, altas programadas e urgências, sempre respeitando a disponibilidade da frota e os protocolos médicos vigentes."
    },
    {
      q: "Existe suporte para transporte aéreo?",
      a: "Atuamos na logística terrestre integrada ao transporte aeromédico. Realizamos a remoção do paciente da unidade hospitalar até a aeronave ou vice-versa, com total segurança e continuidade do cuidado."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#2A2836] relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#B78F54]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B78F54]/10 border border-[#B78F54]/20 text-[#B78F54] font-bold text-xs uppercase tracking-widest">
              <HelpCircle size={16} />
              Centro de Ajuda
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Tudo o que você <span className="text-[#B78F54]">precisa saber</span> sobre nossos serviços
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Transparência e clareza são pilares da nossa confiança. Se não encontrar sua resposta aqui, nossa equipe está em prontidão para atendê-lo.
            </p>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/5531999693446"
                className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-[#B78F54] hover:bg-[#8A7655] text-slate-900 font-black transition-all group shadow-lg shadow-[#B78F54]/20"
              >
                FALAR COM ESPECIALISTA
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 w-full grid gap-5">
            {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
