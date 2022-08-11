export interface IUpdateGameDTORequest {
  id?: number
  name?: string
  developer?: string
  summary?: string
  console?: string
  genre?: string
  image?: string
  raiting?: number
}

export interface IUpdateGameDTOResponse {
  message: string
}
