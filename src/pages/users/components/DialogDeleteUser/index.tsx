import { DialogContent, DialogActions, Button } from "@mui/material";
import { Dialog } from "../../../../components/StyledDialog";
import { IUserDTO } from "../../../../dtos/IUserDTO";

interface IDialogDeleteUserProps {
  open: boolean;
  onClose: () => void;
  user: IUserDTO;
  onSubmitDelete: (user: IUserDTO) => Promise<void>;
}

export function DialogDeleteUser({
  open,
  onClose,
  user,
  onSubmitDelete,
}: IDialogDeleteUserProps) {
  return (
    <Dialog open={open} onClose={onClose} title="Deletar Usuário">
      <>
        <DialogContent>
          Tem certeza que deseja excluir este usuário?
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={() => onSubmitDelete(user)}>Deletar</Button>
        </DialogActions>
      </>
    </Dialog>
  );
}
