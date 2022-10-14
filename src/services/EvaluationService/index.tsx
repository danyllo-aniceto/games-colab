import { api } from '../api'
import {
  ICreateEvaluationDTORequest,
  ICreateEvaluationDTOResponse
} from './dtos/ICreateEvaluationDTO'
import { IDeleteEvaluationResponse } from './dtos/IDeleteEvaluationDTO'
import { ILoadByIdEvaluationResponse } from './dtos/ILoadByIdEvaluationDTO'
import { ILoadEvaluationResponse } from './dtos/ILoadEvaluationDTO'
import {
  IUpdateEvaluationRequest,
  IUpdateEvaluationResponse
} from './dtos/IUpdateEvaluationDTO'

export default class EvaluationService {
  private route = '/evaluations'

  public async create(
    dataRequest: ICreateEvaluationDTORequest
  ): Promise<ICreateEvaluationDTOResponse> {
    const { data } = await api.post<ICreateEvaluationDTOResponse>(
      this.route,
      dataRequest
    )
    return data
  }

  public async loadAll(): Promise<ILoadEvaluationResponse[]> {
    const { data } = await api.get<ILoadEvaluationResponse[]>(`${this.route}`)
    return data
  }

  public async loadById(id: number): Promise<ILoadByIdEvaluationResponse> {
    const { data } = await api.get<ILoadByIdEvaluationResponse>(
      `${this.route}/${id}`
    )
    return data
  }

  public async updateById(
    dataRequest: IUpdateEvaluationRequest
  ): Promise<IUpdateEvaluationResponse> {
    const { data } = await api.put<IUpdateEvaluationResponse>(
      `${this.route}/${dataRequest.id}`,
      dataRequest
    )
    return data
  }

  public async deleteById(id: number): Promise<IDeleteEvaluationResponse> {
    const { data } = await api.delete<IDeleteEvaluationResponse>(
      `${this.route}/${id}`
    )
    return data
  }
}
