interface InstanceUser {
  id: number
  name: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
}

export interface ILoadUserPagedDTOResponse {
  total: number
  page: number
  totalPages: number
  limit: number
  offset: number
  instances: Array<InstanceUser>
}
