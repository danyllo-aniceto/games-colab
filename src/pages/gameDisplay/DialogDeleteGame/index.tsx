import { DialogContent, DialogActions, Button } from '@mui/material'
import { Dialog } from '../../../components/StyledDialog'

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
    <Dialog open={open} onClose={onClose} title="Deletar Jogo">
      <>
        <DialogContent>Tem certeza que deseja excluir este jogo?</DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onSubmitDelete}>Deletar</Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
