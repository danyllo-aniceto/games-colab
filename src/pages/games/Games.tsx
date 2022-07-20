import { Carousel, Container, Info, Item } from './styles'

import godOfWarImg from '../../assets/godOfWar.jpg'

export function Games() {
  return (
    <>
      <Container>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <Carousel>
          <Item>
            <div className="image">
              <img src={godOfWarImg} alt="Imagem do jogo God of War" />
            </div>
            <Info>
              <span className="name-game">God of War</span>
              <span className="developer-game">Santa Mônica</span>
              <span className="console-game">Playstation</span>
            </Info>
          </Item>
        </Carousel>
      </Container>
    </>
  )
}
