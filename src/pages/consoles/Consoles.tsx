import { ContentConsoles, Console } from './styles'

import xboxImg from '../../assets/xbox.jpg'

export function Consoles() {
  return (
    <>
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
      </ContentConsoles>
    </>
  )
}
