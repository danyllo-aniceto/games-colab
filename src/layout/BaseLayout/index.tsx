import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'
import { Container, ContentChildren } from './styles'

interface IBaseLayoutProps {
  children: React.ReactElement
}

export function BaseLayout({ children }: IBaseLayoutProps) {
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
