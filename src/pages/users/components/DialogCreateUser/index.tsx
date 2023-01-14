import { DialogContent, DialogActions, Button } from "@mui/material";
import React from "react";
import { InputField } from "../../../../components/InputField";
import { IUserDTO } from "../../../../dtos/IUserDTO";
import { Dialog } from "../../../../components/StyledDialog";

interface IDialogCreateUser {
  user: IUserDTO;
  open: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onSubmitCreate: (user: IUserDTO) => Promise<void>;
}

export function DialogCreateUser({
  user,
  open,
  onChange,
  onClose,
  onSubmitCreate,
}: IDialogCreateUser) {
  return (
    <Dialog open={open} onClose={onClose} title="Cadastrar Usuário">
      <>
        <DialogContent>
          <InputField
            value={user.name}
            onChange={onChange}
            label="Nome"
            name="name"
          />
          <InputField
            value={user.email}
            onChange={onChange}
            label="E-mail"
            name="email"
            type="email"
          />
          <InputField
            value={user.password}
            onChange={onChange}
            label="Senha"
            name="password"
            type="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={() => onSubmitCreate(user)}>Cadastrar</Button>
        </DialogActions>
      </>
    </Dialog>
  );
}
