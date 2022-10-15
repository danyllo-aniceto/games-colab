import { DialogContent, DialogActions, Button } from '@mui/material'
import { InputField } from '../../../components/InputField'
import { IUserDTO } from '../../../dtos/IUserDTO'
import { Dialog } from '../../../components/StyledDialog'

interface IDialogEditUser {
  user: IUserDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitEdit: () => Promise<void>
}

export function DialogEditUser({
  user,
  open,
  onChange,
  onClose,
  onSubmitEdit
}: IDialogEditUser) {
  return (
    <Dialog open={open} onClose={onClose} title="Dados do Usuário">
      <>
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
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onSubmitEdit}>Editar</Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
