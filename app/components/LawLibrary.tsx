import React, { useState } from 'react';
import { Search, BookOpen, Code, Gavel, Database } from 'lucide-react';

interface Law {
  id: string;
  category: string;
  title: string;
  content: string;
  source: string;
}

const mockLaws: Law[] = [
  {
    id: '1',
    category: 'Constitucional',
    title: 'Artigo 1º da Constituição Federal',
    content: 'A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios...',
    source: 'CF/88'
  },
  {
    id: '2',
    category: 'Penal',
    title: 'Artigo 121 - Homicídio',
    content: 'Matar alguém: Pena - reclusão, de 6 (seis) a 20 (vinte) anos.',
    source: 'Código Penal'
  },
  {
    id: '3',
    category: 'Civil',
    title: 'Artigo 1º - Pessoa Natural',
    content: 'A personalidade civil começa do nascimento com vida; mas a lei põe a salvo...',
    source: 'Código Civil'
  },
];

export default function LawLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLaw, setSelectedLaw] = useState<Law | null>(null);

  const filteredLaws = mockLaws.filter(law => {
    const matchesSearch = law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         law.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || law.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(mockLaws.map(law => law.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-[#001F3F]" size={32} />
            <h1 className="text-3xl font-bold text-[#001F3F]">Biblioteca de Leis</h1>
          </div>
          <p className="text-slate-600">Base de dados com toda legislação essencial para seus estudos</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Pesquise por lei, artigo, palavra-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors text-lg"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h3 className="font-bold text-[#001F3F] mb-4 flex items-center gap-2">
                <Database size={20} /> Categorias
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === null
                      ? 'bg-[#001F3F] text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Todas
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#001F3F] text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredLaws.map(law => (
                <div
                  key={law.id}
                  onClick={() => setSelectedLaw(law)}
                  className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:border-l-4 hover:border-[#D4AF37]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-[#D4AF37]/20 text-[#001F3F] text-xs font-bold rounded-full">
                      {law.category}
                    </span>
                    <Code className="text-slate-400" size={20} />
                  </div>
                  <h3 className="font-bold text-[#001F3F] mb-2 line-clamp-2">{law.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-3 mb-3">{law.content}</p>
                  <p className="text-xs text-slate-500 font-semibold">{law.source}</p>
                </div>
              ))}
            </div>

            {filteredLaws.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="mx-auto text-slate-300 mb-4" size={48} />
                <p className="text-slate-500 text-lg">Nenhuma lei encontrada</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal - Law Details */}
        {selectedLaw && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-8 max-h-96 overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#001F3F] text-xs font-bold rounded-full mb-3">
                    {selectedLaw.category}
                  </span>
                  <h2 className="text-2xl font-bold text-[#001F3F]">{selectedLaw.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedLaw(null)}
                  className="text-2xl text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">{selectedLaw.content}</p>
              <p className="text-sm text-slate-500 font-semibold">Fonte: {selectedLaw.source}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
