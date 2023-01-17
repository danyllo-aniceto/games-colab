import { useMemo, useState } from 'react'
import { useLoading } from '../useLoading'
import { useToast } from '../useToast'
import { useSearchParams } from 'react-router-dom'

import { AxiosError } from 'axios'
import { ToastType } from '../../components/Toast/enum'
import { variables } from '../../constants/variables'
import { IUserDTO } from '../../dtos/IUserDTO'
import UserService from '../../services/UserService'

export function useUser() {
  const { addToast } = useToast()
  const { onToggleLoading } = useLoading()
  const userService = new UserService()

  const [allUsersState, setAllUsersState] = useState<IUserDTO[]>([])

  const [userByIdState, setUserByIdState] = useState<IUserDTO>()

  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const onToggleModalCreate = () => setShowModalCreate(prev => !prev)
  const onToggleModalEdit = () => setShowModalEdit(prev => !prev)
  const onToggleModalDelete = () => setShowModalDelete(prev => !prev)

  const [totalPage, setTotalPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = useMemo(() => {
    return searchParams.get('page') || '1'
  }, [searchParams])

  async function getUsers(): Promise<void> {
    onToggleLoading()

    try {
      const response = await userService.loadAll()
      setAllUsersState(response)
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao buscar usuários - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function getUserById(id: number): Promise<void> {
    onToggleLoading()
    try {
      const response = await userService.loadById(id)
      setUserByIdState(response)
    } catch (err) {
      const { response } = err as AxiosError
      addToast(
        `Falha ao buscar jogos da usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  function handleChangePage(page: number) {
    setSearchParams({ page: page.toString() }, { replace: true })
  }

  async function getUsersPaged(page?: string) {
    onToggleLoading()

    try {
      const response = await userService.loadAllPaged(
        variables.LIMIT_TABLE_ROWS,
        Number(page)
      )
      setAllUsersState(response.instances)
      setTotalPage(parseInt(response.totalPages.toString()))
    } catch (error) {
      const { response } = error as AxiosError

      addToast(
        `Falha ao buscar usuários - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function handleSubmitCreateUser(user: IUserDTO) {
    onToggleLoading()

    try {
      await userService.create(user)
      onToggleModalCreate()
      addToast('Usuário criado com sucesso!', ToastType.SUCCESS)
      getUsersPaged('1')
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao criar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function handleSubmitEditUser(user: IUserDTO) {
    onToggleLoading()

    try {
      await userService.updateById(user)
      onToggleModalEdit()
      addToast('Usuário editado com sucesso!', ToastType.SUCCESS)
      getUsersPaged('1')
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  async function handleSubmitDeleteUser(user: IUserDTO) {
    onToggleLoading()

    try {
      await userService.deleteById(user.id)
      onToggleModalDelete()
      addToast('Usuário deletado com sucesso!', ToastType.SUCCESS)
      getUsersPaged('1')
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      onToggleLoading()
    }
  }

  return {
    allUsersState,
    userByIdState,
    showModalCreate,
    showModalEdit,
    showModalDelete,
    totalPage,
    page,
    onToggleModalCreate,
    onToggleModalEdit,
    onToggleModalDelete,
    getUsers,
    getUserById,
    handleSubmitCreateUser,
    handleSubmitEditUser,
    handleSubmitDeleteUser,
    handleChangePage,
    getUsersPaged
  }
}
