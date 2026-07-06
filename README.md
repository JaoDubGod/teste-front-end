# Teste Econverse: Vaga Desenvolvedor Front-End

## Pré-requisitos

- [Node.js](https://nodejs.org) versão 18 ou superior
- npm (instalado junto com o Node)

## Instalação

Clone o repositório ou extraia o projeto, depois instale as dependências:

```
bash
npm install
```

## Rodando em modo desenvolvimento

```
bash
npm run dev
```

Com isso, o servidor local (Vite) irá iniciar com recarregamento automátio. E o terminal irá enviar o endereço, sendo geralmente:

```
Local: http://localhost:5173/
```

## Para verificação de código (lint e tipos)
O projeto não possuio testes automatizado, porém, conta com verificação de tipos (TypeScript) e lint:

```
bash
npx tsc -b
```

## Para gerar build de produção

```
bash
npm run build
```

## Como visualizar o build de produção de forma local

```
bash
npm run preview
```

## Estrutura do projeto

```
src/
├── components/     → componentes React (Header, Modal, CartaoProduto, etc.)
├── data/           → products.json com os dados dos produtos
├── types/          → interfaces TypeScript
├── utils/          → funções auxiliares (formatação de preço)
└── styles/         → variáveis e estilos globais em Sass
```
