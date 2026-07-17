# 🤖 Guia de Automação - Scassa Direito

## ⚡ Setup Automático em 1 Clique

Os scripts de automação fazem TUDO para você:
- ✅ Verificam Node.js e npm
- ✅ Instalam todas as dependências
- ✅ Criam arquivo `.env.local`
- ✅ Compilam o projeto
- ✅ Iniciam o servidor

---

## 🖥️ **Windows**

### Opção 1: Duplo-clique (Mais fácil)
1. Abra a pasta do projeto
2. **Duplo-clique em `setup.bat`**
3. Pronto! O script faz tudo automaticamente

### Opção 2: Command Prompt
```bash
cd caminho\para\plataforma-scassa
setup.bat
```

---

## 🍎 **Mac/Linux**

### Terminal
```bash
cd caminho/para/plataforma-scassa
chmod +x setup.sh
./setup.sh
```

---

## 📋 O que cada script faz

### [1/6] Verificar Node.js
```
✓ Node.js encontrado: v18.17.0
```
Se falhar: Instale em https://nodejs.org

### [2/6] Verificar npm
```
✓ npm encontrado: 9.6.7
```

### [3/6] Instalar dependências
```bash
npm install
```
Baixa todas as bibliotecas do projeto (~200MB)

### [4/6] Configurar variáveis de ambiente
```
Criando .env.local a partir do template...
```
**IMPORTANTE**: Você deve editar o `.env.local` com suas credenciais do Supabase!

### [5/6] Compilar projeto
```bash
npm run build
```
Prepara o projeto para produção

### [6/6] Iniciar servidor
```bash
npm run dev
```
Inicia o servidor em **http://localhost:3000**

---

## 🔑 Configurar Supabase (Necessário!)

Antes de rodar o script, você precisa:

1. **Criar conta no Supabase**
   - Acesse https://supabase.com
   - Sign Up com Google

2. **Criar novo projeto**
   - Clique em "New Project"
   - Name: `scassa-direito`
   - Database Password: `Senha123!` (salve)
   - Region: South America (São Paulo)

3. **Obter credenciais**
   - Vá em Settings > API
   - Copie:
     - Project URL: `https://xxxxx.supabase.co`
     - Anon Key: `eyJhbGc...`

4. **Editar `.env.local`**
   - Abra o arquivo na raiz do projeto
   - Cole as credenciais:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

5. **Inicializar Banco de Dados**
   - No Supabase, vá em SQL Editor
   - Crie Nova Query
   - Cole o SQL em `scripts/seed-database.sql`
   - Clique RUN

---

## ✅ Após o setup completo

Seu site estará em: **http://localhost:3000**

### Você verá:
- 🎨 Dashboard Scassa Premium
- 📚 Interface de estudos
- 🎯 Cards de progresso
- 💰 Design Navy & Gold

---

## 🚀 Deploy na Vercel (Após confirmar local)

```bash
# Push para GitHub
git add .
git commit -m "Setup automático completo"
git push
```

1. Acesse https://vercel.com
2. Login com GitHub
3. New Project
4. Selecione `plataforma-scassa`
5. Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Deploy

Seu site estará em: **https://plataforma-scassa.vercel.app**

---

## 🆘 Troubleshooting

### "Node.js não encontrado"
**Solução**: Instale em https://nodejs.org (versão LTS)

### "npm: command not found"
**Solução**: Reinicie o computador após instalar Node.js

### "Porta 3000 já está em uso"
**Solução**:
```bash
npm run dev -- -p 3001
```

### ".env.local não foi criado"
**Solução**: Crie manualmente:
```bash
cp .env.local.example .env.local
```
E edite com suas credenciais do Supabase

### "Erro ao instalar dependências"
**Solução**:
```bash
npm cache clean --force
npm install
```

---

## 📊 Tempos esperados

| Etapa | Duração |
|-------|----------|
| Verificar Node.js | ~1 seg |
| Verificar npm | ~1 seg |
| Instalar dependências | ~2-3 min |
| Configurar .env.local | ~10 seg |
| Compilar projeto | ~30-60 seg |
| Iniciar servidor | ~5 seg |
| **TOTAL** | **~5-7 minutos** |

---

## 💡 Dicas

- ✅ Deixe o script rodar até o final
- ✅ Não feche a janela durante a instalação
- ✅ Se der erro, leia a mensagem com cuidado
- ✅ Copie o erro e procure no Google
- ✅ Reinicie o computador se nada funcionar

---

**Pronto? Execute o script agora!** 🎉

```bash
# Windows
setup.bat

# Mac/Linux
./setup.sh
```
