import { DialogContent, DialogActions, Button } from '@mui/material'
import { IEvaluationDTO } from '../../../../dtos/IEvaluationDTO'
import { DialogContainer } from './styles'

interface IDialogDeleteEvaluationProps {
  open: boolean
  onClose: () => void
  onSubmitDelete: (eva: IEvaluationDTO, idGame: number) => Promise<void>
  evaluationState: IEvaluationDTO
  idGame: number
}

export function DialogDeleteEvaluation({
  open,
  onClose,
  onSubmitDelete,
  evaluationState,
  idGame
}: IDialogDeleteEvaluationProps) {
  return (
    <DialogContainer open={open} onClose={onClose} title="Deletar Avaliação">
      <>
        <DialogContent>
          Tem certeza que deseja excluir esta avaliação?
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={() => onSubmitDelete(evaluationState, idGame)}>
            Deletar
          </Button>
        </DialogActions>
      </>
    </DialogContainer>
  )
}
