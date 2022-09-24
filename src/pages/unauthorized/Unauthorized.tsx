import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Container, Title, Subtitle } from './styles'

export function Unauthorized() {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>401</Title>
      <Subtitle>Acesso não autorizado!</Subtitle>
      <Button type="button" onClick={() => navigate('/')}>
        Logar
      </Button>
    </Container>
  )
}
