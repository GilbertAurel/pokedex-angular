interface Stats {
  name: string;
  base: number;
}

export interface Pokemon {
  id: number;
  name: string;
  url?: string;
  details?: {
    height: number;
    weight: number;
    stats: Stats[];
    types: string[];
    imageUrl: string;
  };
}
