export interface IUpdateGameDTORequest {
  id?: number
  name?: string
  developer?: string
  summary?: string
  platform?: string
  genre?: string
  image?: string
  rating?: number
}

export interface IUpdateGameDTOResponse {
  message: string
}
