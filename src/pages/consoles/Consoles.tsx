import { ContentConsoles, Console, Container } from './styles'

import xboxOneImg from '../../assets/xbox-one.svg'
import playstation4Img from '../../assets/playstation-4.svg'
import nintendoSwitchImg from '../../assets/nintendo-switch.svg'
import microsoftWindowsImg from '../../assets/microsoft-windows.svg'
import { BaseLayout } from '../../layout/BaseLayout'

export function Consoles() {
  return (
    <BaseLayout>
      <Container>
        <h1>Escolha sua plataforma preferida:</h1>
        <ContentConsoles>
          <Console>
            <img src={xboxOneImg} alt="xbox logo" />
            <div className="description">
              <h2>XBOX ONE</h2>
              <p>
                &nbsp;O Xbox One tem 8GB de RAM, juntamente com um drive de
                Blu-ray, assim como a arquitetura nativa de 64 bits, um disco
                rígido integrado de 500GB, entrada e saída HDMI, 802.11n Wi-Fi,
                bem como uma CPU 8-core e conectividade USB 3.0. O Xbox One tem
                três sistemas operacionais simultaneamente.
                <button> Ver jogos </button>
              </p>
            </div>
          </Console>
          <Console>
            <img src={playstation4Img} alt="playstation logo" />
            <div className="description">
              <h2>Playsatation 4</h2>
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
            <img src={nintendoSwitchImg} alt="nintendo switch logo" />
            <div className="description">
              <h2>Nintendo Switch</h2>
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
            <img src={microsoftWindowsImg} alt="microsoft windows logo" />
            <div className="description">
              <h2>Microsoft Windows</h2>
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
