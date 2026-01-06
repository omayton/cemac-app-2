
import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1C27] border-t border-white/5 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo className="h-20" />
            <p className="text-slate-500 text-sm leading-relaxed">
              Cemac Centro de Especialidades Médicas: Transporte médico especializado com 14 anos de compromisso com a vida e excelência técnica no Centro-Oeste Mineiro.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#B78F54] hover:text-slate-900 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Serviços</h4>
            <ul className="space-y-4">
              {["UTI Móvel Adulto", "UTI Móvel Neonatal", "Ambulância Simples", "Remoção Hospitalar", "Cobertura de Eventos"].map(item => (
                <li key={item}><a href="#" className="text-slate-500 hover:text-[#B78F54] transition-colors text-sm">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Região</h4>
            <ul className="space-y-4">
              {["Divinópolis", "Bambuí", "Piumhi", "Iguatama", "Centro-Oeste MG"].map(item => (
                <li key={item} className="text-slate-500 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Phone size={16} className="text-[#B78F54]" />
                (37) 00000-0000
              </li>
              <li className="flex items-center gap-3 text-slate-500 text-sm">
                <Mail size={16} className="text-[#B78F54]" />
                contato@cemacremocoes.com.br
              </li>
              <li className="mt-6 p-4 rounded-xl bg-[#B78F54]/10 border border-[#B78F54]/20">
                <p className="text-[#B78F54] font-bold text-[10px] uppercase tracking-widest mb-1">Prontidão 24h</p>
                <p className="text-white text-xs font-medium">Equipe Técnica escalada para suporte emergencial.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <p>© 2026 Cemac Remoções. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#B78F54]">Privacidade</a>
            <a href="#" className="hover:text-[#B78F54]">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
