# Nexts Fundamentos

Projeto desenvolvido com foco nos fundamentos do Next.js, estilização moderna e organização de componentes reutilizáveis.

## Figma do projeto
https://www.figma.com/community/file/1491107537598172161/landing-page-e-blog

## Tecnologias e Bibliotecas Principais

- **Next.js 15** – Framework React para SSR/SSG.
- **React 19** – Biblioteca principal de UI.
- **TypeScript** – Tipagem estática.
- **TailwindCSS** – Utilitário de CSS para estilização rápida.
- **tailwindcss-animate** – Animações utilitárias para Tailwind.
- **PostCSS** & **Autoprefixer** – Processamento e compatibilidade de CSS.
- **clsx** e **tailwind-merge** – Utilitários para composição de classes.
- **class-variance-authority** – Gerenciamento de variantes de componentes.
- **@radix-ui/react-slot** – Composição avançada de componentes.
- **lucide-react** – Ícones SVG modernos.
- **ESLint** – Linting e boas práticas.
- **shadcn/ui** – Padrão de componentes reutilizáveis (estrutura inspirada).

## Padrões de Projeto

- **Componentização**: Componentes organizados em pastas por domínio (`/components/header`, `/components/footer`, etc).
- **Layout Global**: Uso de um componente de layout para header/footer fixos.
- **Aliases de Imports**: Utilização de `@/` para facilitar imports (ver `tsconfig.json`).
- **Estilização utilitária**: TailwindCSS com customização de tema e fontes.
- **Tipagem Estrita**: TypeScript com configurações estritas.

## Setup do Projeto

1. **Clone o repositório**
   ```bash
   git clone <url-do-repo>
   cd nextjs-fundamentos-do-next
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   # ou
   pnpm install
   ```

3. **Rode o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse**
   ```
   http://localhost:3000
   ```

## Configurações Importantes

- **Tailwind**: Customizações em `tailwind.config.ts`.
- **PostCSS**: Plugins configurados em `postcss.config.js`.
- **TypeScript**: Paths customizados em `tsconfig.json`.
- **ESLint**: Configuração em `eslint.config.mjs`.
