import {
  Button,
  DialogActions,
  DialogContent,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { InputField } from "../../../../components/InputField";
import { Select } from "../../../../components/Select";
import { Dialog } from "../../../../components/StyledDialog";
import { IGameDTO } from "../../../../dtos/IGameDTO";
import { IPlatformDTO } from "../../../../dtos/IPlatformDTO";
import { ContentRadio, Label } from "./styles";

// teste

interface IDialogCreateGame {
  game: IGameDTO;
  open: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (event: SelectChangeEvent<(string | number)[]>) => void;
  onClose: () => void;
  onSubmitCreate: () => Promise<void>;
  arrayPlatforms: IPlatformDTO[];
}

export function DialogCreateGame({
  game,
  open,
  onChange,
  onChangeSelect,
  onClose,
  onSubmitCreate,
  arrayPlatforms,
}: IDialogCreateGame) {
  const [showInputUpload, setShowInputUpload] = useState(false);
  console.log(arrayPlatforms);

  return (
    <Dialog onClose={onClose} open={open} title="Cadastrar Jogo">
      <>
        <DialogContent>
          <InputField
            value={game.name}
            onChange={onChange}
            label="Nome"
            name={"name"}
          />
          <InputField
            value={game.developer}
            onChange={onChange}
            label="Desenvolvedor"
            name={"developer"}
          />
          <InputField
            value={game.summary}
            onChange={onChange}
            label="Descrição"
            name={"summary"}
          />
          <InputField
            value={game.genre}
            onChange={onChange}
            label="Gênero"
            name={"genre"}
          />
          <Select
            label="Plataforma"
            array={arrayPlatforms}
            name="idPlatform"
            onChange={onChangeSelect}
            value={game.idPlatformForm}
            stateMultiple={game.idPlatformForm}
            isMultiple
            setId
          />

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
  );
}