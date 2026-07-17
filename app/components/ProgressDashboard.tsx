import React from 'react';
import { TrendingUp, Award, Zap, Target } from 'lucide-react';

interface ProgressData {
  subject: string;
  progress: number;
  questionsAnswered: number;
  correctAnswers: number;
  level: number;
}

const mockProgressData: ProgressData[] = [
  { subject: 'Direito Constitucional', progress: 75, questionsAnswered: 45, correctAnswers: 34, level: 8 },
  { subject: 'Direito Penal', progress: 60, questionsAnswered: 32, correctAnswers: 19, level: 6 },
  { subject: 'Direito Civil', progress: 45, questionsAnswered: 28, correctAnswers: 12, level: 4 },
  { subject: 'Direito Administrativo', progress: 55, questionsAnswered: 30, correctAnswers: 16, level: 5 },
];

export default function ProgressDashboard() {
  const totalXP = mockProgressData.reduce((acc, curr) => acc + (curr.level * 100), 0);
  const overallProgress = Math.round(
    mockProgressData.reduce((acc, curr) => acc + curr.progress, 0) / mockProgressData.length
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#001F3F] mb-2">Dashboard de Progresso</h1>
          <p className="text-slate-600">Acompanhe seu desempenho e evolução nos estudos</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-600">Progresso Geral</h3>
              <TrendingUp className="text-[#D4AF37]" size={24} />
            </div>
            <div className="mb-3">
              <div className="text-3xl font-bold text-[#001F3F]">{overallProgress}%</div>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#D4AF37] to-[#001F3F] h-full transition-all"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-600">Experiência</h3>
              <Award className="text-[#D4AF37]" size={24} />
            </div>
            <div className="text-3xl font-bold text-[#001F3F]">{totalXP}</div>
            <p className="text-xs text-slate-500 mt-2">XP Total Conquistado</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-600">Sequência</h3>
              <Zap className="text-[#D4AF37]" size={24} />
            </div>
            <div className="text-3xl font-bold text-[#001F3F]">12</div>
            <p className="text-xs text-slate-500 mt-2">Dias estudando</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-600">Acertos</h3>
              <Target className="text-[#D4AF37]" size={24} />
            </div>
            <div className="text-3xl font-bold text-[#001F3F]">78%</div>
            <p className="text-xs text-slate-500 mt-2">Taxa de Acerto</p>
          </div>
        </div>

        {/* Subjects Progress */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#001F3F] mb-6">Progresso por Disciplina</h2>
          <div className="space-y-6">
            {mockProgressData.map((subject, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="w-32">
                  <p className="font-semibold text-slate-700 text-sm">{subject.subject}</p>
                  <p className="text-xs text-slate-500 mt-1">Nível {subject.level}</p>
                </div>
                <div className="flex-1">
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#D4AF37] to-[#001F3F] h-full transition-all"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
                <div className="w-40 text-right">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-[#001F3F]">{subject.progress}%</span>
                    <span className="text-slate-500">
                      {subject.correctAnswers}/{subject.questionsAnswered}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
