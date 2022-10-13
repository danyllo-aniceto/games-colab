import { DialogContent, DialogActions, Button } from '@mui/material'
import { Dialog } from '../../../components/StyledDialog'

interface IDialogDeleteUserProps {
  open: boolean
  onClose: () => void
  onSubmitDelete: () => Promise<void>
}

export function DialogDeleteUser({
  open,
  onClose,
  onSubmitDelete
}: IDialogDeleteUserProps) {
  return (
    <Dialog open={open} onClose={onClose} title="Deletar Usuário">
      <>
        <DialogContent>
          Tem certeza que deseja excluir este usuário?
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onSubmitDelete}>Deletar</Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
