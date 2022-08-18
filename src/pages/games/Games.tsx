import { Container, Info, Item, ContentButton } from './styles'

import { useEffect, useState } from 'react'
import { BaseLayout } from '../../layout/BaseLayout'
import GameService from '../../services/GameService'
import { Slider, SliderProps, Slide } from '../../components/Slider'
import { LoadingComponent } from '../../components/Loading'
import { IGameDTO } from '../../dtos/IGameDTO'
import { DialogCreateGame } from './DialogCreateGame'
import { ToastType } from '../../components/Toast/enum'
import { AxiosError } from 'axios'
import { Toast } from '../../components/Toast'
import { Link } from 'react-router-dom'

interface IMessageAlert {
  message: string
  type: ToastType
}

export function Games() {
  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    loop: false,
    navigation: true,
    draggable: true,
    pagination: {
      clickable: true
    }
  }

  // constante da instância da service
  const gameService = new GameService()

  // estado do objeto game
  const [game, setGame] = useState<IGameDTO>({
    id: null,
    name: '',
    developer: '',
    summary: '',
    console: '',
    genre: '',
    image: '',
    raiting: null
  })

  // estado do loading
  const [loading, setLoading] = useState(false)

  // estado de listagem de jogos
  const [listGames, setListGames] = useState<IGameDTO[]>([])

  // estados do modal de criar um game
  const [openModalNewGame, setOpenModalNewGame] = useState(false)

  // estados do ToastAlert
  const [openAlert, setOpenAlert] = useState(false)
  const [messageAlert, setMessageAlert] = useState<IMessageAlert>({
    type: ToastType.SUCCESS,
    message: ''
  })

  function displayNotificationMessage(message: string, type: ToastType) {
    setOpenAlert(true)
    setMessageAlert({ message, type })
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name } = event.target
    const { value } = event.target
    setGame(values => ({ ...values, [name]: value }))
  }

  /*************************************************************************/
  async function getGames() {
    setLoading(true)
    try {
      const response = await gameService.loadAll()
      setListGames(response)
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao buscar jogos - ${response?.data?.message}`,
        ToastType.ERROR
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getGames()
  }, [])

  /*************************************************************************/
  async function handleCreateNewGame() {
    try {
      await gameService.create(game)
      setOpenModalNewGame(false)
      displayNotificationMessage('Jogo criado com sucesso!', ToastType.SUCCESS)
      getGames()
    } catch (error) {
      const { response } = error as AxiosError
      displayNotificationMessage(
        `Falha ao criar jogo - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }

    setGame({
      id: null,
      name: '',
      developer: '',
      summary: '',
      console: '',
      genre: '',
      image: '',
      raiting: null
    })
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
              <ContentButton>
                <button
                  onClick={() => {
                    setGame({
                      id: null,
                      name: '',
                      developer: '',
                      summary: '',
                      console: '',
                      genre: '',
                      image: '',
                      raiting: null
                    })
                    setOpenModalNewGame(true)
                  }}
                >
                  Novo Jogo
                </button>
              </ContentButton>

              <Slider settings={settings}>
                {listGames.map(game => (
                  <Slide>
                    <Link to="/gameDisplay">
                      <Item key={game.id}>
                        <div className="image">
                          <img src={game.image} alt={game.name} />
                        </div>
                        <Info>
                          <span className="name-game">{game.name}</span>
                          <span className="developer-game">
                            {game.developer}
                          </span>
                          <span className="console-game">{game.console}</span>
                        </Info>
                      </Item>
                    </Link>
                  </Slide>
                ))}
              </Slider>
            </>
          )}
          <DialogCreateGame
            open={openModalNewGame}
            onClose={() => setOpenModalNewGame(false)}
            onChange={handleChange}
            onSubmitCreate={handleCreateNewGame}
            game={game}
          />
        </Container>
      </>
    </BaseLayout>
  )
}
