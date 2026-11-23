# Guilherme Freitas | Portfólio Profissional

Portfólio responsivo desenvolvido com **React 18 + Vite 6**, React Router e Lucide. Conteúdo profissional baseado no currículo atualizado enviado em 22/11/2026 e links de projetos públicos do perfil `GuilhermeFrsz`.

## Requisitos

- Node.js 20 ou superior (recomendado LTS)
- npm

## Instalação e execução

```bash
npm install
npm run dev
```

Acesse o endereço exibido pelo Vite (em geral `http://localhost:5173`).

## Validar para produção

```bash
npm run build
npm run preview
```

Os arquivos preparados para hospedagem serão gerados em `dist/`.

## Seções

- Início: apresentação, retrato atualizado e projetos em destaque.
- Sobre: resumo profissional, competências e idiomas.
- Stack: tecnologias do currículo e experimentadas em projetos pessoais.
- Projetos: lista dinâmica via API pública do GitHub, com busca, filtro e ordenação; fallback local se necessário.
- Trajetória: três experiências do currículo revisado, quatro formações/capacitações, atividades complementares e 19 cursos/eventos.
- Contato: e-mail, WhatsApp, GitHub e LinkedIn.

## Onde alterar conteúdo

- `src/data.js`: perfil, experiências, formações, certificações, tecnologias e lista inicial de projetos.
- `public/images/guilherme-portrait.webp` (usada na página) e `guilherme-portrait.png` (cópia de maior qualidade): retrato com rosto proveniente da imagem fornecida e extensão suave para os ombros.
- `src/styles.css`: tema escuro, modo claro e estilos responsivos.
- `src/components/Layout.jsx`: menu, links sociais e persistência do tema no navegador.

**Privacidade:** o endereço residencial completo do currículo não foi incluído no site. O e-mail e WhatsApp foram configurados como contatos profissionais, conforme o documento enviado.

**Formação atualizada:** o currículo mais recente apresenta a graduação em Análise e Desenvolvimento de Sistemas como concluída em junho/2026, e a previsão de conclusão de Direito como dezembro/2028. A capacitação Fullstack do Iteam (372h; previsão 12/02/2027) foi mantida por solicitação anterior do titular.

**Nota de consistência documental:** no currículo atualizado, a seção de experiência profissional atribui por engano o estágio de Direito à organização "Centro de Formação Inspire Rebeca, Governo Federal e Google", mas o resumo profissional o identifica explicitamente como estágio no MPRR. O site segue a identificação principal (MPRR) e não reproduz a instituição aparentemente deslocada. Confirme essa linha no próprio currículo para consistência documental.

## Publicação

### Netlify / Cloudflare Pages

- Build: `npm run build`
- Diretório: `dist`
- O arquivo `public/_redirects` já permite abrir diretamente rotas internas da SPA.

### Vercel

- Preset: Vite
- Build: `npm run build`
- Diretório: `dist`
- `vercel.json` contém rewrite para `index.html` nas rotas do React Router.

### GitHub Pages

Este projeto utiliza `BrowserRouter`. Para publicar sob um subdiretório como `/meu-portfolio/`, é preciso definir `VITE_BASE_PATH=/meu-portfolio/` durante o build **e** assegurar um fallback de rotas na hospedagem. O GitHub Pages não oferece rewrites de SPA por padrão; para um deploy sem configuração extra, prefira Netlify, Cloudflare Pages ou Vercel.

## Boas práticas

- O tema é armazenado em `localStorage` e pode ser alternado também no celular.
- Os links externos abrem em nova aba com `rel="noopener noreferrer"`.
- As animações respeitam `prefers-reduced-motion`.
- Os dados do GitHub usam a API pública e podem ficar temporariamente indisponíveis por limite de taxa ou rede, mantendo os projetos de fallback.
- O site não coleta dados pessoais e não envia formulários silenciosamente.
