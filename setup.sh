#!/bin/bash

# Scassa Direito - Setup Automático para Mac/Linux
# Este script configura tudo automaticamente

echo ""
echo "🚀 INICIANDO SETUP AUTOMÁTICO - SCASSA DIREITO"
echo "================================================"
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Passo 1: Verificar Node.js
echo -e "${BLUE}[1/6]${NC} Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não encontrado.${NC}"
    echo -e "${YELLOW}Instale em: https://nodejs.org${NC}"
    exit 1
fi
NODE_VERSION=$(node -v)
echo -e "${GREEN}✓ Node.js encontrado: $NODE_VERSION${NC}"
echo ""

# Passo 2: Verificar npm
echo -e "${BLUE}[2/6]${NC} Verificando npm..."
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm não encontrado.${NC}"
    exit 1
fi
NPM_VERSION=$(npm -v)
echo -e "${GREEN}✓ npm encontrado: $NPM_VERSION${NC}"
echo ""

# Passo 3: Instalar dependências
echo -e "${BLUE}[3/6]${NC} Instalando dependências (npm install)..."
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependências instaladas com sucesso${NC}"
else
    echo -e "${RED}❌ Erro ao instalar dependências${NC}"
    exit 1
fi
echo ""

# Passo 4: Verificar/Criar .env.local
echo -e "${BLUE}[4/6]${NC} Configurando variáveis de ambiente..."
if [ ! -f .env.local ]; then
    echo -e "${YELLOW}Criando .env.local a partir do template...${NC}"
    if [ -f .env.local.example ]; then
        cp .env.local.example .env.local
        echo -e "${YELLOW}⚠️  IMPORTANTE: Edite o arquivo .env.local com suas credenciais do Supabase${NC}"
        echo -e "${YELLOW}   1. Acesse https://supabase.com${NC}"
        echo -e "${YELLOW}   2. Crie um novo projeto${NC}"
        echo -e "${YELLOW}   3. Vá em Settings > API e copie a URL e a Anon Key${NC}"
    else
        echo -e "${RED}❌ Arquivo .env.local.example não encontrado${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✓ .env.local já existe${NC}"
fi
echo ""

# Passo 5: Build do projeto
echo -e "${BLUE}[5/6]${NC} Compilando projeto (npm run build)..."
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Projeto compilado com sucesso${NC}"
else
    echo -e "${RED}❌ Erro ao compilar o projeto${NC}"
    exit 1
fi
echo ""

# Passo 6: Iniciar servidor
echo -e "${BLUE}[6/6]${NC} Iniciando servidor de desenvolvimento..."
echo ""
echo -e "${GREEN}✅ SETUP COMPLETO!${NC}"
echo ""
echo -e "${GREEN}🌐 Seu site está rodando em:${NC} http://localhost:3000"
echo -e "${YELLOW}⏹️  Pressione Ctrl+C para parar o servidor${NC}"
echo ""

npm run dev
