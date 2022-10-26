interface IPlatformGame {
  Platform: {
    id: number
    image: string
    name: string
    created_at: Date
    updated_at: Date
  }
  id: number
  idPlatform: number
  idGame: number
  created_at: Date
  updated_at: Date
}

export interface ILoadGameDTOResponse {
  id: number
  name: string
  developer: string
  summary: string
  idPlatform: Array<number>
  genre: string
  image: string
  rating: number
  file: File | string
  created_at: Date
  updated_at: Date
  PlatformGame: IPlatformGame[]
}
