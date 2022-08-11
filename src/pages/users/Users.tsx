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
  DialogTitle,
  TextField,
  Snackbar,
  Alert
} from '@mui/material'

export function Users() {
  const [listUsers, setListUsers] = useState<ILoadUserDTOResponse[]>([])

  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

  const [id, setId] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [openAlert, setOpenAlert] = useState(false)

  /*****************************************/
  async function deleteUser() {
    console.log('Deletar usuário')
    const userService = new UserService()
    try {
      const response = await userService.deleteById(id)
      setOpenModalDelete(false)
      setOpenAlert(true)
      getUsers()
    } catch (error) {
      console.log('erro')
    }
  }

  /*****************************************/
  async function editUser() {
    const userService = new UserService()
    try {
      const response = await userService.updateById({
        id,
        name,
        email,
        password
      })
      setOpenModalEdit(false)
      setOpenAlert(true)
      getUsers()
    } catch (error) {
      console.log('Edição concluída')
    }
  }
  /*****************************************/

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
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={() => setOpenAlert(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={() => setOpenAlert(false)}
            severity="success"
            sx={{ width: '100%' }}
          >
            Operação realizada com sucesso.
          </Alert>
        </Snackbar>

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
                          setId(user.id)
                          setName(user.name)
                          setEmail(user.email)
                          setPassword(user.password)
                          setOpenModalEdit(true)
                        }}
                      />
                      <DeleteIcon
                        color="warning"
                        onClick={() => {
                          setId(user.id)
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
            <TextField
              value={name}
              onChange={event => setName(event.target.value)}
              autoFocus
              margin="dense"
              label="Nome"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              value={email}
              onChange={event => setEmail(event.target.value)}
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              value={password}
              onChange={event => setPassword(event.target.value)}
              margin="dense"
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
