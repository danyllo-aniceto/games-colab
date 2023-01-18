import { useEvaluation } from '../../../../hooks/network/useEvaluation'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../../../hooks/useAuth'
import { useEffect, useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { InputField } from '../../../../components/InputField'
import { Button } from '../../../../components/Button'
import { IEvaluationDTO } from '../../../../dtos/IEvaluationDTO'
import { DialogDeleteEvaluation } from '../DialogDeleteEvaluation'
import { DialogEditEvaluation } from '../DialogEditEvaluation'

import {
  EvaluationContent,
  Evaluation,
  SubTitle,
  StyleTextField,
  RatingAndEvaluation,
  ContentButtons,
  Comment,
  CommentContent,
  ItemsComment,
  ContentRaiting
} from './styles'

export function EvaluationContainer() {
  const {
    handleSubmitCreateEvaluation,
    handleSubmitDeleteEvaluation,
    handleSubmitEditEvaluation,
    getEvaluationByIdGame,
    onToggleModalDelete,
    onToggleModalEdit,
    showModalDeleteEvaluation,
    allEvaluationsState,
    showModalEdit
  } = useEvaluation()

  const { id } = useParams<'id'>()

  const { userDecrypt } = useAuth()
  const idUser = Number(userDecrypt?.sub)
  const idGame = Number(id)

  const initStateFormEvaluation = {
    id: null,
    comment: '',
    idGame: idGame,
    idUser: idUser,
    rating: 0
  }

  const [evaluationState, setEvaluationState] = useState<IEvaluationDTO>(
    initStateFormEvaluation
  )

  function handleChangeEvaluation(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setEvaluationState(values => ({ ...values, [name]: value }))
  }

  useEffect(() => {
    getEvaluationByIdGame(Number(id))
  }, [])

  return (
    <>
      <EvaluationContent>
        <SubTitle>Contribua com sua avaliação!</SubTitle>

        <Evaluation>
          <Box
            sx={{
              width: 800,
              maxWidth: '100%'
            }}
          >
            <StyleTextField>
              {/* <TextField fullWidth label="Comentário" /> */}
              <InputField
                label="Comentário"
                name={'comment'}
                onChange={handleChangeEvaluation}
                value={evaluationState.comment}
                variant="outlined"
                isTextArea
              />
            </StyleTextField>
          </Box>
          <RatingAndEvaluation>
            <div>
              <Typography component="legend">Nota</Typography>
              <Rating
                name={'rating'}
                value={evaluationState.rating}
                onChange={(event, newValue) =>
                  setEvaluationState(valuesEval => ({
                    ...valuesEval,
                    rating: newValue
                  }))
                }
              />
            </div>
            <ContentButtons>
              <Button
                onClick={() => {
                  handleSubmitCreateEvaluation(evaluationState, idGame)
                }}
              >
                Avaliar
              </Button>
            </ContentButtons>
          </RatingAndEvaluation>
        </Evaluation>
      </EvaluationContent>
      <SubTitle>Avaliações</SubTitle>
      {allEvaluationsState.map(eva => (
        <CommentContent key={eva.id}>
          <Comment>&nbsp;{eva.comment}</Comment>
          <ItemsComment>
            <ContentRaiting>
              <Rating name="read-only" value={eva.rating} readOnly />
            </ContentRaiting>
            <div>
              <EditIcon
                color="action"
                onClick={() => {
                  setEvaluationState({
                    id: eva.id,
                    comment: eva.comment,
                    idGame: idGame,
                    idUser: idUser,
                    rating: eva.rating
                  })
                  onToggleModalEdit()
                }}
              />
              <DeleteIcon
                color="warning"
                onClick={e => {
                  setEvaluationState({
                    id: eva.id,
                    ...eva
                  })
                  onToggleModalDelete()
                  console.log(eva)
                }}
              />
            </div>
          </ItemsComment>
        </CommentContent>
      ))}

      <DialogDeleteEvaluation
        open={showModalDeleteEvaluation}
        onClose={onToggleModalDelete}
        evaluationState={evaluationState}
        onSubmitDelete={handleSubmitDeleteEvaluation}
        idGame={idGame}
      />

      <DialogEditEvaluation
        open={showModalEdit}
        onClose={onToggleModalEdit}
        evaluation={evaluationState}
        onChange={handleChangeEvaluation}
        onSubmitEdit={handleSubmitEditEvaluation}
        idGame={idGame}
      />
    </>
  )
}
