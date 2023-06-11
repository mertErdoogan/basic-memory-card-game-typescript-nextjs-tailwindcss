export type GameConstT = {
  cardCount: number;
  cardSymbols: CardSymbolsT;
};

export type CardSymbolsT = {
  letter: string;
  id: number;
  success: boolean;
}[];

export const gameConstants: GameConstT = {
  cardCount: 3,
  cardSymbols: [
    {
      letter: 'A',
      id: 1,
      success: false,
    },
    {
      letter: 'B',
      id: 2,
      success: false,
    },
    {
      letter: 'C',
      id: 3,
      success: false,
    },
    {
      letter: 'D',
      id: 4,
      success: false,
    },
    {
      letter: 'E',
      id: 5,
      success: false,
    },
    {
      letter: 'F',
      id: 6,
      success: false,
    },
    {
      letter: 'G',
      id: 7,
      success: false,
    },
    {
      letter: 'I',
      id: 8,
      success: false,
    },
    {
      letter: 'K',
      id: 9,
      success: false,
    },
  ],
};
