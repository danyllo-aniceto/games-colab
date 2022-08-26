import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  margin: 25px 10px;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

export const LogoConsole = styled.img`
  max-width: 120px;
`

export const NameConsole = styled.h1`
  font-size: 70px;
  margin-top: 10px;
  font-family: 'Righteous', cursive;
  color: var(--header-color-blue);
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: var(--text-title);
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const Cards = styled.div`
  margin-top: 35px;
  margin-inline: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Card = styled.div`
  background: #dee9ffd1;
  padding: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  transition: 0.5s;

  :hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.5);
  }
`

export const Image = styled.img`
  max-width: 200px;
`
export const GameDescription = styled.div``

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`
export const NameTitle = styled.h3`
  font-size: 50px;
  font-family: 'Righteous', cursive;
  color: transparent;
  -webkit-text-stroke-width: 0.8px;
  -webkit-text-stroke-color: var(--header-color-blue);
`
export const Medal = styled.img`
  max-width: 100px;
`
export const Summary = styled.p`
  margin-top: 20px;
  margin-inline: 10px;
`
