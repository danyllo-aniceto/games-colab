import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Toast } from '../../components/Toast'
import { IMessageAlert, ToastType } from '../../components/Toast/enum'
import { IGameDTO } from '../../dtos/IGameDTO'
import { BaseLayout } from '../../layout/BaseLayout'
import GameService from '../../services/GameService'
import { Container, Content } from './styles'

export function GameDisplay() {
  const [isLoading, setIsLoading] = useState(false)
  const [game, setGame] = useState<IGameDTO>()
  const { id } = useParams<'id'>()
  const navigate = useNavigate
  const gameService = new GameService()

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

  async function getGameById(id: number): Promise<void> {
    console.log('***id', id)
    try {
      const response = await gameService.loadById(id)
      setGame(response)
    } catch (err) {
      const { response } = err as AxiosError
      displayNotificationMessage(
        `Falha ao buscar game - ${response?.data?.message}`,
        ToastType.ERROR
      )
    }
  }

  useEffect(() => {
    if (id) {
      getGameById(Number(id))
    }
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

        <Container>
          <h1 className="game-title">{game?.name}</h1>
          <Content>
            <img src={game?.image} alt={game?.name} />
            <div className="description">
              <div className="summary">
                <h1>Resumo</h1>
                <p>{game?.summary}</p>
              </div>
              <div className="sub-descriptions">
                <table>
                  <thead>
                    <tr>
                      <td>Desenvolvedor</td>
                      <td>Gênero</td>
                      <td>Console</td>
                      <td>Raiting</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{game?.developer}</td>
                      <td>{game?.genre}</td>
                      <td>{game?.console}</td>
                      <td>{game?.raiting}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Content>
        </Container>
      </>
    </BaseLayout>
  )
}
