import { Container, Span } from './styles'

interface IEmptyItemProps {
  message?: string
}

export function EmptyItem({ message }: IEmptyItemProps) {
  return (
    <Container>
      <Span>{message ?? 'Nenhum item encontrado'}</Span>
    </Container>
  )
}
