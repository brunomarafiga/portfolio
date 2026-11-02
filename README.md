# Bruno Marafiga — Portfólio

> Projetos em Gestão da Informação, dados, inteligência artificial, automação e desenvolvimento web.

[![GitHub](https://img.shields.io/badge/GitHub-brunomarafiga-181717?logo=github)](https://github.com/brunomarafiga)
[![UFPR](https://img.shields.io/badge/UFPR-Gestão%20da%20Informação-1976d2)](https://www.ufpr.br/)

## Sobre

Este repositório reúne o site do meu portfólio profissional e acadêmico. Sou estudante de Gestão da Informação na Universidade Federal do Paraná (UFPR) e desenvolvo soluções que conectam organização do conhecimento, análise de dados, IA e experiência do usuário.

O objetivo do portfólio é apresentar projetos reais, pesquisas e experimentos de forma clara, destacando o problema, as tecnologias e os resultados de cada trabalho.

## O site

O portfólio é uma página estática, responsiva e sem dependências de backend. Ele oferece:

- catálogo de projetos carregado a partir de `data/projects.json`;
- busca por título, descrição e tecnologias;
- filtros por categoria;
- layout adaptado para desktop e dispositivos móveis;
- deploy automatizado pelo GitHub Actions e GitHub Pages.

### Estrutura

```text
portfolio/
├── index.html                    # Página principal
├── styles.css                   # Layout, tema e responsividade
├── script.js                    # Busca, filtros e renderização dos cards
├── data/projects.json           # Catálogo estruturado de projetos
└── .github/workflows/pages.yml  # Deploy no GitHub Pages
```

## Projetos em destaque

### Aplicações e produtos

| Projeto | Descrição | Tecnologias |
| --- | --- | --- |
| [Cognita Hub](https://github.com/brunomarafiga/cognahub) | Plataforma educacional com quizzes e recursos de aprendizagem. | Vue, Nuxt 3, Tailwind CSS |
| [Gerador de Certificados UFPR](https://github.com/brunomarafiga/Criacao_certificados) | Geração de certificados em lote diretamente no navegador. | HTML, CSS, JavaScript |
| [Gestor de Horas Formativas](https://github.com/brunomarafiga/horas_formativas_UFPR) | Organização de certificados acadêmicos com apoio de IA. | PyScript, Gemini, WebAssembly |
| [Redesign do SiBi UFPR](https://github.com/brunomarafiga/Design-da-informa-o) | Protótipo de alta fidelidade com foco em acessibilidade. | HTML, CSS, JavaScript |

### Dados, automação e IA

| Projeto | Descrição | Tecnologias |
| --- | --- | --- |
| [Extração de relatórios MEC](https://github.com/brunomarafiga/CIAI) | Pipeline de extração e OCR de relatórios institucionais. | Python, PyMuPDF, OCR |
| [Ensalamento SIEPE](https://github.com/brunomarafiga/distribuicao_horarios_SIEPE) | Alocação otimizada de trabalhos em salas e sessões. | Python, Pandas, otimização |
| [Corpus textual para IA](https://github.com/brunomarafiga/extracao_poemas) | Coleta, limpeza e classificação temática de textos literários. | Python, NLP, web scraping |
| [Ebook Extractor VLM](https://github.com/brunomarafiga/Ebook-Extractor-VLM) | Processamento de imagens e recuperação de estrutura textual. | Playwright, PyTorch, GOT-OCR |

### Pesquisa

| Projeto | Tema |
| --- | --- |
| [Pesquisa sobre carga cognitiva](https://github.com/brunomarafiga/inteligencia-artificial) | Ambientes virtuais de aprendizagem e retenção de conhecimento. |
| [Projeto de TCC](https://github.com/brunomarafiga/projeto-tcc-gestao-informacao) | Arquitetura da informação e uso do Moodle UFPR. |
| [Mineração de dados](https://github.com/brunomarafiga/Minera-o-de-dados-2025-2) | Otimização bioinspirada e datasets acadêmicos. |

## Competências

- **Desenvolvimento:** Python, JavaScript, HTML, CSS, Vue.js e Nuxt 3.
- **Dados e IA:** Pandas, OCR, NLP, web scraping, classificação e automação.
- **Pesquisa:** revisão de literatura, LaTeX, pesquisa qualitativa e análise temática.
- **Produto e informação:** documentação, design da informação, acessibilidade e organização do conhecimento.

## Executar localmente

```bash
git clone https://github.com/brunomarafiga/portfolio.git
cd portfolio
python3 -m http.server 8000
```

Depois, acesse <http://localhost:8000>. Um servidor HTTP local é recomendado porque o navegador pode bloquear o carregamento de `data/projects.json` ao abrir `index.html` diretamente pelo sistema de arquivos.

## Publicação

O workflow em `.github/workflows/pages.yml` publica o conteúdo do repositório no GitHub Pages a cada atualização na branch `main`. Para ativar o site, abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.

## Contato

- [GitHub](https://github.com/brunomarafiga)
- [LinkedIn](https://www.linkedin.com/in/bruno-marafiga/)
- [ORCID](https://orcid.org/0009-0002-0806-7771)
- [E-mail](mailto:brunomarafiga@proton.me)

---

Mantido por **Bruno Marafiga** · UFPR · 2026
