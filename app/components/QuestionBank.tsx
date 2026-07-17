import React, { useState } from 'react';
import { CheckCircle, Circle, AlertCircle, Timer, Award } from 'lucide-react';

interface Question {
  id: string;
  statement: string;
  options: { letter: string; text: string }[];
  correctOption: string;
  explanation: string;
  category: string;
}

const mockQuestions: Question[] = [
  {
    id: '1',
    statement: 'O direito a vida é considerado direito fundamental de caráter ___________.',
    options: [
      { letter: 'A', text: 'relativo' },
      { letter: 'B', text: 'absoluto' },
      { letter: 'C', text: 'limitado' },
      { letter: 'D', text: 'temporal' },
    ],
    correctOption: 'B',
    explanation: 'O direito à vida é direito fundamental de caráter absoluto, pois não admite relativização.',
    category: 'Constitucional',
  },
];

export default function QuestionBank() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  const currentQuestion = mockQuestions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctOption;

  const handleAnswer = (letter: string) => {
    if (!answered) {
      setSelectedAnswer(letter);
      setAnswered(true);
      if (letter === currentQuestion.correctOption) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < mockQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#001F3F] mb-2">Banco de Questões</h1>
            <p className="text-slate-600">Teste seus conhecimentos</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Award className="text-[#D4AF37]" size={24} />
                <span className="text-sm text-slate-600">Acertos</span>
              </div>
              <p className="text-2xl font-bold text-[#001F3F]">{score}/{mockQuestions.length}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="text-[#D4AF37]" size={24} />
                <span className="text-sm text-slate-600">Tempo</span>
              </div>
              <p className="text-2xl font-bold text-[#001F3F]">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</p>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {/* Question Header */}
          <div className="mb-6 pb-6 border-b border-slate-200">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block px-3 py-1 bg-[#D4AF37] text-[#001F3F] text-xs font-bold rounded-full">
                {currentQuestion.category}
              </span>
              <span className="text-slate-500 text-sm font-semibold">
                Questão {currentIndex + 1}/{mockQuestions.length}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#001F3F] leading-relaxed">
              {currentQuestion.statement}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map(option => (
              <button
                key={option.letter}
                onClick={() => handleAnswer(option.letter)}
                disabled={answered}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all font-semibold flex items-start gap-3 ${
                  selectedAnswer === option.letter
                    ? isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : answered && option.letter === currentQuestion.correctOption
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-200 hover:border-[#D4AF37] hover:bg-slate-50'
                }`}
              >
                {selectedAnswer === option.letter && answered ? (
                  isCorrect ? (
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  ) : (
                    <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  )
                ) : (
                  <Circle className="text-slate-400 flex-shrink-0 mt-1" size={20} />
                )}
                <span>
                  <span className="text-[#001F3F] mr-2">{option.letter}.</span>
                  {option.text}
                </span>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {answered && (
            <div className={`p-4 rounded-lg mb-8 ${
              isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-blue-50 border-l-4 border-blue-500'
            }`}>
              <p className="font-semibold text-[#001F3F] mb-2">
                {isCorrect ? '✓ Resposta Correta!' : 'Resposta Esperada:'}
              </p>
              <p className="text-slate-700">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              ← Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={!answered || currentIndex === mockQuestions.length - 1}
              className="px-6 py-2 bg-[#001F3F] text-white rounded-lg hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              Próxima →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
