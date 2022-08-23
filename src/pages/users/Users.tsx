import { useEffect, useState } from 'react'
import { BaseLayout } from '../../layout/BaseLayout'
import UserService from '../../services/UserService'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Container, ContentAction, Message } from './styles'
import { Toast } from '../../components/Toast'
import { AxiosError } from 'axios'
import { ToastType } from '../../components/Toast/enum'
import { IUserDTO } from '../../dtos/IUserDTO'
import { DialogEditUser } from './DialogEditUser'
import { DialogDeleteUser } from './DialogDeleteUser'
import { LoadingComponent } from '../../components/Loading'
import { EmptyItem } from '../../components/EmptyItem'
import { Button } from '../../components/Button'
import { ContentButton } from '../games/styles'
import { DialogCreateUser } from './DialogCreateUser'

interface IMessageAlert {
  message: string
  type: ToastType
}

export function Users() {
  // constante da instância da service
  const userService = new UserService()

  // estado da listagem de usuários
  const [listUsers, setListUsers] = useState<IUserDTO[]>([])

  // etados do modal de editar, deletar e criar
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)
  const [openModalNewUser, setOpenModalNewUser] = useState(false)

  // estado do objeto usuário
  const [user, setUser] = useState<IUserDTO>({
    id: null,
    name: '',
    email: '',
    password: ''
  })

  // estado do loading
  const [loading, setLoading] = useState(false)

  // estados do ToastAlert
  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState<IMessageAlert>({
    type: ToastType.SUCCESS,
    message: ''
  })

  function displayNotificationMessage(message: string, type: ToastType) {
    setOpenAlert(true)
    setMessageAlert({ message, type })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setUser(values => ({ ...values, [name]: value }))
  }

  /*****************************************/
  async function deleteUser() {
    try {
      await userService.deleteById(user.id)
      setOpenModalDelete(false)
      displayNotificationMessage(
        'Usuário deletado com sucesso!',
        ToastType.SUCCESS
      )
      getUsers()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao deletar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  /*****************************************/
  async function editUser() {
    try {
      await userService.updateById(user)
      setOpenModalEdit(false)
      displayNotificationMessage(
        'Usuário editado com sucesso!',
        ToastType.SUCCESS
      )
      getUsers()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao editar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }
  /*****************************************/

  async function getUsers() {
    setLoading(true)
    try {
      const response = await userService.loadAll()
      setListUsers(response)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao buscar usuários - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  /*****************************************/
  async function handleCreateNewUser() {
    try {
      await userService.create(user)
      setOpenModalNewUser(false)
      displayNotificationMessage(
        'Usuário criado com sucesso!',
        ToastType.SUCCESS
      )
      getUsers()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao criar usuário - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }

    setUser({
      id: null,
      name: '',
      email: '',
      password: ''
    })
  }
  /*****************************************/

  return (
    <BaseLayout>
      <>
        <Toast
          open={openAlert}
          onClose={() => setOpenAlert(false)}
          type={messageAlert.type}
          message={messageAlert.message}
        />

        <Container>
          {loading ? (
            <LoadingComponent
              open={loading}
              onClose={() => setLoading(false)}
            />
          ) : (
            <>
              {listUsers.length === 0 ? (
                <Message>
                  <EmptyItem message="Nenhum usuário encontrado 😢" />
                </Message>
              ) : (
                <>
                  <ContentButton>
                    <Button
                      onClick={() => {
                        setUser({
                          id: null,
                          name: '',
                          email: '',
                          password: ''
                        })
                        setOpenModalNewUser(true)
                      }}
                    >
                      Novo Usuário
                    </Button>
                  </ContentButton>
                  <table>
                    <thead>
                      <tr>
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Ações</td>
                      </tr>
                    </thead>

                    <tbody>
                      {listUsers.map(user => (
                        <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <ContentAction>
                              <EditIcon
                                color="action"
                                onClick={() => {
                                  setUser({
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    password: user.password
                                  })
                                  setOpenModalEdit(true)
                                }}
                              />
                              <DeleteIcon
                                color="warning"
                                onClick={() => {
                                  setUser({ id: user.id, ...user })
                                  setOpenModalDelete(true)
                                }}
                              />
                            </ContentAction>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </>
          )}
        </Container>

        <DialogCreateUser
          open={openModalNewUser}
          onClose={() => setOpenModalNewUser(false)}
          onChange={handleChange}
          onSubmitCreate={handleCreateNewUser}
          user={user}
        />

        <DialogEditUser
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
          onChange={handleChange}
          onSubmitEdit={editUser}
          user={user}
        />

        <DialogDeleteUser
          open={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
          onSubmitDelete={deleteUser}
        />
      </>
    </BaseLayout>
  )
}
