import { AxiosError } from 'axios'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ToastType } from '../../components/Toast/enum'
import { variables } from '../../constants/variables'
import { IUserDTO } from '../../dtos/IUserDTO'
import UserService from '../../services/UserService'
import { useToast } from '../useToast'

export function useUser() {
  const { addToast } = useToast()
  const userService = new UserService()

  const [allUsersState, setAllUsersState] = useState<IUserDTO[]>([])
  const [loadingUsersState, setLoadingUsersState] = useState(false)
  const [loadingFormState, setLoadingFormState] = useState(false)

  const [dataActionState, setDataActionState] = useState<IUserDTO>()

  const [showModalCreate, setShowModalCreate] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleOpenModalCreate = () => setShowModalCreate(true)
  const handleOpenModalEdit = (data: IUserDTO) => {
    setDataActionState(data)
    setShowModalEdit(true)
  }
  const handleOpenModalDelete = (data: IUserDTO) => {
    setDataActionState(data)
    setShowModalEdit(true)
  }

  const handleCloseModalCreate = () => setShowModalCreate(false)
  const handleCloseModalEdit = () => setShowModalEdit(false)
  const handleCloseModalDelete = () => setShowModalDelete(false)

  const initStateForm = {
    id: null,
    name: '',
    email: '',
    password: ''
  }

  const [userState, setUserState] = useState<IUserDTO>(initStateForm)

  const [totalPage, setTotalPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const page = useMemo(() => {
    return searchParams.get('page') || '1'
  }, [searchParams])

  async function getUsers(): Promise<void> {
    setLoadingUsersState(true)

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
      setLoadingUsersState(false)
    }
  }

  async function getUserById(id: number): Promise<void> {
    setLoadingUsersState(true)
    try {
      const response = await userService.loadById(id)
      setUserState(response)
    } catch (err) {
      const { response } = err as AxiosError
      addToast(
        `Falha ao buscar jogos da usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingUsersState(false)
    }
  }

  function handleChangePage(page: number) {
    console.log('caiu')
    setSearchParams({ page: page.toString() }, { replace: true })
  }

  async function getUsersPaged(page?: string) {
    setLoadingUsersState(true)
    try {
      const response = await userService.loadAllPaged(
        variables.LIMIT_TABLE_ROWS,
        Number(page)
      )
      setAllUsersState(response.instances ?? [])
      setTotalPage(parseInt(response.totalPages.toString()))
    } catch (error) {
      const { response } = error as AxiosError

      addToast(
        `Falha ao buscar usuários - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoadingUsersState(false)
    }
  }

  async function handleSubmitCreateUser() {
    setLoadingFormState(true)

    try {
      await userService.create(userState)
      handleCloseModalCreate()
      addToast('Plataforma criada com sucesso!', ToastType.SUCCESS)
      getUsers()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao criar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setUserState(initStateForm)
    }
  }

  async function handleSubmitEditUser() {
    try {
      await userService.updateById(userState)
      handleCloseModalEdit()
      addToast('Plataforma editada com sucesso!', ToastType.SUCCESS)
      getUsers()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao editar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  async function handleSubmitDeleteUser() {
    try {
      await userService.deleteById(userState.id)
      handleCloseModalDelete()
      addToast('Plataforma deletada com sucesso!', ToastType.SUCCESS)
      getUsers()
    } catch (error) {
      const { response } = error as AxiosError
      addToast(
        `Falha ao deletar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  return {
    allUsersState,
    userState,
    initStateForm,
    loadingUsersState,
    setLoadingUsersState,
    loadingFormState,
    showModalCreate,
    showModalEdit,
    showModalDelete,
    dataActionState,
    totalPage,
    page,

    handleOpenModalCreate,
    handleOpenModalEdit,
    handleOpenModalDelete,
    handleCloseModalCreate,
    handleCloseModalEdit,
    handleCloseModalDelete,
    getUsers,
    getUserById,
    handleSubmitCreateUser,
    handleSubmitEditUser,
    handleSubmitDeleteUser,
    handleChangePage,
    getUsersPaged
  }
}
