import { DialogContent, DialogActions, Button } from '@mui/material'
import React from 'react'
import { InputField } from '../../../../components/InputField'
import { IPlatformDTO } from '../../../../dtos/IPlatformDTO'
import { Dialog } from '../../../../components/StyledDialog'

interface IDialogCreatePlatform {
  platform: IPlatformDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitCreate: () => Promise<void>
}

export function DialogCreatePlatform({
  platform,
  open,
  onChange,
  onClose,
  onSubmitCreate
}: IDialogCreatePlatform) {
  return (
    <Dialog open={open} onClose={onClose} title="Cadastrar Plataforma">
      <>
        <DialogContent>
          <InputField
            value={platform.name}
            onChange={onChange}
            label="Nome"
            name={'name'}
          />
          <InputField
            value={platform.image}
            onChange={onChange}
            label="Imagem"
            name={'image'}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onSubmitCreate}>Cadastrar</Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
