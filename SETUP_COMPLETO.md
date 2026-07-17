# 🚀 SETUP COMPLETO AUTOMATIZADO - SCASSA DIREITO

## ⚡ RESUMO EXECUTIVO

Este guia automatiza **4 etapas em 1 processo**:
1. ✅ Script de Setup (npm install + build)
2. ✅ Configuração Supabase
3. ✅ Deploy Vercel
4. ✅ Adicionar Funcionalidades

**Tempo total: ~20 minutos**

---

## 📋 CHECKLIST AUTOMATIZADO

### **FASE 1: PREPARAÇÃO (Antes de começar)**

- [ ] Node.js instalado? https://nodejs.org
- [ ] Conta GitHub criada? https://github.com
- [ ] Conta Supabase? https://supabase.com (grátis com Google)
- [ ] Conta Vercel? https://vercel.com (grátis com GitHub)

---

### **FASE 2: EXECUTAR SETUP AUTOMÁTICO (5-7 min)**

#### Windows 🖥️
```bash
# 1. Download ZIP do repositório
# 2. Extraia em uma pasta
# 3. Abra a pasta
# 4. Duplo-clique em: setup.bat
```

#### Mac/Linux 🍎
```bash
# 1. Clone o repositório
git clone https://github.com/scassadireito-cloud/plataforma-scassa.git
cd plataforma-scassa

# 2. Execute o script
chmod +x setup.sh
./setup.sh

# 3. Aguarde até ver:
# ✓ SETUP COMPLETO!
# 🌐 Seu site está rodando em: http://localhost:3000
```

**O que o script faz:**
- ✅ Verifica Node.js e npm
- ✅ Instala todas as dependências (npm install)
- ✅ Cria arquivo .env.local
- ✅ Compila o projeto (npm run build)
- ✅ Inicia servidor local (npm run dev)

**Resultado esperado:**
```
http://localhost:3000 → Dashboard Scassa Premium
```

---

### **FASE 3: CONFIGURAR SUPABASE (5 min)**

#### **PASSO 1: Criar Projeto**
```
1. Acesse: https://supabase.com
2. Sign Up com Google
3. New Project
4. Name: scassa-direito
5. Database Password: Scassa@2024!
6. Region: South America - São Paulo
7. Criar Projeto (aguarde 2 min)
```

#### **PASSO 2: Obter Credenciais**
```
1. Settings > API
2. Copiar:
   - Project URL: https://xxxxx.supabase.co
   - Anon Key: eyJhbGc...
```

#### **PASSO 3: Editar .env.local**
```
Arquivo: .env.local (na raiz do projeto)

Conteúdo:
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_OPENAI_API_KEY=sk-... (opcional agora)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### **PASSO 4: Inicializar Banco de Dados**
```
1. Supabase > SQL Editor
2. New Query
3. Cole TODO o SQL de: scripts/seed-database.sql
4. RUN
5. ✅ Tabelas criadas automaticamente
```

#### **PASSO 5: Testar Localmente**
```
Acesse: http://localhost:3000
Você verá: Dashboard Scassa Premium (Navy + Gold)
```

---

### **FASE 4: DEPLOY NA VERCEL (3-5 min)**

#### **PASSO 1: Push para GitHub**
```bash
# No terminal, na pasta do projeto:
git add .
git commit -m "Setup automático completo"
git push
```

#### **PASSO 2: Deploy Automático**
```
1. Acesse: https://vercel.com
2. Sign In com GitHub
3. New Project
4. Selecione: plataforma-scassa
5. Continue
```

#### **PASSO 3: Adicionar Variáveis de Ambiente**
```
Environment Variables:

1. Name: NEXT_PUBLIC_SUPABASE_URL
   Value: https://xxxxx.supabase.co

2. Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
   Value: eyJhbGc...

Clique: Add
```

#### **PASSO 4: Deploy**
```
1. Clique: Deploy
2. Aguarde 3-5 minutos
3. Veja: Deployment Successful ✅
4. Clique: Visit
```

#### **RESULTADO:**
```
Seu site está em: https://plataforma-scassa.vercel.app 🎉
```

---

### **FASE 5: ADICIONAR FUNCIONALIDADES (Automático)**

As funcionalidades foram pré-configuradas no repositório:

#### **✅ Já Incluídas:**
- 🎨 Dashboard Premium (Navy + Gold)
- 📚 Estrutura de Banco de Dados (Supabase)
- 🔐 Autenticação preparada (Supabase Auth)
- 📊 Tabelas de Questões e Progresso
- 🎮 Sistema de XP e Pontos

#### **🔄 Próximas (Em Desenvolvimento):**
- 🤖 Chat com IA Mentor
- 📖 Módulo de Biblioteca de Leis
- ❓ Banco de Questões Completo
- 📈 Dashboard de Análise
- 🏆 Sistema de Badges

---

## 🎯 RESUMO DE TEMPOS

| Fase | Ação | Duração | Status |
|------|------|---------|--------|
| 1 | Setup Script | 5-7 min | ⏳ |
| 2 | Supabase Config | 5 min | ⏳ |
| 3 | Deploy Vercel | 5 min | ⏳ |
| 4 | Funcionalidades | Incluído | ✅ |
| **TOTAL** | **TODO PRONTO** | **~20 min** | 🚀 |

---

## 🔗 LINKS IMPORTANTES

| Recurso | Link |
|---------|------|
| Repositório | https://github.com/scassadireito-cloud/plataforma-scassa |
| Node.js | https://nodejs.org |
| Supabase | https://supabase.com |
| Vercel | https://vercel.com |
| Seu GitHub | https://github.com/scassadireito-cloud |

---

## ✅ CHECKLIST FINAL

- [ ] Node.js instalado
- [ ] Executou setup.bat ou ./setup.sh
- [ ] Criou projeto no Supabase
- [ ] Obteve credenciais (URL + Anon Key)
- [ ] Editou .env.local
- [ ] Executou SQL no Supabase
- [ ] Testou em http://localhost:3000
- [ ] Fez push para GitHub
- [ ] Deployou na Vercel
- [ ] Acessou https://plataforma-scassa.vercel.app

---

## 🚨 TROUBLESHOOTING RÁPIDO

### Erro: "Node.js não encontrado"
```
Solução: Instale em https://nodejs.org (versão LTS)
```

### Erro: "Porta 3000 já está em uso"
```bash
npm run dev -- -p 3001
```

### Erro: ".env.local não funciona"
```
Verifique:
1. Arquivo está na raiz do projeto
2. Valores corretos do Supabase
3. Sem espaços antes/depois dos valores
```

### Vercel mostra erro de variáveis
```
Confirme que adicionou EXATAMENTE:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## 📞 PRÓXIMOS PASSOS

1. **Agora**: Execute o setup.bat ou ./setup.sh
2. **Depois**: Configure Supabase
3. **Depois**: Deploy na Vercel
4. **Depois**: Adicionar mais funcionalidades (via GitHub)

---

## 🎉 PRONTO PARA COMEÇAR?

```bash
# Windows
setup.bat

# Mac/Linux
./setup.sh
```

**Avise quando terminar cada etapa!** ✅

---

**Desenvolvido com ❤️ para transformar a educação jurídica no Brasil**
