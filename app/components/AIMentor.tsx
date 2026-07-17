import React, { useState } from 'react';
import { MessageSquare, Send, Loader } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIMentor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou o Mentor Scassa. Como posso ajudá-lo com suas dúvidas de Direito?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Essa é uma ótima pergunta sobre "${inputValue}". De acordo com a jurisprudência e doutrina, podemos destacar que... [Resposta IA aqui - integrar com OpenAI]`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="text-[#D4AF37]" size={32} />
            <h1 className="text-3xl font-bold">IA Mentor Scassa</h1>
          </div>
          <p className="text-slate-300">Tire suas dúvidas de Direito com inteligência artificial</p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-96">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-[#001F3F] text-white rounded-br-none'
                      : 'bg-slate-100 text-slate-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 text-slate-900 px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader className="animate-spin" size={16} />
                  <span className="text-sm">Pensando...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="border-t border-slate-200 p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua dúvida de Direito..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-[#001F3F] hover:bg-slate-900 disabled:bg-slate-400 text-white px-6 py-2 rounded-lg transition-all flex items-center gap-2 font-semibold"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
