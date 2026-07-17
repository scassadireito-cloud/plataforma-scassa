# 🔧 GUIA DE TROUBLESHOOTING - SCASSA DIREITO

## ❌ Problema: "Não consegui executar"

Vamos resolver passo a passo!

---

## 📋 CHECKLIST - O que pode estar errado?

### **1️⃣ Node.js não está instalado?**

**Verificar:**
```bash
node --version
```

**Se aparecer erro "command not found":**
- ❌ Node.js NÃO está instalado
- ✅ Instale em: https://nodejs.org
- ✅ Escolha a versão **LTS** (Long Term Support)
- ✅ Clique em **Download**
- ✅ Execute o instalador
- ✅ **REINICIE O COMPUTADOR**
- ✅ Tente novamente: `node --version`

---

### **2️⃣ Arquivo setup.bat/setup.sh não funciona?**

**Windows - Alternativa 1: Via Command Prompt**
```bash
# 1. Abra Command Prompt (cmd)
# 2. Navegue até a pasta:
cd C:\Users\SeuUsuario\Desktop\plataforma-scassa

# 3. Execute diretamente:
npm install
```

**Windows - Alternativa 2: Via PowerShell**
```bash
# 1. Abra PowerShell como Administrador
# 2. Digite:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 3. Navegue até a pasta:
cd C:\Users\SeuUsuario\Desktop\plataforma-scassa

# 4. Execute:
.\setup.bat
```

**Mac/Linux - Alternativa**
```bash
# 1. Abra Terminal
# 2. Navegue até a pasta:
cd ~/Desktop/plataforma-scassa

# 3. Dê permissão:
chmod +x setup.sh

# 4. Execute:
bash setup.sh
```

---

### **3️⃣ npm install dá erro?**

**Solução 1: Limpar cache do npm**
```bash
npm cache clean --force
npm install
```

**Solução 2: Deletar pasta node_modules**
```bash
# Windows
rmdir /s node_modules

# Mac/Linux
rm -rf node_modules

# Depois:
npm install
```

**Solução 3: Usar yarn em vez de npm**
```bash
# Instale yarn:
npm install -g yarn

# Depois use:
yarn install
yarn dev
```

---

### **4️⃣ Porta 3000 já está em uso?**

**Solução: Usar outra porta**
```bash
npm run dev -- -p 3001
```

Depois acesse: **http://localhost:3001**

---

### **5️⃣ Erro: "Cannot find module"?**

**Solução:**
```bash
# 1. Deletar package-lock.json
rm package-lock.json

# 2. Reinstalar tudo
npm install

# 3. Limpar cache Next.js
rm -rf .next

# 4. Rodar novamente
npm run dev
```

---

## 🎯 **EXECUÇÃO MANUAL SEM SCRIPT**

Se nenhum script funcionar, execute MANUALMENTE:

```bash
# PASSO 1: Instalar dependências
npm install

# PASSO 2: Criar arquivo .env.local
# (Copie conteúdo de .env.local.example e edite)

# PASSO 3: Compilar projeto
npm run build

# PASSO 4: Rodar em desenvolvimento
npm run dev
```

**Resultado esperado:**
```
✓ ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

---

## 💻 **USANDO VS CODE (Interface Gráfica)**

Se preferir não usar terminal:

### **1. Instalar VS Code**
- Acesse: https://code.visualstudio.com
- Baixe e instale

### **2. Abrir Projeto**
- Abra VS Code
- **File > Open Folder**
- Selecione pasta `plataforma-scassa`

### **3. Abrir Terminal no VS Code**
- **Terminal > New Terminal** (Ctrl + ` )

### **4. Executar Comandos**
No terminal do VS Code, digite:
```bash
npm install
npm run dev
```

---

## 📱 **USANDO GITHUB CODESPACES (100% Online)**

Se tudo falhar no seu computador, use a nuvem:

### **1. Abrir no GitHub Codespaces**
- Acesse: https://github.com/scassadireito-cloud/plataforma-scassa
- Pressione **`.`** (ponto)
- Ou clique: **Code > Codespaces > Create codespace on main**

### **2. Aguardar Carregar**
- VS Code abre na nuvem (grátis!)

### **3. Abrir Terminal**
- **Terminal > New Terminal**

### **4. Executar**
```bash
npm install
npm run dev
```

### **5. Acessar**
- Clique no link quando aparecer: `http://localhost:3000`
- Ou vá em **Ports > 3000 > Click open in browser**

---

## 🆘 **ÚLTIMAS TENTATIVAS**

Se NADA funcionar:

### **Opção 1: Reiniciar Tudo**
```bash
# Windows
del /Q node_modules
del package-lock.json
rm -rf .next
npm cache clean --force
npm install
npm run dev

# Mac/Linux
rm -rf node_modules
rm package-lock.json
rm -rf .next
npm cache clean --force
npm install
npm run dev
```

### **Opção 2: Usar StackBlitz (Totalmente Online)**
- Acesse: https://stackblitz.com/github/scassadireito-cloud/plataforma-scassa
- Espera ~1 minuto
- Pronto! Seu site roda na nuvem

### **Opção 3: Usar Docker**
```bash
# Se tem Docker instalado:
docker run -it -p 3000:3000 node:18
cd /app
git clone https://github.com/scassadireito-cloud/plataforma-scassa.git
cd plataforma-scassa
npm install
npm run dev
```

---

## 📞 **INFORMAÇÕES ÚTEIS**

| Recurso | Link |
|---------|------|
| Node.js Download | https://nodejs.org |
| VS Code | https://code.visualstudio.com |
| GitHub Codespaces | https://github.com/codespaces |
| StackBlitz | https://stackblitz.com |
| Docker | https://docker.com |
| NPM Docs | https://docs.npmjs.com |

---

## ✅ **Qual caminho você quer tentar?**

1. **Execução Manual** - npm install + npm run dev
2. **VS Code** - Interface gráfica
3. **GitHub Codespaces** - 100% Online (RECOMENDADO)
4. **StackBlitz** - Mais simples ainda

**Qual você escolhe?** 👇
