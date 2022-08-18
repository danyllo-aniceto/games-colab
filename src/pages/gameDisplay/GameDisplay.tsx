import { BaseLayout } from '../../layout/BaseLayout'
import { Container, Content } from './styles'

export function GameDisplay() {
  return (
    <BaseLayout>
      <Container>
        <h1 className="game-title">Nome do Jogo</h1>
        <Content>
          <img
            src="https://cdn2.unrealengine.com/egs-fallguys-mediatonic-ic1-400x400-609bfee35fc3.png?h=270&resize=1&w=480"
            alt=""
          />
          <div className="description">
            <div className="summary">
              <h1>Resumo</h1>
              <p>&nbsp; dsafhreggggvoijrojgrgvioroldofiioio</p>
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
                    <td>Desenvolvedor</td>
                    <td>Gênero</td>
                    <td>Console</td>
                    <td>Raiting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Content>
      </Container>
    </BaseLayout>
  )
}
