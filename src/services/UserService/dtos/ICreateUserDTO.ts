export interface ICreateUserDTORequest {
  name: string
  email: string
  password: string
}

export interface ICreateUserDTOResponse {
  name: string
  email: string
  password: string
  id: number
}
