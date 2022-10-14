export interface IUpdateEvaluationRequest {
  idUser?: number
  idGame?: number
  rating?: number
  comment?: string
}
export interface IUpdateEvaluationResponse {
  message: string
}
