export const articles = [
  {
    slug: "0",
    category: "Sociedade & Economia",
    title: "Por que alimentos saudáveis ficaram tão caros?",
    subtitle:
      "Uma análise sobre oferta vs demanda, cultura wellness, logística e comportamento de consumo.",
    author: "Andressa Rocha",
    role: "Estudante de Economia",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
    content: [
      {
        type: "quote",
        text: "Eu como porque é barato, mas o que eu gosto mesmo é goiabada com queijo.",
        cite: "Macabéa, em “A Hora da Estrela”, 1985",
      },
      {
        type: "paragraph",
        text: "A frase dita pela célebre personagem nordestina de Clarice Lispector resume uma realidade que vem crescendo exponencialmente. Em um mundo marcado por uma das maiores contradições do desenvolvimento econômico moderno – no qual a produtividade agrícola e os avanços biotecnológicos atingem recordes históricos –, a escolha alimentar de um indivíduo vem deixando ser direcionada por seus desejos (seja por ter uma vida mais saudável ou porque sente vontade de consumir tal alimento) e passa a ser ditada por seu poder aquisitivo. Essa escolha é, portanto, limitada pela renda disponível. Comer, no Brasil contemporâneo, tornou-se um ato de restrição orçamentária.",
      },
      {
        type: "heading",
        text: "Ruptura das Cadeias Globais e os Choques de Oferta",
      },
      {
        type: "paragraph",
        text: "A priori, para obter uma compreensão real do motivo pelo qual aquela visita ao supermercado vem encarecendo, é fundamental analisar o contexto dos últimos anos no território brasileiro e internacional, sob a ótica dos choques exógenos de oferta. O grande divisor de águas continua sendo a pandemia da Covid-19 em 2020, que desestruturou cadeias globais de suprimentos. Em seguida, o cenário macroeconômico foi atingido por sucessivas crises de ordem geopolíticas e ambiental: a crise nacional de 2021, o conflito na Ucrânia em 2022 (o qual disparou o preço global de fertilizantes e commodities) e os severos extremos climáticos, como a tragédia das enchentes no Rio Grande do Sul em 2024.",
      },
      {
        type: "paragraph",
        text: "Diferente de indústrias que podem acelerar ou desacelerar suas máquinas conforme exige a demanda no mercado, a agricultura depende do tempo biológico de cultivo e das condições climáticas. Esses eventos meteorológicos e geopolíticos afetam diretamente a produção de alimentos agrícolas, cuja oferta apresenta baixa elasticidade-preço no curto prazo. Dessa forma, diante de uma quebra de safra, a curva de oferta se desloca abruptamente para a esquerda, forçando uma rápida escalada de preços que é repassada parcialmente ao consumidor final.",
      },
      {
        type: "figure",
        number: 1,
        src: "/figures/figura-1-ipca.png",
        caption:
          "Gráfico gerado em Python a partir de dados do IBGE/SIDRA (Tabela 7060 — Sistema Nacional de Índices de Preços ao Consumidor), variação mensal do IPCA para os itens hortaliças e verduras, frutas, panificados e alimentação fora do domicílio. Elaboração própria.",
      },
      {
        type: "heading",
        text: "A Fragilidade da Infraestrutura e o “Custo-Brasil” Logístico",
      },
      {
        type: "paragraph",
        text: "O alimento sai barato das fazendas e chega caro nas gôndolas dos supermercados e isso tem alguns motivos. Entre o campo e o consumidor final, existem fatores cruciais que impactam diretamente no preço das prateleiras, tais como impostos, armazenamento e, principalmente, a logística e juros alto.",
      },
      {
        type: "paragraph",
        text: "Primeiramente, o custo logístico atua como um imposto invisível sobre os produtos frescos. A disparada dos preços dos combustíveis e do frete – exemplificada pelo aumento de até 62% no frete agrícola registrado no Mato Grosso no início de 2025, de acordo com o Abralog – eleva drasticamente o custo de transporte de produtos perecíveis (hortaliças, legumes e frutas são os principais alimentos que sofrem alto índice de perda pós-colheita). Além disso, a política de desativação histórica dos estoques reguladores de alimentos (geridos pela Companhia Nacional de Abastecimento – Conab) reduziu de forma significativa o mecanismo estatal de amortecimento de preços, então, uma vez que o governo dispõe de capacidade limitada de intervenção por meio dos estoques públicos nos momentos de escassez, o mercado fica exposto à volatilidade climática e cambial.",
      },
      {
        type: "figure",
        number: 2,
        src: "/figures/figura-2-frete.png",
        caption:
          "Gráfico gerado em Python a partir de dados da CONAB (Companhia Nacional de Abastecimento), Portal de Informações Agropecuárias — série histórica de fretes por rota, valor médio nacional em R$ por tonelada-quilômetro. Elaboração própria.",
      },
      {
        type: "paragraph",
        text: "Outro ponto crucial de se explicitar é o impacto da política monetária. Sob uma Selic elevada, o crédito permanece caro, ocasionando em um adiamento de investimentos produtivos, como a compra de maquinários e a ampliação da produção. Adicionalmente, a valorização do dólar eleva os custos de produção interno ao encarecer os insumos dolarizados amplamente utilizados na agricultura (como fertilizantes químicos, pesticidas e maquinário). Esse processo faz com que o custo marginal seja pressionado, configurando o fenômeno conhecido como Transmissão Cambial.",
      },
      {
        type: "figure",
        number: 3,
        src: "/figures/figura-3-selic.png",
        caption:
          "Gráfico gerado em Python a partir de dados do Banco Central do Brasil (SGS, série 432, Meta Selic definida pelo Copom). Elaboração própria.",
      },
      {
        type: "heading",
        text: "‘Gourmetização’ do Consumo e o “Hype” Fitness",
      },
      {
        type: "paragraph",
        text: "Ademais, enquanto questões climáticas e de logística já são tradicionalmente mapeadas pelos produtores, nos últimos anos evidenciou-se um componente comportamental relevante: a ascensão da cultura ‘Wellness’ e a busca incessante por uma vida saudável. Impulsionado pelo forte apelo midiático e digital, as grandes corporações alimentícias rapidamente identificaram a emergência de um público-alvo disposto a pagar um prêmio de preço por produtos rotulados como saudável ou orgânicos. Esse comportamento desloca a curva de demanda para a direita, evidenciando que, no que tange à saúde e ao bem-estar, para esse público a questão financeira deixa de ser o fator decisivo, uma vez que, agora, deixa de ser uma questão financeira ou apenas de saúde, mas também de pertencimento a esse grupo que vem crescendo.",
      },
      {
        type: "paragraph",
        text: "Esse movimento, contudo, gera uma forte barreira econômica de entrada para as classes mais desfavorecidas economicamente. Em termos mais macroeconômicos, o rápido avanço dessa onda de demanda confronta-se com a rigidez de curto prazo da oferta de alimentos naturais. Essa situação gera um excesso de demanda que, diante da escassez imediata de estoques, força a elevação dos preços de mercado para um novo patamar de equilíbrio, atingindo o bolso dos consumidores brasileiros. Esse aumento de preços atua criando incentivos para uma expansão futura de oferta, mas inviabilizando o acesso democrático ao alimento saudável.",
      },
      {
        type: "heading",
        text: "Precarização Alimentar na Baixa Renda",
      },
      {
        type: "paragraph",
        text: "O impacto distributivo dessa dinâmica de preços é profundamente desigual. Na teoria microeconômica, a Lei de Engel estipula que a proporção do orçamento familiar destinada à alimentação diminui conforme a renda da família aumenta. Para as classes mais baixas, a alimentação consome quase todo o rendimento mensal e esse cenário se agrava mais em uma análise familiar, tornando-as extremamente vulneráveis à inflação de alimentos.",
      },
      {
        type: "paragraph",
        text: "Diante de uma renda disponível cada vez mais curta no fim do mês e de preços de produtos in natura cada vez mais salgados, ocorre uma substituição para alimentos de menor qualidade. As famílias economicamente vulneráveis são forçadas a substituir frutas, vegetais e carnes magras por alimentos ultraprocessados (ricos em açúcares, sódio e gorduras hidrogenadas), que são altamente calóricos, fáceis de armazenar e de custo significativamente menor graças à escala industrial de produção. A consequência direta é a consolidação de uma barreira social silenciosa: as classes mais ricas compram saúde através da nutrição, enquanto as classes mais pobres compram apenas calorias baratas para saciar a fome imediata, perpetuando o ciclo de insegurança alimentar, obesidade e doenças crônicas.",
      },
      {
        type: "paragraph",
        text: "Em suma, a inflação dos alimentos saudáveis no Brasil contemporâneo não é um fenômeno puramente mercadológico, mas o reflexo de gargalos logísticos estruturais, escolhas de política monetária e da apropriação do bem-estar como nicho de luxo. Enquanto a alimentação de qualidade for tratada como um bem de luxo, a desigualdade social continuará a ser medida pela balança e pelo prato. Democratizar o acesso ao alimento in natura exige mais do que o livre mercado; demanda o resgate de políticas públicas de abastecimento e a compreensão de que nutrir-se com dignidade é, antes de tudo, um direito fundamental.",
      },
    ],
  },

  {
    slug: "1",
    category: "Sociedade & Economia",
    title: "O preço do movimento",
    subtitle:
      "Como a desigualdade de renda e a falta de infraestrutura urbana moldam o acesso à atividade física.",
    author: "Andressa Rocha",
    role: "Estudante de Economia",
    image:
      "https://i.pinimg.com/736x/65/ff/a5/65ffa503ef3fc661e86a0a76cefeaa21.jpg",
    content: [
      { type: "paragraph", text: "Ensaio ainda em produção... aguarde." },
    ],
  },
];