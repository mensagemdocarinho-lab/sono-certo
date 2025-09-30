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
  { value: "sos-guide", title: "Guia Rápido SOS" },
  { value: "fast-sleep", title: "Pegar no Sono Rápido" },
  { value: "anxiety-program", title: "Programa 7 Dias" },
  { value: "natural-teas", title: "Chás Naturais" },
  { value: "natural-remedies", title: "Remédios Naturais" },
  { value: "digital-curfew", title: "Curfew Digital" },
  { value: "skin-recovery", title: "Pele e Recuperação" },
  { value: "ai-tip", title: "Guia Prático IA" },
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
  title: "Guia Rápido: Acordou no Meio da Noite? 3 Passos",
  description: "São 3 da manhã, e os pensamentos não param. Respire. Sem pânico. Siga estes 3 passos para retomar a calma e voltar a dormir.",
  flowchart: [
    { step: 1, title: "Avalie a Ansiedade", decision: "Sua mente está acelerada? Se sim, foque em acalmar o sistema nervoso com a respiração 4-7-8. Se não, vá para o passo 2." },
    { step: 2, title: "A Regra dos 20 Minutos", decision: "Você está rolando na cama há mais de 20 minutos? Se sim, levante-se. Ir para outro cômodo quebra a associação entre 'cama' e 'frustração'." },
    { step: 3, title: "Atividade Monótona", decision: "Leia um livro físico (nada de telas!) sob uma luz fraca ou ouça um podcast relaxante. Volte para a cama apenas quando sentir o sono chegar de novo." },
  ],
  techniques: [
    { title: "Respiração 4-7-8", description: "Inspire pelo nariz por 4s, segure o ar por 7s, e expire LENTAMENTE pela boca por 8s. Repita 3 a 4 vezes." },
    { title: "Escaneamento Corporal", description: "Concentre-se em cada parte do seu corpo, dos pés à cabeça, sentindo o peso e o relaxamento de cada músculo. Não tente dormir, apenas sinta." },
    { title: "Diário de Preocupações", description: "Tenha um caderno ao lado da cama. Anote o que está te incomodando. Esvaziar a mente no papel pode trazer um alívio imediato." },
  ],
};

export const nightRoutineContent = {
  title: "Busque a Melhor Estratégia para Pegar no Sono em 5–10 Minutos",
  description: "O segredo não é 'tentar' dormir, mas sim criar as condições perfeitas para que o sono aconteça naturalmente. Teste estas estratégias.",
  routines: [
    {
      title: "O Banho Morno Estratégico",
      content: "Um banho morno 90 minutos antes de deitar ajuda a diminuir a temperatura corporal, um gatilho biológico para o sono. Duração: 10-15 minutos."
    },
    {
      title: "A Técnica do 'Pôr do Sol' Interno",
      content: "Diminua as luzes da casa 1-2 horas antes de dormir. Use abajures com luz amarelada. Isso sinaliza ao seu cérebro que a noite está chegando."
    },
    {
      title: "Alongamento Leve ou Yoga Restaurativa",
      content: "5-10 minutos de alongamentos suaves que liberam a tensão do dia, focando em pescoço, ombros e costas. Procure por 'yoga para dormir' online."
    },
    {
      title: "Leitura Offline e Monótona",
      content: "Escolha um livro que não seja muito estimulante. O objetivo é cansar a mente, não se envolver em uma trama complexa. Biografias ou livros técnicos são ótimos."
    }
  ],
};

export const essentialsContent = {
    title: "Curfew Digital e Café Consciente: Controle de Telas e Cafeína",
    description: "Dois dos maiores vilões do sono moderno. Aprenda a gerenciá-los com regras simples e eficazes para proteger sua noite.",
    items: [
      {
        title: "O Toque de Recolher Digital",
        content: "Estabeleça um 'curfew' para todas as telas (celular, TV, tablet) 90 minutos antes de dormir. A luz azul emitida por eles bloqueia a melatonina. Coloque o celular para carregar longe da cama.",
      },
      {
        title: "A Regra das 8 Horas para a Cafeína",
        content: "A cafeína pode ficar no seu sistema por mais de 8 horas. Para um sono ideal, evite qualquer fonte de cafeína (café, chá preto/verde, refrigerantes, chocolate) após as 14h.",
      },
      {
        title: "O Ritual da Luz",
        content: "Exponha-se à luz solar por 15 minutos logo ao acordar. Isso 'liga' seu relógio biológico. À noite, faça o oposto: use luzes fracas e amareladas para 'desligá-lo'.",
      },
    ]
};

