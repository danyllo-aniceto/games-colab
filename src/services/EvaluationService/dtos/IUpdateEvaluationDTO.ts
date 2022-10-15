export interface IUpdateEvaluationRequest {
  id?: number
  idUser?: number
  idGame?: number
  rating?: number
  comment?: string
}
export interface IUpdateEvaluationResponse {
  message: string
}
