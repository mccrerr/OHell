export interface IRound {
  game: string;
  id: number;
  playerName: string;
  playerPostition: number;
  bid: number;
  points: number;
  score: number;
  accumulated: number;
}

export interface IPlayer {
  game: string;
  player: string;
  position: number;
  rounds?: IRound[];
}

export interface IRoundInput {
  bid: number;
  points: number;
  score: number;
}
