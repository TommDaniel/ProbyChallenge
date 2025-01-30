#!/bin/bash

# setup.sh - Script para instalar e configurar projeto Laravel com React

# Saia imediatamente se um comando retornar um status diferente de zero
set -e

# Função para verificar se um comando existe
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Função para instalar Node.js
install_node() {
    echo "Instalando Node.js..."

    # Detecta o sistema operacional
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Supondo que seja baseado em Ubuntu/Debian
        sudo apt update
        sudo apt install -y nodejs npm
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        if ! command_exists brew; then
            echo "Homebrew não encontrado. Instalando Homebrew..."
            /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
            echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
            eval "$(/opt/homebrew/bin/brew shellenv)"
        fi
        brew install node
    else
        echo "Sistema operacional não suportado: $OSTYPE. Por favor, instale o Node.js manualmente."
        exit 1
    fi

    # Verifica a instalação
    if command_exists node && command_exists npm; then
        echo "Node.js e npm instalados com sucesso."
    else
        echo "Falha ao instalar Node.js e npm."
        exit 1
    fi
}

# Função para instalar Composer
install_composer() {
    echo "Verificando instalação do Composer..."

    if command_exists composer; then
        echo "Composer já está instalado."
    else
        echo "Composer não encontrado. Instalando Composer..."

        # Baixa o instalador do Composer
        EXPECTED_SIGNATURE=$(curl -s https://composer.github.io/installer.sig)
        php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"

        ACTUAL_SIGNATURE=$(php -r "echo hash_file('sha384', 'composer-setup.php');")

        if [ "$EXPECTED_SIGNATURE" != "$ACTUAL_SIGNATURE" ]
        then
            echo 'ERRO: Assinatura do instalador inválida'
            rm composer-setup.php
            exit 1
        fi

        # Instala o Composer globalmente
        sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
        rm composer-setup.php

        # Verifica a instalação
        if command_exists composer; then
            echo "Composer instalado com sucesso."
        else
            echo "Falha ao instalar Composer."
            exit 1
        fi
    fi
}

# Função para instalar o Laravel Installer
install_laravel_installer() {
    echo "Verificando instalação do Laravel Installer..."

    if command_exists laravel; then
        echo "Laravel Installer já está instalado."
    else
        echo "Laravel Installer não encontrado. Instalando via Composer..."

        composer global require laravel/installer

        # Adiciona o binário global do Composer ao PATH, se ainda não estiver
        if [[ ":$PATH:" != *":$HOME/.composer/vendor/bin:"* && ":$PATH:" != *":$HOME/.config/composer/vendor/bin:"* ]]; then
            echo 'export PATH="$HOME/.composer/vendor/bin:$HOME/.config/composer/vendor/bin:$PATH"' >> ~/.bashrc
            echo 'export PATH="$HOME/.composer/vendor/bin:$HOME/.config/composer/vendor/bin:$PATH"' >> ~/.zshrc
            source ~/.bashrc
            source ~/.zshrc
        fi

        # Verifica a instalação
        if command_exists laravel; then
            echo "Laravel Installer instalado com sucesso."
        else
            echo "Falha ao instalar Laravel Installer."
            exit 1
        fi
    fi
}

# Função para descriptografar o arquivo .env
decrypt_env() {
    ENV_ENCRYPTED=".env.encrypted"
    ENV_FILE=".env"
    DECRYPT_KEY="base64:KqxGdvIFNZgenWOP/xT9mAdkkPAkaEVsi4pwuu1z830="

    if [ ! -f "$ENV_ENCRYPTED" ]; then
        echo "Arquivo .env criptografado ($ENV_ENCRYPTED) não encontrado. Pulando descriptografia."
        return
    fi

    echo "Descriptografando o arquivo .env..."

    rm -f "$ENV_FILE"
    # Executa o comando artisan para descriptografar
    php artisan env:decrypt --key="$DECRYPT_KEY"

    if [ -f "$ENV_FILE" ]; then
        echo "Arquivo .env descriptografado com sucesso."
    else
        echo "Falha ao descriptografar o arquivo .env."
        exit 1
    fi
}

# Função para instalar dependências do Composer
composer_install() {
    echo "Instalando dependências do Composer..."
    composer install --no-interaction --prefer-dist --optimize-autoloader
}

# Função para instalar dependências do npm e construir os ativos React
install_npm() {
    echo "Instalando dependências do npm..."
    npm install

    echo "Construindo ativos React..."
    npm run build
}

# Função para executar comandos do Composer
run_composer() {
    echo "Executando tarefas de desenvolvimento do Composer..."
    composer run dev
}

# Execução principal do script

# Verifica se PHP está instalado
if ! command_exists php; then
    echo "PHP não está instalado. Por favor, instale o PHP antes de executar este script."
    exit 1
fi

# Instala o Composer se necessário
install_composer

# Instala o Node.js se necessário
if command_exists node && command_exists npm; then
    echo "Node.js e npm já estão instalados."
else
    install_node
fi

# Instala o Laravel Installer se necessário
install_laravel_installer

# Descriptografa o arquivo .env
decrypt_env

# Instala dependências do Composer
composer_install

# Instala dependências do npm e constrói os ativos
install_npm

# Executa comandos do Composer
run_composer

echo "Configuração do projeto concluída com sucesso!"
