import { ContentConsoles, Console, Container } from './styles'

import xboxImg from '../../assets/xbox.jpg'
import { BaseLayout } from '../../layout/BaseLayout'

export function Consoles() {
  return (
    <BaseLayout>
      <Container>
        <h1>Escolha sua plataforma preferida:</h1>
        <ContentConsoles>
          <Console>
            <img src={xboxImg} alt="" />
            <div className="description">
              <h2>XBOX</h2>
              <p>
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla
                <button> Ver jogos </button>
              </p>
            </div>
          </Console>
          <Console>
            <img src={xboxImg} alt="" />
            <div className="description">
              <h2>XBOX</h2>
              <p>
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla
                <button> Ver jogos </button>
              </p>
            </div>
          </Console>
          <Console>
            <img src={xboxImg} alt="" />
            <div className="description">
              <h2>XBOX</h2>
              <p>
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla
                <button> Ver jogos </button>
              </p>
            </div>
          </Console>
          <Console>
            <img src={xboxImg} alt="" />
            <div className="description">
              <h2>XBOX</h2>
              <p>
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla
                <button> Ver jogos </button>
              </p>
            </div>
          </Console>
          <Console>
            <img src={xboxImg} alt="" />
            <div className="description">
              <h2>XBOX</h2>
              <p>
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla
                <button> Ver jogos </button>
              </p>
            </div>
          </Console>
        </ContentConsoles>
      </Container>
    </BaseLayout>
  )
}
