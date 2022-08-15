import { Carousel, Container, Info, Item } from './styles'

import arrowImg from '../../assets/arrow.svg'
import { useEffect, useRef, useState } from 'react'
import { BaseLayout } from '../../layout/BaseLayout'
import GameService from '../../services/GameService'
import { ILoadGameDTOResponse } from '../../services/GameService/dtos/ILoadGameDTO'
import { Slider, SliderProps, Slide } from '../../components/Slider'

export function Games() {
  const carousel = useRef(null)

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    navigation: true,
    draggable: true,
    pagination: {
      clickable: true
    }
  }

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
        <Slider settings={settings}>
          {listGames.map(game => (
            <Slide>
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
            </Slide>
          ))}
        </Slider>
      </Container>
    </BaseLayout>
  )
}
