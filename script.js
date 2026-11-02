// script.js - Portfolio Engine for Bruno Marafiga

// Fallback embedded projects data to ensure seamless operation even if opened via file:// protocol
const EMBEDDED_PROJECTS = [
  {
    "id": "pesquisa-moodle",
    "title": "Arquitetura da InformaÃ§Ã£o & Moodle UFPR",
    "subtitle": "Projeto de TCC em GestÃ£o da InformaÃ§Ã£o (UFPR)",
    "category": "governanca",
    "categoryLabel": "Pesquisa & TCC",
    "description": "Projeto de TCC sobre arquitetura da informaÃ§Ã£o, organizaÃ§Ã£o de conteÃºdos e experiÃªncia de uso no Moodle da UFPR.",
    "longDescription": "InvestigaÃ§Ã£o qualitativa sobre como discentes e docentes percebem a organizaÃ§Ã£o, navegaÃ§Ã£o e encontrabilidade de materiais didÃ¡ticos no Moodle UFPR. Articula conceitos de Arquitetura da InformaÃ§Ã£o, Teoria da Carga Cognitiva e Teoria Ator-Rede para propor um guia de diretrizes aplicadas aos ambientes virtuais de aprendizagem.",
    "tags": ["Arquitetura da InformaÃ§Ã£o", "Carga Cognitiva", "Moodle UFPR", "TCC", "LaTeX"],
    "github": "https://github.com/brunomarafiga/pesquisa-moodle-arquitetura-informacao",
    "demo": null,
    "featured": true,
    "icon": "graduation-cap"
  },
  {
    "id": "carga-cognitiva-avas",
    "title": "Carga Cognitiva em Ambientes Virtuais",
    "subtitle": "Artigo CientÃ­fico â€¢ Mestrado Profissional em CiÃªncia de Dados",
    "category": "data-ai",
    "categoryLabel": "Pesquisa & IA",
    "description": "Pesquisa acadÃªmica sobre carga cognitiva, usabilidade e retenÃ§Ã£o de conhecimento em ambientes virtuais de aprendizagem.",
    "longDescription": "RevisÃ£o sistemÃ¡tica e sÃ­ntese de evidÃªncias empÃ­ricas e biomÃ©tricas (eye-tracking, GSR e testes de desempenho) investigando como a sobrecarga cognitiva extrÃ­nseca afeta negativamente a retenÃ§Ã£o de conhecimento no ensino superior. Inclui pipeline com validaÃ§Ã£o de esquema JSON para extraÃ§Ã£o de evidÃªncias.",
    "tags": ["Carga Mental", "AVAs", "CiÃªncia de Dados", "Rayyan", "LaTeX"],
    "github": "https://github.com/brunomarafiga/carga-cognitiva-ambientes-virtuais",
    "demo": null,
    "featured": true,
    "icon": "brain"
  },
  {
    "id": "horas-formativas",
    "title": "Gestor Inteligente de Horas Formativas",
    "subtitle": "IA Multimodal Client-Side para ValidaÃ§Ã£o Curricular UFPR",
    "category": "automacao",
    "categoryLabel": "AutomaÃ§Ã£o & IA",
    "description": "Ferramenta web gratuita para alunos da UFPR organizarem e contabilizarem seus certificados de Atividades Formativas usando InteligÃªncia Artificial (Google Gemini).",
    "longDescription": "Desenvolvido para eliminar o cÃ¡lculo manual de horas complementares dos alunos da UFPR. Os certificados em PDF sÃ£o lidos via PyScript (Python no navegador via WebAssembly) e analisados pelo modelo multimodal Gemini, enquadrando automaticamente as atividades nas categorias oficiais e calculando limites de integralizaÃ§Ã£o com 100% de privacidade local (LGPD).",
    "tags": ["PyScript", "Google Gemini", "WebAssembly", "Python", "UFPR"],
    "github": "https://github.com/brunomarafiga/gestor-horas-formativas-ufpr",
    "demo": "https://brunomarafiga.github.io/gestor-horas-formativas-ufpr/",
    "featured": true,
    "icon": "sparkles"
  },
  {
    "id": "certificados-pva",
    "title": "Gerador de Certificados UFPR (PVA)",
    "subtitle": "EmissÃ£o RÃ¡pida em Lote no Navegador sem Servidor",
    "category": "automacao",
    "categoryLabel": "AutomaÃ§Ã£o & IA",
    "description": "AplicaÃ§Ã£o web para gerar certificados em lote a partir de planilhas, diretamente no navegador e sem necessidade de instalaÃ§Ã£o.",
    "longDescription": "ReformulaÃ§Ã£o completa de script Python clÃ¡ssico para ambiente web moderno. Renderiza certificados oficiais em alta resoluÃ§Ã£o utilizando HTML5 Canvas e SheetJS, processando dezenas de certificados em lote em segundos com total privacidade.",
    "tags": ["JavaScript", "HTML5 Canvas", "SheetJS", "UFPR PVA", "Privacidade"],
    "github": "https://github.com/brunomarafiga/gerador-certificados-ufpr",
    "demo": "https://brunomarafiga.github.io/gerador-certificados-ufpr/",
    "featured": true,
    "icon": "award"
  },
  {
    "id": "ensalamento-siepe",
    "title": "Ensalamento Automatizado SIEPE UFPR",
    "subtitle": "OtimizaÃ§Ã£o CombinatÃ³ria de HorÃ¡rios e Salas",
    "category": "automacao",
    "categoryLabel": "AutomaÃ§Ã£o & IA",
    "description": "Algoritmo em Python para distribuir trabalhos do SIEPE em salas e sessÃµes, respeitando capacidade, Ã¡reas temÃ¡ticas e conflitos de horÃ¡rio.",
    "longDescription": "Processa a base de dados de trabalhos aprovados no evento anual da UFPR e aplica regras heurÃ­sticas de negÃ³cio: agrupamento por afinidade temÃ¡tica e prevenÃ§Ã£o rigorosa de choques de horÃ¡rio para orientadores e avaliadores.",
    "tags": ["Python", "OtimizaÃ§Ã£o CombinatÃ³ria", "Pandas", "LogÃ­stica UniversitÃ¡ria"],
    "github": "https://github.com/brunomarafiga/ensalamento-siepe",
    "demo": null,
    "featured": false,
    "icon": "calendar"
  },
  {
    "id": "gestao-documental",
    "title": "GestÃ£o Documental & Conformidade MEC",
    "subtitle": "Manual de Requisitos e FormulÃ¡rio para PrÃ³-reitorias",
    "category": "governanca",
    "categoryLabel": "GovernanÃ§a & LGPD",
    "description": "Modelos e orientaÃ§Ãµes para coleta, organizaÃ§Ã£o, padronizaÃ§Ã£o e gestÃ£o documental da PrÃ³-Reitoria e SuperintendÃªncia.",
    "longDescription": "EstruturaÃ§Ã£o taxonÃ´mica e procedural desenvolvida para orientar PrÃ³-reitorias e SuperintendÃªncias da UFPR na coleta e organizaÃ§Ã£o de atos administrativos, portarias e relatÃ³rios de gestÃ£o, com diretrizes de minimizaÃ§Ã£o e conformidade com a LGPD e SINAES/MEC.",
    "tags": ["GovernanÃ§a da InformaÃ§Ã£o", "LGPD", "SINAES / MEC", "Arquitetura Documental"],
    "github": "https://github.com/brunomarafiga/gestao-documental-proreitoria-ufpr",
    "demo": null,
    "featured": false,
    "icon": "shield-check"
  },
  {
    "id": "extracao-relatorios-emec",
    "title": "ExtraÃ§Ã£o de RelatÃ³rios MEC & AnÃ¡lise Bardin",
    "subtitle": "MineraÃ§Ã£o de AvaliaÃ§Ãµes In Loco e AnÃ¡lise de ConteÃºdo",
    "category": "data-ai",
    "categoryLabel": "CiÃªncia de Dados & IA",
    "description": "RepositÃ³rios de scripts utilizados no CIAI da UFPR para extrair dados dos relatÃ³rios do MEC.",
    "longDescription": "SoluÃ§Ã£o institucional concebida para a Coordenadoria de Indicadores e AvaliaÃ§Ã£o Institucional (CIAI/UFPR). Converte dezenas de relatÃ³rios e-MEC nÃ£o estruturados em bases analÃ­ticas com classificaÃ§Ã£o semÃ¢ntica de fragilidades e potencialidades dos cursos de graduaÃ§Ã£o segundo a metodologia Bardin.",
    "tags": ["Python", "Regex", "Bardin NLP", "PDFPlumber", "GovernanÃ§a MEC"],
    "github": "https://github.com/brunomarafiga/extracao-relatorios-emec",
    "demo": null,
    "featured": false,
    "icon": "file-search"
  },
  {
    "id": "corpus-literario-ia",
    "title": "Corpus Textual & Scraping (OBIA/UFPR)",
    "subtitle": "Curadoria de Corpus Textual para Benchmarking de Embeddings",
    "category": "data-ai",
    "categoryLabel": "CiÃªncia de Dados & IA",
    "description": "Pipeline de web scraping e NLP para construÃ§Ã£o de corpus textual classificado â€” IniciaÃ§Ã£o CientÃ­fica OBIA/UFPR.",
    "longDescription": "Desenvolvido durante IniciaÃ§Ã£o CientÃ­fica (PIBIC) no ObservatÃ³rio Brasileiro de InteligÃªncia Artificial (OBIA/UFPR). O pipeline faz web scraping do Project Gutenberg, limpa metadados e estrutura um corpus temÃ¡tico validado estatisticamente para testes de representaÃ§Ã£o semÃ¢ntica.",
    "tags": ["Python", "NLP", "Web Scraping", "OBIA / UFPR", "Embeddings"],
    "github": "https://github.com/brunomarafiga/corpus-literario-ia",
    "demo": null,
    "featured": false,
    "icon": "book-open"
  },
  {
    "id": "minera-dados-bwo",
    "title": "MineraÃ§Ã£o Educacional & OtimizaÃ§Ã£o BWO",
    "subtitle": "SeleÃ§Ã£o HeurÃ­stica de Atributos com Black Widow Optimization",
    "category": "data-ai",
    "categoryLabel": "CiÃªncia de Dados & IA",
    "description": "ImplementaÃ§Ã£o do algoritmo bioinspirado Black Widow Optimization (BWO) para seleÃ§Ã£o de atributos preditivos de desempenho escolar em bases da UCI.",
    "longDescription": "Experimento acadÃªmico de Educational Data Mining (EDM) no curso de GestÃ£o da InformaÃ§Ã£o da UFPR. A meta-heurÃ­stica BWO otimiza a acurÃ¡cia de um classificador K-NN ao eliminar dimensÃµes ruidosas, reduzindo a taxa de erro de 26,8% para 15,9% na base de MatemÃ¡tica em formato WEKA ARFF.",
    "tags": ["Python", "BWO Metaheuristic", "Scikit-Learn", "WEKA ARFF", "Machine Learning"],
    "github": "https://github.com/brunomarafiga/otimizacao-bwo-mineracao-dados",
    "demo": null,
    "featured": false,
    "icon": "cpu"
  },
  {
    "id": "cognahub",
    "title": "Cognita Hub â€” Plataforma Gamificada",
    "subtitle": "Ambiente de Aprendizagem Reativo com Nuxt 3 e Vue 3",
    "category": "web-ui",
    "categoryLabel": "Web & UI/UX",
    "description": "Plataforma web interativa de aprendizado com quizzes gamificados â€” Disciplina de GestÃ£o de Projetos/UFPR.",
    "longDescription": "Desenvolvido na disciplina de GestÃ£o de Projetos da UFPR. Aplica boas prÃ¡ticas de desenvolvimento Ã¡gil de software e UX/UI reativa com Vue 3 Composition API, focando na autoavaliaÃ§Ã£o contÃ­nua de discentes.",
    "tags": ["Nuxt 3", "Vue.js 3", "Tailwind CSS", "GamificaÃ§Ã£o", "GestÃ£o de Projetos"],
    "github": "https://github.com/brunomarafiga/cognita-hub",
    "demo": null,
    "featured": false,
    "icon": "zap"
  },
  {
    "id": "redesign-sibi",
    "title": "Redesign do SiBi UFPR â€” Alta Fidelidade",
    "subtitle": "Estudo de Caso de Usabilidade e Acessibilidade Web (WCAG)",
    "category": "web-ui",
    "categoryLabel": "Web & UI/UX",
    "description": "Redesign de alta fidelidade do site do SiBi UFPR â€” Disciplina de Design da InformaÃ§Ã£o/UFPR.",
    "longDescription": "Projeto prÃ¡tico de Design da InformaÃ§Ã£o focado em eliminar a sobrecarga cognitiva do portal de bibliotecas da UFPR. Implementou hierarquia tipogrÃ¡fica clara, contraste acessÃ­vel WCAG 2.1 AA e demo no GitHub Pages.",
    "tags": ["Design da InformaÃ§Ã£o", "UI/UX", "Acessibilidade WCAG", "GitHub Pages", "HTML/CSS"],
    "github": "https://github.com/brunomarafiga/redesign-sibi-ufpr",
    "demo": "https://brunomarafiga.github.io/redesign-sibi-ufpr/",
    "featured": false,
    "icon": "layout"
  },
  {
    "id": "gestao-conhecimento",
    "title": "Plataforma de GestÃ£o do Conhecimento",
    "subtitle": "Hub de Curadoria EpistÃªmica e Fontes Especializadas",
    "category": "governanca",
    "categoryLabel": "GovernanÃ§a & LGPD",
    "description": "RepositÃ³rio interativo com curadoria de livros, podcasts, canais audiovisuais e portais cientÃ­ficos para estudantes de GestÃ£o da InformaÃ§Ã£o.",
    "longDescription": "AplicaÃ§Ã£o web desacoplada baseada em Alpine.js e Materialize CSS que implementa na prÃ¡tica princÃ­pios de recuperaÃ§Ã£o de informaÃ§Ã£o e taxonomia para compartilhamento de conhecimento em CiÃªncia da InformaÃ§Ã£o.",
    "tags": ["Alpine.js", "Materialize CSS", "Taxonomias", "GestÃ£o do Conhecimento", "GI UFPR"],
    "github": "https://github.com/brunomarafiga/gestao-conhecimento",
    "demo": null,
    "featured": false,
    "icon": "share-2"
  },
  {
    "id": "simulado-sociais",
    "title": "Exame Simulado de Humanidades & Sociais",
    "subtitle": "Plataforma de AvaliaÃ§Ã£o Formativa com 100 QuestÃµes Classificadas",
    "category": "web-ui",
    "categoryLabel": "Web & UI/UX",
    "description": "Simulador interativo de provas acadÃªmicas com cronÃ´metro regressivo, 7 subÃ¡reas das ciÃªncias humanas e mÃ©tricas detalhadas de desempenho.",
    "longDescription": "AplicaÃ§Ã£o web desenvolvida em Vanilla JavaScript contendo 100 questÃµes densas de Antropologia, Sociologia, CiÃªncia PolÃ­tica, Economia e Epistemologia, com gabarito justificado e estatÃ­sticas instantÃ¢neas.",
    "tags": ["Vanilla JavaScript", "CSS3 Moderno", "AvaliaÃ§Ã£o Formativa", "CiÃªncias Sociais"],
    "github": "https://github.com/brunomarafiga/teste-sociais",
    "demo": null,
    "featured": false,
    "icon": "check-circle"
  }
]
;

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
        <p class="text-slate-400 text-sm font-medium">Nenhum projeto encontrado para os critÃ©rios pesquisados.</p>
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
              ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="p-1.5 text-slate-400 hover:text-cyan-400 transition" title="Abrir DemonstraÃ§Ã£o"><i data-lucide="external-link" class="w-4 h-4"></i></a>` : ''}
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
      ${project.demo ? '<span>â€¢</span><span class="text-emerald-400 font-semibold">Demo DisponÃ­vel</span>' : ''}
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
          <span>Acessar DemonstraÃ§Ã£o Web</span>
        </a>
      ` : ''}
      
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition">
          <i data-lucide="github" class="w-4 h-4"></i>
          <span>RepositÃ³rio no GitHub</span>
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

