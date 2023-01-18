import {
  DialogActions,
  DialogContent,
  Rating,
  Typography,
  Button
} from '@mui/material'
import { InputField } from '../../../../components/InputField'
import { Dialog } from '../../../../components/StyledDialog'
import { IEvaluationDTO } from '../../../../dtos/IEvaluationDTO'

interface IDialogEditEvaluation {
  evaluation: IEvaluationDTO
  open: boolean
  idGame: number
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
  onSubmitEdit: (eva: IEvaluationDTO, idGame: number) => Promise<void>
}

export function DialogEditEvaluation({
  open,
  evaluation,
  idGame,
  onChange,
  onClose,
  onSubmitEdit
}: IDialogEditEvaluation) {
  return (
    <Dialog open={open} onClose={onClose} title="Dados da Avaliação">
      <>
        <DialogContent>
          <InputField
            label="Comentário"
            name="comment"
            onChange={onChange}
            value={evaluation.comment}
          />
          <Typography component="legend">Nota</Typography>
          <Rating
            name={'rating'}
            value={evaluation.rating}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={() => onSubmitEdit(evaluation, idGame)}>
            Editar Avaliação
          </Button>
        </DialogActions>
      </>
    </Dialog>
  )
}
