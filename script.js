// script.js - Portfolio Engine for Bruno Marafiga

// Fallback embedded projects data to ensure seamless operation even if opened via file:// protocol
const EMBEDDED_PROJECTS = [
  {
    "id": "horas-formativas",
    "title": "Gestor Inteligente de Horas Formativas",
    "subtitle": "IA Multimodal Client-Side para Validação Curricular UFPR",
    "category": "automacao",
    "categoryLabel": "Automação & IA",
    "description": "Aplicação web serverless que processa certificados em PDF usando PyScript (Python no navegador) e a API Google Gemini para extrair e contabilizar horas formativas conforme a Resolução da UFPR.",
    "longDescription": "Desenvolvido para eliminar o cálculo manual de horas complementares dos alunos da UFPR. Os certificados em PDF são lidos via PyScript e analisados pelo modelo multimodal Gemini, enquadrando automaticamente as atividades nas categorias oficiais e calculando limites de integralização com 100% de privacidade local (LGPD).",
    "tags": ["PyScript", "Google Gemini", "WebAssembly", "Python", "UFPR"],
    "github": "https://github.com/brunomarafiga/horas_formativas_UFPR",
    "demo": "https://brunomarafiga.github.io/horas_formativas_UFPR/",
    "featured": true,
    "icon": "sparkles"
  },
  {
    "id": "minera-dados-bwo",
    "title": "Mineração Educacional & Otimização BWO",
    "subtitle": "Seleção Heurística de Atributos com Black Widow Optimization",
    "category": "data-ai",
    "categoryLabel": "Ciência de Dados & IA",
    "description": "Implementação do algoritmo bioinspirado Black Widow Optimization (BWO) para seleção de atributos preditivos de desempenho escolar em bases da UCI (Matemática e Português).",
    "longDescription": "Experimento acadêmico de Educational Data Mining (EDM) no curso de Gestão da Informação da UFPR. A meta-heurística BWO otimiza a acurácia de um classificador K-NN ao eliminar dimensões ruidosas, reduzindo a taxa de erro de 26,8% para 15,9% na base de Matemática em formato WEKA ARFF.",
    "tags": ["Python", "BWO Metaheuristic", "Scikit-Learn", "WEKA ARFF", "Machine Learning"],
    "github": "https://github.com/brunomarafiga/Minera-o-de-dados-2025-2",
    "demo": null,
    "featured": true,
    "icon": "cpu"
  },
  {
    "id": "extracao-poemas-obia",
    "title": "Pipeline de NLP & Scraping (OBIA/UFPR)",
    "subtitle": "Curadoria de Corpus Textual para Benchmarking de Embeddings",
    "category": "data-ai",
    "categoryLabel": "Ciência de Dados & IA",
    "description": "Pipeline automatizado de coleta, limpeza e validação de textos literários clássicos para avaliação de modelos de embeddings de inteligência artificial.",
    "longDescription": "Desenvolvido durante Iniciação Científica (PIBIC) no Observatório Brasileiro de Inteligência Artificial (OBIA/UFPR). O pipeline faz web scraping do Project Gutenberg, limpa metadados e estrutura um corpus temático validado estatisticamente para testes de representação semântica.",
    "tags": ["Python", "NLP", "Web Scraping", "OBIA / UFPR", "Embeddings"],
    "github": "https://github.com/brunomarafiga/extracao_poemas",
    "demo": null,
    "featured": true,
    "icon": "book-open"
  },
  {
    "id": "ciai-mec",
    "title": "CIAI — Extração de Relatórios MEC & Análise Bardin",
    "subtitle": "Mineração de Avaliações In Loco e Análise de Conteúdo",
    "category": "data-ai",
    "categoryLabel": "Ciência de Dados & IA",
    "description": "Extração estruturada de pareceres, notas e conceitos de relatórios e-MEC em PDF com análise de conteúdo textual baseada no método Laurence Bardin.",
    "longDescription": "Solução institucional concebida para a Coordenadoria de Indicadores e Avaliação Institucional (CIAI/UFPR). Converte dezenas de relatórios e-MEC não estruturados em bases analíticas com classificação semântica de fragilidades e potencialidades dos cursos de graduação.",
    "tags": ["Python", "Regex", "Bardin NLP", "PDFPlumber", "Governança MEC"],
    "github": "https://github.com/brunomarafiga/CIAI",
    "demo": null,
    "featured": true,
    "icon": "file-search"
  },
  {
    "id": "ensalamento-siepe",
    "title": "Ensalamento Automatizado SIEPE UFPR",
    "subtitle": "Algoritmo de Otimização Combinatória para Distribuição de Salas",
    "category": "automacao",
    "categoryLabel": "Automação & IA",
    "description": "Sistema em Python para alocação inteligente de horários e salas de apresentação da Semana Integrada de Ensino, Pesquisa e Extensão da UFPR sem choques.",
    "longDescription": "Processa a base de dados de trabalhos aprovados no evento anual da UFPR e aplica regras heurísticas de negócio: agrupamento por afinidade temática e prevenção rigorosa de choques de horário para orientadores e avaliadores.",
    "tags": ["Python", "Otimização Combinatória", "Pandas", "Logística Universitária"],
    "github": "https://github.com/brunomarafiga/distribuicao_horarios_SIEPE",
    "demo": null,
    "featured": false,
    "icon": "calendar"
  },
  {
    "id": "certificados-pva",
    "title": "Gerador de Certificados PVA UFPR",
    "subtitle": "Emissão Rápida em Lote no Navegador sem Servidor",
    "category": "automacao",
    "categoryLabel": "Automação & IA",
    "description": "Ferramenta web 100% offline para emissão de certificados acadêmicos do Programa de Voluntariado Acadêmico a partir de planilhas Excel.",
    "longDescription": "Reformulação completa de script Python clássico para ambiente web moderno. Renderiza certificados oficiais em alta resolução utilizando HTML5 Canvas e SheetJS, processando dezenas de certificados em segundos com total privacidade.",
    "tags": ["JavaScript", "HTML5 Canvas", "SheetJS", "UFPR PVA", "Privacidade"],
    "github": "https://github.com/brunomarafiga/Criacao_certificados",
    "demo": "https://brunomarafiga.github.io/Criacao_certificados/",
    "featured": false,
    "icon": "award"
  },
  {
    "id": "governanca-documental",
    "title": "Governança Documental & Conformidade MEC",
    "subtitle": "Manual de Requisitos e Formulário de Auditoria para Pró-reitorias",
    "category": "governanca",
    "categoryLabel": "Governança & LGPD",
    "description": "Arcabouço normativo de governança documental e checklists de conformidade para auditoria de acervos institucionais da UFPR frente ao SINAES/MEC e LGPD.",
    "longDescription": "Estruturação taxonômica e procedural desenvolvida para orientar Pró-reitorias e Superintendências da UFPR na coleta e organização de atos administrativos, portarias e relatórios de gestão, com diretrizes de minimização e conformidade com a LGPD.",
    "tags": ["Governança da Informação", "LGPD", "SINAES / MEC", "Arquitetura Documental"],
    "github": "https://github.com/brunomarafiga/documenta-o-proreitoria-e-superintendencia",
    "demo": null,
    "featured": false,
    "icon": "shield-check"
  },
  {
    "id": "gestao-conhecimento",
    "title": "Plataforma de Gestão do Conhecimento",
    "subtitle": "Hub de Curadoria Epistêmica e Fontes Especializadas",
    "category": "governanca",
    "categoryLabel": "Governança & LGPD",
    "description": "Repositório interativo com curadoria de livros, podcasts, canais audiovisuais e portais científicos para estudantes de Gestão da Informação.",
    "longDescription": "Aplicação web desacoplada baseada em Alpine.js e Materialize CSS que implementa na prática princípios de recuperação de informação e taxonomia para compartilhamento de conhecimento em Ciência da Informação.",
    "tags": ["Alpine.js", "Materialize CSS", "Taxonomias", "Gestão do Conhecimento", "GI UFPR"],
    "github": "https://github.com/brunomarafiga/gestao-conhecimento",
    "demo": null,
    "featured": false,
    "icon": "share-2"
  },
  {
    "id": "cognahub",
    "title": "Cognita Hub — Plataforma Gamificada",
    "subtitle": "Ambiente de Aprendizagem Reativo com Nuxt 3 e Vue 3",
    "category": "web-ui",
    "categoryLabel": "Web & UI/UX",
    "description": "Plataforma interativa de estudos com questionários gamificados e biblioteca curada, projetada com arquitetura modular em Nuxt 3.",
    "longDescription": "Desenvolvido na disciplina de Gestão de Projetos da UFPR. Aplica boas práticas de desenvolvimento ágil de software e UX/UI reativa com Vue 3 Composition API, focando na autoavaliação contínua de discentes.",
    "tags": ["Nuxt 3", "Vue.js 3", "Tailwind CSS", "Gamificação", "Gestão de Projetos"],
    "github": "https://github.com/brunomarafiga/cognahub",
    "demo": null,
    "featured": false,
    "icon": "zap"
  },
  {
    "id": "redesign-sibi",
    "title": "Redesign do SiBi UFPR — Alta Fidelidade",
    "subtitle": "Estudo de Caso de Usabilidade e Acessibilidade Web (WCAG)",
    "category": "web-ui",
    "categoryLabel": "Web & UI/UX",
    "description": "Reformulação completa da arquitetura da informação e interface do Sistema de Bibliotecas da UFPR com testes formais de acessibilidade.",
    "longDescription": "Projeto prático de Design da Informação focado em eliminar a sobrecarga cognitiva do portal de bibliotecas da UFPR. Implementou hierarquia tipográfica clara, contraste acessível WCAG 2.1 AA e demo no GitHub Pages.",
    "tags": ["Design da Informação", "UI/UX", "Acessibilidade WCAG", "GitHub Pages", "HTML/CSS"],
    "github": "https://github.com/brunomarafiga/Design-da-informacao",
    "demo": "https://brunomarafiga.github.io/Design-da-informa-o/",
    "featured": false,
    "icon": "layout"
  },
  {
    "id": "simulado-sociais",
    "title": "Exame Simulado de Humanidades & Sociais",
    "subtitle": "Plataforma de Avaliação Formativa com 100 Questões Classificadas",
    "category": "web-ui",
    "categoryLabel": "Web & UI/UX",
    "description": "Simulador interativo de provas acadêmicas com cronômetro regressivo, 7 subáreas das ciências humanas e métricas detalhadas de desempenho.",
    "longDescription": "Aplicação web desenvolvida em Vanilla JavaScript contendo 100 questões densas de Antropologia, Sociologia, Ciência Política, Economia e Epistemologia, com gabarito justificado e estatísticas instantâneas.",
    "tags": ["Vanilla JavaScript", "CSS3 Moderno", "Avaliação Formativa", "Ciências Sociais"],
    "github": "https://github.com/brunomarafiga/teste-sociais",
    "demo": null,
    "featured": false,
    "icon": "check-circle"
  }
];

