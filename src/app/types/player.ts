export interface Player {
  id: PlayerId;
  name: string;
  speed: number;
  agility: number;
  power: number;
  moral: number;
  luck: number;
}

export type PlayerId = number;
