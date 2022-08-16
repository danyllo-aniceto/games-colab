import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'

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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Deletar Usuário</DialogTitle>
      <DialogContent>
        Tem certeza que deseja excluir este usuário?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onSubmitDelete}>Deletar</Button>
      </DialogActions>
    </Dialog>
  )
}
