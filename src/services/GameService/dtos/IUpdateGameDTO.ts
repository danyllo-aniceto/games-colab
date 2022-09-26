export interface IUpdateGameDTORequest {
  id?: number
  name?: string
  developer?: string
  summary?: string
  idPlatform?: Array<number>
  genre?: string
  image?: string
  rating?: number
  file?: File | string
}

export interface IUpdateGameDTOResponse {
  message: string
}
