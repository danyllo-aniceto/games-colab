export interface ICreateEvaluationDTORequest {
  idUser: number
  idGame: number
  rating: number
  comment: string
}

export interface ICreateEvaluationDTOResponse {
  id: number
  idUser: number
  idGame: number
  created_at: Date
  updated_at: Date
  rating: number
  comment: string
}
