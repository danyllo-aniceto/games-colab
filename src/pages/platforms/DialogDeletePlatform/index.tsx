import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'

interface IDialogDeletePlatformProps {
  open: boolean
  onClose: () => void
  onSubmitDelete: () => Promise<void>
}

export function DialogDeletePlatform({
  open,
  onClose,
  onSubmitDelete
}: IDialogDeletePlatformProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Deletar Usuário</DialogTitle>
      <DialogContent>
        Tem certeza que deseja excluir este console?
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onSubmitDelete}>Deletar</Button>
      </DialogActions>
    </Dialog>
  )
}
