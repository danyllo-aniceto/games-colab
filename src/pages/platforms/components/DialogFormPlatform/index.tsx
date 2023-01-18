import { DialogContent, DialogActions, Button } from '@mui/material'
import React from 'react'
import { InputField } from '../../../../components/InputField'
import { IPlatformDTO } from '../../../../dtos/IPlatformDTO'
import { Dialog } from '../../../../components/StyledDialog'

interface IDialogCreatePlatform {
  title: string
  textButtonCancel: string
  textButtonConfirm: string
  platform: IPlatformDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmit: (platform: IPlatformDTO) => Promise<void>
}

export function DialogFormPlatform({
  textButtonCancel,
  textButtonConfirm,
  title,
  platform,
  open,
  onChange,
  onClose,
  onSubmit
}: IDialogCreatePlatform) {
  return (
    <Dialog open={open} onClose={onClose} title={title}>
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
          <Button onClick={onClose}>{textButtonCancel}</Button>
          <Button onClick={() => onSubmit(platform)}>
            {textButtonConfirm}
          </Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
