# ⚡ QUICK START - Scassa Direito

## 🚀 Início Rápido (3 Passos)

### **Pré-requisito: Node.js**
Certifique-se de ter o Node.js instalado: https://nodejs.org

### **1️⃣ Clonar Repositório**
```bash
git clone https://github.com/scassadireito-cloud/plataforma-scassa.git
cd plataforma-scassa
```

### **2️⃣ Executar Script de Setup**

#### 🖥️ **Windows**
Duplo-clique em `setup.bat`

Ou abra Command Prompt na pasta do projeto e digite:
```bash
setup.bat
```

#### 🍎 **Mac/Linux**
Abra Terminal e digite:
```bash
chmod +x setup.sh
./setup.sh
```

### **3️⃣ Configurar Supabase (Importante!)**

Antes de rodar o servidor, você precisa das credenciais do Supabase:

1. Acesse: https://supabase.com
2. Crie uma conta (grátis com Google)
3. Crie um novo projeto
4. Vá em **Settings > API**
5. Copie:
   - **Project URL**
   - **Anon Key**

6. Abra o arquivo `.env.local` na raiz do projeto
7. Cole as credenciais:
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-aqui
```

---

## ✅ O que o Script Faz

- ✓ Verifica Node.js
- ✓ Instala todas as dependências (npm install)
- ✓ Cria arquivo `.env.local`
- ✓ Compila o projeto (npm run build)
- ✓ **Inicia servidor em http://localhost:3000**

---

## 🌐 Acessar o Site Localmente

Após o script rodar, abra seu navegador:
```
http://localhost:3000
```

Você verá o **Dashboard Scassa Premium** com:
- ✨ Design Navy & Gold
- 📚 Interface de estudos
- 🎯 Cards de progresso

---

## 🚀 Deploy na Vercel

Após confirmar que tudo funciona localmente:

1. Faça push para GitHub:
```bash
git add .
git commit -m "Setup completo"
git push
```

2. Acesse: https://vercel.com
3. Faça login com GitHub
4. Clique em **New Project**
5. Selecione **plataforma-scassa**
6. Adicione as mesmas variáveis de ambiente (`.env.local`)
7. Clique em **Deploy**

Seu site estará em: `https://plataforma-scassa.vercel.app`

---

## 🆘 Solução de Problemas

### Erro: "Node.js não encontrado"
👉 Instale em: https://nodejs.org (escolha LTS)

### Erro: "npm: command not found"
👉 Reinicie seu computador após instalar Node.js

### Porta 3000 já está em uso
👉 Abra outro Terminal e digite:
```bash
npm run dev -- -p 3001
```

### .env.local não foi criado
👉 Crie manualmente:
```bash
cp .env.local.example .env.local
```

---

## 📚 Documentação

- [README Completo](./README.md)
- [Estrutura do Projeto](./README.md#-estrutura-do-projeto)
- [Stack Tecnológica](./README.md#-stack-tecnológica)

---

**Pronto? Execute o script agora!** 🎉
