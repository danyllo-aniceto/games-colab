import { useToast } from '../useToast'
import { useState } from 'react'
import { useLoading } from '../useLoading'

import { AxiosError } from 'axios'
import { ToastType } from '../../components/Toast/enum'
import { IPlatformDTO } from '../../dtos/IPlatformDTO'
import PlatformService from '../../services/PlatformService'

export function usePlatform() {
  const { addToast } = useToast()
  const { onToggleLoading } = useLoading()
  const platformService = new PlatformService()

  const [allPlatformsState, setAllPlatformsState] = useState<IPlatformDTO[]>([])

  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const onToggleModalCreate = () => setShowModalCreate(prev => !prev)
  const onToggleModalEdit = () => setShowModalEdit(prev => !prev)
  const onToggleModalDelete = () => setShowModalDelete(prev => !prev)

  const initStateForm = {
    id: null,
    name: '',
    image: ''
  }

  const [platformState, setPlatformState] =
    useState<IPlatformDTO>(initStateForm)

  async function getPlatforms(): Promise<void> {
    onToggleLoading()

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
      onToggleLoading()
    }
  }

  async function getPlatformById(id: number): Promise<void> {
    onToggleLoading()
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
      onToggleLoading()
    }
  }

  async function handleSubmitCreatePlatform() {
    onToggleLoading()

    try {
      await platformService.create(platformState)
      onToggleModalCreate()
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
      onToggleLoading()
    }
  }

  async function handleSubmitEditPlatform() {
    onToggleLoading()
    try {
      await platformService.updateById(platformState)
      onToggleModalEdit()
      addToast('Plataforma editada com sucesso!', ToastType.SUCCESS)
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function handleSubmitDeletePlatform() {
    onToggleLoading()
    try {
      await platformService.deleteById(platformState.id)
      onToggleModalDelete()
      addToast('Plataforma deletada com sucesso!', ToastType.SUCCESS)
      getPlatforms()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar plataforma - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  return {
    allPlatformsState,
    platformState,
    initStateForm,
    showModalCreate,
    showModalEdit,
    showModalDelete,
    setPlatformState,
    onToggleModalCreate,
    onToggleModalDelete,
    onToggleModalEdit,
    getPlatforms,
    getPlatformById,
    handleSubmitCreatePlatform,
    handleSubmitEditPlatform,
    handleSubmitDeletePlatform
  }
}
