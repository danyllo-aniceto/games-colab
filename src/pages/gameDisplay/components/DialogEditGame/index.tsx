import { DialogContent, DialogActions, Button } from '@mui/material'
import React from 'react'
import { InputField } from '../../../../components/InputField'
import { IGameDTO } from '../../../../dtos/IGameDTO'
import { Dialog } from '../../../../components/StyledDialog'

interface IDialogEditGame {
  game: IGameDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitEdit: () => Promise<void>
}

export function DialogEditGame({
  game,
  open,
  onChange,
  onClose,
  onSubmitEdit
}: IDialogEditGame) {
  return (
    <Dialog open={open} onClose={onClose} title="Dados do Jogo">
      <>
        <DialogContent>
          <InputField
            label="Nome"
            name="name"
            onChange={onChange}
            value={game.name}
          />
          <InputField
            label="Resumo"
            name="summary"
            onChange={onChange}
            value={game.summary}
          />
          <InputField
            label="Desenvolvedor"
            name="developer"
            onChange={onChange}
            value={game.developer}
          />
          {/** Problema de tipagem: Input não pode receber array trocar por um selector */}
          {/* <InputField
          label="Plataforma"
          name="idPlatform"
          onChange={onChange}
          value={game.idPlatform}
        /> */}
          <InputField
            label="Gênero"
            name="genre"
            onChange={onChange}
            value={game.genre}
          />
          <InputField
            label="Imagem"
            name="image"
            onChange={onChange}
            value={game.image}
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
