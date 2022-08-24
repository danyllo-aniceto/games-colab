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
  CommentContent
} from './styles'

import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

import React from 'react'

export function GameDisplay() {
  const [value, setValue] = React.useState<number | null>(0)
  const [loading, setLoading] = useState(false)
  const [game, setGame] = useState<IGameDTO>({
    id: null,
    name: '',
    developer: '',
    summary: '',
    console: '',
    genre: '',
    image: '',
    rating: 0
  })
  const { id } = useParams<'id'>()
  const navigate = useNavigate()
  const gameService = new GameService()

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
    setGame(values => ({ ...values, [name]: value }))
  }

  /****************************************************/

  async function getGameById(id: number): Promise<void> {
    setLoading(true)
    try {
      const response = await gameService.loadById(id)
      setGame(response)
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
      await gameService.updateById(game)
      setOpenModalEdit(false)
      displayNotificationMessage('Jogo editado com sucesso', ToastType.SUCCESS)
      getGameById(game.id)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao editar jogo - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
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
              <h1 className="game-title">{game?.name}</h1>
              <Content>
                <MainContent>
                  <img src={game?.image} alt={game?.name} />

                  <Summary>
                    <h1>Resumo</h1>
                    <p>&nbsp;{game?.summary}</p>
                    <TableContent>
                      <table>
                        <thead>
                          <tr>
                            <td>Desenvolvedor</td>
                            <td>Gênero</td>
                            <td>Console</td>
                            <td>Rating</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{game?.developer}</td>
                            <td>{game?.genre}</td>
                            <td>{game?.console}</td>
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
                          console: game.console,
                          developer: game.developer,
                          genre: game.genre,
                          image: game.image,
                          rating: game.rating,
                          summary: game.summary
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
                  <h1>Contribua com sua avaliação!</h1>
                  <Evaluation>
                    <Box
                      sx={{
                        width: 900,
                        maxWidth: '100%'
                      }}
                    >
                      <StyleTextField>
                        <TextField fullWidth label="Comentário" />
                      </StyleTextField>
                    </Box>
                    <RatingAndEvaluation>
                      <div>
                        <Typography component="legend">Nota</Typography>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue)
                          }}
                        />
                      </div>
                      <ContentButtons>
                        <Button>Avaliar</Button>
                      </ContentButtons>
                    </RatingAndEvaluation>
                  </Evaluation>
                </EvaluationContent>

                <TableContent>
                  <table>
                    <thead>
                      <tr>
                        <td>Avaliações</td>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <CommentContent>
                            <Comment>
                              haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </Comment>
                            <ItemsComment>
                              <ContentRaiting>
                                <Rating
                                  name="read-only"
                                  value={game.rating}
                                  readOnly
                                />
                              </ContentRaiting>
                              <DeleteIcon color="warning" />
                            </ItemsComment>
                          </CommentContent>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </TableContent>
              </Content>
            </>
          )}
        </Container>
        <DialogEditGame
          open={openModalEdit}
          onClose={() => setOpenModalEdit(false)}
          onChange={handleChange}
          onSubmitEdit={editGame}
          game={game}
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
