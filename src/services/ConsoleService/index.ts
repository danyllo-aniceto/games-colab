import { api } from '../api'
import {
  ICreateConsoleDTORequest,
  ICreateConsoleDTOResponse
} from './dtos/ICraeteConsoleDTO'
import { IDeleteConsoleDTOResponse } from './dtos/IDeleteConsoleDTO'
import { ILoadByIdConsoleDTOResponse } from './dtos/ILoadByIdConsoleDTO'
import { ILoadConsoleDTOResponse } from './dtos/ILoadConsoleDTO'
import {
  IUpdateConsoleDTORequest,
  IUpdateConsoleDTOResponse
} from './dtos/IUpdateConsoleDTO'

export default class ConsoleService {
  private route = '/consoles'

  public async create(
    dataRequest: ICreateConsoleDTORequest
  ): Promise<ICreateConsoleDTOResponse> {
    const { data } = await api.post<ICreateConsoleDTOResponse>(
      this.route,
      dataRequest
    )
    return data
  }

  public async loadAll(): Promise<ILoadConsoleDTOResponse[]> {
    const { data } = await api.get<ILoadConsoleDTOResponse[]>(this.route)
    return data
  }

  public async loadById(id: number): Promise<ILoadByIdConsoleDTOResponse> {
    const { data } = await api.get<ILoadByIdConsoleDTOResponse>(
      `${this.route}/${id}`
    )
    return data
  }

  public async updateById(
    dataRequest: IUpdateConsoleDTORequest
  ): Promise<IUpdateConsoleDTOResponse> {
    const { data } = await api.put<IUpdateConsoleDTOResponse>(
      `${this.route}/${dataRequest.id}`,
      dataRequest
    )
    return data
  }

  public async deleteById(id: number): Promise<IDeleteConsoleDTOResponse> {
    const { data } = await api.delete<IDeleteConsoleDTOResponse>(
      `${this.route}/${id}`
    )
    return data
  }
}
