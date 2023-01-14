import { DialogContent, DialogActions, Button } from "@mui/material";
import React from "react";
import { InputField } from "../../../../components/InputField";
import { IUserDTO } from "../../../../dtos/IUserDTO";
import { Dialog } from "../../../../components/StyledDialog";

interface IDialogFormUser {
  title: string;
  textButtonCancel: string;
  textButtonConfirm: string;
  user: IUserDTO;
  open: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
  onSubmit: (user: IUserDTO) => Promise<void>;
}

export function DialogFormUser({
  user,
  open,
  textButtonCancel,
  textButtonConfirm,
  title,
  onChange,
  onClose,
  onSubmit,
}: IDialogFormUser) {
  return (
    <Dialog open={open} onClose={onClose} title={title}>
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
          <Button onClick={onClose}>{textButtonCancel}</Button>
          <Button onClick={() => onSubmit(user)}>{textButtonConfirm}</Button>
        </DialogActions>
      </>
    </Dialog>
  );
}
