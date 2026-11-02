/**
 * Conteúdo centralizado do portfólio de João Lucas Pardinho dos Santos.
 * Todos os textos, dados pessoais, projetos e decisões de design ficam reunidos aqui
 * para facilitar qualquer edição futura.
 */

export const personalInfo = {
  name: "João Lucas Pardinho dos Santos",
  shortName: "João Lucas",
  role: "Estudante de Tecnologia da Informação",
  heroSubtitle: "Estudante de TI. Front-end, landing pages e sites que funcionam.",
  age: 18,
  city: "Vinhedo",
  state: "SP",
  location: "Vinhedo - São Paulo",
  email: "joaopardinho42@gmail.com",
  github: "https://github.com/42201-maker",
  photo: "/assets/foto-joao.jpg",
  status: "Disponível para estágio ou vaga júnior",

  presentation:
    "Meu interesse por TI começou por indicação de um colega; desenvolvi grande afinidade pela área e me apaixonei pelas possibilidades da tecnologia. Tenho especial interesse em Front-end, principalmente na criação de landing pages e sites funcionais que ajudem empresas que ainda não contam com essas soluções digitais.",

  education: {
    course: "Ensino Médio Técnico em Informática",
    status: "Concluído",
    description:
      "Formação com foco prático em lógica de programação, desenvolvimento web, estruturas de bancos de dados relacionais e modelagem de sistemas.",
  },

  skills: [
    { name: "HTML", category: "Front-end", level: "Avançado", highlight: true },
    { name: "CSS", category: "Front-end", level: "Avançado", highlight: true },
    { name: "JavaScript", category: "Linguagem", level: "Avançado", highlight: true },
    { name: "React", category: "Front-end", level: "Intermediário", highlight: true },
    { name: "Node.js", category: "Back-end", level: "Intermediário", highlight: true },
    { name: "PostgreSQL", category: "Banco de dados", level: "Intermediário", highlight: true },
    { name: "Git", category: "Ferramenta", level: "Intermediário", highlight: true },
    { name: "Figma", category: "Design UI", level: "Intermediário", highlight: true },
  ],

  experience:
    "Ainda não possuo experiência profissional formal; estou em busca de uma oportunidade para desenvolver minhas habilidades.",

  objective:
    "Conquistar minha primeira oportunidade em TI, por meio de estágio ou vaga de desenvolvedor, contribuindo com dedicação e disposição para aprender.",
};

