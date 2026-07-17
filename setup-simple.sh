#!/bin/bash

# Scassa Direito - Setup Manual Simples
# Para quando o script automático não funciona

echo ""
echo "🚀 SETUP MANUAL - SCASSA DIREITO"
echo "================================="
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}[1/3] Instalando dependências...${NC}"
echo "Aguarde ~2-3 minutos..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependências instaladas${NC}"
else
    echo -e "${RED}✗ Erro ao instalar${NC}"
    echo "Tente: npm cache clean --force"
    exit 1
fi

echo ""
echo -e "${BLUE}[2/3] Compilando projeto...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Projeto compilado${NC}"
else
    echo -e "${RED}✗ Erro na compilação${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}[3/3] Iniciando servidor...${NC}"
echo ""
echo -e "${GREEN}✅ PRONTO!${NC}"
echo -e "${GREEN}Acesse: http://localhost:3000${NC}"
echo ""

npm run dev
