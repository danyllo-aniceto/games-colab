import { Carousel, Container, Info, Item } from './styles'

import arrowImg from '../../assets/arrow.svg'
import { useEffect, useRef, useState } from 'react'
import { BaseLayout } from '../../layout/BaseLayout'
import GameService from '../../services/GameService'
import { ILoadGameDTOResponse } from '../../services/GameService/dtos/ILoadGameDTO'

export function Games() {
  const carousel = useRef(null)

  const [listGames, setListGames] = useState<ILoadGameDTOResponse[]>([])

  async function getGames() {
    const gameService = new GameService()

    try {
      const response = await gameService.loadAll()
      setListGames(response)
    } catch (error) {
      console.log('erro')
    }
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <BaseLayout>
      <Container>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <Carousel ref={carousel}>
          {listGames.map(game => (
            <Item key={game.id}>
              <div className="image">
                <img src={game.image} alt={game.name} />
              </div>
              <Info>
                <span className="name-game">{game.name}</span>
                <span className="developer-game">{game.developer}</span>
                <span className="console-game">{game.console}</span>
              </Info>
            </Item>
          ))}
        </Carousel>
        <div className="buttons">
          <button>
            <img src={arrowImg} alt="scroll left" />
          </button>
          <button>
            <img src={arrowImg} alt="scroll right" />
          </button>
        </div>
      </Container>
    </BaseLayout>
  )
}
