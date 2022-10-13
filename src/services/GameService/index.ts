import { api } from '../api'
import {
  ICreateGameDTORequest,
  ICreateGameDTOResponse
} from './dtos/ICreateGameDTO'

import { IDeleteGameDTOResponse } from './dtos/IDeleteGameDTO'
import { ILoadByIdGameDTOResponse } from './dtos/ILoadByIdGameDTO'
import { ILoadGameDTOResponse } from './dtos/ILoadGameDTO'
import { ILoadTopThreeGamesDTOResponse } from './dtos/ILoadTopThreeGamesDTO'
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

  public async createUpload(
    dataForm: ICreateGameDTORequest
  ): Promise<ICreateGameDTOResponse> {
    const formData = new FormData()
    formData.append('name', dataForm.name)
    formData.append('developer', dataForm.developer)
    formData.append('summary', dataForm.summary)
    formData.append('genre', dataForm.genre)
    formData.append('image', dataForm.image)
    formData.append('file', dataForm.file)
    formData.append('idPlatform', '[1]')

    const { data } = await api.post<ICreateGameDTOResponse>(
      `${this.route}/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    return data
  }

  public async loadAll(): Promise<ILoadGameDTOResponse[]> {
    const { data } = await api.get<ILoadGameDTOResponse[]>(`${this.route}`)
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

  public async getTopThreeGames(): Promise<ILoadTopThreeGamesDTOResponse[]> {
    const { data } = await api.get<ILoadTopThreeGamesDTOResponse[]>(
      `/getTopThreeGames`
    )
    return data
  }
}
