import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { LoadingComponent } from '../../components/Loading'
import { Toast } from '../../components/Toast'
import { IMessageAlert, ToastType } from '../../components/Toast/enum'
import { IGameDTO } from '../../dtos/IGameDTO'
import { BaseLayout } from '../../layout/BaseLayout'
import GameService from '../../services/GameService'
import { DialogDeleteGame } from './DialogDeleteGame'
import { DialogEditGame } from './DialogEditGame'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Container,
  Content,
  ContentButtons,
  ContentRaiting,
  SecondaryContent,
  MainContent,
  Summary,
  EvaluationContent,
  Evaluation,
  StyleTextField,
  RatingAndEvaluation,
  TableContent,
  Comment,
  ItemsComment,
  CommentContent,
  SubTitle,
  GameTitle,
  Img
} from './styles'

import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import React from 'react'
import { InputField } from '../../components/InputField'
import EvaluationService from '../../services/EvaluationService'
import { ILoadEvaluationResponse } from '../../services/EvaluationService/dtos/ILoadEvaluationDTO'
import { ICreateEvaluationDTOResponse } from '../../services/EvaluationService/dtos/ICreateEvaluationDTO'
import { IEvaluationDTO } from '../../dtos/IEvaluationDTO'

export function GameDisplay() {
  const [value, setValue] = React.useState<number | null>(0)
  const [loading, setLoading] = useState(false)
  const [game, setGame] = useState<IGameDTO>({
    id: null,
    name: '',
    developer: '',
    summary: '',
    idPlatform: [],
    genre: '',
    image: '',
    rating: 0,
    file: ''
  })

  const [gameModal, setGameModal] = useState<IGameDTO>({
    id: null,
    name: '',
    developer: '',
    summary: '',
    idPlatform: [],
    genre: '',
    image: '',
    rating: null,
    file: ''
  })

  const [evaluation, setEvaluation] = useState<IEvaluationDTO>({
    id: null,
    idUser: null,
    idGame: null,
    rating: 0,
    comment: ''
  })
  const { id } = useParams<'id'>()
  const navigate = useNavigate()
  const gameService = new GameService()
  const evaluationService = new EvaluationService()

  // estado de listagem de jogos
  const [listEvaluations, setListEvaluations] = useState<
    ILoadEvaluationResponse[]
  >([])

  // estados do ToastAlert
  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState<IMessageAlert>({
    type: ToastType.SUCCESS,
    message: ''
  })

  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false)

  function displayNotificationMessage(message: string, type: ToastType) {
    setOpenAlert(true)
    setMessageAlert({ message, type })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setGameModal(values => ({ ...values, [name]: value }))
  }
  function handleChangeEvaluation(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setEvaluation(values => ({ ...values, [name]: value }))
  }

  /****************************************************/

  async function getGameById(id: number): Promise<void> {
    setLoading(true)
    try {
      const response = await gameService.loadById(id)
      setGame(response)
      setGameModal(response)
    } catch (err) {
      const { response } = err as AxiosError
      displayNotificationMessage(
        `Falha ao buscar game - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      getGameById(Number(id))
    }
  }, [])
  /****************************************************/

  async function deleteGame() {
    try {
      await gameService.deleteById(game.id)
      setOpenModalDelete(false)

      displayNotificationMessage(
        'Jogo deletado com sucesso!',
        ToastType.SUCCESS
      )
      navigate('/games')
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao deletarv jogo - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  /****************************************************/
  async function editGame() {
    try {
      await gameService.updateById(gameModal)
      setOpenModalEdit(false)
      displayNotificationMessage('Jogo editado com sucesso', ToastType.SUCCESS)
      getGameById(gameModal.id)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao editar jogo - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  /****************************************************/
  async function getEvaluations(idGame: number) {
    setLoading(true)
    try {
      const response = await evaluationService.loadByIdGame(idGame)

      setListEvaluations(response)
      console.log(response)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao buscar avaliações - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getEvaluations(Number(id))
  }, [])

  /****************************************************/
  async function createEvaluation() {
    try {
      await evaluationService.create(evaluation)
      displayNotificationMessage(
        'Avaliação criada com sucesso!',
        ToastType.SUCCESS
      )
      getEvaluations(Number(id))
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao criar avaliação - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }

    setEvaluation({
      id: null,
      idUser: null,
      idGame: null,
      rating: 0,
      comment: ''
    })
    console.log('teste - ', evaluation)
  }

  return (
    <BaseLayout>
      <>
        <Toast
          open={openAlert}
          onClose={() => setOpenAlert(false)}
          type={messageAlert.type}
          message={messageAlert.message}
        />

        <Container>
          {loading ? (
            <LoadingComponent
              open={loading}
              onClose={() => setLoading(false)}
            />
          ) : (
            <>
              <GameTitle>{game?.name}</GameTitle>
              <Content>
                <MainContent>
                  <Img src={game?.image} alt={game?.name} />

                  <Summary>
                    <SubTitle>Resumo</SubTitle>
                    <p>&nbsp;{game?.summary}</p>

                    <TableContent>
                      <table>
                        <thead>
                          <tr>
                            <td>Desenvolvedor</td>
                            <td>Gênero</td>
                            <td>Plataforma</td>
                            <td>Rating</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{game?.developer}</td>
                            <td>{game?.genre}</td>
                            <td>{game?.idPlatform}</td>
                            <td>{game?.rating}</td>
                          </tr>
                        </tbody>
                      </table>
                    </TableContent>
                  </Summary>
                </MainContent>

                <SecondaryContent>
                  <ContentRaiting>
                    <Typography component="legend">Rating</Typography>
                    <Rating name="read-only" value={game.rating} readOnly />
                  </ContentRaiting>

                  <ContentButtons>
                    <Button
                      onClick={() => {
                        setGame({
                          id: game.id,
                          name: game.name,
                          idPlatform: game.idPlatform,
                          developer: game.developer,
                          genre: game.genre,
                          image: game.image,
                          rating: game.rating,
                          summary: game.summary,
                          file: game.file
                        })
                        setOpenModalEdit(true)
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => {
                        setGame({ id: game.id, ...game })
                        setOpenModalDelete(true)
                      }}
                    >
                      Deletar
                    </Button>
                    <Button onClick={() => navigate('/games')}>Voltar</Button>
                  </ContentButtons>
                </SecondaryContent>

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
                          value={evaluation.comment}
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
                          value={evaluation.rating}
                          onChange={(event, newValue) =>
                            setEvaluation(valuesEval => ({
                              ...valuesEval,
                              rating: newValue
                            }))
                          }
                        />
                      </div>
                      <ContentButtons>
                        <Button
                          onClick={createEvaluation}
                          onChange={handleChangeEvaluation}
                        >
                          Avaliar
                        </Button>
                      </ContentButtons>
                    </RatingAndEvaluation>
                  </Evaluation>
                </EvaluationContent>
                <SubTitle>Avaliações</SubTitle>
                {listEvaluations.map(eva => (
                  <CommentContent key={eva.id}>
                    <Comment>&nbsp;{eva.comment}</Comment>
                    <ItemsComment>
                      <ContentRaiting>
                        <Rating name="read-only" value={eva.rating} readOnly />
                      </ContentRaiting>
                      <DeleteIcon color="warning" />
                    </ItemsComment>
                  </CommentContent>
                ))}
              </Content>
            </>
          )}
        </Container>
        <DialogEditGame
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
          onChange={handleChange}
          onSubmitEdit={editGame}
          game={gameModal}
        />

        <DialogDeleteGame
          open={openModalDelete}
          onClose={() => setOpenModalDelete(false)}
          onSubmitDelete={deleteGame}
        />
      </>
    </BaseLayout>
  )
}
