import { useState } from 'react'
import { useToast } from '../useToast'
import { useLoading } from '../useLoading'

import { IGameDTO } from '../../dtos/IGameDTO'
import GameService from '../../services/GameService'
import { AxiosError } from 'axios'
import { ToastType } from '../../components/Toast/enum'
import { ILoadTopThreeGamesDTOResponse } from '../../services/GameService/dtos/ILoadTopThreeGamesDTO'

export function useGame() {
  const { addToast } = useToast()
  const { onToggleLoading } = useLoading()
  const gameService = new GameService()

  const [allGamesState, setAllGamesState] = useState<IGameDTO[]>([])
  const [listTopThreeGames, setTopThreeGames] = useState<
    ILoadTopThreeGamesDTOResponse[]
  >([])

  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const onToggleModalCreate = () => setShowModalCreate(prev => !prev)
  const onToggleModalEdit = () => setShowModalEdit(prev => !prev)
  const onToggleModalDelete = () => setShowModalDelete(prev => !prev)

  const initStateForm = {
    id: null,
    name: '',
    developer: '',
    file: null,
    genre: '',
    image: '',
    summary: '',
    rating: 0,
    idPlatform: [],
    radio_image: 'link'
  }

  const [gameState, setGameState] = useState<IGameDTO>(initStateForm)

  async function getGames(): Promise<void> {
    onToggleLoading()

    try {
      const response = await gameService.loadAll()
      setAllGamesState(response)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao buscar games - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function getGameById(id: number): Promise<void> {
    onToggleLoading()
    try {
      const response = await gameService.loadById(id)
      setGameState(response)
    } catch (err) {
      const { response } = err as AxiosError
      addToast(
        `Falha ao buscar jogos da game - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function getTopThreeGames(): Promise<void> {
    onToggleLoading()
    try {
      const response = await gameService.getTopThreeGames()
      setTopThreeGames(response)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao buscar os três melhores jogos - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  // deploy
  async function handleSubmitCreateGame() {
    onToggleLoading()

    if (gameState.file) {
      console.log(gameState.file)
      try {
        await gameService.createUpload(gameState)
        onToggleModalCreate()
        addToast('Jogo criado com sucesso!', ToastType.SUCCESS)
        getGames()
      } catch (error) {
        const { response } = error as AxiosError
        addToast(
          `Falha ao criar jogo - ${response?.data?.message}`,
          ToastType.ERROR
        )
      }
    } else {
      try {
        await gameService.create(gameState)
        onToggleModalCreate()
        addToast('Jogo criado com sucesso!', ToastType.SUCCESS)
        getGames()
      } catch (error) {
        const { response } = error as AxiosError
        addToast(
          `Falha ao criar jogo - ${response?.data?.message}`,
          ToastType.ERROR
        )
      }
    }
    onToggleLoading()
    setGameState(initStateForm)
  }

  async function handleSubmitEditGame() {
    onToggleLoading()
    try {
      await gameService.updateById(gameState)
      onToggleModalEdit()
      addToast('Game editada com sucesso!', ToastType.SUCCESS)
      getGames()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar game - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function handleSubmitDeleteGame() {
    onToggleLoading()
    try {
      await gameService.deleteById(gameState.id)
      onToggleModalDelete()
      addToast('Game deletada com sucesso!', ToastType.SUCCESS)
      getGames()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar game - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  return {
    allGamesState,
    listTopThreeGames,
    gameState,
    initStateForm,
    showModalCreate,
    showModalEdit,
    showModalDelete,
    onToggleModalCreate,
    onToggleModalDelete,
    onToggleModalEdit,
    setGameState,
    getGames,
    getGameById,
    getTopThreeGames,
    handleSubmitCreateGame,
    handleSubmitEditGame,
    handleSubmitDeleteGame,
    setAllGamesState
  }
}
