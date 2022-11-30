import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoadingComponent } from '../../components/Loading'
import { Toast } from '../../components/Toast'
import { IMessageAlert, ToastType } from '../../components/Toast/enum'
import { IGameDTO } from '../../dtos/IGameDTO'
import { BaseLayout } from '../../layout/BaseLayout'
import GameService from '../../services/GameService'
import { ILoadTopThreeGamesDTOResponse } from '../../services/GameService/dtos/ILoadTopThreeGamesDTO'
import {
  Box,
  Card,
  Container,
  ContentTopGames,
  Header,
  Content,
  Text
} from './styles'

export function Dashboard() {
  // constante da instância da service
  const gameService = new GameService()
  // estado do loading
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // estados do ToastAlert
  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState<IMessageAlert>({
    type: ToastType.SUCCESS,
    message: ''
  })

  const [game, setGame] = useState<ILoadTopThreeGamesDTOResponse>({
    name: '',
    sum: 0,
    image: '',
    id: 0
  })
  // estado de listagem de jogos
  const [listGames, setListGames] = useState<ILoadTopThreeGamesDTOResponse[]>(
    []
  )

  function displayNotificationMessage(message: string, type: ToastType) {
    setOpenAlert(true)
    setMessageAlert({ message, type })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setGame(values => ({ ...values, [name]: value }))
  }

  async function getTopThreeGames() {
    setLoading(true)
    try {
      const response = await gameService.getTopThreeGames()
      setListGames(response)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao buscar os três melhores jogos - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getTopThreeGames()
  }, [])
  return (
    <BaseLayout>
      <>
        <Toast
          open={openAlert}
          onClose={() => setOpenAlert(false)}
          type={messageAlert.type}
          message={messageAlert.message}
        />
        {loading ? (
          <LoadingComponent open={loading} onClose={() => setLoading(false)} />
        ) : (
          <Container>
            <Header>
              <h1>Bem Vindo!</h1>
              <h3>
                Sistema colaborativo para cadastramento, avaliação e consulta de
                jogos
              </h3>
            </Header>

            <ContentTopGames>
              <Text>
                <p>
                  &nbsp;O <strong>Meu Game Favorito</strong> tem como objetivo
                  exibir uma avaliação geral do público de games sobre os jogos
                  lançados para consoles como: Playstation, Xbox, NintendoSwith,
                  Windows, etc.
                </p>
                <p>
                  &nbsp;Cadastre jogos colocando as informações necessárias,
                  avalie os jogos deixando sua nota e um comentário e veja quais
                  jogos fazem mais sucesso entre o público!!!
                </p>
                <h1>TOP 3 JOGOS 🎮</h1>
              </Text>

              {listGames.map((game, index) => (
                <Card
                  onClick={() => navigate(`/gameDisplay/${game.id}`)}
                  key={game.id}
                >
                  <Box url={game.image}>
                    <Content>
                      <h2>{index + 1}º</h2>
                    </Content>
                  </Box>
                </Card>
              ))}
            </ContentTopGames>
          </Container>
        )}
      </>
    </BaseLayout>
  )
}