export const projects = [
  {
    id: "scout-live",
    slug: "scout-live",
    number: "01",
    title: "Scout Live",
    subtitle: "Plataforma de estatísticas e scout para voleibol competitivo",
    category: "Aplicação Web / Esportiva",
    shortDescription:
      "Feito para o clube Hípica de Campinas (SP), para apoiar o time de voleibol: registra e analisa dados durante as partidas e depois os transforma em gráficos de desempenho.",
    fullDescription:
      "O Scout Live foi desenvolvido sob medida para a comissão técnica e comissão de voleibol da Sociedade Hípica de Campinas (SP). A aplicação permite o acompanhamento lance a lance de cada fundamento durante as partidas (saques, recepções, ataques, bloqueios e levantamentos) e transforma esses registros em gráficos e relatórios consolidados de rendimento para tomadas de decisão táticas imediatas.",
    clientOrContext: "Sociedade Hípica de Campinas (SP) — Time de Voleibol",
    liveUrl: "https://scout-voleibol-tcc.vercel.app/",
    accentColor: "#F5C518",
    accentText: "#000",
    secondaryAccent: "#1A5DC8",
    techStack: {
      frontend: "React, Vite, CSS e JavaScript",
      backend: "Node.js, Express e JavaScript",
      database: "PostgreSQL e Supabase",
    },
    technologies: ["React", "Vite", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL", "Supabase"],
    coverImage: "/assets/scout-live-01-landing.png",
    gallery: [
      {
        src: "/assets/scout-live-01-landing.png",
        alt: "Página inicial do Scout Live com chamada para acompanhamento em tempo real",
        caption: "Tela inicial: apresentação do sistema e atalho para início imediato do scout.",
      },
      {
        src: "/assets/scout-live-02-menu.png",
        alt: "Menu principal de navegação do Scout Live com opções de partidas e relatórios",
        caption: "Navegação estruturada: painel de controle com acesso a jogos, equipes e histórico.",
      },
      {
        src: "/assets/scout-live-03-scout-da-partida.png",
        alt: "Interface de scout ao vivo com botões rápidos de fundamentos de vôlei",
        caption: "Scout em tempo real: botões com alta usabilidade para pontuação de acertos e erros.",
      },
      {
        src: "/assets/scout-live-04-jogos-graficos.png",
        alt: "Painel de gráficos e métricas de rendimento do time por fundamento",
        caption: "Gráficos de rendimento: visualização clara da eficiência de cada fundamento da partida.",
      },
      {
        src: "/assets/scout-live-05-atletas.png",
        alt: "Listagem e acompanhamento das métricas individuais dos atletas",
        caption: "Visão dos atletas: análise individual de aproveitamento e evolução no campeonato.",
      },
    ],
  },
  {
    id: "setor-de-provas",
    slug: "setor-de-provas",
    number: "02",
    title: "Setor de Provas RDS",
    subtitle: "Fluxo digital de validação e controle de impressões de avaliações",
    category: "Gestão Escolar / Operacional",
    shortDescription:
      "Complementa o setor de provas do Colégio Raphael Di Santo, facilitando o trabalho dos professores e da equipe e agilizando a identificação e correção de erros antes da impressão das avaliações.",
    fullDescription:
      "Criado para suprir os gargalos do fluxo pedagógico do Colégio Raphael Di Santo, o sistema digitaliza o recebimento, a revisão técnica e o agendamento de impressão das provas escolares. A ferramenta conecta professores e coordenadores em um fluxo único de conferência, reduzindo desperdício de papel e garantindo que inconsistências sejam sanadas antes que o material seja rodado nas impressoras.",
    clientOrContext: "Colégio Raphael Di Santo (RDS)",
    liveUrl: "https://setor-prova-front.vercel.app",
    accentColor: "#4F46E5",
    accentText: "#fff",
    secondaryAccent: "#818CF8",
    techStack: {
      frontend: "HTML5, CSS3 e JavaScript",
      backend: "Node.js e Express",
      database: "MongoDB Atlas e Mongoose 8",
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "MongoDB Atlas", "Mongoose 8"],
    coverImage: "/assets/setor-provas-01-painel.png",
    gallery: [
      {
        src: "/assets/setor-provas-01-painel.png",
        alt: "Painel de controle do Setor de Provas RDS com status de avaliações",
        caption: "Painel central: visão rápida das provas em revisão, aprovadas e na fila de impressão.",
      },
      {
        src: "/assets/setor-provas-02-catalogo.png",
        alt: "Catálogo de avaliações escolares filtradas por matéria e série",
        caption: "Catálogo organizado: busca e filtragem dinâmica de provas por disciplina e período.",
      },
      {
        src: "/assets/setor-provas-03-cadastrar-prova.png",
        alt: "Formulário de submissão de nova prova com especificações de impressão",
        caption: "Envio de provas: formulário para anexar arquivos e especificar tiragem e data de aplicação.",
      },
      {
        src: "/assets/setor-provas-04-relatorios.png",
        alt: "Relatórios de consumo e conferência de folhas impressas",
        caption: "Relatórios de consumo: auditoria de tiragens e registro de correções realizadas.",
      },
    ],
  },
  {
    id: "gerenciador-de-filmes",
    slug: "gerenciador-de-filmes",
    number: "03",
    title: "Gerenciador de Filmes",
    subtitle: "Catálogo pessoal e seguro de títulos com cache serverless",
    category: "Entretenimento / Catálogo",
    shortDescription:
      "Cadastra, salva, edita e organiza filmes favoritos, com pôsteres, gêneros e classificação indicativa, salvos no MongoDB. Cada conta tem um catálogo exclusivo e protegido.",
    fullDescription:
      "Uma aplicação web completa para amantes de cinema construída para gerenciar coleções pessoais de títulos. Permite catalogar filmes com pôsteres, notas, sinopses, gêneros e classificações indicativas. A arquitetura conta com isolamento por usuário e otimização de conexão com o MongoDB Atlas via cache de conexão dedicado para ambiente serverless.",
    clientOrContext: "Projeto Autoral de Portfólio Full-stack",
    liveUrl: "https://antigravity-front-1.vercel.app",
    accentColor: "#F59E0B",
    accentText: "#000",
    secondaryAccent: "#FBBF24",
    techStack: {
      frontend: "HTML, CSS e JavaScript puro",
      backend: "Node.js e Express 4",
      database: "MongoDB Atlas e Mongoose 8 (com conexão em cache para ambiente serverless)",
    },
    technologies: ["HTML5", "CSS3", "JavaScript Puro", "Node.js", "Express 4", "MongoDB Atlas", "Mongoose 8", "Serverless Cache"],
    coverImage: "/assets/gerenciador-filmes-01-catalogo.png",
    gallery: [
      {
        src: "/assets/gerenciador-filmes-01-catalogo.png",
        alt: "Catálogo de filmes em grade de cards com pôsteres e notas",
        caption: "Vitrine de filmes: cartazes, títulos e badges de gênero organizados em grid responsivo.",
      },
      {
        src: "/assets/gerenciador-filmes-02-cadastrar-filme.png",
        alt: "Modal de cadastro e edição de títulos cinematográficos",
        caption: "Formulário de cadastro: inserção rápida de URL de pôster, nota, gênero e sinopse.",
      },
    ],
  },
];

