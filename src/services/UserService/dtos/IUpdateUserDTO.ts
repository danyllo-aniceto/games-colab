export interface IUpdateUserDTORequest {
  id?: number
  name?: string
  email?: string
  password?: string
}

export interface IUpdateUserDTOResponse {
  message: string
}