let allProjects = [];
let currentFilter = 'all';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', async () => {
  // Try fetching external JSON, fallback to embedded data if running locally without server
  try {
    const res = await fetch('data/projects.json');
    if (res.ok) {
      allProjects = await res.json();
    } else {
      allProjects = EMBEDDED_PROJECTS;
    }
  } catch (e) {
    allProjects = EMBEDDED_PROJECTS;
  }

  initUI();
  renderProjects();
});

function initUI() {
  // Filter tabs click
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  // Search input
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  // Modal close handlers
  const modal = document.getElementById('projectModal');
  const closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => closeModal());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function renderProjects() {
  const grid = document.getElementById('projectGrid');
  if (!grid) return;

  const filtered = allProjects.filter(p => {
    const matchesFilter = currentFilter === 'all' || p.category === currentFilter;
    const matchesSearch = !currentSearch || 
      p.title.toLowerCase().includes(currentSearch) ||
      p.subtitle.toLowerCase().includes(currentSearch) ||
      p.description.toLowerCase().includes(currentSearch) ||
      p.tags.some(t => t.toLowerCase().includes(currentSearch));
    
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <i data-lucide="folder-search" class="w-12 h-12 text-slate-600 mx-auto mb-3"></i>
        <p class="text-slate-400 text-sm font-medium">Nenhum projeto encontrado para os critérios pesquisados.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition">Limpar Filtros</button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(p => {
    return `
      <div class="project-card flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800 cursor-pointer" onclick="openModal('${p.id}')">
        <div>
          <!-- Header info -->
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">${p.categoryLabel}</span>
            ${p.demo ? '<span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Live Demo</span>' : ''}
          </div>

          <h3 class="text-base font-bold text-white group-hover:text-blue-400 transition leading-snug mb-1">${p.title}</h3>
          <p class="text-xs text-slate-400 font-medium mb-3">${p.subtitle}</p>
          <p class="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">${p.description}</p>
        </div>

        <div>
          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.tags.slice(0, 3).map(tag => `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60">${tag}</span>`).join('')}
            ${p.tags.length > 3 ? `<span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-500">+${p.tags.length - 3}</span>` : ''}
          </div>

          <!-- Bottom links -->
          <div class="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-medium" onclick="event.stopPropagation()">
            <button onclick="openModal('${p.id}')" class="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition">
              <span>Ver Detalhes</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>
            <div class="flex items-center gap-2">
              ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-400 hover:text-white transition" title="Ver no GitHub"><i data-lucide="github" class="w-4 h-4"></i></a>` : ''}
              ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-400 hover:text-cyan-400 transition" title="Abrir Demonstração"><i data-lucide="external-link" class="w-4 h-4"></i></a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function openModal(projectId) {
  const project = allProjects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
      <span>${project.categoryLabel}</span>
      ${project.demo ? '<span>•</span><span class="text-emerald-400 font-semibold">Demo Disponível</span>' : ''}
    </div>
    
    <h3 class="text-xl sm:text-2xl font-bold text-white mb-1">${project.title}</h3>
    <p class="text-sm text-slate-400 font-medium mb-4">${project.subtitle}</p>

    <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5">
      <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${project.longDescription}</p>
    </div>

    <div class="mb-6">
      <h4 class="text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">Tecnologias & Metodologias</h4>
      <div class="flex flex-wrap gap-1.5">
        ${project.tags.map(t => `<span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700">${t}</span>`).join('')}
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
      ${project.demo ? `
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition shadow-md shadow-emerald-600/20">
          <i data-lucide="external-link" class="w-4 h-4"></i>
          <span>Acessar Demonstração Web</span>
        </a>
      ` : ''}
      
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition">
          <i data-lucide="github" class="w-4 h-4"></i>
          <span>Repositório no GitHub</span>
        </a>
      ` : ''}
    </div>
  `;

  modal.classList.add('show');
  lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.classList.remove('show');
}

function resetFilters() {
  currentFilter = 'all';
  currentSearch = '';
  const searchInput = document.getElementById('projectSearch');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
  });
  renderProjects();
}
