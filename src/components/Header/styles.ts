import styled from 'styled-components'

export const Container = styled.header`
  background: var(--header-color-blue);
`

export const Content = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  height: 15vh;
  width: 100vw;

  padding: 0.8rem 10rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1.5rem;
    background: var(--blue);
    border: 0;
    padding: 0 1.2rem;
    border-radius: 0.25rem;
    height: 4rem;
    font-family: 'Righteous', cursive;
    color: var(--text-title);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const LogoTitulo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  img {
    width: 6rem;
  }
`

export const Titulo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8rem;

  h1 {
    color: var(--text-title);
    font-family: 'Righteous', cursive;
    font-size: 2.5rem;
  }

  img {
    width: 2.6rem;
  }
`
