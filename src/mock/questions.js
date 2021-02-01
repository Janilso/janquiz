const questionsMock = () => {
  return [
    {
      image: 'https://media.giphy.com/media/vBjLa5DQwwxbi/giphy.gif',
      title: 'Como fazer um seletor por id via CSS?',
      description: 'Essa é pra aquecer',
      answer: 2,
      alternatives: ['.elemento', '*elemento', '#elemento', '%elemento'],
    },
    {
      image: 'https://media.giphy.com/media/13kajTax0GCg0g/giphy.gif',
      title: 'Como fazer um background gradiente com css?',
      description: 'Faz tempo em haha',
      answer: 0,
      alternatives: ['background: linear-gradient(#e66465, #9198e5);', 'background: gradient(#e66465, #9198e5);'],
    },
  ];
};

export default questionsMock;
