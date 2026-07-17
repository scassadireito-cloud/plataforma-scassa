import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function AuthModule() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Auth attempt:', { email, password, fullName });
    // Supabase auth integration aqui
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001F3F] to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#001F3F] rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-[#D4AF37]">
            <span className="text-white font-bold text-2xl">JS</span>
          </div>
          <h1 className="text-2xl font-bold text-[#001F3F] mb-2">Scassa Direito</h1>
          <p className="text-slate-500 text-sm">Educação Jurídica Inteligente</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
              isLogin
                ? 'bg-[#001F3F] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
              !isLogin
                ? 'bg-[#001F3F] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Cadastro
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-4">
          {/* Full Name (Signup only) */}
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Nome Completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-slate-400" size={20} />
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-slate-400" size={20} />
            <input
              type="password"
              placeholder="Senha (mín. 8 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#001F3F] hover:bg-slate-900 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-6 shadow-lg"
          >
            {isLogin ? 'Entrar' : 'Criar Conta'}
            <ArrowRight size={20} />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <p className="text-center text-slate-600 text-sm">
            {isLogin ? 'Não tem conta?' : 'Já tem conta?'}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-[#D4AF37] font-semibold hover:underline"
            >
              {isLogin ? 'Cadastre-se' : 'Faça login'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
