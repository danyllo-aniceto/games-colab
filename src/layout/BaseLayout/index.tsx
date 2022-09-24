import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { useAuth } from '../../hooks/useAuth'
import { Unauthorized } from '../../pages/unauthorized/Unauthorized'
import { Container, ContentChildren } from './styles'

interface IBaseLayoutProps {
  children: React.ReactElement
}

export function BaseLayout({ children }: IBaseLayoutProps) {
  const auth = useAuth()

  if (!auth.token) {
    return <Unauthorized />
  }

  return (
    <>
      <Header />
      <Container>
        <Menu />
        <ContentChildren>{children}</ContentChildren>
      </Container>
    </>
  )
}
