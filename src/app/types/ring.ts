export interface Ring {
  id: RingId;
  path: string;
  winner: string;
  year: number;
  roman: string;
}

export type RingId = number;
