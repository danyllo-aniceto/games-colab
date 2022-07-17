import { MainContent } from '../MainContent'
import { Menu } from '../Menu'
import { Container } from './styles'

export function Main() {
  return (
    <>
      <Container>
        <Menu />
        <MainContent />
      </Container>
    </>
  )
}
