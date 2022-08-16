export interface IUserDTO {
  id: number
  name: string
  email: string
  password: string
}

export interface IUserFormDTO {
  id?: number
  name?: string
  email?: string
  password?: string
}