export const toolsContent = {
  title: "Remédios Naturais para o Sono: Tradições do Mundo",
  description: "Culturas ao redor do mundo usam remédios naturais há séculos. Explore algumas dessas tradições para encontrar o que funciona para você.",
  tools: [
    { title: "Ashwagandha (Índia)", description: "Uma erva adaptogênica usada na medicina Ayurveda para reduzir o estresse e a ansiedade, preparando o corpo para o descanso. (Consulte um profissional).", link: downloadConfig.files[0].url },
    { title: "Valeriana (Europa)", description: "A raiz de valeriana é um sedativo suave tradicionalmente usado para tratar a insônia e a ansiedade. Conhecida por seu cheiro forte.", link: downloadConfig.files[1].url },
    { title: "Leite Dourado (Golden Milk)", description: "Uma bebida quente à base de leite (ou leite vegetal), açafrão, canela e gengibre. Suas propriedades anti-inflamatórias ajudam a relaxar o corpo.", link: downloadConfig.files[2].url },
  ]
};

export const travelContent = {
  title: "Programa de 7 Dias para Aliviar a Ansiedade e Dormir Melhor",
  description: "Siga este programa passo a passo para acalmar a mente e treinar seu corpo para um sono mais profundo. A consistência é a chave.",
  protocols: [
    {
      title: "Dia 1-2: Observação",
      content: "Use o 'Diário do Sono' (na aba de ferramentas) para anotar seus padrões sem julgamento. A que horas você deita? Quanto tempo leva para dormir?"
    },
    {
      title: "Dia 3-4: A Rotina Mínima",
      content: "Implemente um 'curfew digital' de 30 minutos e faça 5 minutos de respiração consciente antes de deitar. Mantenha o mesmo horário de acordar."
    },
    {
      title: "Dia 5-7: Consolidação",
      content: "Aumente o curfew para 60 minutos, adicione um chá relaxante à sua rotina e tente a técnica de relaxamento muscular progressivo. Avalie os resultados."
    }
  ]
};

export const faqContent = {
  title: "Chás Naturais para um Sono Reparador",
  description: "Um ritual de chá quente e sem cafeína pode ser um poderoso sinal para o seu corpo de que é hora de desacelerar. Conheça as melhores opções.",
  faqs: [
    { q: "Camomila", a: "O clássico. Contém apigenina, um antioxidante que se liga a receptores no cérebro que podem promover o sono e reduzir a ansiedade." },
    { q: "Melissa (Erva-Cidreira)", a: "Conhecida por suas propriedades calmantes, ajuda a aliviar o estresse e a indigestão, dois inimigos do bom sono." },
    { q: "Passiflora (Flor de Maracujá)", a: "Frequentemente usada para tratar a ansiedade. Aumenta os níveis de GABA no cérebro, um neurotransmissor que promove o relaxamento." },
    { q: "Valeriana", a: "Um dos chás mais potentes para o sono, com um efeito sedativo suave. O sabor é forte e terroso, muitas vezes misturado com outras ervas." },
    { q: "Lavanda", a: "O aroma da lavanda por si só já é relaxante. Beber um chá de lavanda pode acalmar o sistema nervoso e melhorar a qualidade do sono." },
    { q: "Quando devo tomar o chá?", a: "Idealmente, 30 a 60 minutos antes de ir para a cama, como parte do seu ritual de relaxamento noturno." },
  ]
};

export const skinRecoveryContent = {
  title: "Pele e Recuperação: A Relação Vital Entre Sono e Aparência",
  description: "O 'sono da beleza' não é um mito. Entenda como noites bem dormidas são o tratamento de pele mais eficaz que existe e como otimizar esse processo.",
  items: [
    {
      title: "Reparo Celular e Colágeno",
      content: "Durante o sono profundo, o corpo aumenta a produção de colágeno e repara os danos celulares causados pelo estresse e raios UV. Menos sono = mais rugas e flacidez.",
    },
    {
      title: "O Hormônio do Crescimento (HGH)",
      content: "O pico de liberação do HGH acontece nas primeiras horas de sono. Este hormônio é essencial para a reparação dos tecidos e a manutenção de uma pele espessa e saudável.",
    },
    {
      title: "Redução do Cortisol (Hormônio do Estresse)",
      content: "A privação de sono aumenta os níveis de cortisol, que pode levar à inflamação e à quebra do colágeno, resultando em acne e envelhecimento precoce.",
    },
    {
      title: "Hidratação Noturna Otimizada",
      content: "O corpo reequilibra sua hidratação durante a noite. Beba um copo de água antes do seu ritual noturno e use um hidratante para selar a umidade na pele.",
    },
  ],
};
