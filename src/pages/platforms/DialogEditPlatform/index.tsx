import { DialogContent, DialogActions, Button } from '@mui/material'
import React from 'react'
import { InputField } from '../../../components/InputField'
import { IPlatformDTO } from '../../../dtos/IPlatformDTO'
import { Dialog } from '../../../components/StyledDialog'

interface IDialogEditPlatform {
  platform: IPlatformDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitEdit: () => Promise<void>
}

export function DialogEditPlatform({
  platform,
  open,
  onChange,
  onClose,
  onSubmitEdit
}: IDialogEditPlatform) {
  return (
    <Dialog open={open} onClose={onClose} title="Dados da Plataforma">
      <>
        <DialogContent>
          <InputField
            label="Nome"
            name="name"
            onChange={onChange}
            value={platform.name}
          />

          <InputField
            label="Imagem"
            name="image"
            onChange={onChange}
            value={platform.image}
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
