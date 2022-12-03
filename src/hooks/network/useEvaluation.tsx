import { AxiosError } from 'axios'
import { useState } from 'react'
import { ToastType } from '../../components/Toast/enum'
import { IEvaluationDTO } from '../../dtos/IEvaluationDTO'
import EvaluationService from '../../services/EvaluationService'
import { useToast } from '../useToast'

export function useEvaluation() {
  const { addToast } = useToast()
  const evaluationService = new EvaluationService()

  const [allEvaluationsState, setAllEvaluationsState] = useState<
    IEvaluationDTO[]
  >([])
  const [loadingEvaluationsState, setLoadingEvaluationsState] = useState(false)
  const [loadingFormState, setLoadingFormState] = useState(false)

  const [dataActionState, setDataActionState] = useState<IEvaluationDTO>()

  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleOpenModalCreate = () => setShowModalCreate(true)
  const handleOpenModalEdit = (data: IEvaluationDTO) => {
    setDataActionState(data)
    setShowModalEdit(true)
  }
  const handleOpenModalDelete = (data: IEvaluationDTO) => {
    setDataActionState(data)
    setShowModalEdit(true)
  }

  const handleCloseModalCreate = () => setShowModalCreate(false)
  const handleCloseModalEdit = () => setShowModalEdit(false)
  const handleCloseModalDelete = () => setShowModalDelete(false)

  const initStateForm = {
    id: null,
    comment: '',
    idGame: null,
    idUser: null,
    rating: 0
  }

  const [evaluationState, setEvaluationState] =
    useState<IEvaluationDTO>(initStateForm)

  async function getEvaluations(): Promise<void> {
    setLoadingEvaluationsState(true)

    try {
      const response = await evaluationService.loadAll()
      setAllEvaluationsState(response)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao buscar avaliações - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingEvaluationsState(false)
    }
  }

  async function getEvaluationById(id: number): Promise<void> {
    setLoadingEvaluationsState(true)
    try {
      const response = await evaluationService.loadById(id)
      setEvaluationState(response)
    } catch (err) {
      const { response } = err as AxiosError
      addToast(
        `Falha ao buscar jogos da avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingEvaluationsState(false)
    }
  }

  async function handleSubmitCreateEvaluation() {
    setLoadingFormState(true)

    try {
      await evaluationService.create(evaluationState)
      handleCloseModalCreate()
      addToast('Avaliação criada com sucesso!', ToastType.SUCCESS)
      getEvaluations()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao criar avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setEvaluationState(initStateForm)
    }
  }

  async function handleSubmitEditEvaluation() {
    try {
      await evaluationService.updateById(evaluationState)
      handleCloseModalEdit()
      addToast('Avaliação editada com sucesso!', ToastType.SUCCESS)
      getEvaluations()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  async function handleSubmitDeleteEvaluation() {
    try {
      await evaluationService.deleteById(evaluationState.id)
      handleCloseModalDelete()
      addToast('Avaliação deletada com sucesso!', ToastType.SUCCESS)
      getEvaluations()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  return {
    allEvaluationsState,
    evaluationState,
    initStateForm,
    loadingEvaluationsState,
    setLoadingEvaluationsState,
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
    getEvaluations,
    getEvaluationById,
    handleSubmitCreateEvaluation,
    handleSubmitEditEvaluation,
    handleSubmitDeleteEvaluation
  }
}
