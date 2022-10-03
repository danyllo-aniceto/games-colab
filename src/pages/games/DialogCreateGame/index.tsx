import { DialogContent, DialogActions, Button } from '@mui/material'
import React, { useState } from 'react'
import { InputField } from '../../../components/InputField'
import { IGameDTO } from '../../../dtos/IGameDTO'
import { ContentRadio, StyledDialog, Image, Title, Label } from './styles'
import sonicImg from './../../../assets/sonic-videogame.png'
import { Dialog } from '../../../components/StyledDialog'

// teste

interface IDialogCreateGame {
  game: IGameDTO
  open: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitCreate: () => Promise<void>
}

export function DialogCreateGame({
  game,
  open,
  onChange,
  onClose,
  onSubmitCreate
}: IDialogCreateGame) {
  const [showInputUpload, setShowInputUpload] = useState(false)

  return (
    <Dialog onClose={onClose} open={open} title="Cadastrar Jogo">
      <>
        <DialogContent>
          <InputField
            value={game.name}
            onChange={onChange}
            label="Nome"
            name={'name'}
          />
          <InputField
            value={game.developer}
            onChange={onChange}
            label="Desenvolvedor"
            name={'developer'}
          />
          <InputField
            value={game.summary}
            onChange={onChange}
            label="Descrição"
            name={'summary'}
          />
          <InputField
            value={game.genre}
            onChange={onChange}
            label="Gênero"
            name={'genre'}
          />
          {/** Problema de tipagem: Input não pode receber array trocar por um selector */}
          {/* <InputField
          label="Plataforma"
          name="idPlatform"
          onChange={onChange}
          value={game.idPlatform}
        /> */}

          <ContentRadio>
            <Label>
              <input
                type="radio"
                name="radio_image"
                value="upload"
                onChange={onChange}
                onClick={() => setShowInputUpload(true)}
              />
              Upload
            </Label>

            <label>
              <input
                type="radio"
                name="radio_image"
                value="link"
                onChange={onChange}
                onClick={() => setShowInputUpload(false)}
              />
              Link
            </label>
          </ContentRadio>

          {showInputUpload ? (
            <InputField
              value={game.file}
              type="file"
              onChange={onChange}
              label="Link da imagem"
              name="file"
            />
          ) : (
            <InputField
              value={game.image}
              onChange={onChange}
              label="Link da imagem"
              name="image"
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onSubmitCreate}>Cadastrar</Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
