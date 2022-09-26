export interface IGameDTO {
  id: number
  name: string
  developer: string
  summary: string
  idPlatform: Array<number>
  genre: string
  rating: number
  image: string
  file: File | string
  radio_image?: string
}
