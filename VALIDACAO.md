# Validação técnica — atualização de currículo em 22/11/2026

## Alterações de conteúdo

- Perfil em `src/data.js` e apresentação das páginas atualizados a partir do novo currículo: graduado em Análise e Desenvolvimento de Sistemas (Estácio, junho/2026), graduando em Direito (Cathedral, previsão dezembro/2028), estagiário de Direito no MPRR (2026–atual).
- Experiência profissional reestruturada em três blocos conforme o currículo mais recente: estágio no MPRR, professor de informática (09/2024–12/2024) e programador Full Stack em startup acadêmica (02/2023–12/2023).
- Adicionadas competências jurídicas (Projudi, SEI, ECA, redação e minutas jurídicas, pesquisa jurisprudencial) em `Sobre`.
- Incluídas atividades complementares: soluções SaaS multi-tenant, liderança técnica e infraestrutura de TI.
- Tecnologias destacadas: React, TypeScript, PostgreSQL, Supabase, Laravel, Git e ferramentas citadas no currículo.
- Capacitação Programação Fullstack no Iteam/Boa Vista (372h; previsão 12/02/2027) mantida por solicitação anterior do titular, embora não conste do PDF atualizado.
- Foto, moldura com gradiente suave, modos claro/escuro, rotas, contatos e integração pública com GitHub preservados.

## Testes executados neste ambiente

- **47 verificações estáticas aprovadas** com `npm run validate` (rotas, arquivos, dados, contatos, foto e componentes).
- **16 arquivos JavaScript/JSX/MJS analisados**, sem erro de sintaxe, utilizando o parser TypeScript disponível no ambiente de validação.
- **241 nós de folha de estilos CSS analisados**, sem erro de parse, com `tinycss2`.
- ZIP criado e verificado quanto à integridade.

## Limitações

- `npm install --no-audit --no-fund --prefer-offline --fetch-retries=0` não concluiu: `EAI_AGAIN` ao resolver `registry.npmjs.org`. Por esse motivo, **não foi possível executar `npm run build`, `npm run dev` ou testes reais de navegação no browser**. Os testes estáticos não equivalem a um build validado.
- O site publicado e a conectividade com a API do GitHub não foram verificados nesta atualização.
- **Inconsistência no currículo:** no resumo a instituição do estágio é **MPRR**, mas no corpo da experiência aparece indevidamente o nome do Centro de Formação Inspire Rebeca. O site utilizou MPRR com base no resumo e no histórico informado pelo titular. Recomenda-se corrigir a linha do currículo.

## Teste local recomendado

```bash
npm install
npm run validate
npm run build
npm run dev
```

Verifique as páginas `/`, `/sobre`, `/stack`, `/projetos`, `/experiencia` e `/contato`, a alternância de tema, o menu mobile, os links externos e o layout em diferentes resoluções. Para validar a versão de produção, execute `npm run preview` após o build.

**Privacidade:** o endereço residencial exato não é publicado nem foi incluído o currículo em PDF no pacote.
