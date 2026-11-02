<div align="center">

# 🌐 Portfólio Profissional — Bruno Marafiga

**Data Analyst | Governança da Informação & LGPD | Pesquisador OBIA/UFPR**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen?logo=github)](https://brunomarafiga.github.io/portfolio/)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/Engine-Vanilla%20JS%20ES6+-F7DF1E?logo=javascript&logoColor=black)](#)
[![Zero Build](https://img.shields.io/badge/Build-Serverless%20%2F%20Zero%20Config-blue)](#)

</div>

---

## 📌 Sobre Este Repositório

Este repositório contém o código-fonte do portfólio web interativo de **Bruno Marafiga**. A aplicação foi projetada para apresentar de forma dinâmica, elegante e acessível os projetos desenvolvidos em Ciência de Dados, Inteligência Artificial (OBIA/UFPR), Automações Acadêmicas e Governança Documental/LGPD na Universidade Federal do Paraná (UFPR).

---

## ✨ Recursos da Aplicação

- **⚡ Renderização Rápida & Zero Dependências de Build:** Funciona nativamente em qualquer navegador sem necessidade de Node.js ou bundlers complexos.
- **🔍 Busca Reativa em Tempo Real:** Filtra projetos instantaneamente por nome, descrição ou palavras-chave de tecnologia.
- **🏷️ Filtragem Facetada por Categoria:**
  - *Ciência de Dados & IA*
  - *Automação & Python*
  - *Governança & LGPD*
  - *Web & UI/UX*
- **📱 Responsividade & Acessibilidade:** Design fluido baseado em Tailwind CSS e ícones SVG via Lucide.
- **📑 Modal Informativo:** Detalhamento arquitetural e links diretos para o código no GitHub e demonstrações ao vivo (*Live Demos*).
- **🚀 Deploy Contínuo:** GitHub Actions pré-configurado em `.github/workflows/deploy.yml` para publicação automática no GitHub Pages.

---

## 📂 Estrutura de Arquivos

```text
├── index.html                   # Estrutura semântica e layout principal
├── styles.css                   # Customizações visuais, glow effects e animações
├── script.js                    # Motor reativo de busca, filtros e modais
├── data/
│   └── projects.json            # Base estruturada de metadados dos projetos
├── .github/
│   └── workflows/
│       └── deploy.yml           # Pipeline de publicação contínua no GitHub Pages
└── README.md                    # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

### Opção 1: Abrir diretamente
Basta abrir o arquivo `index.html` em seu navegador favorito (o script possui fallback com todos os dados embutidos caso o protocolo `file://` bloqueie requisições fetch locais).

### Opção 2: Servidor estático
```bash
# Com Python 3
python -m http.server 8080

# Com Node (npx)
npx serve .
```
Acesse `http://localhost:8080`.

---

<div align="center">
Desenvolvido por <strong>Bruno Marafiga</strong><br>
Gestão da Informação • Universidade Federal do Paraná (UFPR)
</div>
