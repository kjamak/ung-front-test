export interface Player {
  firstname: string;
  lastname: string;
  birthday: string;
  image: string;
}

export interface Card {
  id: number;
  player: Player;
}

export interface NewCard {
  player: Player;
}
