// EDITAR AQUI: Altere os textos, links e configurações do portal.

export const siteConfig = {
  author: "Seu Nome",
  contactUrl: "#", // Link para seu email ou página de contato
};

export const downloadConfig = {
  // URLs para os arquivos que serão baixados no ZIP
  files: [
    { name: "diario_do_sono.pdf", url: "/placeholders/diario_do_sono.pdf" },
    { name: "planner_semanal.pdf", url: "/placeholders/planner_semanal.pdf" },
    { name: "calendario_14_dias.pdf", url: "/placeholders/calendario_14_dias.pdf" },
  ],
  zipFileName: "SonoEmPratica_Recursos.zip",
};

export const tabsConfig = [
  { value: "start", title: "Comece Aqui" },
  { value: "sos", title: "Volta pro Sono (SOS)" },
  { value: "routine", title: "Rotina Noturna" },
  { value: "essentials", title: "Café, Telas e Luz" },
  { value: "tools", title: "Ferramentas e Planners" },
  { value: "travel", title: "Viagem/Jet Lag" },
  { value: "faq", title: "Perguntas Rápidas" },
  { value: "ai-tip", title: "Dica Personalizada" },
];

export const startHereContent = {
  title: "O Ponto de Partida Para Noites Melhores",
  description: "A insônia é um sintoma, não uma sentença. Estes são os primeiros passos para recuperar o controle das suas noites. Comece com calma e consistência.",
  cards: [
    {
      title: "Resumo de 1 Página",
      description: "O essencial da higiene do sono em uma única folha. Imprima e cole na porta do quarto.",
      actions: [{ label: "Ler em 1 min" }, { label: "Aplicar agora" }],
    },
    {
      title: "Primeiras 48 Horas",
      description: "Um plano de ação imediato para suas próximas duas noites. Foco em estabilizar seu relógio biológico.",
      actions: [{ label: "Checklist" }, { label: "Aplicar agora" }],
    },
  ],
  checklist: {
    title: "Checklist Noite em 5 Passos",
    items: [
      { id: "start-chk-1", label: "Quarto escuro e fresco (18-21°C)" },
      { id: "start-chk-2", label: "Zero telas 60 min antes de deitar" },
      { id: "start-chk-3", label: "Desacelerar com leitura ou música" },
      { id: "start-chk-4", label: "Não 'tentar' dormir, apenas descansar" },
      { id: "start-chk-5", label: "Levantar se não dormir em 20 min" },
    ],
  },
};

export const sosContent = {
  title: "Acordou no Meio da Noite? Siga a Rota Expressa.",
  description: "São 3 da manhã e você está de olhos abertos. Respire fundo. Sem pânico. Siga este guia rápido para voltar a adormecer.",
  flowchart: [
    { step: 1, title: "Estou ansioso?", decision: "Sim: Técnica de respiração. Não: Próximo passo." },
    { step: 2, title: "Estou na cama há >20min?", decision: "Sim: Levante-se. Não: Mude de posição." },
    { step: 3, title: "Preciso de um reset?", decision: "Sim: Leia algo chato. Não: Volte a tentar descansar." },
  ],
  techniques: [
    { title: "Técnica de 2 Minutos", description: "Respiração 4-7-8: Inspire por 4s, segure por 7s, expire por 8s. Repita 3x." },
    { title: "Técnica de 5 Minutos", description: "Relaxamento muscular progressivo. Contraia e relaxe cada grupo muscular, dos pés à cabeça." },
    { title: "Técnica de 10 Minutos", description: "Escreva suas preocupações em um papel. Deixe-as lá até amanhã." },
  ],
};

export const nightRoutineContent = {
  title: "Construa Sua Rampa de Desaceleração",
  description: "Uma rotina noturna consistente é o sinal mais claro que você pode dar ao seu cérebro de que é hora de dormir. Escolha um script e adapte-o.",
  routines: [
    {
      title: "Script de 15 Minutos (O Essencial)",
      content: "Chá sem cafeína + 10 min de leitura leve + Escovar os dentes no escuro."
    },
    {
      title: "Script de 30 Minutos (O Ideal)",
      content: "Banho morno + Preparar a roupa do dia seguinte + 15 min de alongamento ou meditação + Luzes baixas."
    },
    {
      title: "Script de 45 Minutos (O Completo)",
      content: "Inclui o de 30 min + Escrever no diário do sono + 15 min de hobby offline (ouvir música, desenhar)."
    },
    {
      title: "Versão para quem tem Crianças",
      content: "Após colocar as crianças na cama, reserve 15 minutos SÓ para você, mesmo que seja apenas sentar em silêncio no escuro."
    }
  ],
};

