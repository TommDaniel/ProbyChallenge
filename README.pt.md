
# Desafio ProbY

Este projeto é uma **aplicação web full-stack** que utiliza tecnologias modernas e segue os princípios de **arquitetura MVC** e **código limpo**.

---

## **Índice**
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Funcionalidades Implementadas](#funcionalidades-implementadas)
4. [Instruções de Configuração](#instruções-de-configuração)
5. [Decisões Técnicas](#decisões-técnicas)
6. [Contribuindo](#contribuindo)

---

## **Descrição do Projeto**

Este projeto foi desenvolvido para aproveitar ferramentas e frameworks modernos, garantindo um desenvolvimento rápido, responsivo e escalável. Ele integra um frontend em **React (TypeScript)**, um backend em **Laravel**, e gerenciamento de dados através do **Supabase (PostgreSQL)**. A interface do usuário é aprimorada com **MUI** e **Tailwind CSS**.

---

## **Tecnologias Utilizadas**

### **Frontend**
- React (TypeScript)
- Tailwind CSS
- Material UI (MUI)
- Inertia.js para navegação em SPA

### **Backend**
- Framework Laravel (PHP 8.2)
- Sanctum (para autenticação)
- Supabase com PostgreSQL
- Composer (gerenciador de pacotes)

### **Ferramentas de Desenvolvimento**
- Vite (para atualização em tempo real e builds rápidos)
- TypeScript (JavaScript com tipagem)
- Laravel Breeze (para scaffolding inicial)
- Docker / Laravel Sail (opcional para ambiente de desenvolvimento)

---

## **Funcionalidades Implementadas**

- **Autenticação de Usuário**: Fornecida pelo Laravel Breeze (que usa Sanctum internamente) e Inertia.js.
- **UI Responsiva**: Construída com Tailwind CSS e componentes do Material UI.
- **Navegação SPA**: Transições suaves com Inertia.js.
- **Estrutura de Código Limpo**: Seguindo princípios de MVC e código limpo para melhorar a manutenção e escalabilidade.
- **Integração com Banco de Dados**: Banco de dados PostgreSQL gerenciado via Supabase, utilizando modelos e migrações.

---

## **Instruções de Configuração**

### **1. Pré-requisitos**
Certifique-se de ter o **PHP 8.4** ou superior instalado. Além disso, ative as seguintes extensões no arquivo `php.ini`, removendo o `;` do início destas linhas:

```ini
; extension=pdo_pgsql
; extension=pgsql
```

### **2. Execute o Script de Configuração**
Execute o script `setup.sh` para automatizar o processo de configuração. Use os seguintes comandos em um terminal:

```bash
chmod +x setup.sh
./setup.sh
```

### **3. Acesse o Projeto**
Após a configuração ser concluída, você pode acessar o projeto através do seu navegador no endereço local onde o projeto está hospedado.

---

## **Decisões Técnicas**

### **1. MVC e Código Limpo**
A aplicação segue o padrão **Model-View-Controller (MVC)** para separar responsabilidades e tornar o código mais fácil de manter. Essa abordagem permite que a lógica de backend, os componentes de UI e o acesso a dados sejam desacoplados, melhorando a escalabilidade e a testabilidade.

### **2. React com TypeScript**
O TypeScript foi escolhido para garantir uma tipagem forte e reduzir erros em tempo de execução, melhorando a estabilidade geral da aplicação. Ele também se integra perfeitamente ao React para a construção de componentes reutilizáveis e de fácil manutenção.

### **3. Estilização com Tailwind CSS e Material UI**
Para equilibrar flexibilidade e prototipagem rápida, o **Tailwind CSS** foi utilizado para estilos personalizados, enquanto o **Material UI** (MUI) forneceu componentes acessíveis e pré-construídos.

### **4. PostgreSQL com Supabase**
O PostgreSQL foi selecionado por sua confiabilidade e escalabilidade. O Supabase atua como um backend-as-a-service, simplificando a autenticação e a sincronização de dados em tempo real.

### **5. Vite para Desenvolvimento**
O Vite foi utilizado para fornecer um servidor de desenvolvimento rápido e substituição de módulos em tempo real (HMR), garantindo uma experiência de desenvolvimento fluida e sem longos tempos de build.

---

## **Contribuindo**

Aceitamos contribuições! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma nova branch (`feature/novo-recurso`).
3. Commit suas alterações.
4. Abra um pull request.

---

## **Licença**

Este projeto está licenciado sob a [Licença MIT](LICENSE).
