import React, { useState, useEffect } from 'react';
import { ThumbsUp, AlertTriangle, Lightbulb, CheckCircle2, History, User, Mail, Phone, Lock, MessageSquare } from 'lucide-react';

interface FeedbackItem {
  id: string;
  type: 'elogio' | 'sugestao' | 'reclamacao';
  name: string;
  email: string;
  phone: string;
  message: string;
  isAnonymous: boolean;
  date: string;
}

export const FeedbackSection: React.FC = () => {
  const [type, setType] = useState<'elogio' | 'sugestao' | 'reclamacao'>('elogio');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const [submittedItem, setSubmittedItem] = useState<FeedbackItem | null>(null);
  const [history, setHistory] = useState<FeedbackItem[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cemac_feedback_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Error loading feedback history', e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!message.trim()) {
      setErrorMessage('Por favor, preencha o campo de mensagem.');
      return;
    }

    if (!isAnonymous) {
      if (!name.trim()) {
        setErrorMessage('Por favor, preencha o seu nome ou marque a opção de Envio Anônimo.');
        return;
      }
      if (!email.trim() && !phone.trim()) {
        setErrorMessage('Por favor, preencha pelo menos um meio de contato (E-mail ou Telefone).');
        return;
      }
    }

    const protocolId = `CEMAC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const currentDate = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newItem: FeedbackItem = {
      id: protocolId,
      type,
      name: isAnonymous ? 'Anônimo' : name,
      email: isAnonymous ? '-' : email,
      phone: isAnonymous ? '-' : phone,
      message,
      isAnonymous,
      date: currentDate
    };

    const updatedHistory = [newItem, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('cemac_feedback_history', JSON.stringify(updatedHistory));

    setSubmittedItem(newItem);
    
    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleResetForm = () => {
    setSubmittedItem(null);
  };

  const getTypeStyle = (itemType: 'elogio' | 'sugestao' | 'reclamacao') => {
    switch (itemType) {
      case 'elogio':
        return {
          bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          icon: <ThumbsUp size={16} />,
          label: 'Elogio'
        };
      case 'sugestao':
        return {
          bg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
          icon: <Lightbulb size={16} />,
          label: 'Sugestão'
        };
      case 'reclamacao':
        return {
          bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
          badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          icon: <AlertTriangle size={16} />,
          label: 'Reclamação'
        };
    }
  };

  return (
    <section id="ouvidoria" className="py-24 bg-[#1E1C27] relative overflow-hidden">
      {/* Decorative Gold & Purple Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35%] h-[50%] bg-[#B78F54]/3 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[30%] h-[40%] bg-purple-500/3 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B78F54]/10 border border-[#B78F54]/20 text-[#B78F54] font-bold text-xs uppercase tracking-widest">
              <MessageSquare size={16} />
              Ouvidoria CEMAC
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Sua opinião da super-estrutura <span className="text-[#B78F54]">importa para nós</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Trabalhamos incansavelmente para oferecer o transporte médico mais humano e ágil do Centro-Oeste Mineiro. Tem elogios, sugestões ou alguma reclamação? Manifeste-se abaixo de forma aberta ou anônima.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Main Form Dashboard */}
            <div className={`md:col-span-8 bg-[#2A2836] border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl transition-all duration-300 ${submittedItem ? 'border-emerald-500/20' : ''}`}>
              
              {!submittedItem ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Mode Tabs */}
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                      Tipo de Manifestação
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setType('elogio')}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 px-3 rounded-2xl border text-sm font-bold transition-all duration-300 ${
                          type === 'elogio' 
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-[0_4px_20px_rgba(16,185,129,0.1)]' 
                            : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <ThumbsUp size={18} />
                        <span>Elogio</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setType('sugestao')}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 px-3 rounded-2xl border text-sm font-bold transition-all duration-300 ${
                          type === 'sugestao' 
                            ? 'bg-blue-500/10 border-blue-500/40 text-blue-400 shadow-[0_4px_20px_rgba(59,130,246,0.1)]' 
                            : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Lightbulb size={18} />
                        <span>Sugestão</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setType('reclamacao')}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-2 py-4 px-3 rounded-2xl border text-sm font-bold transition-all duration-300 ${
                          type === 'reclamacao' 
                            ? 'bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-[0_4px_20px_rgba(245,158,11,0.1)]' 
                            : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <AlertTriangle size={18} />
                        <span>Reclamação</span>
                      </button>
                    </div>
                  </div>

                  {/* Identification Choice */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <Lock size={18} className="text-[#B78F54]" />
                      <div>
                        <p className="text-white text-sm font-bold">Deseja manter o anonimato?</p>
                        <p className="text-slate-400 text-xs">Suas informações de contato estarão ocultas</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsAnonymous(!isAnonymous)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        isAnonymous ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          isAnonymous ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Personal Fields Grid */}
                  {!isAnonymous && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 transition-all duration-300">
                      <div>
                        <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <User size={12} className="text-[#B78F54]" />
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Maria Oliveira"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B78F54]/40 focus:ring-1 focus:ring-[#B78F54]/20 transition-all font-medium text-sm"
                          required={!isAnonymous}
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <Phone size={12} className="text-[#B78F54]" />
                          WhatsApp / Telefone
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Ex: (31) 99999-9999"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B78F54]/40 focus:ring-1 focus:ring-[#B78F54]/20 transition-all font-medium text-sm"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <Mail size={12} className="text-[#B78F54]" />
                          Endereço de E-mail
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Ex: nome@email.com"
                          className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B78F54]/40 focus:ring-1 focus:ring-[#B78F54]/20 transition-all font-medium text-sm"
                        />
                      </div>
                    </div>
                  )}

                  {/* Message Field */}
                  <div>
                    <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">
                      Sua Mensagem *
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder={
                        type === 'elogio' 
                          ? 'Diga-nos o que você mais gostou do nosso serviço ou atendimento...' 
                          : type === 'sugestao'
                          ? 'Idéias para podermos melhorar ainda mais o nosso sistema ou estrutura...'
                          : 'Relate o problema ocorrido. Garantimos apuração estrita de todos os eventos.'
                      }
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-[#B78F54]/40 focus:ring-1 focus:ring-[#B78F54]/20 transition-all font-medium text-sm"
                      required
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-[#B78F54] text-slate-900 font-extrabold text-sm uppercase tracking-widest hover:bg-[#8A7655] active:scale-98 transition-all"
                  >
                    Enviar Manifestação
                  </button>
                </form>
              ) : (
                /* Success/Protocol Page */
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Manifestação Enviada!
                  </h3>
                  
                  <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                    Sua voz foi registrada com total integridade e segurança no sistema de Ouvidoria da CEMAC Remoções.
                  </p>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto space-y-3">
                    <div className="flex justify-between items-center text-xs text-slate-500">
                      <span>NÚMERO DE PROTOCOLO</span>
                      <span>DATA / HORA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-lg font-black text-[#B78F54] tracking-wider select-all">
                        {submittedItem.id}
                      </span>
                      <span className="text-xs font-bold text-white uppercase">
                        {submittedItem.date}
                      </span>
                    </div>
                    <hr className="border-white/5" />
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">TIPO:</span>
                      <span className={`font-bold capitalize ${getTypeStyle(submittedItem.type).text}`}>
                        {getTypeStyle(submittedItem.type).label}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">AUTOR:</span>
                      <span className="font-bold text-white">
                        {submittedItem.name}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs">
                    Guarde este número de protocolo. Caso tenha se identificado, entraremos de prontidão em até 48 horas úteis.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-xl border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-wider hover:bg-white/5 transition-all"
                    >
                      Enviar Outra Mensagem
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Sidebar Column: Help Guidelines & History Toggle */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Guidelines Card */}
              <div className="p-6 rounded-[1.5rem] bg-white/5 border border-white/5 space-y-4">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Como funciona?</h4>
                <div className="space-y-3 text-xs leading-relaxed text-slate-400">
                  <p>
                    <strong className="text-[#B78F54]">1. Escolha a natureza:</strong> Categorize seu relato de forma adequada para o correto encaminhamento operacional interno.
                  </p>
                  <p>
                    <strong className="text-[#B78F54]">2. Proteção de Dados:</strong> Suas informações são guardadas de acordo com a LGPD e restritas aos cargos diretivos de acolhimento.
                  </p>
                  <p>
                    <strong className="text-[#B78F54]">3. Resolução Estruturada:</strong> Cada protocolo inicia uma sindicância interna para aperfeiçoar nossos atendimentos.
                  </p>
                </div>
              </div>

              {/* History Button Section */}
              {history.length > 0 && (
                <div className="space-y-4">
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#B78F54]/30 hover:bg-white/10 transition-all text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <History size={18} className="text-[#B78F54]" />
                      <div>
                        <p className="text-white text-xs font-bold uppercase tracking-wider">Minhas Manifestações</p>
                        <p className="text-slate-400 text-[10px]">{history.length} {history.length === 1 ? 'registro ativo' : 'registros ativos'}</p>
                      </div>
                    </div>
                    <span className="text-xs text-[#B78F54] font-bold group-hover:underline">
                      {showHistory ? 'Ocultar' : 'Visualizar'}
                    </span>
                  </button>

                  {showHistory && (
                    <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                      {history.map((item) => {
                        const style = getTypeStyle(item.type);
                        return (
                          <div key={item.id} className={`p-4 rounded-xl border space-y-2 text-xs transition-all ${style.bg}`}>
                            <div className="flex justify-between items-center">
                              <span className="font-mono font-bold tracking-wide text-[10px] select-all">
                                {item.id}
                              </span>
                              <span className="text-[9px] text-[#B78F54] font-bold">
                                {item.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <span className={`px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase ${style.badge}`}>
                                {style.label}
                              </span>
                              {item.isAnonymous && (
                                <span className="bg-slate-700/50 text-slate-300 border border-slate-600/30 px-2 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase">
                                  Anônimo
                                </span>
                              )}
                            </div>
                            <p className="text-slate-300 leading-relaxed font-light italic bg-black/10 p-2 rounded">
                              "{item.message}"
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