export const essentialsContent = {
    title: "Os Três Pilares: Cafeína, Telas e Luz",
    description: "Gerenciar estes três fatores pode resolver uma grande parte dos problemas de sono. Seja estratégico.",
    items: [
      {
        title: "Janela Segura de Cafeína",
        content: "Regra geral: evite qualquer cafeína após as 14h. A meia-vida da cafeína é de 5-6 horas. Um café às 16h significa que metade dele ainda está no seu sistema às 21h.",
      },
      {
        title: "Curfew Digital (Toque de Recolher)",
        content: "Defina um alarme para 'desligar as telas' 60-90 minutos antes de dormir. A luz azul inibe a produção de melatonina, o hormônio do sono. Ative o modo noturno em todos os dispositivos.",
      },
      {
        title: "Ajustes de Luz Ambiente",
        content: "Use lâmpadas de baixa intensidade e cor quente (amarelada) no quarto à noite. Durante o dia, exponha-se à luz solar direta por pelo menos 15 minutos pela manhã para regular seu relógio biológico.",
      },
    ]
};

export const toolsContent = {
  title: "Ferramentas Para Tornar o Sono Visível",
  description: "O que não é medido, não é melhorado. Use estas ferramentas simples para entender seus padrões e progredir.",
  tools: [
    { title: "Diário do Sono (2 min)", description: "Anote a hora que deitou, tempo para adormecer, despertares e hora de levantar. Um padrão vai emergir.", link: downloadConfig.files[0].url },
    { title: "Planner Semanal do Sono", description: "Planeje sua semana com horários de dormir e acordar consistentes, inclusive nos fins de semana.", link: downloadConfig.files[1].url },
    { title: "Calendário de 14 Dias", description: "Um desafio para consolidar sua nova rotina de sono.", link: downloadConfig.files[2].url },
  ]
};

export const travelContent = {
  title: "Viagem e Jet Lag: Minimize o Impacto",
  description: "Viajar não precisa destruir seu sono. Com um pouco de planejamento, você pode se adaptar mais rápido.",
  protocols: [
    {
      title: "Diferença de 3 Horas",
      content: "Nos 2 dias antes da viagem, ajuste sua hora de dormir e acordar 1 hora na direção do seu destino. No avião, ajuste seu relógio imediatamente."
    },
    {
      title: "Diferença de 6 Horas",
      content: "Comece a ajustar seu horário 3-4 dias antes. No destino, exponha-se à luz da manhã para adiantar seu relógio biológico (viagens para o leste) ou à luz do fim da tarde para atrasá-lo (viagens para o oeste)."
    },
    {
      title: "Diferença de 9+ Horas",
      content: "Planejamento é crucial. Considere uma parada no meio do caminho se possível. Use melatonina de baixa dose (0.5mg) de forma estratégica, com orientação profissional."
    }
  ]
};

export const faqContent = {
  title: "Perguntas Rápidas (e Respostas Curtas)",
  description: "Respostas diretas para as dúvidas mais comuns sobre insônia.",
  faqs: [
    { q: "Soneca é bom ou ruim?", a: "Para quem tem insônia, geralmente é ruim. Se precisar, que seja antes das 15h e por no máximo 20 minutos." },
    { q: "Exercício físico à noite atrapalha?", a: "Exercício intenso, sim. Alongamento ou ioga leve podem ajudar a relaxar." },
    { q: "Devo comer antes de dormir?", a: "Ir para a cama com fome pode atrapalhar. Opte por um lanche leve, como uma banana ou um punhado de amêndoas." },
    { q: "Álcool ajuda a dormir?", a: "Ajuda a apagar, mas fragmenta o sono na segunda metade da noite, piorando a qualidade." },
    { q: "Melatonina é a solução?", a: "Não é uma pílula mágica para dormir. É mais útil para ajustar o relógio biológico (jet lag) e deve ser usada com orientação." },
    { q: "Contar carneirinhos funciona?", a: "Pode aumentar a ansiedade por 'ter que' dormir. É melhor focar em uma visualização relaxante e agradável." },
  ]
};
