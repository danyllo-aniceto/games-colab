import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'

interface IDialogDeleteGameProps {
  open: boolean
  onClose: () => void
  onSubmitDelete: () => Promise<void>
}

export function DialogDeleteGame({
  open,
  onClose,
  onSubmitDelete
}: IDialogDeleteGameProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Deletar Jogo</DialogTitle>
      <DialogContent>Tem certeza que deseja excluir este jogo?</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onSubmitDelete}>Deletar</Button>
      </DialogActions>
    </Dialog>
  )
}
