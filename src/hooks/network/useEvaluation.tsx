import { useState } from 'react'
import { useLoading } from '../useLoading'
import { useToast } from '../useToast'

import { AxiosError } from 'axios'
import { ToastType } from '../../components/Toast/enum'
import { IEvaluationDTO } from '../../dtos/IEvaluationDTO'
import EvaluationService from '../../services/EvaluationService'

export function useEvaluation() {
  const { addToast } = useToast()
  const { onToggleLoading } = useLoading()
  const evaluationService = new EvaluationService()

  const [allEvaluationsState, setAllEvaluationsState] = useState<
    IEvaluationDTO[]
  >([])

  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDeleteEvaluation, setShowModalDeleteEvaluation] =
    useState(false)

  const onToggleModalEdit = () => setShowModalEdit(prev => !prev)
  const onToggleModalDelete = () => setShowModalDeleteEvaluation(prev => !prev)

  const initStateFormEvaluation = {
    id: null,
    comment: '',
    idGame: null,
    idUser: null,
    rating: 0
  }

  const [evaluationState, setEvaluationState] = useState<IEvaluationDTO>(
    initStateFormEvaluation
  )

  async function getEvaluations(): Promise<void> {
    onToggleLoading()

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
      onToggleLoading()
    }
  }

  async function getEvaluationById(id: number): Promise<void> {
    onToggleLoading()
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
      onToggleLoading()
    }
  }

  async function handleSubmitCreateEvaluation(evaluationState: IEvaluationDTO) {
    onToggleLoading()
    try {
      await evaluationService.create(evaluationState)
      addToast('Avaliação criada com sucesso!', ToastType.SUCCESS)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao criar avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setEvaluationState(initStateFormEvaluation)
      onToggleLoading()
    }
  }

  async function handleSubmitEditEvaluation() {
    onToggleLoading()
    try {
      await evaluationService.updateById(evaluationState)
      onToggleModalEdit()
      addToast('Avaliação editada com sucesso!', ToastType.SUCCESS)
      getEvaluations()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function handleSubmitDeleteEvaluation(
    eva: IEvaluationDTO,
    idGame: number
  ) {
    onToggleLoading()
    try {
      await evaluationService.deleteById(eva.id)
      onToggleModalDelete()
      addToast('Avaliação deletada com sucesso!', ToastType.SUCCESS)
      getEvaluationByIdGame(idGame)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function getEvaluationByIdGame(idGame: number): Promise<void> {
    onToggleLoading()
    try {
      const response = await evaluationService.loadByIdGame(idGame)
      setAllEvaluationsState(response)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao buscar avaliações do jogo - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  return {
    allEvaluationsState,
    evaluationState,
    initStateFormEvaluation,
    showModalEdit,
    showModalDeleteEvaluation,
    setEvaluationState,
    getEvaluations,
    getEvaluationById,
    getEvaluationByIdGame,
    handleSubmitCreateEvaluation,
    handleSubmitEditEvaluation,
    handleSubmitDeleteEvaluation,
    onToggleModalDelete,
    onToggleModalEdit
  }
}
