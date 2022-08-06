export interface ICreateConsoleDTORequest {
  name: string
  description: string
  image: string
}

export interface ICreateConsoleDTOResponse {
  name: string
  description: string
  image: string
  id: number
}
