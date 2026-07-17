@echo off
REM Scassa Direito - Setup Automático para Windows
REM Este script configura tudo automaticamente

setlocal enabledelayedexpansion

echo.
echo 🚀 INICIANDO SETUP AUTOMATICO - SCASSA DIREITO
echo ================================================
echo.

REM Passo 1: Verificar Node.js
echo [1/6] Verificando Node.js...
where node >nul 2>nul
if errorlevel 1 (
    echo.
    echo ❌ Node.js nao encontrado.
    echo Instale em: https://nodejs.org
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
echo ✓ Node.js encontrado: %NODE_VERSION%
echo.

REM Passo 2: Verificar npm
echo [2/6] Verificando npm...
where npm >nul 2>nul
if errorlevel 1 (
    echo ❌ npm nao encontrado.
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i
echo ✓ npm encontrado: %NPM_VERSION%
echo.

REM Passo 3: Instalar dependências
echo [3/6] Instalando dependencias (npm install)...
call npm install
if errorlevel 1 (
    echo ❌ Erro ao instalar dependencias
    pause
    exit /b 1
)
echo ✓ Dependencias instaladas com sucesso
echo.

REM Passo 4: Verificar/Criar .env.local
echo [4/6] Configurando variaveis de ambiente...
if not exist .env.local (
    echo Criando .env.local a partir do template...
    if exist .env.local.example (
        copy .env.local.example .env.local
        echo.
        echo ⚠️  IMPORTANTE: Edite o arquivo .env.local com suas credenciais do Supabase
        echo    1. Acesse https://supabase.com
        echo    2. Crie um novo projeto
        echo    3. Va em Settings ^> API e copie a URL e a Anon Key
    ) else (
        echo ❌ Arquivo .env.local.example nao encontrado
        pause
        exit /b 1
    )
) else (
    echo ✓ .env.local ja existe
)
echo.

REM Passo 5: Build do projeto
echo [5/6] Compilando projeto (npm run build)...
call npm run build
if errorlevel 1 (
    echo ❌ Erro ao compilar o projeto
    pause
    exit /b 1
)
echo ✓ Projeto compilado com sucesso
echo.

REM Passo 6: Iniciar servidor
echo [6/6] Iniciando servidor de desenvolvimento...
echo.
echo ✅ SETUP COMPLETO!
echo.
echo 🌐 Seu site esta rodando em: http://localhost:3000
echo ⏹️  Pressione Ctrl+C para parar o servidor
echo.

call npm run dev
pause
