import { AxiosError } from 'axios'
import { useState } from 'react'
import { ToastType } from '../../components/Toast/enum'
import { IPlatformDTO } from '../../dtos/IPlatformDTO'
import PlatformService from '../../services/PlatformService'
import { useToast } from '../useToast'

export function usePlatform() {
  const { addToast } = useToast()
  const platformService = new PlatformService()

  const [allPlatformsState, setAllPlatformsState] = useState<IPlatformDTO[]>([])
  const [loadingPlatformsState, setLoadingPlatformsState] = useState(false)
  const [loadingFormState, setLoadingFormState] = useState(false)

  const [dataActionState, setDataActionState] = useState<IPlatformDTO>()

  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleOpenModalCreate = () => setShowModalCreate(true)
  const handleOpenModalEdit = (data: IPlatformDTO) => {
    setDataActionState(data)
    setShowModalEdit(true)
  }
  const handleOpenModalDelete = (data: IPlatformDTO) => {
    setDataActionState(data)
    setShowModalEdit(true)
  }

  const handleCloseModalCreate = () => setShowModalCreate(false)
  const handleCloseModalEdit = () => setShowModalEdit(false)
  const handleCloseModalDelete = () => setShowModalDelete(false)

  const initStateForm = {
    id: null,
    name: '',
    image: ''
  }

  const [platformState, setPlatformState] = useState<IPlatformDTO>({
    id: null,
    name: '',
    image: ''
  })

  async function getPlatforms(): Promise<void> {
    setLoadingPlatformsState(true)

    try {
      const response = await platformService.loadAll()
      setAllPlatformsState(response)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao buscar plataformas - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingPlatformsState(false)
    }
  }

  async function getPlatformById(id: number): Promise<void> {
    setLoadingPlatformsState(true)
    try {
      const response = await platformService.loadById(id)
      setPlatformState(response)
    } catch (err) {
      const { response } = err as AxiosError
      addToast(
        `Falha ao buscar jogos da plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingPlatformsState(false)
    }
  }

  async function handleSubmitCreatePlatform() {
    setLoadingFormState(true)

    try {
      await platformService.create(platformState)
      handleCloseModalCreate()
      addToast('Plataforma criada com sucesso!', ToastType.SUCCESS)
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao criar plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setPlatformState(initStateForm)
    }
  }

  async function handleSubmitEditPlatform() {
    try {
      await platformService.updateById(platformState)
      handleCloseModalEdit()
      addToast('Plataforma editada com sucesso!', ToastType.SUCCESS)
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  async function handleSubmitDeletePlatform() {
    try {
      await platformService.deleteById(platformState.id)
      handleCloseModalDelete()
      addToast('Plataforma deletada com sucesso!', ToastType.SUCCESS)
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  return {
    allPlatformsState,
    platformState,
    initStateForm,
    loadingPlatformsState,
    setLoadingPlatformsState,
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
    getPlatforms,
    getPlatformById,
    handleSubmitCreatePlatform,
    handleSubmitEditPlatform,
    handleSubmitDeletePlatform
  }
}
