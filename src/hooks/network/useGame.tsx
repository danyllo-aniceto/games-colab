import { useState } from 'react'
import { IGameDTO } from '../../dtos/IGameDTO'
import GameService from '../../services/GameService'
import { AxiosError } from 'axios'
import { ToastType } from '../../components/Toast/enum'
import { useToast } from '../useToast'
import { ILoadTopThreeGamesDTOResponse } from '../../services/GameService/dtos/ILoadTopThreeGamesDTO'

export function useGame() {
  const { addToast } = useToast()
  const gameService = new GameService()

  const [allGamesState, setAllGamesState] = useState<IGameDTO[]>([])
  const [listTopThreeGames, setTopThreeGames] = useState<
    ILoadTopThreeGamesDTOResponse[]
  >([])
  const [loadingGamesState, setLoadingGamesState] = useState(false)
  const [loadingFormState, setLoadingFormState] = useState(false)

  const [dataActionState, setDataActionState] = useState<IGameDTO>()

  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleOpenModalCreate = () => setShowModalCreate(true)
  const handleOpenModalEdit = (data: IGameDTO) => {
    setDataActionState(data)
    setShowModalEdit(true)
  }
  const handleOpenModalDelete = (data: IGameDTO) => {
    setDataActionState(data)
    setShowModalDelete(true)
  }

  const handleCloseModalCreate = () => setShowModalCreate(false)
  const handleCloseModalEdit = () => setShowModalEdit(false)
  const handleCloseModalDelete = () => setShowModalDelete(false)

  const initStateForm = {
    id: null,
    name: '',
    developer: '',
    file: '',
    genre: '',
    image: '',
    summary: '',
    rating: 0,
    idPlatform: [],
    idPlatformForm: [],
    radio_image: 'link'
  }

  const [gameState, setGameState] = useState<IGameDTO>(initStateForm)

  async function getGames(): Promise<void> {
    setLoadingGamesState(true)

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
      setLoadingGamesState(false)
    }
  }

  async function getGameById(id: number): Promise<void> {
    setLoadingGamesState(true)
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
      setLoadingGamesState(false)
    }
  }

  async function getTopThreeGames(): Promise<void> {
    setLoadingGamesState(true)
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
      setLoadingGamesState(false)
    }
  }

  // deploy
  async function handleSubmitCreateGame() {
    console.log(gameState)
    // setLoadingFormState(true)
    // if (gameState.file) {
    //   try {
    //     await gameService.createUpload(gameState)
    //     handleCloseModalCreate()
    //     addToast('Jogo criado com sucesso!', ToastType.SUCCESS)
    //     getGames()
    //   } catch (error) {
    //     const { response } = error as AxiosError
    //     addToast(`Falha ao criar jogo - ${response?.data?.message}`, ToastType.ERROR)
    //   }
    // } else {
    //   try {
    //     await gameService.create(gameState)
    //     handleCloseModalCreate()
    //     addToast('Jogo criado com sucesso!', ToastType.SUCCESS)
    //     getGames()
    //   } catch (error) {
    //     const { response } = error as AxiosError
    //     addToast(`Falha ao criar jogo - ${response?.data?.message}`, ToastType.ERROR)
    //   }
    // }
    // setLoadingFormState(false)
    // setGameState(initStateForm)
  }

  async function handleSubmitEditGame() {
    setLoadingFormState(true)
    try {
      await gameService.updateById(gameState)
      handleCloseModalEdit()
      addToast('Game editada com sucesso!', ToastType.SUCCESS)
      getGames()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar game - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingFormState(false)
    }
  }

  async function handleSubmitDeleteGame() {
    setLoadingFormState(true)
    try {
      await gameService.deleteById(gameState.id)
      handleCloseModalDelete()
      addToast('Game deletada com sucesso!', ToastType.SUCCESS)
      getGames()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar game - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingFormState(false)
    }
  }

  return {
    allGamesState,
    listTopThreeGames,
    gameState,
    setGameState,
    initStateForm,
    loadingGamesState,
    setLoadingGamesState,
    loadingFormState,
    showModalCreate,
    showModalEdit,
    showModalDelete,
    dataActionState,
    handleOpenModalCreate,
    handleOpenModalEdit,
    handleOpenModalDelete,
    handleCloseModalCreate,
    handleCloseModalEdit,
    handleCloseModalDelete,
    getGames,
    getGameById,
    getTopThreeGames,
    handleSubmitCreateGame,
    handleSubmitEditGame,
    handleSubmitDeleteGame,
    setAllGamesState
  }
}
