import { api } from '../api'
import {
  ICreateGameDTORequest,
  ICreateGameDTOResponse
} from './dtos/ICreateGameDTO'
import { IDeleteGameDTOResponse } from './dtos/IDeleteGameDTO'
import { ILoadByIdGameDTOResponse } from './dtos/ILoadByIdGameDTO'
import { ILoadGameDTOResponse } from './dtos/ILoadGameDTO'
import {
  IUpdateGameDTORequest,
  IUpdateGameDTOResponse
} from './dtos/IUpdateGameDTO'

export default class GameService {
  private route = '/games'

  public async create(
    dataRequest: ICreateGameDTORequest
  ): Promise<ICreateGameDTOResponse> {
    const { data } = await api.post<ICreateGameDTOResponse>(
      this.route,
      dataRequest
    )
    return data
  }

  public async loadAll(): Promise<ILoadGameDTOResponse[]> {
    const { data } = await api.get<ILoadGameDTOResponse[]>(this.route)
    return data
  }

  public async loadById(id: number): Promise<ILoadByIdGameDTOResponse> {
    const { data } = await api.get<ILoadByIdGameDTOResponse>(
      `${this.route}/${id}`
    )
    return data
  }

  public async updateById(
    dataRequest: IUpdateGameDTORequest
  ): Promise<IUpdateGameDTOResponse> {
    const { data } = await api.put<IUpdateGameDTOResponse>(
      `${this.route}/${dataRequest.id}`,
      dataRequest
    )
    return data
  }

  public async deleteById(id: number): Promise<IDeleteGameDTOResponse> {
    const { data } = await api.delete<IDeleteGameDTOResponse>(
      `${this.route}/${id}`
    )
    return data
  }
}
