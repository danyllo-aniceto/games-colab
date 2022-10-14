export interface ILoadEvaluationResponse {
  id: number
  idUser: number
  idGame: number
  created_at: Date
  updated_at: Date
  rating: number
  comment: string
  User: {
    id: number
    name: string
    email: string
    created_at: Date
    updated_at: Date
  }
}
