import { StyledDialog, Title, Image } from './styles'
import sonicImg from './../../assets/sonic-videogame.png'

interface IDialog {
  title: string
  open: boolean
  onClose: () => void
  children: React.ReactElement
}

export function Dialog({ title, open, onClose, children }: IDialog) {
  return (
    <>
      <StyledDialog open={open} onClose={onClose}>
        <Title>
          <h1>{title}</h1>

          <Image src={sonicImg} />
        </Title>
        {children}
      </StyledDialog>
    </>
  )
}
