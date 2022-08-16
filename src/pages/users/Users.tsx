import { useEffect, useState } from 'react'
import { BaseLayout } from '../../layout/BaseLayout'
import UserService from '../../services/UserService'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Container, ContentAction } from './styles'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'
import { Toast } from '../../components/Toast'
import { AxiosError } from 'axios'
import { ToastType } from '../../components/Toast/enum'
import { IUserDTO } from '../../dtos/IUserDTO'
import { InputField } from '../../components/InputField'

interface IMessageAlert {
  message: string
  type: ToastType
}

export function Users() {
  // constante da instância da service
  const userService = new UserService()

  // estado da listagem de usuários
  const [listUsers, setListUsers] = useState<IUserDTO[]>([])

  // etados do modal de editar e deletar
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

  // estado do objeto usuário
  const [user, setUser] = useState<IUserDTO>({
    id: null,
    name: '',
    email: '',
    password: ''
  })

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
    try {
      const response = await userService.loadAll()
      setListUsers(response)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao buscar usuários - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

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
        </Container>
        <Dialog open={openModalEdit} onClose={() => setOpenModalEdit(false)}>
          <DialogTitle>Dados do Usuário</DialogTitle>
          <DialogContent>
            <InputField
              label="Nome"
              name="name"
              onChange={handleChange}
              value={user.name}
            />
            <InputField
              label="E-mail"
              name="email"
              onChange={handleChange}
              value={user.email}
              type="email"
            />
            <InputField
              label="Senha"
              name="password"
              onChange={handleChange}
              value={user.password}
              type="password"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModalEdit(false)}>Cancelar</Button>
            <Button onClick={editUser}>Editar</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
        >
          <DialogTitle>Deletar Usuário</DialogTitle>
          <DialogContent>
            Tem certeza que deseja excluir este usuário?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModalDelete(false)}>Cancelar</Button>
            <Button onClick={deleteUser}>Deletar</Button>
          </DialogActions>
        </Dialog>
      </>
    </BaseLayout>
  )
}
