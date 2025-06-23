export const CHARACTERS = [ 
  {
    id: '1',
    name: 'Vanguard',
    background: 'Iron Vanguard é um guerreiro endurecido pela batalha, equipado com uma armadura avançada. Após suportar uma tragédia pessoal, ele se tornou o protetor inflexível de sua cidade, fundindo tecnologia de ponta com uma vontade indomável.',
    gameplay: {
      role: 'Tanque/Lutador',
      difficulty: 'Média'
    },
    abilities: [
      { name: 'Shield Slam', description: 'Causa dano e atordoa inimigos em um cone.' },
      { name: 'Tech Burst', description: 'Libera uma explosão de energia que causa dano e reduz a velocidade dos inimigos.' },
      { name: 'Overdrive', description: 'Aumenta temporariamente a velocidade de ataque e a redução de dano.' }
    ],
    image: 'char3.jpg'
  },
  {
    id: '2',
    name: 'Mystic Ember',
    background: 'Mystic Ember canaliza magia elemental ancestral. Nascida em uma linhagem secreta de feiticeiros, ela combina sabedoria com poder mágico bruto para combater a escuridão que se aproxima.',
    gameplay: {
      role: 'Mago',
      difficulty: 'Alta'
    },
    abilities: [
      { name: 'Flame Wave', description: 'Lança uma onda de fogo que queima os inimigos em seu caminho.' },
      { name: 'Arcane Shield', description: 'Cria uma barreira protetora que absorve dano.' },
      { name: 'Inferno', description: 'Canaliza calor intenso para causar dano massivo em área.' }
    ],
    image: 'char2.jpg'
  },
  {
    id: '3',
    name: 'Knight Valor',
    background: 'Um exemplo de honra e cavalaria, Knight Valor jurou defender os fracos. Com sua armadura encantada e espada lendária, ele se ergue como um baluarte contra a tirania e o caos.',
    gameplay: {
      role: 'Lutador',
      difficulty: 'Baixa'
    },
    abilities: [
      { name: 'Holy Strike', description: 'Causa dano aprimorado a forças do mal e enfraquece sua determinação.' },
      { name: 'Defender’s Call', description: 'Aumenta os atributos defensivos dos aliados próximos.' },
      { name: 'Justice Charge', description: 'Avança rapidamente, empurrando os inimigos em seu caminho.' }
    ],
    image: 'char1.jpg'
  },
];

export const NEWS = [
  {
    id: '1',
    title: 'Atualização do Jogo 1.2 Lançada',
    description: 'Estamos empolgados em anunciar que a versão 1.2 do jogo foi lançada com novos recursos, gráficos aprimorados e jogabilidade balanceada.',
  },
  {
    id: '2',
    title: 'Novo Personagem Revelado: Dragon Slayer',
    description: 'Prepare-se para uma nova adição ao jogo. Dragon Slayer está chegando em breve com um conjunto de habilidades único e uma história misteriosa.',
  }
];
