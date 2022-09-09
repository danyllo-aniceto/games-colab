export interface ICreateGameDTORequest {
  name: string
  developer: string
  summary: string
  platform: string
  genre: string
  image: string
  rating: number
}

export interface ICreateGameDTOResponse {
  name: string
  developer: string
  summary: string
  platform: string
  genre: string
  image: string
  rating: number
  id: number
}
