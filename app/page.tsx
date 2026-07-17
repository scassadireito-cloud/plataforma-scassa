import React from 'react';
import { BookOpen, Brain, Trophy, MessageSquare, ChevronRight, Play } from 'lucide-react';

export default function ScassaPlatform() {
  const primaryNavy = "#001F3F";
  const goldAccent = "#D4AF37";

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* SIDEBAR INSTITUCIONAL */}
      <aside className="w-72 bg-[#001F3F] text-white p-8 flex flex-col shadow-2xl">
        <div className="mb-12 text-center">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#D4AF37] shadow-lg">
            <span className="text-[#001F3F] font-black text-3xl">JS</span>
          </div>
          <h2 className="text-[#D4AF37] font-bold tracking-widest text-sm">JUAN SCASSA</h2>
          <p className="text-gray-400 text-[10px] uppercase tracking-tighter">Direito Inteligente</p>
        </div>

        <nav className="space-y-2 flex-1">
          <NavItem icon={<BookOpen size={20}/>} label="Minha Jornada" active={true} />
          <NavItem icon={<Brain size={20}/>} label="Biblioteca de Leis" active={false} />
          <NavItem icon={<Trophy size={20}/>} label="Simulados OAB/Carreiras" active={false} />
          <NavItem icon={<MessageSquare size={20}/>} label="IA Mentor Scassa" active={false} />
        </nav>

        <div className="mt-auto p-4 bg-slate-800/50 rounded-xl border border-slate-700">
          <p className="text-xs text-gray-400 mb-2">Seu Progresso</p>
          <div className="w-full bg-slate-700 h-1.5 rounded-full">
            <div className="bg-[#D4AF37] h-1.5 rounded-full" style={{width: '65%'}}></div>
          </div>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO */}
      <main className="flex-1 overflow-y-auto p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-[#001F3F]">Bem-vindo de volta, Doutor.</h1>
            <p className="text-slate-500">Hoje é um excelente dia para dominar o Direito Constitucional.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right">
                <p className="text-sm font-bold">Nível 12</p>
                <p className="text-xs text-[#D4AF37]">Mestre em Processo Penal</p>
             </div>
             <div className="w-12 h-12 bg-slate-200 rounded-full border-2 border-[#D4AF37]"></div>
          </div>
        </header>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-3 gap-8">
          {/* AULA ATUAL */}
          <section className="col-span-2 space-y-6">
            <div className="bg-white p-1 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
              <div className="aspect-video bg-slate-900 rounded-t-xl flex items-center justify-center group cursor-pointer relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-30 bg-cover"></div>
                 <Play className="text-white fill-white group-hover:scale-110 transition-transform relative z-10" size={64} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                   <span className="px-3 py-1 bg-slate-100 text-[#001F3F] text-xs font-bold rounded-full">Módulo 04: Direitos Fundamentais</span>
                   <span className="text-slate-400 text-sm">45 min de aula</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Aula 12: Remédios Constitucionais e o Habeas Corpus</h3>
                <div className="flex gap-2">
                   <button className="px-6 py-2 bg-[#001F3F] text-white rounded-lg font-medium shadow-lg shadow-blue-900/20 hover:opacity-90 transition-opacity">Assistir Agora</button>
                   <button className="px-6 py-2 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors">Material em PDF</button>
                </div>
              </div>
            </div>
          </section>

          {/* BARRA LATERAL DE METAS */}
          <section className="space-y-6">
             <div className="bg-[#D4AF37]/10 p-6 rounded-2xl border border-[#D4AF37]/20">
                <h4 className="font-bold text-[#001F3F] mb-4 flex items-center gap-2">
                   <Brain size={18}/> Desafio do Dia
                </h4>
                <p className="text-sm text-slate-700 mb-4">Resolva 5 questões de <strong>Direito Administrativo</strong> para manter sua sequência de 5 dias!</p>
                <button className="w-full py-3 bg-[#D4AF37] text-[#001F3F] font-bold rounded-xl shadow-md hover:opacity-90 transition-opacity">Começar Agora</button>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                <h4 className="font-bold text-[#001F3F] mb-4">Próximas Revisões</h4>
                <div className="space-y-4">
                   <RevisionItem label="Contratos Civis" time="Hoje" />
                   <RevisionItem label="Teoria do Crime" time="Amanhã" />
                   <RevisionItem label="Recursos Trabalhistas" time="Em 2 dias" />
                </div>
             </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// COMPONENTES DE APOIO
function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <button 
      className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${active ? 'bg-[#D4AF37] text-[#001F3F] font-bold shadow-lg' : 'text-slate-300 hover:bg-slate-800'}`}
    >
      {icon} <span>{label}</span>
      {active && <ChevronRight className="ml-auto" size={16} />}
    </button>
  );
}

function RevisionItem({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
       <span className="text-sm font-medium">{label}</span>
       <span className="text-[10px] bg-slate-200 px-2 py-1 rounded text-slate-600 font-bold uppercase">{time}</span>
    </div>
  );
}
