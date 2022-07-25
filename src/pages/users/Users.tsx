import { BaseLayout } from '../../layout/BaseLayout'
import { Container } from './styles'

export function Users() {
  return (
    <BaseLayout>
      <Container>
        <table>
          <thead>
            <tr>
              <td>Nome</td>
              <td>E-mail</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Teste</td>
              <td>teste@gmail.com</td>
            </tr>
            <tr>
              <td>Teste2</td>
              <td>teste2@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </BaseLayout>
  )
}
