export interface ICreatePlatformDTORequest {
  name: string
  image: string
}

export interface ICreatePlatformDTOResponse {
  name: string
  image: string
  id: number
  created_at: Date
  updated_at: Date
}
