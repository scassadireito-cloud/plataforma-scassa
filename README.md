# 🏛️ Scassa Direito - Ecossistema Inteligente

## Sobre o Projeto

Plataforma de educação jurídica de alta performance, desenvolvida para transformar a forma como advogados, juízes e concurseiros estudam Direito.

### Visão
Um ecossistema onde IA, pedagogia jurídica rigorosa e design premium se encontram para criar a melhor experiência de aprendizado em Direito.

### Identidade Visual
- **Cores Institucionais**: Navy #001F3F + Gold #D4AF37
- **Filosofia**: "Cognitive Load Reduction" (Inspirada em Apple e Linear)
- **Tipografia**: San Francisco / Inter

---

## 🚀 Stack Tecnológica

| Componente | Tecnologia |
|-----------|------------|
| **Frontend** | Next.js 14 + React 18 + Tailwind CSS |
| **Backend** | Node.js + API REST |
| **Banco de Dados** | Supabase (PostgreSQL) |
| **Autenticação** | Supabase Auth |
| **IA** | OpenAI GPT-4o (em desenvolvimento) |
| **Hospedagem** | Vercel |
| **Storage** | Supabase Storage |

---

## 📋 Setup Local

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Supabase (gratuita)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/scassadireito-cloud/plataforma-scassa.git
cd plataforma-scassa

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.local.example .env.local

# Edite o .env.local com suas credenciais do Supabase:
# NEXT_PUBLIC_SUPABASE_URL
# NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Obter Credenciais do Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie um novo projeto
3. Vá em **Settings > API**
4. Copie:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Inicializar Banco de Dados

1. No painel do Supabase, vá em **SQL Editor**
2. Crie uma nova query
3. Cole o conteúdo de `scripts/seed-database.sql`
4. Clique em **Run**

### Rodar o Projeto

```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm run start
```

Acesse: **http://localhost:3000**

---

## 🌐 Deploy na Vercel

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em **New Project**
4. Selecione este repositório
5. Configure as variáveis de ambiente (mesmas do `.env.local`)
6. Clique em **Deploy**

Seu site estará em: `https://plataforma-scassa.vercel.app`

---

## 📁 Estrutura do Projeto

```
plataforma-scassa/
├── app/
│   ├── page.tsx          # Dashboard principal
│   ├── layout.tsx        # Layout root
│   └── globals.css       # Estilos globais
├── lib/
│   └── supabase.ts       # Cliente Supabase
├── scripts/
│   └── seed-database.sql # SQL de inicialização
├── public/               # Arquivos estáticos
├── .env.local.example    # Template de ambiente
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

---

## 🎯 Roadmap

### ✅ Fase 1: MVP (Atual)
- [x] Dashboard Premium
- [x] Estrutura de Banco de Dados
- [x] Setup Supabase
- [ ] Autenticação

### 📋 Fase 2: Core Features
- [ ] Módulo de Aulas (Vídeo + PDF)
- [ ] Banco de Questões
- [ ] Sistema de Repetição Espaçada
- [ ] IA Mentor

### 🚀 Fase 3: Enterprise
- [ ] App Mobile (iOS/Android)
- [ ] Gerador de Mapas Mentais
- [ ] Relatórios Inteligentes
- [ ] White-labeling

---

## 📚 Documentação

- [API Reference](./docs/API.md) *(em desenvolvimento)*
- [Database Schema](./docs/DATABASE.md) *(em desenvolvimento)*
- [Guia de Contribuição](./CONTRIBUTING.md) *(em desenvolvimento)*

---

## 🔐 Segurança

- ✅ HTTPS + SSL automático via Vercel
- ✅ Autenticação segura via Supabase
- ✅ Conformidade com LGPD
- ✅ Variáveis sensíveis em `.env.local`

---

## 📞 Suporte

Para dúvidas ou contribuições, abra uma [Issue](https://github.com/scassadireito-cloud/plataforma-scassa/issues).

---

**Desenvolvido com ❤️ para transformar a educação jurídica no Brasil**
