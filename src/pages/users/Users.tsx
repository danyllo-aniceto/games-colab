import { useEffect, useState } from 'react'
import { BaseLayout } from '../../layout/BaseLayout'
import UserService from '../../services/UserService'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { ILoadUserDTOResponse } from '../../services/UserService/dtos/ILoadUserDTO'
import { Container, ContentAction } from './styles'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@mui/material'
import { IDeleteUserDTOResponse } from '../../services/UserService/dtos/IDeleteUserDTO'

export function Users() {
  const [listUsers, setListUsers] = useState<ILoadUserDTOResponse[]>([])
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

  function deleteUser() {
    console.log('Deletar usuário')
  }

  function editUser() {
    console.log('Edição concluída')
  }

  async function getUsers() {
    const userService = new UserService()

    try {
      const response = await userService.loadAll()
      setListUsers(response)
    } catch (error) {
      console.log('erro')
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <BaseLayout>
      <>
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
                        onClick={() => setOpenModalEdit(true)}
                      />
                      <DeleteIcon
                        color="warning"
                        onClick={() => setOpenModalDelete(true)}
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
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nome"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Senha"
              type="password"
              fullWidth
              variant="standard"
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
