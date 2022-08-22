import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import React from 'react'
import { InputField } from '../../../components/InputField'
import { IGameDTO } from '../../../dtos/IGameDTO'

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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Dados do Jogo</DialogTitle>
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
        <InputField
          label="Console"
          name="console"
          onChange={onChange}
          value={game.console}
        />
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
    </Dialog>
  )
}
