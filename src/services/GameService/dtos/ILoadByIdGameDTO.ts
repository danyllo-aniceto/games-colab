export interface ILoadByIdGameDTOResponse {
  id: number
  name: string
  developer: string
  summary: string
  idPlatform: Array<number>
  genre: string
  image: string
  rating: number
  file: File
  created_at: Date
  updated_at: Date
}
