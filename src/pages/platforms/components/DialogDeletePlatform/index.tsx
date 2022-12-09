import { DialogContent, DialogActions, Button } from '@mui/material'
import { Dialog } from '../../../../components/StyledDialog'
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
    <Dialog open={open} onClose={onClose} title="Deletar Plataforma">
      <>
        <DialogContent>
          Tem certeza que deseja excluir esta plataforma?
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onSubmitDelete}>Deletar</Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
