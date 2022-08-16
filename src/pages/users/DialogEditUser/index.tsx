import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import { InputField } from '../../../components/InputField'
import { IUserDTO } from '../../../dtos/IUserDTO'

interface IDialogEditUser {
  user: IUserDTO
  openModalEdit: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onCloseModalEdit: () => void
  onSubmitEditUser: () => Promise<void>
}

export function DialogEditUser({
  user,
  openModalEdit,
  onChange,
  onCloseModalEdit,
  onSubmitEditUser
}: IDialogEditUser) {
  return (
    <Dialog open={openModalEdit} onClose={onCloseModalEdit}>
      <DialogTitle>Dados do Usuário</DialogTitle>
      <DialogContent>
        <InputField
          label="Nome"
          name="name"
          onChange={onChange}
          value={user.name}
        />
        <InputField
          label="E-mail"
          name="email"
          onChange={onChange}
          value={user.email}
          type="email"
        />
        <InputField
          label="Senha"
          name="password"
          onChange={onChange}
          value={user.password}
          type="password"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseModalEdit}>Cancelar</Button>
        <Button onClick={onSubmitEditUser}>Editar</Button>
      </DialogActions>
    </Dialog>
  )
}
