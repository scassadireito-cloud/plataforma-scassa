@echo off
REM Scassa Direito - Setup Manual Simples para Windows
REM Para quando o script automático não funciona

echo.
echo 🚀 SETUP MANUAL - SCASSA DIREITO
echo =================================
echo.

echo [1/3] Instalando dependências...
echo Aguarde ~2-3 minutos...
echo.

call npm install

if errorlevel 1 (
    echo.
    echo ✗ Erro ao instalar dependências
    echo Tente: npm cache clean --force
    pause
    exit /b 1
)

echo.
echo ✓ Dependências instaladas
echo.

echo [2/3] Compilando projeto...
call npm run build

if errorlevel 1 (
    echo.
    echo ✗ Erro na compilação
    pause
    exit /b 1
)

echo.
echo ✓ Projeto compilado
echo.

echo [3/3] Iniciando servidor...
echo.
echo ✅ PRONTO!
echo Acesse: http://localhost:3000
echo.

call npm run dev
