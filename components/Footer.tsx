
import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Facebook, Mail, Phone, MessageSquareText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E1C27] border-t border-white/5 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo className="h-20" />
            <p className="text-slate-500 text-sm leading-relaxed">
              CEMAC Remoções: Transporte médico especializado com 14 anos de compromisso com a vida e excelência técnica no Centro-Oeste Mineiro.
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
              <li className="space-y-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[#B78F54] font-bold uppercase tracking-widest">Plantão 24h</span>
                  <a href="https://wa.me/5531999693446" className="flex items-center gap-3 text-slate-300 text-sm hover:text-[#B78F54] transition-colors font-medium">
                    <Phone size={14} className="text-[#B78F54]" />
                    (31) 99969-3446 - Alberto
                  </a>
                  <a href="https://wa.me/5531971167260" className="flex items-center gap-3 text-slate-300 text-sm hover:text-[#B78F54] transition-colors font-medium">
                    <Phone size={14} className="text-[#B78F54]" />
                    (31) 97116-7260 - Alonso
                  </a>
                </div>

                <div className="flex flex-col gap-1 pt-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Adm (07:00 as 17:00h)</span>
                  <a href="https://wa.me/5537998081203" className="flex items-center gap-3 text-slate-300 text-sm hover:text-[#B78F54] transition-colors font-medium">
                    <Phone size={14} className="text-[#B78F54]" />
                    (37) 99808-1203 - CEMAC
                  </a>
                </div>
                
                <div className="flex items-center gap-2 pt-1">
                  <MessageSquareText size={12} className="text-green-500" />
                  <span className="text-[10px] text-slate-400 font-bold italic">Todos possuem WhatsApp</span>
                </div>
              </li>
              
              <li className="flex items-center gap-3 text-slate-500 text-sm pt-4">
                <Mail size={16} className="text-[#B78F54]" />
                <a href="mailto:cemacremocao@gmail.com" className="hover:text-white transition-colors text-xs">
                  cemacremocao@gmail.com
                </a>
              </li>
              
              <li className="mt-4 p-4 rounded-xl bg-[#B78F54]/10 border border-[#B78F54]/20">
                <p className="text-[#B78F54] font-bold text-[10px] uppercase tracking-widest mb-1">Prontidão Imediata</p>
                <p className="text-white text-xs font-medium">Aluguel de ambulâncias e cobertura em eventos.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-600">
          <p>© 2026 CEMAC Remoções. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#B78F54]">Privacidade</a>
            <a href="#" className="hover:text-[#B78F54]">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
