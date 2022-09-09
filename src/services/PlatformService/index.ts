import { api } from '../api'
import {
  ICreatePlatformDTORequest,
  ICreatePlatformDTOResponse
} from './dtos/ICraetePlatformDTO'
import { IDeletePlatformDTOResponse } from './dtos/IDeletePlatformDTO'
import { ILoadByIdPlatformDTOResponse } from './dtos/ILoadByIdPlatformDTO'
import { ILoadPlatformDTOResponse } from './dtos/ILoadPlatformDTO'
import {
  IUpdatePlatformDTORequest,
  IUpdatePlatformDTOResponse
} from './dtos/IUpdatePlatformDTO'

export default class PlatformService {
  private route = '/platforms'

  public async create(
    dataRequest: ICreatePlatformDTORequest
  ): Promise<ICreatePlatformDTOResponse> {
    const { data } = await api.post<ICreatePlatformDTOResponse>(
      this.route,
      dataRequest
    )
    return data
  }

  public async loadAll(): Promise<ILoadPlatformDTOResponse[]> {
    const { data } = await api.get<ILoadPlatformDTOResponse[]>(this.route)
    return data
  }

  public async loadById(id: number): Promise<ILoadByIdPlatformDTOResponse> {
    const { data } = await api.get<ILoadByIdPlatformDTOResponse>(
      `${this.route}/${id}`
    )
    return data
  }

  public async updateById(
    dataRequest: IUpdatePlatformDTORequest
  ): Promise<IUpdatePlatformDTOResponse> {
    const { data } = await api.put<IUpdatePlatformDTOResponse>(
      `${this.route}/${dataRequest.id}`,
      dataRequest
    )
    return data
  }

  public async deleteById(id: number): Promise<IDeletePlatformDTOResponse> {
    const { data } = await api.delete<IDeletePlatformDTOResponse>(
      `${this.route}/${id}`
    )
    return data
  }
}
