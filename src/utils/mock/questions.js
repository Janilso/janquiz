const questionsMock = () => {
  return [
    {
      image: 'https://media.giphy.com/media/PpeGK6edBWAxi/giphy.gif',
      title: 'Em qual filme há uma grande sequência no Brasil?',
      description: 'Essa é pra aquecer',
      answer: 1,
      alternatives: ['Homem de Ferro', 'O Incrível Hulk', 'Vingadores: Era de Ultron', 'Homem-Formiga e a Vespa'],
    },
    {
      image: 'https://media.giphy.com/media/N97kHQgG33rUI/giphy.gif',
      title: 'Em qual filme foi introduzida a Jóia da Mente?',
      description: 'Diz aí!',
      answer: 0,
      alternatives: ['Os Vingadores', 'Guardiões da Galáxia', 'Thor: O Mundo Sombrio', 'Vingadores: Guerra Infinita'],
    },
    {
      image: 'https://media.giphy.com/media/xT9IgpTy4UVnddmso0/giphy.gif',
      title: 'Em qual filme o Capitão América adota o codinome Nômade?',
      description: 'Em qual?',
      answer: 3,
      alternatives: [
        'Capitão América: O Primeiro Vingador',
        'Capitão América: O Soldado Invernal',
        'Capitão América: Guerra Civil',
        'Vingadores: Guerra Infinita',
      ],
    },
    {
      image: 'https://media.giphy.com/media/BW7QHkBICEZG0/giphy.gif',
      title: 'Em qual filme somos apresentados ao conceito de um Multiverso?',
      description: 'Essa é fácil!',
      answer: 1,
      alternatives: ['Guardiões da Galáxia', 'Thor: O Mundo Sombrio', 'Doutor Estranho', 'Homem-Formiga'],
    },
    {
      image: 'https://media.giphy.com/media/cd5noBplmNc49mhGCu/giphy.gif',
      title: 'Onde tivemos a última participação especial de Stan Lee?',
      description: 'Saudades!',
      answer: 2,
      alternatives: ['Vingadores: Guerra Infinita', 'Homem-Formiga e a Vespa', 'Vingadores: Ultimato', 'Capitã Marvel'],
    },

    {
      image: 'https://media.giphy.com/media/bCvO8biVh8WyI/giphy.gif',
      title:
        'Em que ano foi lançado o primeiro filme do Homem de Ferro, dando início ao Universo Cinematográfico da Marvel?',
      description: 'Eita!',
      answer: 1,
      alternatives: ['2005', '2008', '2010', '2012'],
    },

    {
      image: 'https://media.giphy.com/media/1Nclw5CJ3N77G/giphy.gif',
      title: 'Qual é o nome do martelo de Thor?',
      description: '',
      answer: 1,
      alternatives: ['Vanir', 'Mjolnir', 'Aesir', 'Norn'],
    },
    {
      image: 'https://media.giphy.com/media/1qhzDBcH8qKGi4snKA/giphy.gif',
      title: 'Os Flerkens são uma raça de alienígenas extremamente perigosos que se assemelha a quê?',
      description: '',
      answer: 0,
      alternatives: ['Gatos', 'Patos', 'Répteis', 'Guaxinins'],
    },
    {
      image: 'https://media.giphy.com/media/Gpq4JgtMu8tRJzXkog/giphy.gif',
      title: 'Antes de se tornar Vision, qual é o nome do mordomo de IA do Homem de Ferro?',
      description: 'Moleza!',
      answer: 1,
      alternatives: ['HOMER', 'JARVIS', 'ALFRED', 'MARVIN'],
    },
    {
      image: 'https://media.giphy.com/media/8PsbM0OpqPl9OClfSw/giphy.gif',
      title: 'Qual é a raça alienígena que Loki envia para invadir a Terra em Os Vingadores?',
      description: '',
      answer: 2,
      alternatives: ['Os skrulls', 'The Kree', 'Os Chitauri', 'The Flerkens'],
    },
    {
      image: 'https://media.giphy.com/media/xT0xejJnePNcOWoHOo/giphy.gif',
      title: 'Quem foi o último detentor do Pedra do espaço antes de Thanos reivindicá-lo por sua Manopla do Infinito?',
      description: '',
      answer: 3,
      alternatives: ['Thor', 'O Colecionador', 'Tony Stark', 'Loki'],
    },
    {
      image: 'http://31.media.tumblr.com/3b93c20c6305df6356c7b277e6f9d9e6/tumblr_nqd94cCwNg1rey868o1_500.gif',
      title: 'Quais foram os três itens que Rocket afirma que ele precisava para escapar da prisão?',
      description: '',
      answer: 1,
      alternatives: [
        'Um cartão de segurança, um garfo e um monitor de tornozelo',
        'Uma faixa de segurança, uma bateria e uma perna protética',
        'Um par de binóculos, um detonador e uma perna protética',
        'Uma faca, fios de cabo e mixtape de Peter',
      ],
    },
    {
      image:
        'https://img.buzzfeed.com/buzzfeed-static/static/2018-07/5/1/asset/buzzfeed-prod-web-06/anigif_sub-buzz-7407-1530767765-1.gif',
      title: 'Que animal Darren Cross encolhe sem sucesso no Homem-Formiga?',
      description: '',
      answer: 2,
      alternatives: ['Rato', 'Pato', 'Ovelha', 'Criceto'],
    },
    {
      image: 'https://i.gifer.com/X9yh.gif',
      title: 'Em "Thor O Mundo Sombrio" quantas crianças tinha no lugar abandonado que Jane achou?',
      description: '',
      answer: 3,
      alternatives: ['2', '6', '4', '3'],
    },
    {
      image:
        'https://media1.popsugar-assets.com/files/thumbor/bfuLXMVuRd8Mm9uNW5765MOsWPU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/11/03/958/n/1922283/tmp_xluLcM_5481e4e833ce6158_thanos06.gif',
      title: 'Antes de Loki roubar, para que a S.H.I.E.L.D usava o tesseract?',
      description: '',
      answer: 0,
      alternatives: [
        'Para construir armas de destruição em massa',
        'Para localizar Asgard',
        'Para ter acesso a outras galáxias',
        'Para ajudar o país com as guerras',
      ],
    },
    // {
    //   image: '',
    //   title: '',
    //   description: '',
    //   answer: 0,
    //   alternatives: ['', '', '', ''],
    // },
  ];
};

export default questionsMock;
