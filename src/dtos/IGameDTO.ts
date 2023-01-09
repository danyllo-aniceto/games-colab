interface IPlatformGame {
  Platform: {
    id: number;
    image: string;
    name: string;
    created_at: Date;
    updated_at: Date;
  };
  id: number;
  idPlatform: number;
  idGame: number;
  created_at: Date;
  updated_at: Date;
}

export interface IGameDTO {
  id: number;
  name: string;
  developer: string;
  summary: string;
  idPlatform: Array<number>;
  genre: string;
  rating: number;
  image: string;
  file: File | string;
  radio_image?: string;
  PlatformGame?: IPlatformGame[];
}
