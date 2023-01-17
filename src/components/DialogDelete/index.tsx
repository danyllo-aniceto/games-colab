import { DialogContent, DialogActions, Button } from '@mui/material'
import { Dialog } from '../StyledDialog'

interface IDialogDeleteUserProps {
  open: boolean
  onClose: () => void
  entity: any
  onSubmitDelete: (entity: any) => Promise<void>
  title: string
  deleteConfirmationText: string
  textButtonCancel: string
  textButtonConfirm: string
}

export function DialogDelete({
  open,
  onClose,
  entity,
  onSubmitDelete,
  title,
  deleteConfirmationText,
  textButtonCancel,
  textButtonConfirm
}: IDialogDeleteUserProps) {
  return (
    <Dialog open={open} onClose={onClose} title={title}>
      <>
        <DialogContent>{deleteConfirmationText}</DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{textButtonCancel}</Button>
          <Button onClick={() => onSubmitDelete(entity)}>
            {textButtonConfirm}
          </Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
