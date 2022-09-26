export interface ICreateGameDTORequest {
  name: string
  developer: string
  summary: string
  idPlatform: Array<number>
  genre: string
  image: string
  rating: number
  file: File | string
}

export interface ICreateGameDTOResponse {
  id: number
  name: string
  developer: string
  summary: string
  genre: string
  image: string
  created_at: Date
  updated_at: Date
  PlatformGame: Array<{
    id: number
    idPlatform: number
    idGame: number
    created_at: Date
    updated_at: Date
  }>
}
